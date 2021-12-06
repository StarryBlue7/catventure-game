import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col } from 'react-bootstrap';

import village from '../../images/village.png';


function Village() {

    // main hub of the Catventures world
    return (
            <Col className={"location px-0 d-flex flex-column align-items-center"} >
                <img src={village} alt={"Village"} />
                <h2>Cat Village</h2>
                <Button as={Link} to="/tavern">Go to the Tavern</Button>
                <Button as={Link} to="/forest">Go to Deadly Forest</Button>
                <Button as={Link} to="/cave">Go to Dark Cave</Button>
            </Col>
    )
}

export default Village;