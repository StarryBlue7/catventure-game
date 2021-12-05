import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Modal } from 'react-bootstrap';
import { lastTreasure, updateCat } from '../../utils/API';
import Auth from '../../utils/auth';

import cave from '../../images/cave.png';

const styles = {
    background: { 
        color: 'white', 
        backgroundImage: `url(${cave})`, 
        backgroundPosition: "center bottom",
        width: "100%", 
        height: "100%" 
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
        <Container style={styles.background}>
            <h2>Dark Cave</h2>
            <p>My Team searched the depths of the dark cave and increased their feline abilities</p>
            <p>Look through the cave to find and click on the treasure!</p>
            <Modal show={showTreasure} onHide={() => setShowTreasure(false)}>
                <Modal.Body closeButton>
                    {showTreasure}
                </Modal.Body>
            </Modal>
            <Button
                disabled={isLockout()}
                onClick={() => updateTreasure()}>
                Open Treasure
            </Button>
            <Button as={Link} to="/village">Back to the village</Button>
        </Container>
    )
}

export default Cave;