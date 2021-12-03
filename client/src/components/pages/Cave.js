import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Cave() {
    return (
        <section>
            <h2>Dark Cave</h2>
            <p>My Team searched the depths of the dark cave and increased their feline abilities</p>
            <Button as={Link} to="/village">Back to the village</Button>
        </section>
    )
}

export default Cave;