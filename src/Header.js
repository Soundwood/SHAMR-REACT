import React from 'react';

const Header = () => {
    return (
        <header className="bgimg w3-display-container w3-grayscale-min" id="home">
            <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
                <span className="w3-tag">Open 24/7</span>
            </div>
            <div className="w3-display-middle w3-center">
                <span className="w3-text-white" style={{ fontSize: "90px"}}>SHAMR</span>
            </div>
            <div className="w3-display-bottomright w3-center w3-padding-large">
                <span className="w3-text-white"></span>
            </div>
        </header>
    );
};

export default Header;