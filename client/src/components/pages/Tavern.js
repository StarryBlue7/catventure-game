import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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
            const response = await addCat(newCat, token);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            // Add update user data
        } catch (err) {
            console.error(err);
        }
    };

    const healCats = (userCats) => {
        const fedCats = userCats.cats;
        console.log(fedCats)
        // fedCats.map((cat) => {
        //     return cat.currentHP = cat.maxHP;
        // })
        console.log(fedCats)
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
                        key={i} 
                        isTavern={true} />
                ))}
            </div>
            <h3>Today's food</h3>
            <div>Deluxe Tuna and Chicken Pâté</div>
            <Button onClick={() => healCats(userData)}>Eat to recover HP</Button>
            <Button as={Link} to="/village">Back to the village</Button>
        </section>
    )
}

export default Tavern;