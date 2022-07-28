import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Button, Col } from "react-bootstrap";

import Sprites from "../sprites/Sprites";
import splash from "../../images/splash.png";

const styles = {
    splashPage: {
        marginTop: "20%",
    },
    siteSubtite: {
        fontSize: "3em",
    },
};

function Home() {
    const [action, setAction] = useState("idle");
    return (
        <Col className={"location px-0 d-flex flex-column align-items-center"}>
            <img src={splash} alt={"Splash page background"} />
            <div style={styles.splashPage}>
                <Row
                    className={"d-flex flex-row gap-10 justify-content-center"}
                >
                    <h2 style={styles.siteSubtite}>
                        Embark upon your very own Catventure!
                    </h2>
                </Row>
                <Row
                    className={"d-flex flex-row gap-10 justify-content-center"}
                >
                    <Sprites
                        job={"Mage"}
                        action={action}
                        setAction={setAction}
                        scale={0.5}
                    />
                    <Sprites
                        job={"Warrior"}
                        action={action}
                        setAction={setAction}
                        scale={0.5}
                    />
                    <Sprites
                        job={"Rogue"}
                        action={action}
                        setAction={setAction}
                        scale={0.5}
                    />
                </Row>
            </div>
        </Col>
    );
}

export default Home;
