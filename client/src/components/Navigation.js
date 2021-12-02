import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Modal, Tab } from 'react-bootstrap';

import Auth from '../utils/auth';
import LoginForm from './forms/LoginForm';
import SignUpForm from './forms/SignupForm';

let user =  {
    name: "User"
}

// Navbar
function Navigation() {
    // Login/signup modal state toggle
    const [loginShow, setLoginShow] = useState(false);

    return (
        <>
            <Navbar expand="lg" className="w-100 d-flex justify-content-between px-0">
                <Nav>
                    <Nav.Link to='/'>Home</Nav.Link> {/* as={Link} */}
                    {Auth.loggedIn() ? (
                        <Nav.Link to='/village'>Adventure</Nav.Link>
                    ) : (
                        <></>
                    )}
                </Nav>
                {Auth.loggedIn() ? (
                    <>
                        <p className="m-0">Welcome, {user.name}!</p>
                        <Button onClick={Auth.logout} className="btn-sm btn-danger">Logout</Button>
                    </>
                ) : (
                    <><Button onClick={() => setLoginShow(true)} className="btn-sm btn-success">Login</Button></>
                )}
            </Navbar>
            {/* // <nav className="col-12 d-flex flex-row justify-content-between px-0">
            //     <ul id="nav-buttons" className="nav d-flex flex-row justify-content-end align-items-center gap-10">
            //         <li className="nav-item">Home</li>
            //         <li className="nav-item">Adventure</li>
            //     </ul>
            //     <div id="user-box" className="d-flex flex-row justify-content-end align-items-center gap-10">
            //         <p className="m-0">Welcome, {user.name}!</p>
            //         <button className="btn btn-sm btn-danger">Logout</button>
            //     </div>
            // </nav> */}
            <Modal
                size='lg'
                show={loginShow}
                onHide={() => setLoginShow(false)}
                aria-labelledby='signup-modal'>
                {/* tab container to do either signup or login component */}
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