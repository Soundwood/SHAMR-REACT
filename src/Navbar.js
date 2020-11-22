import React from 'react';

const Navbar = () => {
    return (
        <div className="w3-top">
            <div className="w3-row w3-padding w3-black">
                <div className="w3-col s3">
                    <a href="#about" className="w3-button w3-block w3-black">ABOUT</a>
                </div>
                <div className="w3-col s3">
                    <a href="#offenders_offenses" className="w3-button w3-block w3-black">OFFENDERS/OFFENSES</a>
                </div>
                <div className="w3-col s3">
                    <a href="#shame" className="w3-button w3-block w3-black">SHAME</a>
                </div>
                <div className="w3-col s3">
                    <a href="#add_update_offender" className="w3-button w3-block w3-black">ADD TO OFFENSES/OFFENDERS</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;