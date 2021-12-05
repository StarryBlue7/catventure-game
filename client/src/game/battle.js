import randomGen from '../utils/RNG'

// Randomly determine quantity of enemies
function randomEnemyCount() {
    return Math.ceil(Math.random() * 4);
}

// Build enemy
class Enemy {
    constructor(maxHP, hpSpread, power, powerSpread, id, img) {
        this.maxHP = randomGen(maxHP, hpSpread);
        this.currentHP = randomGen(maxHP, powerSpread);
        this.power = power;
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
        const randomImg = Math.floor() * 3;
        enemies.push(new Enemy(baseHP, hpSpread, basePower, powerSpread, i, randomImg))
    }
    return enemies;
}

// party of cats [cat1, cat2, cat3]
// enemies [enemy1, enemy2]

// battlefield [cat1, cat2, cat3, enemy1, enemy2]

// randomturns [0, 3, 2, 1, 4]

// Generate a structure 
function battlePositions(party, enemies) {
    let positions = [];
    party.forEach(cat => {
        positions.push(cat._id);
    });
    enemies.forEach(enemy => {
        positions.push(enemy.id);
    })
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