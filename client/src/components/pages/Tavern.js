import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Auth from '../../utils/auth';
import { addCat } from '../../utils/API';
import CatCard from '../gameUI/CatCard';
import Classes from '../../data/classes.json'

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

function assignPower(job) {
    
}

class NewCat {
    constructor(power, maxHP, job) {
        this.power = power;
        this.maxHP = maxHP;
        this.job = job || assignJob();
    }
}

const tempCats = [
    {
        name: "Maya",
        power: Classes.Warrior.basePower,
        maxHP: 20,
        job: 1,
    },
    {
        name: "Farley",
        power: 5,
        maxHP: 12,
        job: 2,
    },
    {
        name: "Cassie",
        power: 6,
        maxHP: 18,
        job: 3,
    },
];


const Tavern = () => {
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
    return (
        <section>
            <h2>Cat Tavern</h2>
            <p>Welcome to the tavern meow, we've got some adventurers here looking for a quest</p>
            <div>
                {tempCats.map((cat, i) => (
                    <CatCard recruitCat={recruitCat} cat={cat} key={i} isTavern={true} />
                ))}
            </div>
            <Button as={Link} to="/village">Back to the village</Button>
            <Button onClick={() => recruitCat(tempCats[0])}>Recruit {Classes.Warrior.statName}!</Button>
        </section>
    )
}

export default Tavern;