import React from "react";
import { SpriteAnimator } from "react-sprite-animator";

// Import sprite configurations
import MageSprites from "./sprite-images/mage";
import WarriorSprites from "./sprite-images/warrior";
import RogueSprites from "./sprite-images/rogue";

const animations = {
    Mage: MageSprites,
    Warrior: WarriorSprites,
    Rogue: RogueSprites,
};

// Animated sprites
function Sprites({ job, action, setAction, scale }) {
    const animation = animations[job][action];
    return (
        <SpriteAnimator
            sprite={animation.sprite}
            width={animation.width}
            height={animation.height}
            scale={scale || 1}
            direction={"vertical"}
            shouldAnimate={true}
            fps={animation.fps}
            stopLastFrame={animation.noLoop}
            onEnd={animation.toIdle ? () => setAction("idle") : () => {}}
        />
    );
}

export default Sprites;
