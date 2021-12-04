import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CatCard from '../gameUI/CatCard';

// function to remove cat from party

// const handleremoveCat = async (catId) => {
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//         return false;
//     }

//     try {
//         const response = await removeCat(catId, token)

//         if (!response.ok) {
//             throw new Error('something went wrong!');
//         }
//         const updatedUser = await response.json();
//         setUserData(updatedUser);
//     } catch (err) {
//         console.error(err);
//     }
// };

function Party({userData}) {
    const userCats = userData.cats;
    return (
        <section>
            <h2>My Team</h2>
            <div>
                {userCats.map((cat, i) => (
                    <CatCard 
                    cat={cat} 
                    key={i}
                    isTavern={false}
                     />
                ))}
            </div>
            <Button as={Link} to="/">Back</Button>
        </section>
    )
}

export default Party;

