import React from 'react';

const OffenderCard = (props) => {
    const {offender} = props
    return (
        <div className="w3-col s6 w3-center">
            <h5>{offender.display_name} - <a href={`https://twitter.com/${offender.username}`}>@{offender.username}</a></h5>
            <button onClick={() => {props.handleDeleteOffender(props.offender.id)}}>Remove from Offenders</button>
        </div>
    );
};

export default OffenderCard;