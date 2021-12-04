import React from 'react';
import AsideCard from './gameUI/AsideCard'


function Sidebar({ userData }) {
    const userCats = userData.cats;
    return (

        <aside className="col-3">
            <h2>Your Party</h2>
            {userCats ? (userCats.map((cat, i) => (
                <AsideCard cat={cat} key={i} />)
            )) : (<></>)
            }


        </aside >
    );
}

export default Sidebar;