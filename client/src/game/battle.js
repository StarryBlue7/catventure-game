import randomGen from '../utils/RNG'

// Randomly determine quantity of enemies
function randomEnemyCount() {
    return Math.ceil(Math.random() * 4);
}

// Build enemy
class Enemy {
    constructor(maxHP, power, img) {
        this.maxHP = maxHP;
        this.currentHP = maxHP;
        this.power = power;
        this.img = img;
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

function generateEnemies(count, partyTotal) {

}