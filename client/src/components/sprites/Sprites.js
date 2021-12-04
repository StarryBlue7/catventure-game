import React from 'react';
import { SpriteAnimator } from 'react-sprite-animator';

import MageSprites from './sprite-images/mage'

const animations = {
    Mage: {
        idle: {
            sprite: MageSprites.idle,
            width: 80,
            height: 624/6,
            fps: 6,
            noLoop: false
        },
        heal: {
            sprite: MageSprites.heal,
            width: 96,
            height: 2016/12,
            fps: 6,
            noLoop: true,
            toIdle: true
        },
        die: {
            sprite: MageSprites.die,
            width: 64,
            height: 1040/10,
            fps: 8,
            noLoop: true
        },
        attack: {
            sprite: MageSprites.attack,
            width: 196,
            height: 520/5,
            fps: 8,
            noLoop: false
        },
        damaged: {
            sprite: MageSprites.damaged,
            width: 88,
            height: 312/3,
            fps: 4,
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