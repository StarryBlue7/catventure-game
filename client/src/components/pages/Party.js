import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CatCard from '../gameUI/CatCard';

function Party({userData}) {

    const userCats = userData.cats;

    // checks if the user has only one cat left (and prevent them from removing it)
    function isLastCat(catArray){
        if(catArray.length < 2){
            return true;
        } else{
            return false;
        }
    }
    return (
        <section>
            <h2>My Team</h2>
            <div>
                {userCats.map((cat, i) => (
                    <CatCard 
                    cat={cat} 
                    key={i}
                    isTavern={false}
                    isLastCat={isLastCat(userCats)}
                     />
                ))}
            </div>
            <Button as={Link} to="/">Back</Button>
        </section>
    )
}

export default Party;

