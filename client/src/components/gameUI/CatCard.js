import React from 'react';

// replace these with the proper imports
const warriorImage = '';
const rangerImage = '';
const mageImage = '';

function CatCard(props) {


    function getClassName(gameClass){
        if(gameClass === 1){
            return "Warrior";
        } else if(gameClass === 2){
            return "Ranger";
        } else {
            return "Mage";
        }
    }

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
            <div className="cat-card">
                {props.cat.name ? (<p>{props.cat.name}</p>) : (<></>)}
                <img src={getClassImg(props.cat.class)} alt="animated cat" />
                <div className="hp-bar"><div></div></div>
                <p>{getClassName(props.cat.class)}</p>
            </div>
    )
}

export default CatCard;