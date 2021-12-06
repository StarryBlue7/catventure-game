import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Modal } from 'react-bootstrap';

import { newBattle, playerTurn, battleContinues, endBattle } from '../../game/battle';

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

function Forest({ userData }) {
    const [battlefield, setBattlefield] = useState({enemies: [], continue: false});
    const [currentCat, setCurrentCat] = useState({name: ""});
    const [menuShow, setMenuShow] = useState(false);
    const [allowAct, setAllowAct] = useState(false);

    return (
        <Col className={"location px-0 d-flex flex-column align-items-center"} style={styles.page}>
            <img src={forest} alt={"Forest"} style={styles.background} />
            <h2>The Deadly Forest</h2>
            <div id="battle-window">
                {battlefield.enemies.length ? (
                    <>
                        <Button disabled={!allowAct} onClick={() => setMenuShow(true)}>Choose Action</Button>
                    </>
                ) : (<></>)}
            </div>
            {battlefield.continue ? (<></>) : (
                <>
                    <Button onClick={() => newBattle(userData.cats, setBattlefield, setMenuShow, setCurrentCat, setAllowAct)}>Battle!</Button>
                    <Button as={Link} to="/village">Back</Button>
                </>
            )}
            <Modal size="sm" show={menuShow} onHide={() => setMenuShow(false)}>
                <Modal.Body>
                    <h2>{currentCat.name}'s Turn!</h2>
                    <Button 
                        onClick={() => {
                            setAllowAct(false); 
                            playerTurn(battlefield, setBattlefield, false, setMenuShow, setCurrentCat, setAllowAct)
                        }}
                    >Attack</Button>
                    <Button 
                        onClick={() => {
                            setAllowAct(false); 
                            playerTurn(battlefield, setBattlefield, true, setMenuShow, setCurrentCat, setAllowAct)
                        }}
                    >"Special"</Button>
                    <Button as={Link} to="/village">Escape</Button>
                </Modal.Body>
            </Modal>
        </Col>
    )
}

export default Forest;