import React from 'react';
import {Button} from 'react-bootstrap';

function Home() {
    return (
        <section>
            <h2>
                Home Sweet Home
            </h2>
            <Button to="/village">Go on Adventure</Button>
        </section>
    )
}

export default Home;