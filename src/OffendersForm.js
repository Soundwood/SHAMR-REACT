import React, { Component } from 'react'

export default class OffendersForm extends Component {
    render() {
        return (
            <div className="w3-container" id="add_update_offender">
                <div className="w3-content" style={{maxWidth: "1200px"}}>
                    <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">CREATE OFFENDER</span></h5>
                    <form id="create_change_offender_form" action="http://localhost:3000/twitter_profiles" method="POST">
                        <p><input className="w3-input w3-padding-16 w3-border" id="twitter_handle_input" type="text" placeholder="Twitter Handle" required name="Name"/></p>
                        <p id="off_opt_cont"></p>
                        <p><button id="create_change_offender_btn" className="w3-button w3-black" type="submit">CREATE OFFENDER</button></p>
                    </form>
                <br/>
                </div>
            </div>
        )
    }
}
