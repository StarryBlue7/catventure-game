// the RNGesus function, takes in a baseValue and spread, returns a random number equal to the baseValue + or - the spread
export default function randomGen(baseValue, spread) {
    return Math.abs(baseValue - spread + Math.floor(Math.random() * (spread * 2 + 1)))
}