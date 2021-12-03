import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Modal, Tab } from 'react-bootstrap';

import Auth from '../utils/auth';
import LoginForm from './forms/LoginForm';
import SignUpForm from './forms/SignupForm';

// Placeholder username, should be passed in through props
let user =  {
    name: "User"
}

// Navbar
function Navigation() {
    // Login/signup modal state toggle
    const [loginShow, setLoginShow] = useState(false);

    return (
        <>
            <Navbar expand="lg" className="w-100 d-flex justify-content-between align-items-end px-0">
                <Nav>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    {Auth.loggedIn() ? (
                        <Nav.Link as={Link} to='/village'>Adventure</Nav.Link>
                    ) : (
                        <></>
                    )}
                </Nav>
                {Auth.loggedIn() ? (
                    <Nav className="gap-10">
                        <p className="m-0">Welcome, {user.name}!</p>
                        <Button onClick={Auth.logout} className="btn-sm btn-danger">Logout</Button>
                    </Nav>
                ) : (
                    <><Button onClick={() => setLoginShow(true)} className="btn-sm btn-success">Login</Button></>
                )}
            </Navbar>
            <Modal
                size='lg'
                show={loginShow}
                onHide={() => setLoginShow(false)}
                aria-labelledby='signup-modal'>
                {/* Tabbed form to show either signup or login component */}
                <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Modal.Title id='signup-modal'>
                            <Nav variant='pills'>
                                <Nav.Item>
                                    <Nav.Link eventKey='login'>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='login'>
                                <LoginForm handleModalClose={() => setLoginShow(false)} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='signup'>
                                <SignUpForm handleModalClose={() => setLoginShow(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </>
    );
}

export default Navigation;