import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Party() {
    return (
        <section>
            <h2>My Team</h2>
            <div>Cat 1</div>
            <div>Cat 2</div>
            <div>Cat 3</div>
            <Button as={Link} to="/">Back</Button>
        </section>
    )
}

export default Party;