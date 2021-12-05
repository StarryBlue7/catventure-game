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

function battle(party) {
    const enemies = generateEnemies(randomEnemyCount(), partyTotals(party));
    console.log(enemies);
    const positions = battlePositions(party, enemies);
    console.log(positions);
    const turns = turnOrder(positions);
    console.log(turns);
}

const party = [
    {_id: 789, name: 'Derek', class: 'Warrior', maxHP: 60, currentHP: 60, power: 15, level: 3, experience: 5},
    {_id: 456, name: 'Emily', class: 'Rogue', maxHP: 40, currentHP: 30, power: 19, level: 4, experience: 2},
    {_id: 123, name: 'Vince', class: 'Mage', maxHP: 30, currentHP: 25, power: 25, level: 3, experience: 1}
]

battle(party)