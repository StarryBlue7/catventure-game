import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Button, Col } from 'react-bootstrap';

import Sprites from '../sprites/Sprites';
import splash from '../../images/splash.png';

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

function Home() {
    const [action, setAction] = useState('idle')
    return (
        <Col className={"location px-0 d-flex flex-column align-items-center"} style={styles.page}>
            <img src={splash} alt={"Splash page background"} style={styles.background} />
            <Row className={"d-flex flex-row gap-10 justify-content-center"}>
                <h2>Embark upon your very own Catventure!</h2>
            </Row>
            <Row className={"d-flex flex-row gap-10 justify-content-center"}>
                <Sprites job={"Mage"} action={action} setAction={setAction} scale={.5} />
                <Sprites job={"Warrior"} action={action} setAction={setAction} scale={.5} />
                <Sprites job={"Rogue"} action={action} setAction={setAction} scale={.5} />
            </Row>
            <Row className={"d-flex flex-row gap-10 justify-content-center"}>
                <Button as={Link} to="/village">Go on Adventure</Button>
                <Button as={Link} to="/party">View Party Details</Button>
            </Row>
        </Col>
    )
}

export default Home;