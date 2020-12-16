import React from 'react';

const ShameResponse = (props) => {
    let response = ""
    if (props.intersection.length > 0) {
        response = `Out of ${props.totalFriends} friends - ${props.intersection}`
    } else {
        response = `Congrats! ${props.shamed} is free of shame. They are not associated with anyone on the Offenders list. They have ${props.totalFriends} friend/s`
    }
    return (
        <div className="w3-content" id="shame_response_cont">
            {response}
        </div>
    );
};

export default ShameResponse;
