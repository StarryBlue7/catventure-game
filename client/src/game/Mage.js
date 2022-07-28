import { randomAliveTarget } from "../utils/RNG";

// Mage attacks have a chance to crit for double damage
function mageAttack(cat, party, enemies) {
    const percentCrit = 20;
    const multiplier = Math.random() < percentCrit / 100 ? 2 : 1;
    const damage =
        Math.ceil(Math.log(cat.power) * (Math.random() * cat.level)) *
        multiplier;

    const targetIndex = randomAliveTarget(enemies);
    const targetPosition = [party.length + targetIndex - 1];
    enemies[targetIndex].currentHP -= damage;

    console.log(
        `${cat.name} cast spells for ${damage} to enemy at ${targetPosition}!`
    );
    return { party, enemies, targetPosition };
}

// Mage heals party for percentage of their own current HP
function mageHeal(cat, party, enemies) {
    const targetPosition = [0];
    const healing = Math.ceil(cat.currentHP / 3);
    party.forEach((ally) => {
        ally.currentHP += healing;
    });
    console.log(`${cat.name} healed party for ${healing}!`);
    return { party, enemies, targetPosition };
}

const Mage = {
    attack: mageAttack,
    special: mageHeal,
};

export default Mage;
