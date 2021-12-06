// Mage attacks have a chance to crit for double damage
function mageAttack(cat) {
    const percentCrit = 20;
    const multiplier = Math.random() < percentCrit / 100 ? 2 : 1;
    const damage = Math.ceil(Math.log(cat.power) * ((Math.random() * cat.level))) * multiplier;
    return damage;
}

// Mage heals party for percentage of their own current HP
function mageHeal(cat) {
    const healing = Math.ceil(cat.currentHP / 3);
    return healing;
}

const Mage = {
    attack: mageAttack,
    special: mageHeal
}

export default Mage