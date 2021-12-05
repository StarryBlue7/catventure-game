import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Village() {

    // main hub of the Catventures world
    return (
        <section>
            <h2>Cat Village</h2>
            <Button as={Link} to="/tavern">Go to the Tavern</Button>
            <Button as={Link} to="/forest">Go to Deadly Forest</Button>
            <Button as={Link} to="/cave">Go to Dark Cave</Button>
        </section>
    )
}

export default Village;