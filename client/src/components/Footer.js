import React from "react";

const styles = {
    footer: {
        width: "100%",
        textAlign: "center",
        fontSize: "110%",
    },
    link: {
        color: "black",
    },
};

// Page footer
function Footer() {
    return (
        <footer style={styles.footer}>
            <a
                style={styles.link}
                href="https://github.com/StarryBlue7/catventure-game"
                target="_blank"
                rel="noreferrer"
            >
                &copy; The D.E.V. Team, 2021
            </a>
        </footer>
    );
}

export default Footer;
