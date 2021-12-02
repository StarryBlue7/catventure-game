import React from 'react';

let user =  {
    name: "User"
}

// Navbar
function Navigation() {
    return (
        <nav className="col-12 d-flex flex-row justify-content-between px-0">
            <ul id="nav-buttons" className="nav d-flex flex-row justify-content-end align-items-center gap-10">
                <li className="nav-item">Home</li>
                <li className="nav-item">Adventure</li>
            </ul>
            <div id="user-box" className="d-flex flex-row justify-content-end align-items-center gap-10">
                <p className="m-0">Welcome, {user.name}!</p>
                <button className="btn btn-sm btn-danger">Logout</button>
            </div>
        </nav>
    );
}

export default Navigation;