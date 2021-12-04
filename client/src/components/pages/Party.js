import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CatCard from '../gameUI/CatCard';

function Party({userData}) {
    console.log(userData)
    const userCats = userData.cats;
    console.log(userCats)
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

