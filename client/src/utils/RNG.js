/**
 * @param {integer} baseValue Target average value
 * @param {integer} spread Variance above or below baseValue
 * @returns {integer} Randomly generated non-negative value within range of baseValue +/- the spread
 */
export default function randomGen(baseValue, spread) {
    const value = baseValue - spread + Math.floor(Math.random() * (spread * 2 + 1));
    return value > 0 ? value : 0;
}