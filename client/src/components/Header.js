import React from 'react';
import Navigation from './Navigation';

import logo from '../images/catventureLogo.png'

const styles = {
    header: {
        backgroundColor: "orange"
    },
    logo: {
        width: 500
    }
}

// Page header
function Header() {
    return (
        <header className="col-12 d-flex flex-column align-items-center pt-3 pb-2" style={styles.header}>
            <img src={logo} alt="Catventure!" style={styles.logo} />
            <Navigation />
        </header>
    );
}

export default Header;