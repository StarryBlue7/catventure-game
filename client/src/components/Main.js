import React from 'react';
import Sidebar from './Sidebar'
import Footer from './Footer';

// Main page
function Main() {
    return (
        <div className="row">
            <Sidebar />
            <main className="col-9">
                Pages
                <Footer />
            </main>
        </div>
    );
}

export default Main;