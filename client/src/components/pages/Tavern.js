import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {lastHeal, lastRecruit, updateCat} from '../../utils/API'
import Auth from '../../utils/auth';
import { addCat } from '../../utils/API';
import CatCard from '../gameUI/CatCard';
import Jobs from '../../data/jobs.json'

function assignJob() {
    let jobRoll = Math.floor(Math.random()*3);
    switch(jobRoll) {
        case 1:
            return "Mage";
        case 2:
            return "Rogue";
        default:
            return "Warrior";
    }
}

// the RNGesus function
function randomGen(baseValue, spread) {
    return Math.abs(baseValue - spread + Math.floor(Math.random()*(spread*2+1)))
}

class NewCat {
    constructor(job) {
        this.class = job
        this.power = randomGen(Jobs[job].basePower, 2);
        this.maxHP = randomGen(Jobs[job].baseHitpoints, 4)
    }
}

const tavernCats = [
    new NewCat(assignJob()),
    new NewCat(assignJob()),
    new NewCat(assignJob()),
];

const Tavern = ({userData}) => {
    // Add cat to user roster
    const recruitCat = async (newCat) => {
        // Get user token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {

            const response = await lastRecruit(userData, token);
            const responseAddCat = await addCat(newCat, token);

            if (!responseAddCat.ok || !response) {
                throw new Error('something went wrong!');
            }
            
        } catch (err) {
            console.error(err);
        }
    };

    const healCats = async (userCats) => {
        const fedCats = userCats.cats;
        console.log(userCats)
        console.log(fedCats)
        fedCats.map((cat) => {
            return cat.currentHP = cat.maxHP;
        })

        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }

        try{
            const response = await lastHeal(userCats, token)
            const responseCats = await updateCat(fedCats, token)

            if(!response.ok) {
                throw new Error('something went wrong!');
            }
            const updatedHeal = await response.json();
            const updatedCat = await responseCats.json();

            console.log(updatedHeal)
            console.log(updatedCat)
        } catch(err) {
            console.error(err);
        }   
    }

    const healLockout = () => {
        const lockoutTime = new Date(new Date().setMinutes(new Date().getMinutes() -30))
        const usersDay = new Date(userData.lastHeal);

        if (usersDay > lockoutTime) {
            return true;
        } else {
            return false;
        }
    }

    const recruitLockout = () => {
        const lockoutTime = new Date(new Date().setHours(new Date().getHours() -20 ))
        const usersDay = new Date(userData.lastRecruit);

        if (usersDay > lockoutTime) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <section>
            <h2>Cat Tavern</h2>
            <p>Welcome to the tavern meow, we've got some adventurers here looking for a quest</p>
            <div>
                {tavernCats.map((cat, i) => (
                    <CatCard 
                        recruitCat={recruitCat} 
                        cat={cat}
                        userData={userData} 
                        key={i} 
                        isTavern={true}
                        recruitLockout={recruitLockout()} />
                ))}
            </div>
            <h3>Today's food</h3>
            <div>Deluxe Tuna and Chicken Pâté</div>
            <Button 
                onClick={() => healCats(userData)}
                disabled={healLockout()} >Eat to recover HP</Button>
            <Button as={Link} to="/village">Back to the village</Button>
        </section>
    )
}

export default Tavern;