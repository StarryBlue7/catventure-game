import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { lastTreasure, updateCat } from '../../utils/API';
import Auth from '../../utils/auth';



//functions that call user api findOneAndUpdate and updates the stat based on the roll
//use userdata to get cat id, 


function Cave({ userData }) {
    const [showTreasure, setShowTreasure] = useState(false);

    // console.log(userData)
    const updateTreasure = async (userId) => {

        // let randomCat = Math.floor(Math.random() * userData.cats.length);

        // const bonuses = [
        //     {
        //         body: userData.cats[randomCat].experience++,
        //         message: `${userData.cats[randomCat].name} gained 1 experience!`
        //     },
        //     {
        //         body: userData.cats[randomCat].maxHP++,
        //         message: `${userData.cats[randomCat].name} gained 1 hitpoints!`
        //     },
        //     {
        //         body: userData.cats[randomCat].power++,
        //         message: `${userData.cats[randomCat].name} gained 1 power!`
        //     },
        //     {
        //         body: userData.cats[randomCat].level++,
        //         message: `${userData.cats[randomCat].name} gained an entire level!!!`
        //     },
        // ]

        const boostedCats = userData.cats;

        boostedCats[0].level++;

        // let random = Math.floor(Math.random() * bonuses.length);

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        setShowTreasure(boostedCats[0].level)

        if (!token) {
            return false;
        }

        try {
            // const catsArr = userData.cats;

            const response = await lastTreasure(userId, token)

            const response2 = await updateCat(boostedCats, token)
            console.log(response2);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }
            const updatedTreasure = await response.json();
            const updatedCat = await response2.json();

            console.log(updatedTreasure)
            console.log("catupdate", updatedCat)
            // Add update user data
        } catch (err) {
            console.error(err);
        }

        // return bonuses[random];
        // console.log(bonuses[random].message)


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
            <Button onClick={() => updateTreasure()}>Open Treasure</Button>
            <Button as={Link} to="/village">Back to the village</Button>
        </section >
    )
}
// somewhere you go once a day to do something

//button you click on that does something, random cat etc.., increase stats

// add to user model, timegated, do it with User attr, "gotCaveTreasure, check user gotCaveTreasure,

//if within 20hrs, disabled, if longer than allow click, set time again"
export default Cave;