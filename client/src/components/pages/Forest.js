import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Forest() {
    return (
        <section>
            <h2>Deadly Forest</h2>
            <div>Battle!</div>
            <Button as={Link} to="/village">Back</Button>
        </section>
    )
}

export default Forest;