//
// const [userData, setUserData] = useState({});


import React, { useState, useEffect } from 'react';
import { getMe } from '../../utils/API';
import Auth from '../../utils/auth';


const Aside = () => {

    const [userData, setUserData] = useState({});

    const userDataLength = Object.keys(userData).length;

    useEffect(() => {
        const getUserData = async () => {
            try {
                const token = Auth.loggedIn() ? Auth.getToken() : null;

                if (!token) {
                    return false;
                }

                const response = await getMe(token);

                if (!response.ok) {
                    throw new Error('something went wrong!');
                }

                const user = await response.json();
                setUserData(user);
            } catch (err) {
                console.error(err);
            }
        };

        getUserData();
    }, [userDataLength]);

    return (
        <h2>placeholder</h2>
    )
}



export default Aside;