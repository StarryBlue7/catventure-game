import { randomAliveTarget } from "../utils/RNG";

// Rogues have a chance of striking again
function rogueAttack(cat, party, enemies) {
    const percentChance = 20;
    const damage = Math.ceil(Math.log(cat.power) * ((Math.random() * cat.level)));
    const double = Math.random() < percentChance / 100;

    const targetIndex = randomAliveTarget(enemies);
    const targetPosition = [party.length + targetIndex - 1];
    enemies[targetIndex].currentHP -= damage;

    if (double) {
        const targetIndex2 = randomAliveTarget(enemies);
        targetPosition.push(party.length + targetIndex2 - 1);
        enemies[targetIndex].currentHP -= damage;
    }

    console.log(`${cat.name} attacked for ${damage} to enemy at ${targetPosition}`)
    return { party, enemies, targetPosition };
}

// Rogue shoots lightning arrow to damage all enemies
function rogueArrow(cat, party, enemies) {
    const damage = Math.ceil(Math.log(cat.power) * ((Math.random() * cat.level))) / 2;
    const targetPosition = [];
    enemies.forEach((enemy, i) => {
        enemy.currentHP -= damage;
        targetPosition.push(i + party.length - 1)
    });
    console.log(`${cat.name} attacked for ${damage} to enemy at ${targetPosition}`)
    return { party, enemies, targetPosition };
}

const Rogue = {
    attack: rogueAttack,
    special: rogueArrow
}

export default Rogue