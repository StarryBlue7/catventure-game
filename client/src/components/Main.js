import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row } from "react-bootstrap";
import Auth from "../utils/auth";
import { getMe } from "../utils/API";

import useSound from "use-sound";
import Sounds from "../sounds/index.js";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Home from "./pages/Home";
import Village from "./pages/Village";
import Tavern from "./pages/Tavern";
import Party from "./pages/Party";
import Forest from "./pages/Forest";
import Cave from "./pages/Cave";

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
                    throw new Error("something went wrong!");
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
        <Router>
            <Header userData={userData} />
            <Row className="main-page w-100 row mx-0">
                <Sidebar userData={userData} />
                <main
                    className={
                        window.outerWidth > 1300 ? "col-10 px-0" : "col-12 px-0"
                    }
                >
                    <Switch>
                        <Route exact path="/">
                            <Home userData={userData || false} />
                        </Route>
                        {Object.keys(userData).length ? (
                            <>
                                <Route exact path="/tavern">
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
                        )}
                    </Switch>
                </main>
            </Row>
            <Footer />
        </Router>
    );
}

export default Main;
