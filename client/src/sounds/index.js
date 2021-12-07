// Background music
import home from './music/warm-light.mp3';
import village from './music/elven-forest.mp3';
import cave from './music/broken-village.mp3';
import forest from './music/dark-castle.mp3';
import battle from './music/viking-feast.mp3';
import victory from './music/victory-fanfare.wav';

// Sound effects
import rogueAttack from './sfx/slide-hit';
import rogueSpecial from './sfx/intro-bell';
import mageAttack from './sfx/fast-ignition';
import mageSpecial from './sfx/fairy-bell';
import warriorAttack from './sfx/blade-swish';
import warriorSpecial from './sfx/triple-bounce';

const Sounds = {
    music: {
        home,
        village,
        cave,
        forest,
        battle,
        victory
    },
    sfx: {
        Mage: {
            attack: mageAttack,
            special: mageSpecial
        },
        Warrior: {
            attack: warriorAttack,
            special: warriorSpecial
        },
        Rogue: {
            attack: rogueAttack,
            special: rogueSpecial
        }

    }
}

export default Sounds;