import React, {useEffect, useState} from 'react';
import Auth from '../utils/auth';
import { getMe } from '../utils/API';
import Sidebar from './Sidebar';
import Footer from './Footer';



// Main page
function Main() {

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
        <div className="col-10 row">
            <Sidebar />
            <main className="col-9">
                Pages
                <Footer />
            </main>
        </div>
    );
}

export default Main;