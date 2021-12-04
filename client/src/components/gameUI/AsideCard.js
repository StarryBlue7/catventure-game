import React from 'react';
import Sprites from '../sprites/Sprites'

const AsideCard = (props) => {

    return (
        <div>
            <p>{props.cat.name}</p>
            <p>Lvl: {props.cat.level}</p>
            {/* <Sprites job={props.cat.class} action={action} setAction={setAction} /> */}
            <p>HP: {props.cat.currentHP}/{props.cat.maxHP}</p>
            <p>{props.cat.class}</p>
        </div>
    )
}



export default AsideCard;