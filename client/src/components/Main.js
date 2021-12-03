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

    return (
        <div className="col-10 row">
            <Sidebar />
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