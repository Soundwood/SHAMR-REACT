import React, { Component } from 'react'

export default class OffensesForm extends Component {
    render() {
        return (
            <div className="w3-container" id="add_to_offenses">
                <div className="w3-content" style={{maxWidth: "1200px"}}>
                    <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">CREATE NEW OFFENSE</span></h5>
                        <p><input id="offense_input" className="w3-input w3-padding-16 w3-border" type="text" placeholder="Description of Offense" required name="offense_name"/></p>
                        <p><button id="create_new_offense" className="w3-button w3-black" type="submit">CREATE NEW OFFENSE</button></p>
                <br/>  
                </div>
            </div>
        )
    }
}
