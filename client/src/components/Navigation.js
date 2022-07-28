import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Modal, Tab } from "react-bootstrap";

import Auth from "../utils/auth";
import LoginForm from "./forms/LoginForm";
import SignUpForm from "./forms/SignupForm";

const styles = {
    button: {
        color: "black",
        border: "1px solid orange",
        fontSize: "1.4em",
        marginLeft: "10px",
        borderRadius: "8px",
    },
    welcome: {
        fontSize: "1.6em",
        fontFamily: "Pacifico",
    },
    loginLogout: {
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "1.2em",
        color: "black",
        borderRadius: "8px",
    },
    modal: {
        fontSize: "1.2em",
        borderTop: "green",
    },
};

// Navbar
function Navigation({ userData }) {
    // Login/signup modal state toggle
    const [loginShow, setLoginShow] = useState(false);

    return (
        <>
            <Navbar
                expand="lg"
                className="w-100 d-flex justify-content-between align-items-end px-0"
            >
                <Nav>
                    {Auth.loggedIn() ? (
                        <>
                            <Button
                                className="custom-button"
                                as={Link}
                                style={styles.button}
                                to="/party"
                                onClick={() =>
                                    (window.location.href = "/party")
                                }
                            >
                                Party
                            </Button>
                            <Button
                                className="custom-button"
                                as={Link}
                                style={styles.button}
                                to="/village"
                                onClick={() =>
                                    (window.location.href = "/village")
                                }
                            >
                                Adventure
                            </Button>
                        </>
                    ) : (
                        <></>
                    )}
                </Nav>
                {Auth.loggedIn() ? (
                    <Nav className="gap-10">
                        {userData.username ? (
                            <p className="m-0" style={styles.welcome}>
                                Welcome, {userData.username}!
                            </p>
                        ) : (
                            <></>
                        )}
                        <Button
                            onClick={Auth.logout}
                            style={styles.loginLogout}
                            className="btn-sm btn-danger"
                        >
                            Logout
                        </Button>
                    </Nav>
                ) : (
                    <>
                        <Button
                            onClick={() => setLoginShow(true)}
                            style={styles.loginLogout}
                            className="btn-sm btn-success"
                        >
                            Login
                        </Button>
                    </>
                )}
            </Navbar>
            <Modal
                size="lg"
                show={loginShow}
                onHide={() => setLoginShow(false)}
                aria-labelledby="signup-modal"
            >
                {/* Tabbed form to show either signup or login component */}
                <Tab.Container defaultActiveKey="login">
                    <Modal.Header style={styles.modalHeader} closeButton>
                        <Modal.Title id="signup-modal">
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="login">Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="signup">
                                        Sign Up
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={styles.modal}>
                        <Tab.Content>
                            <Tab.Pane eventKey="login">
                                <LoginForm
                                    handleModalClose={() => setLoginShow(false)}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="signup">
                                <SignUpForm
                                    handleModalClose={() => setLoginShow(false)}
                                />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </>
    );
}

export default Navigation;
