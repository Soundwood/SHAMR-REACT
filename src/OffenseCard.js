import React from 'react';

const OffenseCard = (props) => {
    const {offense} = props
    return (
        <div className="w3-col s6 w3-center">
            <h5>{offense.name}</h5>
            <button onClick={() => {props.handleDeleteOffense(offense.id)}}>Remove from Offenses</button>
        </div>
    );
};

export default OffenseCard;