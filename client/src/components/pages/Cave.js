import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { lastTreasure, updateCat } from '../../utils/API';
import Auth from '../../utils/auth';



function Cave({ userData }) {
    const [showTreasure, setShowTreasure] = useState(false);

    const updateTreasure = async (userId) => {

        const boostedCats = userData.cats;

        let randomCat = Math.floor(Math.random() * boostedCats.length);
        let boostAmount = Math.ceil(Math.random() * 3)

        let randomBoost = Math.floor(Math.random() * 4)

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

        setShowTreasure(`${boostedCats[randomCat].name} gained ${boostAmount} ${randomStat}!!!`)

        if (!token) {
            return false;
        }

        try {

            const response = await lastTreasure(userId, token)
            const response2 = await updateCat(boostedCats, token)

            if (!response.ok) {
                throw new Error('something went wrong!');
            }
            const updatedTreasure = await response.json();
            const updatedCat = await response2.json();

            console.log(updatedTreasure)
            console.log("catupdate", updatedCat)

        } catch (err) {
            console.error(err);
        }
    }

    const isLockout = () => {
        const yesterday = new Date(new Date().setHours(new Date().getHours() - 20))
        const usersDay = new Date(userData.lastTreasure);

        if (usersDay > yesterday) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <section>
            <h2>Dark Cave</h2>
            <p>My Team searched the depths of the dark cave and increased their feline abilities</p>
            <p> Look through the cave to find and click on the treasure!</p>
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
        </section >
    )
}

export default Cave;