import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Tavern = () => {

    return (
        <section>
            <h2>Cat Tavern</h2>
            <p>Welcome to the tavern meow, we've got some adventurers here looking for a quest</p>
            <Button as={Link} to="/village">Back to the village</Button>
        </section>
    )

}

export default Tavern;