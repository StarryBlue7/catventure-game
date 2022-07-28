import die from "./mage_die.png";
import heal from "./mage_heal.png";
import idle from "./mage_idle.png";
import attack from "./mage_attack.png";
import damaged from "./mage_damaged.png";

const MageSprites = {
    idle: {
        sprite: idle,
        width: 80,
        height: 624 / 6,
        fps: 6,
        noLoop: false,
    },
    special: {
        sprite: heal,
        width: 96,
        height: 2016 / 12,
        fps: 6,
        noLoop: true,
        toIdle: true,
    },
    die: {
        sprite: die,
        width: 64,
        height: 1040 / 10,
        fps: 8,
        noLoop: true,
    },
    attack: {
        sprite: attack,
        width: 196,
        height: 520 / 5,
        fps: 8,
        noLoop: false,
    },
    damaged: {
        sprite: damaged,
        width: 88,
        height: 312 / 3,
        fps: 4,
        noLoop: true,
        toIdle: true,
    },
};

export default MageSprites;
