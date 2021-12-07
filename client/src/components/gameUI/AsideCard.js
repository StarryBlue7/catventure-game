import React, { useState } from 'react';
import Sprites from '../sprites/Sprites'
import Jobs from '../../data/jobs.json';

const styles = {
    catName: {
        fontSize: '1.2em',
        padding: '5px',
        position: 'absolute',
        left: '25px'
    },
    catClass: {
        fontSize: '1.2em',
        padding: '5px',
        position: 'absolute',
        right: '25px'
    }
}

const AsideCard = (props) => {
    const [action, setAction] = useState('idle')
    return (
        <div className="custom-card mx-3">
            <div style={styles.catName}>{props.cat.name}</div>
            <div style={styles.catClass}>{props.cat.class}</div>
            <div>
                <Sprites job={props.cat.class} action={action} setAction={setAction} scale={1} />
            </div>
            <p>Lvl: {props.cat.level}</p>
            <p>HP: {props.cat.currentHP}/{props.cat.maxHP}</p>
            <p>Exp: {props.cat.experience}/20</p>
            {/* <p>{Jobs[props.cat.class].statName}: {props.cat.power}</p> */}
        </div>
    )
}

export default AsideCard;