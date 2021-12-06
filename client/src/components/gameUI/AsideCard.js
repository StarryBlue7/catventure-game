import React, { useState } from 'react';
import Sprites from '../sprites/Sprites'
import Jobs from '../../data/jobs.json';

// const styles = {

// }

const AsideCard = (props) => {
    const [action, setAction] = useState('idle')
    return (
        <div className="custom-card">
            <p>{props.cat.name}</p>
            <div>
                <Sprites job={props.cat.class} action={action} setAction={setAction} scale={1} />
            </div>
            <p>{props.cat.class}</p>
            <p>HP: {props.cat.currentHP}/{props.cat.maxHP}</p>
            <p>Lvl: {props.cat.level}</p>
            <p>Exp: {props.cat.experience}/20</p>
            <p>{Jobs[props.cat.class].statName}: {props.cat.power}</p>
        </div>
    )
}

export default AsideCard;