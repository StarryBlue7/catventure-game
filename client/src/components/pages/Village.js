import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Village() {
    return (
        <section>
            <h2>Cat Village</h2>
            <Button as={Link} to="/tavern">Go to the Tavern</Button>
        </section>
    )
}

export default Village;