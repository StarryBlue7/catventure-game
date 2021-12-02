import React from 'react';
import Navigation from './Navigation';

// Page header
function Header() {
    return (
        <header className="col-12">
            <div>Logo</div>
            <Navigation />
        </header>
    );
}

export default Header;