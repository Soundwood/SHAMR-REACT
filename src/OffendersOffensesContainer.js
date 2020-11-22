import React, { Component } from 'react'
import Offenders from './Offenders'
import Offenses from './Offenses'

export default class OffendersOffensesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showOffenders: true,
            showOffenses: false,
        }
        this.showOffenders = this.showOffenders.bind(this)
        this.showOffenses = this.showOffenses.bind(this)
    }
    showOffenders(e) {
        this.setState({
            showOffenders: true,
            showOffenses: false
        })
        e.target.className = "w3-col s6 tablink w3-dark-grey"
        let otherButton = document.getElementById("offense_button")
        otherButton.className = "w3-col s6 tablink"
    }
    showOffenses(e) {
        this.setState({
            showOffenders: false,
            showOffenses: true
        })
        e.target.className = "w3-col s6 tablink w3-dark-grey"
        let otherButton = document.getElementById("offender_button")
        otherButton.className = "w3-col s6 tablink"
    }
    render() {
        return (
            <div className="w3-container" id="offenders_offenses">
                <div className="w3-content" style={{maxWidth: "1200px"}}>
                    <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">OFFENDERS/OFFENSES</span></h5>
                    <div className="w3-row w3-center w3-card w3-padding">
                        <button onClick={this.showOffenders} id="offender_button" className="w3-col s6 tablink w3-dark-grey">Offenders</button>
                        <button onClick={this.showOffenses} id="offense_button" className="w3-col s6 tablink">Offenses</button>
                    </div>
                    {this.state.showOffenders === true ? <Offenders offenders={this.props.offenders} handleDeleteOffender={this.props.handleDeleteOffender}/> : null }
                    {this.state.showOffenses === true ? <Offenses offenses={this.props.offenses} handleDeleteOffense={this.props.handleDeleteOffense}/> : null }
                    <br/>
                </div>
          </div>
        )
    }
}
