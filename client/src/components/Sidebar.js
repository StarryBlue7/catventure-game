import React from "react";
import AsideCard from "./gameUI/AsideCard";

const styles = {
    yourParty: {
        margin: "10px",
        marginBottom: "15px",
    },
};

function Sidebar({ userData }) {
    const userCats = userData.cats;
    return (
        <aside className={window.outerWidth > 1300 ? "col-2 px-0" : "px-0"}>
            <h2 style={styles.yourParty}>Your Party</h2>
            {userCats ? (
                userCats.map((cat, i) => <AsideCard cat={cat} key={i} />)
            ) : (
                <></>
            )}
        </aside>
    );
}

export default Sidebar;
