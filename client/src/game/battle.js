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
    // Calculate damage done as a function of RNG & power stat
    calcDamage() {
        return Math.ceil(Math.random * this.power);
    }
    // Prevent showing negative HPs
    showHP() {
        return this.currentHP >= 0 ? this.currentHP : 0;
    }
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
        positions.push(cat._id);
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
    console.log('Initial turns', newTurns)
    const moved = newTurns.shift();
    newTurns.push(moved);
    console.log('Rotated turns', newTurns)
    return newTurns;  
}

// Enemy turn
function enemyTurn(id) {
    console.log('Enemy turn', id);
    
}

// Player turn
function playerTurn(battlefield, setBattlefield) {
    console.log('Player turn');
}

// Check if either party or all enemies dead
function battleContinues(battlefield) {
    return true;
}

function enemyTurns(battlefield, setBattlefield, setMenuShow) {
    console.log('Initial battlefield', battlefield)
    let newBattlefield = {...battlefield};
    const takeEnemyTurns = setInterval(() => {
        if (battleContinues() && newBattlefield.positions[newBattlefield.turns[0]] < 0) {
            enemyTurn(newBattlefield.positions[newBattlefield.turns[0]]);
            newBattlefield.turns = nextTurn(newBattlefield.turns);
        } else {
            clearInterval(takeEnemyTurns);
            console.log('Enemy turns ended, next turn for:', newBattlefield.positions[newBattlefield.turns[0]])
            setMenuShow(true);
        }
        setBattlefield(newBattlefield)
        console.log('New battlefield', newBattlefield)
        console.log('Set battlefield', battlefield)
    }, 1000);
    // while (battleContinues() && battlefield.positions[battlefield.turns[0]] < 0) {
    //     enemyTurn(battlefield.positions[battlefield.turns[0]]);
    //     nextTurn(battlefield.turns);
    //     setBattlefield(battlefield)
    // } 
    setBattlefield(newBattlefield);
    console.log('Enemy turns ended, next turn for:', newBattlefield.positions[newBattlefield.turns[0]])
}

// Setup new battle
function newBattle(party, setBattlefield, setMenuShow) {
    const enemies = generateEnemies(randomEnemyCount(), partyTotals(party));
    const positions = battlePositions(party, enemies);
    const turns = turnOrder(positions);
    const newBattlefield = { enemies, positions, turns, continue: true };
    console.log('Generated battlefield', newBattlefield)
    // Initial enemy turns
    enemyTurns(newBattlefield, setBattlefield, setMenuShow)   
    // console.log('After enemy turns', newBattlefield)
    // Set battlefield state for user turns
    // setBattlefield(newBattlefield);
}

function isTurn(battlefield, _id) {
    return battlefield.turns[0] === _id;
}

function endBattle(battlefield, setBattlefield) {
    battlefield.continue = false;
    setBattlefield(battlefield);
}

module.exports = { newBattle, nextTurn, playerTurn, battleContinues, enemyTurns, isTurn, endBattle };