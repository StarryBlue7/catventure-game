import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col } from 'react-bootstrap';
import forest from '../../images/forest.png';

const styles = {
    page: { 
        color: 'white', 
        width: "100%", 
        height: "100%" 
    },
    background: {
        position: "absolute",
        zIndex: -1,
        width: "100%"
    }
}

function Forest() {
    return (
        <Col className={"location px-0 d-flex flex-column align-items-center"} style={styles.page}>
            <img src={forest} alt={"Forest"} style={styles.background} />
            <h2>The Deadly Forest</h2>
            <div>Battle!</div>
            <Button as={Link} to="/village">Back</Button>
        </Col>
    )
}

export default Forest;