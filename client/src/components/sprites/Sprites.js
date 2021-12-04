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
            fps: 6,
            noLoop: false
        },
        heal: {
            sprite: mageHeal,
            width: 96,
            height: 2016/12,
            fps: 6,
            noLoop: true,
            toIdle: true
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

function Sprites({ job, action, setAction }) {
    const animation = animations[job][action];
    return (<SpriteAnimator
        sprite={animation.sprite}
        width={animation.width}
        height={animation.height}
        direction={"vertical"}
        shouldAnimate={true}
        fps={animation.fps}
        stopLastFrame={animation.noLoop}
        onEnd={animation.toIdle ? (() => setAction('idle')) : (() => {})}
    />)
}

export default Sprites;