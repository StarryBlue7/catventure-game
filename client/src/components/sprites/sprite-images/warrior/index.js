import die from "./warrior_die.png";
import defend from "./warrior_defend.png";
import idle from "./warrior_idle.png";
import attack from "./warrior_attack.png";
import damaged from "./warrior_damaged.png";

const WarriorSprites = {
    idle: {
        sprite: idle,
        width: 64,
        height: 624 / 6,
        fps: 6,
        noLoop: false,
    },
    special: {
        sprite: defend,
        width: 288,
        height: 520 / 5,
        fps: 6,
        noLoop: true,
    },
    die: {
        sprite: die,
        width: 96,
        height: 624 / 6,
        fps: 8,
        noLoop: true,
    },
    attack: {
        sprite: attack,
        width: 132,
        height: 672 / 4,
        fps: 8,
        noLoop: false,
    },
    damaged: {
        sprite: damaged,
        width: 56,
        height: 312 / 3,
        fps: 4,
        noLoop: true,
        toIdle: true,
    },
};

export default WarriorSprites;
