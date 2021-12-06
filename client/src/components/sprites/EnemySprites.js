import React from 'react';
import { SpriteAnimator } from 'react-sprite-animator';

// Import sprite configurations
import enemy1 from './enemy-images/enemy1_idle.png';
import enemy2 from './enemy-images/enemy2_idle.png';
import enemy3 from './enemy-images/enemy3_idle.png';

const animations = [
    {
        sprite: enemy1,
        fps: 8
    },
    {
        sprite: enemy2,
        fps: 8
    },
    {
        sprite: enemy3,
        fps: 8
    }
]

// Animated sprites
function EnemySprites({ img, scale }) {
    const animation = animations[img];
    return (<SpriteAnimator
        sprite={animation.sprite}
        width={128}
        height={128}
        scale={scale || 1}
        direction={"vertical"}
        shouldAnimate={true}
        fps={animation.fps}
    />)
}

export default EnemySprites;