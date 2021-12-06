// Rogues have a chance of striking again
function rogueAttack(cat) {
    const percentChance = 20;
    const damage = Math.ceil(Math.log(cat.power) * ((Math.random() * cat.level)));
    const double = Math.random() < percentChance / 100;
    return { damage, double };
}

// Rogue shoots lightning arrow to damage all enemies
function rogueArrow(cat) {
    const damage = Math.ceil(Math.log(cat.power) * ((Math.random() * cat.level))) / 2;
    return damage;
}

const Rogue = {
    attack: rogueAttack,
    special: rogueArrow
}

export default Rogue