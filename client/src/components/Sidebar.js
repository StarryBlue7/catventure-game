import React from 'react';
import AsideCard from './gameUI/AsideCard'

//temp dats to test props
// const fakeUser = {
//     username: "George",
//     password: "duck",
//     cats: [
//         {
//             name: "joe",
//             class: "Warr",
//             level: 1000,
//             power: 10,
//             experience: 1432,
//             maxHP: 1333,
//             currentHP: 1202,
//         }
//     ]

// }
// Sidebar
//userData will be used when we are able to addcat to user
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