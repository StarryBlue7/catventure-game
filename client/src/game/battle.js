import { updateCat } from "../utils/API";
import Auth from "../utils/auth";
import actions from "./actions";
import { randomGen, randomAliveTarget } from "../utils/RNG";

// Update db with 
async function battleUpdate(catsArray) {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
        return false;
    }
    try {
        const responseCats = await updateCat(catsArray, token);
        if (!responseCats.ok) {
            throw new Error('something went wrong!');
        }
    } catch (err) {
        console.error(err);
    }
    return token;
}

// Randomly determine quantity of enemies
function randomEnemyCount() {
    const maxEnemies = 4;
    return Math.ceil(Math.random() * maxEnemies);
}

// Build enemy
export class Enemy {
    constructor(maxHP, hpSpread, power, powerSpread, id, img) {
        this.maxHP = randomGen(maxHP, hpSpread);
        this.currentHP = this.maxHP;
        this.power = randomGen(power, powerSpread);
        this.img = img;
        this.id = id;
    }
}

// Damage calculation for enemies
function calcDamage(power, level = 3, multiplier = 1) {
    const damage = Math.ceil(Math.log(power) * (Math.random() * level) * multiplier);
    return damage > 0 ? damage : 0;
}

// Total player party's HP and Power stats
function partyTotals(party) {
    let totalHP = 0;
    let totalPower = 0;
    party.forEach(cat => {
        totalHP += cat.maxHP;
        totalPower += cat.power;
    });
    return { totalHP, totalPower };
}

// Generates enemies of random stats based on the count and party totals
function generateEnemies(count, partyTotal) {
    const hpSpread = 5;
    const powerSpread = 3;
    const enemyScaling = .8;
    const baseHP = Math.ceil((partyTotal.totalHP * enemyScaling) / (count + Math.log(count)));
    const basePower = Math.ceil((partyTotal.totalPower * enemyScaling) / (count + (2 * Math.log(count))));

    const enemies = [];
    for (let i = -1; i > - count - 1; i--) {
        const randomImg = Math.floor(Math.random() * 3);
        enemies.push(new Enemy(baseHP, hpSpread, basePower, powerSpread, i, randomImg))
    }
    return enemies;
}

// Generate a battlefield position structure 
function battlePositions(party, enemies) {
    const positions = [];
    party.forEach(cat => {
        positions.push(cat);
    });
    enemies.forEach(enemy => {
        positions.push(enemy.id);
    });
    return positions;
}

// Generate random turn order based on length of positions array
function turnOrder(positions) {
    let turnOrder = [];
    while (turnOrder.length < positions.length) {
        const order = Math.floor(Math.random() * positions.length);
        if(turnOrder.indexOf(order) === -1) {
            turnOrder.push(order);
        }
    }
    return turnOrder;
}

// Shift turn order to next turn of living enemy or ally
function nextTurn(turns, battlefield) {
    let newTurns = [...turns];
    let nextAlive = true;
    do {
        console.log('Next turn');
        const moved = newTurns.shift();
        newTurns.push(moved);
        console.log('New turn order', newTurns);
        if (battlefield.positions[newTurns[0]] < 0) {
            const nextEnemy = battlefield.enemies[newTurns[0] - battlefield.party.length];
            console.log('Next enemy is', nextEnemy);
            console.log('Next enemy HP is', nextEnemy.currentHP);
            nextAlive = nextEnemy.currentHP > 0;
        } else {
            const nextAlly = battlefield.positions[newTurns[0]];
            console.log('Next ally is', nextAlly);
            console.log('Next ally HP is', nextAlly.currentHP);
            nextAlive = nextAlly.currentHP > 0;
        }
    } while (!nextAlive);
    return newTurns;  
}

// Enemy turn
function enemyTurn(battlefield, catAnims, setGameUI) {
    console.log('Enemy turn with id:', battlefield.positions[battlefield.turns[0]]);
    const enemyPosition = battlefield.turns[0];
    const enemy = battlefield.enemies[battlefield.positions[enemyPosition] + battlefield.enemies.length];
    
    // Check for all dead party or enemies
    let newBattlefield = battleContinues(battlefield);
    if (!newBattlefield) { return }
    
    // Enemy action
    const targetIndex = randomAliveTarget(newBattlefield.party);
    const target = newBattlefield.party[targetIndex];
    const damage = calcDamage(enemy.power, enemy.level, target.multiplier);
    const newParty = [...newBattlefield.party];
    newParty[targetIndex].currentHP = newParty[targetIndex].currentHP - damage;

    // SFX
    setGameUI.sounds.enemyAttack();

    // Animate damage on target, then die if HP < 1
    catAnims[targetIndex][1]('damaged');
    if (target.currentHP < 1) {
        setTimeout(() => {
            catAnims[targetIndex][1]('die');
        }, 2000);
    }
    
    // API call to update db
    battleUpdate(newParty);

    console.log(`Monster in position ${enemyPosition} attacks ${target.name} for ${damage}`)
}

