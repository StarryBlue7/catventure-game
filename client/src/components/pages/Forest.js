import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col } from 'react-bootstrap';

import { newBattle, nextTurn, playerTurn, battleContinues, enemyTurns, isTurn } from '../../game/battle';

import forest from '../../images/forest.png';

const styles = {
    page: { 
        color: 'white', 
        width: "100%", 
        height: "100%" 
    },
    background: {
        position: "absolute",
        zIndex: -1,
        width: "100%"
    }
}

function Forest() {
    const [battlefield, setBattlefield] = useState({});
    
    const testParty = [
        {_id: 789, name: 'Derek', class: 'Warrior', maxHP: 60, currentHP: 60, power: 15, level: 3, experience: 5},
        {_id: 456, name: 'Emily', class: 'Rogue', maxHP: 40, currentHP: 30, power: 19, level: 4, experience: 2},
        {_id: 123, name: 'Vince', class: 'Mage', maxHP: 30, currentHP: 25, power: 25, level: 3, experience: 1}
    ];

    return (
        <Col className={"location px-0 d-flex flex-column align-items-center"} style={styles.page}>
            <img src={forest} alt={"Forest"} style={styles.background} />
            <h2>The Deadly Forest</h2>
            <Button onClick={() => newBattle(testParty, setBattlefield)}>Battle!</Button>
            <Button as={Link} to="/village">Back</Button>
        </Col>
    )
}

export default Forest;