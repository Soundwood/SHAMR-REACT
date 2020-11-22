import React from 'react';
import OffenseCard from './OffenseCard'

const Offenses = (props) => {
    const {offenses} = props
    const OffenseCards = offenses.map(offense => <OffenseCard offense={offense} key={offense.id} handleDeleteOffense={props.handleDeleteOffense}/>)
    return (
        <div id="Offenses" className="w3-container w3-padding-48 w3-card" >
            { OffenseCards }
        </div>
    );
};

export default Offenses;