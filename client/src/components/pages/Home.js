import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import KnightAtk1 from '../sprites/sprite-images/Meow-Knight_Attack_2.png';
import mageHeal from '../sprites/sprite-images/mage_heal.png';

// import { SpriteAnimator } from 'react-sequence-animator';
import { SpriteAnimator } from 'react-sprite-animator';

import sprite from '../sprites/sprite-images/sprites-cat-running.png';

const WIDTH = 192;
const HEIGHT = 2008;

// class KnightAtk1 extends React.Component {
//   constructor() {
//     super();
//     this._getPosition = this._getPosition.bind(this);
//   }

//   render() {
//     return (
//       <SpriteAnimator autoplay numOfFrames={8} getPosition={this._getPosition}>
//         <img src={sprite} alt="my-sprite" width={WIDTH * 4} height={HEIGHT * 2}/>
//       </SpriteAnimator>
//     );
//   }

//   _getPosition(frame) {
//     return {
//       width: WIDTH,
//       height: HEIGHT,
//       top: (frame < 4) ? 0 : HEIGHT,
//       left: (frame % 4) * WIDTH
//     };
//   }
// }

function Home() {
    return (
        <section>
            <h2>
                Home Sweet Home
            </h2>
            <div>
                {/* <KnightAtk1 /> */}
                <SpriteAnimator
                    sprite={mageHeal}
                    width={WIDTH}
                    height={Math.ceil(HEIGHT/12)}
                    direction={"vertical"}
                    fps={8}
                />
            </div>
            <div>
                <Button as={Link} to="/village">Go on Adventure</Button>
                <Button as={Link} to="/party">View Party Details</Button>
            </div>
        </section>
    )
}

export default Home;