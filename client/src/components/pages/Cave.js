import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Modal } from 'react-bootstrap';
import { lastTreasure, updateCat } from '../../utils/API';
import Auth from '../../utils/auth';
import treasure from '../../images/treasure.gif'
import cave from '../../images/cave.png';

const styles = {
    treasureBtn: {
        backgroundColor: 'transparent',
        padding: 0,
        border: '0px',
        outline: 'none',
        boxShadow: 'none'
    }
}

function Cave({ userData }) {

    // useState for treasure Modal
    const [showTreasure, setShowTreasure] = useState(false);

    // Rolls a random treasure for the user, sets the treasure lockout and makes API call
    // to update database with a PUT request
    const updateTreasure = async (userId) => {

        const boostedCats = userData.cats;

        let randomCat = Math.floor(Math.random() * boostedCats.length);
        let boostAmount = 15 //Math.ceil(Math.random() * 3)

        let randomBoost = 3 //Math.floor(Math.random() * 4)

        let randomStat;

        switch (randomBoost) {
            case 0:
                randomStat = "level";
                break;
            case 1:
                randomStat = "power";
                break;
            case 2:
                randomStat = "maxHP";
                break;
            default:
                randomStat = "experience";
                break;
        }

        boostedCats[randomCat][randomStat] = boostedCats[randomCat][randomStat] + boostAmount;

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        //activate state
        setShowTreasure(`${boostedCats[randomCat].name} gained ${boostAmount} ${randomStat}!!!`)

        if (!token) {
            return false;
        }

        try {

            const response = await lastTreasure(userId, token)
            const responseCats = await updateCat(boostedCats, token)

            if (!response.ok || !responseCats.ok) {
                throw new Error('something went wrong!');
            }


        } catch (err) {
            console.error(err);
        }
    }

    // Looks at the userdata and figures out if they are in a lockout or not
    // if they are, disable the button
    const isLockout = () => {
        const yesterday = new Date(new Date().setHours(new Date().getHours() - 0))
        const usersDay = new Date(userData.lastTreasure);

        if (usersDay > yesterday) {
            return true;
        } else {
            return false;
        }
    }

    return (
            <Col className={"location px-0 d-flex flex-column align-items-center"} style={styles.page}>
                <img src={cave} alt={"Cave"} style={styles.background} />
                <h2>Dark Cave</h2>
                <p>The party searched the depths of the dark cave to uncover ancient relics for increasing their feline abilities</p>
                {isLockout() ? (<p>No treasures left to find. Come back later!</p>) : (
                    <>
                        <p>Look through the cave to find and click on the treasure!</p>
                        <Button
                            style={styles.treasureBtn}
                            disabled={isLockout()}
                            onClick={() => updateTreasure()}>
                            <img src={treasure} alt={"treasure"} />
                        </Button>
                    </>)
                }
                <Button as={Link} to="/village">Back to the Village</Button>
                <Modal show={showTreasure} onHide={() => setShowTreasure(false)}>
                    <Modal.Body closeButton>
                        {showTreasure}
                    </Modal.Body>
                </Modal>
            </Col>
    )
}

export default Cave;