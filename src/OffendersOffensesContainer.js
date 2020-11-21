import React, { Component } from 'react'

export default class OffendersOffensesContainer extends Component {
    render() {
        return (
            <div className="w3-container" id="offenders_offenses">
                <div className="w3-content" style={{maxWidth: "1200px"}}>
                    <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">OFFENDERS/OFFENSES</span></h5>
                    <div className="w3-row w3-center w3-card w3-padding">
                        <button onclick="showOffenders()" id="offender_button" className="w3-col s6 tablink w3-dark-grey">Offenders</button>
                        <button onclick="showOffenses()" id="offense_button" className="w3-col s6 tablink">Offenses</button>
                    </div>
                    <div id="Offenders" className="w3-container w3-padding-48 w3-card" style={{display: "block"}}></div>
                    <div id="Offenses" className="w3-container w3-padding-48 w3-card" style={{display: "none"}}></div>
                    <br/>
                </div>
          </div>
        )
    }
}
