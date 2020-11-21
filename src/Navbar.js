import React from 'react';

const Navbar = () => {
    return (
        <div class="w3-top">
            <div class="w3-row w3-padding w3-black">
                <div class="w3-col s3">
                    <a href="#about" class="w3-button w3-block w3-black">ABOUT</a>
                </div>
                <div class="w3-col s3">
                    <a href="#offenders_offenses" class="w3-button w3-block w3-black">OFFENDERS/OFFENSES</a>
                </div>
                <div class="w3-col s3">
                    <a href="#shame" class="w3-button w3-block w3-black">SHAME</a>
                </div>
                <div class="w3-col s3">
                    <a href="#add_update_offender" class="w3-button w3-block w3-black">ADD TO OFFENSES/OFFENDERS</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;