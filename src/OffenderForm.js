import React, { Component } from 'react'

export default class OffenderForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({name: e.target.value})
    }
    render() {
        return (
            <div className="w3-container" id="add_update_offender">
                <div className="w3-content" style={{maxWidth: "1200px"}}>
                    <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">CREATE OFFENDER</span></h5>
                    <form id="create_change_offender_form">
                        <p><input value={this.state.name} onChange={this.handleChange} className="w3-input w3-padding-16 w3-border" id="twitter_handle_input" type="text" placeholder="Twitter Handle" required name="Name"/></p>
                        <div id="off_opt_cont">{
                            this.props.offenses.map(offense => {
                                return (
                                    <div key={offense.id}>
                                        <input type="checkbox" id={offense.id}/>
                                        <label> {offense.name}</label><br/>
                                    </div>)})
                        }</div>
                        <p><button id="create_change_offender_btn" className="w3-button w3-black" type="submit">CREATE OFFENDER</button></p>
                    </form>
                <br/>
                </div>
            </div>
        )
    }
}
