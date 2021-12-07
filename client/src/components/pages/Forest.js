import forest from '../../images/forest.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Modal, Row, ProgressBar } from 'react-bootstrap';

import { Enemy, newBattle, playerTurn } from '../../game/battle';

import Jobs from '../../data/jobs.json';
import Sprites from '../sprites/Sprites';
import EnemySprites from '../sprites/EnemySprites';

const styles = {
    page: { 
        color: 'white', 
        width: "100%", 
        height: "100%",
        overflowX: "hidden"
    },
    background: {
        position: "absolute",
        zIndex: -1,
        height: "100%"
    },
    healthBars: {
        width: 100
    }
}

function Forest({ userData }) {
    // Battlefield state
    const [battlefield, setBattlefield] = useState({party: userData.cats, enemies: [], continue: false});
    
    // Game UI states
    const [menuShow, setMenuShow] = useState(false);
    const [allowAct, setAllowAct] = useState(false);
    const [menuText, setMenuText] = useState("");
    const [currentCat, setCurrentCat] = useState({name: ""});
    const setGameUI = {
        menu: {
            show: setMenuShow,
            text: setMenuText
        },
        action: {
            allow: setAllowAct
        },
        currentCat: setCurrentCat
    }

    // Cat animations states
    const [catAnim1, setCatAnim1] = useState('idle');
    const [catAnim2, setCatAnim2] = useState('idle');
    const [catAnim3, setCatAnim3] = useState('idle');
    const catAnims = [
        [catAnim1, setCatAnim1],
        [catAnim2, setCatAnim2],
        [catAnim3, setCatAnim3]
    ]

    const battleParty = battlefield.party;
    const battleEnemies = battlefield.enemies;

    return (
        <Col className={"location px-0 d-flex flex-column align-items-center"} style={styles.page}>
            <img src={forest} alt={"Forest"} style={styles.background} />
            <h2>The Deadly Forest</h2>
            {battleEnemies.length ? (
                <Row id="battle-window" className={"d-flex flex-row justify-content-between w-100"}>
                    <Col id="party-sprites" className={"d-flex flex-column align-items-start justify-content-between gap-10"}>
                        <Button className={"battle-button"} disabled={!allowAct} onClick={() => setMenuShow(true)}>Choose Action</Button>
                        {battleParty.map((cat, i) => {
                            return (
                                <div className={cat._id === currentCat._id ? "align-self-center" : ""}>
                                    <Sprites job={cat.class} action={catAnims[i][0]} setAction={catAnims[i][1]} scale={1} key={'ally' + i} />
                                    <ProgressBar style={styles.healthBars} variant={"success"} now={100 * (cat.currentHP / cat.maxHP)} key={'allyHP' + i} />
                                </div>
                            )
                        })}
                        <div></div>
                    </Col>
                    <Col className={"d-flex flex-column align-items-center justify-content-center gap-10"}>
                    </Col>
                    <Col id="enemy-sprites" className={"d-flex flex-column align-items-end justify-content-center gap-10"}>
                        {battleEnemies.map((enemy, i) => {
                            return (
                                <>
                                    {enemy.currentHP > 0 ? (
                                        <div className={i === battlefield.turns[0] - battlefield.party.length ? "align-self-center" : ""}>
                                            <EnemySprites img={enemy.img} scale={1} key={'enemy' + i} />
                                            <ProgressBar style={styles.healthBars} variant={"success"} now={100 * (enemy.currentHP / enemy.maxHP)} key={'enemyHP' + i} />
                                        </div>
                                    ) : (<></>)}
                                </>
                            )
                        })}
                    </Col>
                </Row>
            ) : (
                <>
                    <Button className={"battle-button"} onClick={() => newBattle(userData.cats, setBattlefield, setGameUI, catAnims)}>Battle!</Button>
                    <Button className={"battle-button"} as={Link} to="/village">Back</Button>
                </>
            )}
            <Modal size="sm" show={menuShow} onHide={() => setMenuShow(false)}>
                <Modal.Body>
                    <h2>{currentCat.name}'s Turn!</h2>
                    <Row className={"d-flex flex-row justify-content-center gap-10"}>
                        <Button 
                            className={"battle-button"}
                            onClick={() => {
                                setAllowAct(false); 
                                setTimeout(() => {setCurrentCat({name: ""})}, 2000);
                                playerTurn(battlefield, setBattlefield, false, setGameUI, catAnims)
                            }}
                        >Attack</Button>
                        <Button 
                            className={"battle-button"}
                            onClick={() => {
                                setAllowAct(false); 
                                setTimeout(() => {setCurrentCat({name: ""})}, 2000);
                                playerTurn(battlefield, setBattlefield, true, setGameUI, catAnims)
                            }}
                        >"Special"</Button>
                        <Button className={"battle-button"} as={Link} to="/village">Run Away!</Button>
                    </Row>
                    <p>{menuText}</p>
                </Modal.Body>
            </Modal>
        </Col>
    )
}


export default Forest;