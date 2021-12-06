// Randomizer
function randomGen(baseValue, spread) {
    return Math.abs(baseValue - spread + Math.floor(Math.random() * (spread * 2 + 1)))
}

// Randomly determine quantity of enemies
function randomEnemyCount() {
    return Math.ceil(Math.random() * 4);
}

// Build enemy
class Enemy {
    constructor(maxHP, hpSpread, power, powerSpread, id, img) {
        this.maxHP = randomGen(maxHP, hpSpread);
        this.currentHP = this.maxHP;
        this.power = randomGen(power, powerSpread);
        this.img = img;
        this.id = id
    }
}

// Damage calculation
function calcDamage(power, level = 1, multiplier = 1) {
    const damage = Math.ceil(Math.log(power) * ((Math.random() * 3) + Math.log(level)) * multiplier);
    return damage
}

// Total player party's HP and Power stats
function partyTotals(party) {
    let totalHP = 0;
    let totalPower = 0
    party.forEach(cat => {
        totalHP += cat.maxHP;
        totalPower += cat.power;
    })
    return { totalHP, totalPower};
}

// Generates enemies of random stats based on the count and party totals
function generateEnemies(count, partyTotal) {
    const hpSpread = 5;
    const powerSpread = 3;
    const baseHP = Math.ceil(partyTotal.totalHP / count);
    const basePower = Math.ceil(partyTotal.totalPower / count);

    let enemies = [];
    for (let i = -1; i > - count - 1; i--) {
        const randomImg = Math.floor(Math.random() * 5);
        enemies.push(new Enemy(baseHP, hpSpread, basePower, powerSpread, i, randomImg))
    }
    return enemies;
}

// Generate a structure 
function battlePositions(party, enemies) {
    let positions = [];
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

// Shift to next turn
function nextTurn(turns) {
    console.log('Next turn')
    let newTurns = [...turns];
    const moved = newTurns.shift();
    newTurns.push(moved);
    console.log('New turn order', newTurns)
    return newTurns;  
}

// Enemy turn
function enemyTurn(battlefield) {
    console.log('Enemy turn with id:', battlefield.positions[battlefield.turns[0]]);
    const enemyPosition = battlefield.turns[0];
    const enemy = battlefield.enemies[battlefield.positions[enemyPosition] + battlefield.enemies.length];
    const targetIndex = Math.floor(Math.random() * battlefield.party.length);
    const target = battlefield.party[targetIndex];
    // Enemy action
    const damage = calcDamage(enemy.power, battlefield.multiplier);
    const newParty = [...battlefield.party];
    console.log(newParty[targetIndex])
    newParty[targetIndex].currentHP = newParty[targetIndex].currentHP - damage;
    console.log(newParty[targetIndex])
    // API call

    console.log(`Monster in position ${enemyPosition} attacks ${target.name} for ${damage}`)
    
    return battlefield;
}

// Player turn
function playerTurn(battlefield, setBattlefield, isSpecial, setMenuShow, setCurrentCat, setAllowAct) {
    console.log('Player turn');
    setMenuShow(false);
    let newBattlefield = {...battlefield};
    // Use action

    // API call

    isSpecial 
        ? console.log(`${newBattlefield.positions[newBattlefield.turns[0]].name} uses their special!`) 
        : console.log(`${newBattlefield.positions[newBattlefield.turns[0]].name} attacks!`);
    newBattlefield.turns = nextTurn(newBattlefield.turns);
    setBattlefield(newBattlefield);
    console.log('After player turn:', newBattlefield);
    enemyTurns(newBattlefield, setBattlefield, setMenuShow, setCurrentCat, setAllowAct)
}

// Check if either party or all enemies dead
function battleContinues(battlefield) {
    return true;
}

// Cycle through and executes any enemy turns
function enemyTurns(battlefield, setBattlefield, setMenuShow, setCurrentCat, setAllowAct) {
    console.log('Initial battlefield', battlefield)
    let newBattlefield = {...battlefield};
    const takeEnemyTurns = setInterval(() => {
        if (battleContinues() && newBattlefield.positions[newBattlefield.turns[0]] < 0) {
            enemyTurn(newBattlefield);
            newBattlefield.turns = nextTurn(newBattlefield.turns);
        } else {
            clearInterval(takeEnemyTurns);
            console.log('Enemy turns ended, next turn for:', newBattlefield.positions[newBattlefield.turns[0]].name);
            setCurrentCat(newBattlefield.positions[newBattlefield.turns[0]]);
            setAllowAct(true);
            setMenuShow(true);
        }
        setBattlefield(newBattlefield)
        console.log('After enemy turns:', newBattlefield)
    }, 3000);

    setBattlefield(newBattlefield);
}

// Setup new battle
function newBattle(party, setBattlefield, setMenuShow, setCurrentCat, setAllowAct) {
    const enemies = generateEnemies(randomEnemyCount(), partyTotals(party));
    const positions = battlePositions(party, enemies);
    const turns = turnOrder(positions);
    const newBattlefield = { party, enemies, positions, turns, continue: true };
    console.log('Generated battlefield', newBattlefield)
    // Initial enemy turns
    enemyTurns(newBattlefield, setBattlefield, setMenuShow, setCurrentCat, setAllowAct)
}

function endBattle(battlefield, setBattlefield) {
    battlefield.continue = false;
    setBattlefield(battlefield);
}

module.exports = { Enemy, newBattle, nextTurn, playerTurn, battleContinues, enemyTurns, endBattle };