// Player turn
export function playerTurn(battlefield, setBattlefield, isSpecial, setGameUI, catAnims) {
    console.log('Player turn');
    setGameUI.menu.show(false);

    let newBattlefield = {...battlefield};
    let newParty = [...battlefield.party];
    let newEnemies = [...battlefield.enemies];

    // Use action
    const turnCatPosition = newBattlefield.turns[0];
    const turnCat = newBattlefield.positions[turnCatPosition];
    const turnClass = turnCat.class;
    let result;
    if (isSpecial) {
        result = actions[turnClass].special(turnCat, newParty, newEnemies);
        catAnims[turnCatPosition][1]('special');
    } else {
        result = actions[turnClass].attack(turnCat, newParty, newEnemies);
        catAnims[turnCatPosition][1]('attack');
    }
    setTimeout(() => {catAnims[turnCatPosition][1]('idle')}, 2000);

    newBattlefield.party = result.party;
    newBattlefield.enemies = result.enemies;

    // API call
    battleUpdate(result.party);

    isSpecial 
        ? console.log(`${newBattlefield.positions[newBattlefield.turns[0]].name} uses their special!`) 
        : console.log(`${newBattlefield.positions[newBattlefield.turns[0]].name} attacks!`);
    newBattlefield.turns = nextTurn(newBattlefield.turns, newBattlefield);
    setBattlefield(newBattlefield);
    console.log('After player turn:', newBattlefield);
    enemyTurns(newBattlefield, setBattlefield, setGameUI, catAnims)
}

// Prevent negative HPs & overheals and check if all party or all enemies dead
function battleContinues(battlefield, setGameUI) {
    let newBattlefield = {...battlefield};
    let partyTotal = 0;
    let enemyTotal = 0;
    newBattlefield.party.forEach(ally => {
        if (ally.currentHP < 1) {
            ally.currentHP = 0;
        } else if (ally.currentHP > ally.maxHP) {
            ally.currentHP = ally.maxHP;
        }
        partyTotal += ally.currentHP;
    });
    if (partyTotal === 0) {
        endBattle(newBattlefield.party, false);
        return false; 
    }
    newBattlefield.enemies.forEach(enemy => {
        if (enemy.currentHP < 1) {
            enemy.currentHP = 0;
        } else if (enemy.currentHP > enemy.maxHP) {
            enemy.currentHP = enemy.maxHP;
        }
        enemyTotal += enemy.currentHP;
    });
    if (enemyTotal === 0) {
        setGameUI.sounds.stop();
        setGameUI.sounds.victory();
        endBattle(newBattlefield.party, true);
        return false; 
    }

    return newBattlefield;
}

// Cycle through and executes any enemy turns
function enemyTurns(battlefield, setBattlefield, setGameUI, catAnims) {
    let newBattlefield = battleContinues(battlefield, setGameUI)
    if (!newBattlefield) { 
        return;
    } else {
        const takeEnemyTurns = setInterval(() => {
            // If id is negative, it is an enemy turn
            if (newBattlefield.positions[newBattlefield.turns[0]] < 0) {
                enemyTurn(newBattlefield, catAnims, setGameUI);
                newBattlefield = battleContinues(newBattlefield, setGameUI);
                if (!newBattlefield) { 
                    return setBattlefield(newBattlefield);
                }
                newBattlefield.turns = nextTurn(newBattlefield.turns, newBattlefield);
            } else {
                // End enemy turns phases for player turn
                clearInterval(takeEnemyTurns);
                newBattlefield = battleContinues(newBattlefield, setGameUI);
                if (!newBattlefield) { 
                    return setBattlefield(newBattlefield);
                }
                console.log('Enemy turns ended, next turn for:', newBattlefield.positions[newBattlefield.turns[0]].name);
                setGameUI.currentCat(newBattlefield.positions[newBattlefield.turns[0]]);
                setGameUI.action.allow(true);
                setGameUI.menu.show(true);
            }
            setBattlefield(newBattlefield);
            console.log('After enemy phase:', newBattlefield);
        }, 3000);
    }
    setBattlefield(newBattlefield);
}

// Setup new battle
export function newBattle(party, setBattlefield, setGameUI, catAnims) {
    const enemies = generateEnemies(randomEnemyCount(), partyTotals(party));
    const positions = battlePositions(party, enemies);
    const turns = turnOrder(positions);
    const newBattlefield = { party, enemies, positions, turns, continue: true };
    console.log('Generated battlefield', newBattlefield);
    // Initial enemy turns
    enemyTurns(newBattlefield, setBattlefield, setGameUI, catAnims);
}

// End battle and send user back to Village
async function endBattle(party, isWin) {
    isWin ? console.log('Party won!') : console.log('Party lost!');
    if (isWin) {
        party.forEach(cat => {
            if (cat.currentHP > 0) {
                cat.experience += 6;
                console.log(`${cat.name} gains 6 XP!`);
            } else {
                cat.currentHP = 1;
                cat.experience += 3;
                console.log(`${cat.name} gains 3 XP!`);
            }
        });
    } else {
        document.location = "/village";
    }
    battleUpdate(party);
}