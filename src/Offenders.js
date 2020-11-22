import React from 'react';
import OffenderCard from './OffenderCard'

const Offenders = (props) => {
    const {offenders} = props
    const OffenderCards = offenders.map(offender => <OffenderCard offender={offender} key={offender.id} handleDeleteOffender={props.handleDeleteOffender}/>)
    // {...offender} key={offender.id}
    return (
        <div id="Offenders" className="w3-container w3-padding-48 w3-card" style={{display: "block"}}>
            { OffenderCards }
        </div>
    );
};

export default Offenders;