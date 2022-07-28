import { randomAliveTarget } from "../utils/RNG";

// Warrior attacks have a chance to heal themselves for half damage done
function warriorAttack(cat, party, enemies) {
    const percentChance = 20;
    const damage = Math.ceil(Math.log(cat.power) * (Math.random() * cat.level));

    const targetIndex = randomAliveTarget(enemies);
    const targetPosition = [party.length + targetIndex - 1];
    enemies[targetIndex].currentHP -= damage;

    // Heal self
    const heal =
        Math.random() < percentChance / 100 ? Math.ceil(damage / 2) : 0;
    const newParty = party.map((ally) => {
        if (ally._id === cat._id) {
            ally.currentHP += heal;
        }
        return ally;
    });
    console.log(
        `${cat.name} attacked for ${damage} on enemy at ${targetPosition} and healed self for ${heal}`
    );
    return { party: newParty, enemies, targetPosition };
}

// Warrior defends party, reducing damage taken
function warriorShield(cat, party, enemies) {
    const targetPosition = [0];
    const reductionPercent = 20;
    party.forEach((ally) => {
        ally.multiplier = reductionPercent / 100;
    });
    console.log(`${cat.name} shielded the party for ${reductionPercent}%`);
    return { party, enemies, targetPosition };
}

const Warrior = {
    attack: warriorAttack,
    special: warriorShield,
};

export default Warrior;
