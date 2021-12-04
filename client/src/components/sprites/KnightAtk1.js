import React from 'react';
// import { SpriteAnimator } from 'react-sequence-animator';

import sprite from './sprite-images/sprites-cat-running.png';

// import knightAttack2 from '../../sprites/Meow-Knight_Attack_2.png';

// const WIDTH = 48;
// const HEIGHT = 142;

// class SpriteAnimatorStory extends React.Component {
//     constructor() {
//         super();
//         this._getPosition = this._getPosition.bind(this);
//     }

//     render() {
//         return (
//             <SpriteAnimator autoplay loop duration={2000} numOfFrames={4} getPosition={this._getPosition}>
//                 <img src={knightAttack2} alt="my-sprite" width={WIDTH * 1} height={HEIGHT * 4}/>
//             </SpriteAnimator>
//         );
//     }
    
//     _getPosition(frame) {
//         return {
//             width: WIDTH,
//             height: HEIGHT,
//             top: HEIGHT % 4, // (frame < 4) ? 0 : HEIGHT,
//             left: 0 // (frame % 4) * WIDTH
//         };
//     }
// }

// const WIDTH = 512;
// const HEIGHT = 256;

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

// export default KnightAtk1;