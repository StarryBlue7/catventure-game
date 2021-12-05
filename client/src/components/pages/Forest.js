import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import forest from '../../images/forest.png';

const styles = {
    background: { 
        color: 'white', 
        backgroundImage: `url(${forest})`, 
        backgroundPosition: "center bottom",
        width: "100%", 
        height: "100%" 
    }
}

function Forest() {
    return (
        <section style={styles.background}>
            <h2>The Deadly Forest</h2>
            <div>Battle!</div>
            <Button as={Link} to="/village">Back</Button>
        </section>
    )
}

export default Forest;