import React from 'react';

const ShameResponse = (props) => {
    return (
        <div className="w3-content" id="shame_response_cont">
            {props.intersection.length > 0 ? props.intersection : `Congrats! ${props.shamed} is free of shame. They are not associated with anoyone on the Offenders list`}
        </div>
    );
};

export default ShameResponse;
