import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

function Home() {
    return (
        <section>
            <h2>
                Home Sweet Home
            </h2>
            <div>
                <Button as={Link} to="/village">Go on Adventure</Button>
                <Button as={Link} to="/party">View Party Details</Button>
            </div>
        </section>
    )
}

export default Home;