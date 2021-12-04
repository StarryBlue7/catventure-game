import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


//functions that call user api findOneAndUpdate and updates the stat based on the roll
//use userdata to get cat id, 




function Cave({ userData }) {
    // userData.cats[0].experience++;
    // console.log(userData.cats)
    const bonuses = [
        {
            bonus: userData.cats[0].experience++,
            message: `${userData.cats[0].name} gained experience!`
        },
        {
            bonus: userData.cats[0].maxHP++,
            message: `${userData.cats[0].name} gained hitpoints!`
        },
        {
            bonus: userData.cats[0].power++,
            message: `${userData.cats[0].name} gained power!`
        },
        {
            bonus: userData.cats[0].level++,
            message: `${userData.cats[0].name} gained an entire level!!!`
        },
    ]

    function randomTreasure() {
        let random = Math.floor(Math.random() * bonuses.length);
        console.log(bonuses[random].message)
        return bonuses[random].message;

    }

    return (
        <section>
            <h2>Dark Cave</h2>
            <p>My Team searched the depths of the dark cave and increased their feline abilities</p>
            <p> Look through the cave to find and click on the treasure!</p>

            <Button onClick={() => randomTreasure()}>Open Treasure</Button>
            <Button as={Link} to="/village">Back to the village</Button>
        </section>
    )
}
// somewhere you go once a day to do something

//button you click on that does something, random cat etc.., increase stats

// add to user model, timegated, do it with User attr, "gotCaveTreasure, check user gotCaveTreasure,

//if within 20hrs, disabled, if longer than allow click, set time again"
export default Cave;