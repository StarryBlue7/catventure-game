import React, { useEffect, useState } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Auth from '../utils/auth';
import { getMe } from '../utils/API';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Home from './pages/Home';
import Village from './pages/Village';
import Tavern from './pages/Tavern';
import Party from './pages/Party';
import Forest from './pages/Forest';
import Cave from './pages/Cave';



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
            <Sidebar userData={userData} />
            <main className="col-9">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tavern" component={Tavern} />
                    <Route exact path="/village" component={Village} />
                    <Route exact path="/party" component={Party} />
                    <Route exact path="/forest" component={Forest} />
                    <Route exact path="/cave" component={Cave} />
                </Switch>
                <Footer />
            </main>
        </div>
    );
}

export default Main;