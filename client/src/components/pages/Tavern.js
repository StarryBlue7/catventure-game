import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Auth from '../../utils/auth';
import { addCat } from '../../utils/API';

const tempCats = [
    {
        name: "Maya",
    },
    {
        name: "Farley",
        power: 5,
        maxHP: 12
    },
    {
        name: "Cassie",
        power: 6,
        maxHP: 18
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
            <Button as={Link} to="/village">Back to the village</Button>
            <Button onClick={() => recruitCat(tempCats[0].name)}>Recruit {tempCats[0].name}!</Button>
        </section>
    )
}

export default Tavern;