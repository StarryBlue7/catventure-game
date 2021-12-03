import React, { useState} from 'react';
import { Button } from 'react-bootstrap';

// replace these with the proper imports
const warriorImage = '';
const rangerImage = '';
const mageImage = '';

function CatCard(props) {
    // For this card to work, I need the following:
    // props.cat.name
    // props.cat.class
    // props.cat.maxHP
    // props.cat.level
    // props.cat.power
    // props.isTavern (true or false)

    // I also need the addCat & removeCat function

    const [namingModal, setNamingModal] = useState(false);

    // function getClassName(gameClass){
    //     if(gameClass === 1){
    //         return "Warrior";
    //     } else if(gameClass === 2){
    //         return "Ranger";
    //     } else {
    //         return "Mage";
    //     }
    // }

    function getClassImg(gameClass){
        if(gameClass === 1){
            return warriorImage;
        } else if(gameClass === 2){
            return rangerImage;
        } else {
            return mageImage;
        }
    }

    return (
        <>
            <div className="cat-card">
                {!props.isTavern ? (<p>{props.cat.name}</p>) : (<></>)}
                <img src={getClassImg(props.cat.job)} alt="animated cat" />
                <div className="hp-bar"><div></div></div>
                <p>{props.cat.job}</p>
                <p>HP: {props.cat.maxHP}/{props.cat.maxHP}</p>
                <p>Lvl: {!props.isTavern ? props.cat.level : 1}</p>
                <p>Power: {props.cat.power}</p>
                {props.isTavern ? (
                    <Button onClick={() => props.recruitCat(props.cat)}>Add to Party</Button>
                ) 
                : (
                    <Button>Remove</Button>
                )}
            </div>
        </>
    )
}

export default CatCard;