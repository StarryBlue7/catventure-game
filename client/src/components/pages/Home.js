import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Sprites from '../sprites/Sprites';

const catData = {
    class: "Rogue",
}

function Home() {
    const [action, setAction] = useState('idle')
    return (
        <section>
            <h2>
                Home Sweet Home
            </h2>
            <div>
                <Sprites job={catData.class} action={action} setAction={setAction} />
            </div>
            <div>
                <Button onClick={() => setAction('idle')}>Idle</Button>
                <Button onClick={() => setAction('attack')}>Attack</Button>
                <Button onClick={() => setAction('special')}>Special</Button>
                <Button onClick={() => setAction('die')}>Die</Button>
                <Button onClick={() => setAction('damaged')}>Damaged</Button>
            </div>
            <div>
                <Button as={Link} to="/village">Go on Adventure</Button>
                <Button as={Link} to="/party">View Party Details</Button>
            </div>
        </section>
    )
}

export default Home;