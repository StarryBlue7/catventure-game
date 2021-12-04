import React from 'react';
import { SpriteAnimator } from 'react-sprite-animator';

import mageIdle from './sprite-images/mage/mage_idle.png';
import mageHeal from './sprite-images/mage/mage_heal.png';
import mageDie from './sprite-images/mage/mage_die.png';

const animations = {
    Mage: {
        idle: {
            sprite: mageIdle,
            width: 80,
            height: 624/6,
            fps: 8,
            noLoop: false
        },
        heal: {
            sprite: mageHeal,
            width: 96,
            height: 2008/12,
            fps: 8,
            noLoop: true
        },
        die: {
            sprite: mageDie,
            width: 64,
            height: 1040/10,
            fps: 8,
            noLoop: true
        },
    }
}

function Sprites({ job, action }) {
    return (<SpriteAnimator
        sprite={animations[job][action].sprite}
        width={animations[job][action].width}
        height={Math.ceil(animations[job][action].height)}
        direction={"vertical"}
        shouldAnimate={true}
        fps={animations[job][action].fps}
        stopLastFrame={animations[job][action].noLoop}
        onEnd={animations[job][action].end}
    />)
}

export default Sprites;