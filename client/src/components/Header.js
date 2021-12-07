import React from 'react';
import Navigation from './Navigation';

import logo from '../images/catventureLogo.png'

const styles = {
    header: {
        backgroundColor: "orange",
    },
}

// Page header
function Header({userData}) {
    return (
        <header className="col-12 d-flex flex-column align-items-center pt-3 pb-2" style={styles.header}>
            <img className="logo" src={logo} alt="Catventure!" style={styles.logo} />
            <Navigation userData={userData} />
        </header>
    );
}

export default Header;