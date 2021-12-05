import React, { useEffect, useState } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Auth from '../utils/auth';
import { getMe } from '../utils/API';
import Sidebar from './Sidebar';
import Home from './pages/Home';
import Village from './pages/Village';
import Tavern from './pages/Tavern';
import Party from './pages/Party';
import Forest from './pages/Forest';
import Cave from './pages/Cave';

// Main page
function Main() {
    const [userData, setUserData] = useState({});

    // Keeps the user data updated
    useEffect(() => {
        const getUserData = async () => {
            try {
                const token = Auth.loggedIn() ? Auth.getToken() : null;
                if (!token) {
                    return false;
                }

                const response = await getMe(token);
                // setUserData(response.user.cats)
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
    }, [userData]);

    return (
        <div className="w-100 row mx-0">
            <Sidebar userData={userData} />
            <main className="col-9 px-0">
                <Switch>
                    <Route exact path="/" >
                        <Home userData={userData || false} />
                    </Route>
                    {Object.keys(userData).length ? (
                        <>
                            <Route exact path="/tavern" >
                                <Tavern userData={userData} />
                            </Route>
                            <Route exact path="/village">
                                <Village />
                            </Route>
                            <Route exact path="/party">
                                <Party userData={userData} />
                            </Route>
                            <Route exact path="/forest">
                                <Forest userData={userData} />
                            </Route>
                            <Route exact path="/cave">
                                <Cave userData={userData} />
                            </Route>
                        </>
                        ) : (
                        <></>
                        )
                    }  
                </Switch>
            </main>
        </div>
    );
}

export default Main;