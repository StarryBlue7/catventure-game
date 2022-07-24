/**
 * @param {integer} baseValue Target average value
 * @param {integer} spread Variance above or below baseValue
 * @returns {integer} Randomly generated non-negative value within range of baseValue +/- the spread
 */
export function randomGen(baseValue, spread) {
    const value = baseValue - spread + Math.floor(Math.random() * (spread * 2 + 1));
    return value > 0 ? value : 0;
}

/**
 * @param {integer} targetParty Party containing targets
 * @returns {integer} Randomly selected alive target index
 */
export function randomAliveTarget(targetParty) {
    let targetIndex, target;
    do {
        targetIndex = Math.floor(Math.random() * targetParty.length);
        target = targetParty[targetIndex];
    } while (!target.currentHP > 0);
    return targetIndex;
}