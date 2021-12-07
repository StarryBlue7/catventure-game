import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col } from 'react-bootstrap';

import village from '../../images/village.png';

const styles = {
    villageHeader: {
        fontSize: '3em',
        margin: '20px'
    },
    tavernBtn: {
        position: 'absolute',
        bottom: '210px',
        left: '250px'
    },
    forestBtn: {
        position: 'absolute',
        top: '100px',
        right: '100px'
    },
    caveBtn: {
        position: 'absolute',
        bottom: '200px',
        right: '100px'
    }
}

function Village() {

    // main hub of the Catventures world
    return (
            <Col className={"location px-0 d-flex flex-column align-items-center"} >
                <img src={village} alt={"Village"} />
                <h2 style={styles.villageHeader}>Cat Village</h2>
                <Button style={styles.tavernBtn} className={"game-button"} as={Link} to="/tavern">Go to the Tavern</Button>
                <Button style={styles.forestBtn} className={"game-button"} as={Link} to="/forest">Go to Deadly Forest</Button>
                <Button style={styles.caveBtn} className={"game-button"} as={Link} to="/cave">Go to Dark Cave</Button>
            </Col>
    )
}

export default Village;