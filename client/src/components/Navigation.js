import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Modal, Tab } from 'react-bootstrap';

import Auth from '../utils/auth';

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
                        <Button className="btn-sm btn-danger">Logout</Button>
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
        </>
    );
}

export default Navigation;