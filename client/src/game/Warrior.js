// Warrior attacks have a chance to heal themselves for half damage done
function warriorAttack(cat) {
    const percentChance = 20;
    const damage = Math.ceil(Math.log(cat.power) * ((Math.random() * cat.level)));
    const heal = Math.random() < percentChance / 100 ? Math.ceil(damage / 2) : 0;
    return { damage, heal };
}

// Warrior defends party, reducing damage taken
function warriorShield(cat) {
    const reductionPercent = 50;
    return reductionPercent / 100;
}

const Warrior = {
    attack: warriorAttack,
    special: warriorShield
}

export default Warrior