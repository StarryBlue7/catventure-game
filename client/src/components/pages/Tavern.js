import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import {
    lastHeal,
    lastRecruit,
    updateCat,
    addTavernCat,
    lockoutTavernCat,
} from '../../utils/API'
import Auth from '../../utils/auth';
import { addCat } from '../../utils/API';
import CatCard from '../gameUI/CatCard';
import Jobs from '../../data/jobs.json'
import randomGen from '../../utils/RNG';
import tavern from '../../images/tavern.jpg';

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

// randomly assigns the job/class of the constructed Cat
function assignJob() {
    let jobRoll = Math.floor(Math.random() * 3);
    switch (jobRoll) {
        case 1:
            return "Mage";
        case 2:
            return "Rogue";
        default:
            return "Warrior";
    }
}

// Class constructor which 'rolls' a new cat using baseStats and  on the jobs.json file
class NewCat {
    constructor(job) {
        this.class = job
        this.power = randomGen(Jobs[job].basePower, 2);
        this.maxHP = randomGen(Jobs[job].baseHitpoints, 4)
    }
}

// Creates an array of cats for the user to recruit
const tavernCats = [
    new NewCat(assignJob()),
    new NewCat(assignJob()),
    new NewCat(assignJob()),
];

const Tavern = ({ userData }) => {
    const currentCats = userData.currentTavernCats;
    // When user selects name (on the CatCard), make a PUT request to database
    // and add a cat to the user's array of cats
    const recruitCat = async (newCat) => {
        // Get user token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        newCat.currentHP = newCat.maxHP;

        try {
            // two API calls, one to set the recruit lockout, one to add a cat
            const response = await lastRecruit(userData, token);

            const responseAddCat = await addCat(newCat, token);


            if (!responseAddCat.ok || !response) {
                throw new Error('something went wrong!');
            }

            // console.log(userData)
        } catch (err) {
            console.error(err);
        }
    };


    const addTavernCatToDB = async (tavernCats) => {

        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }

        const lockoutTime = new Date(new Date().setHours(new Date().getHours() - 20))
        
        const usersDay = new Date(userData.lockoutTavernCat);

        if (usersDay < lockoutTime || !currentCats.length) {
            try {
                console.log("duck")
                const response = await addTavernCat(tavernCats, token);

                const responseTavernCats = await lockoutTavernCat(userData, token)

                if (!response.ok || !responseTavernCats) {
                    throw new Error("duck")
                }
                const tavResp = await responseTavernCats.json();
                console.log(tavResp)
                const catResp = await response.json();
                console.log(catResp)
                console.log(userData)
            } catch (err) {
                console.error(err);
            }
        }
    }
    console.log(tavernCats)
    addTavernCatToDB(tavernCats);

    // console.log(userData)
    // if i create user, go to tavern, tavernCats empty.
    // if i comment in code, refresh, cats reload
    // if i comment code back out, cats do not reload

    //20 hr lockout

    const checkTavernCats = () => {

        const lockoutTime = new Date(new Date().setHours(new Date().getHours() - 20))
        const usersDay = new Date(userData.lockoutTavernCat);

        if (usersDay > lockoutTime) {
            return true;

        } else {
            return false;
        }
    }

    const healCats = async (userCats) => {
        const fedCats = userCats.cats;

        // sets the user's cats' currentHP to their maxHP (full restore)
        fedCats.map((cat) => {
            return cat.currentHP = cat.maxHP;
        })

        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }

        try {
            //two API calls, one to set the lockout, the other to update the cats in the database
            const response = await lastHeal(userCats, token)
            const responseCats = await updateCat(fedCats, token)

            if (!response.ok || !responseCats.ok) {
                throw new Error('something went wrong!');
            }


        } catch (err) {
            console.error(err);
        }
    }

    // Looks at the user's lockout timestamp and disables the button if it hasn't been long enough
    const healLockout = () => {
        const lockoutTime = new Date(new Date().setMinutes(new Date().getMinutes() - 30))
        const usersDay = new Date(userData.lastHeal);

        if (usersDay > lockoutTime) {
            return true;
        } else {
            return false;
        }
    }

    // Disables the recruit cat button if either the user already has 3 cats or if the recruit lockout is still in effect
    const recruitLockout = () => {

        const lockoutTime = new Date(new Date().setHours(new Date().getHours() - 0))
        const usersDay = new Date(userData.lastRecruit);

        if (usersDay > lockoutTime || userData.cats.length >= 3) {
            return true;
        } else {
            return false;
        }

    }
    return (
        <Col className={"location px-0 d-flex flex-column align-items-center"} style={styles.page}>
            <img src={tavern} alt={"Tavern"} style={styles.background} />
            <h2>Cat Tavern</h2>
            <p>Welcome to the tavern meow, we've got some adventurers here looking for a quest</p>
            <div>
                {checkTavernCats() ? (currentCats.map((cat, i) => (
                    <CatCard
                        recruitCat={recruitCat}
                        cat={cat}
                        userData={userData}
                        key={i}
                        isTavern={true}
                        recruitLockout={recruitLockout()} />
                ))) : (tavernCats.map((cat, i) => (
                    <CatCard
                        recruitCat={recruitCat}
                        cat={cat}
                        userData={userData}
                        key={i}
                        isTavern={true}
                        recruitLockout={recruitLockout()} />
                )))}
            </div>
            <h3>Today's food</h3>
            <div>Deluxe Tuna and Chicken Pâté</div>
            <Button
                onClick={() => healCats(userData)}
                disabled={healLockout()} >Eat to recover HP</Button>
            <Button as={Link} to="/village">Back to the village</Button>
        </Col >
    )
}

export default Tavern;