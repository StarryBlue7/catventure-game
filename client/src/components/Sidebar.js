import React from 'react';
import AsideCard from './gameUI/AsideCard'

const styles = {
    yourParty: {
        margin: "10px",
        marginBottom: '15px'
    }
}

function Sidebar({ userData }) {
    const userCats = userData.cats;
    return (
        <aside className={window.outerWidth > 990 ? 'col-2' : ''}>
            <h2 style={styles.yourParty}>Your Party</h2>
            {userCats ? (userCats.map((cat, i) => (
                <AsideCard cat={cat} key={i} />)
            )) : (<></>)
            }
        </aside >
    );
}

export default Sidebar;