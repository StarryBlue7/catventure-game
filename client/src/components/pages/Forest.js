import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// Make a class constructor for the enemies with the following object keys:
// currentHP
// maxHP
// power
// img file
// ID

// number of enemies varries, their power/hp scales with player team
// add up all the player lvls and power and hp and use that to calculate the spread of the enemies

// Player opions:
// For each cat when it is that cat's turn, there is a menu with "attack, special, escape"

// Warrior
// specialty: enemies have a X higher chance of attacking warrior
// attack: low single target damage
// special: takes damage for someone else

// Mage 
// specialty: 20% chance to crit
// attack: High single target damage
// special: low HP party heal

// Rogue
// speciality: 20% chance to act a second time in the turn
// attack: medium single target damage
// special: low AOE damage

// an array keeps track of the turn order

// Pseudocode


// 

function Forest() {
    return (
        <section>
            <h2>Deadly Forest</h2>
            <div>Battle!</div>
            <Button as={Link} to="/village">Back</Button>
        </section>
    )
}

export default Forest;