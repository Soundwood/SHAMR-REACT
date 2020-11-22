import React, { Component } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import OffendersOffensesContainer from './OffendersOffensesContainer'
import ShameContainer from './ShameContainer'
import OffendersForm from './OffendersForm'
import OffensesForm from './OffensesForm'
import Footer from './Footer'
import * as Constants from './Constants'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            offenders: [],
            offenses: []
        }
    }
    componentDidMount() {
        this.getOffenders()
        this.getOffenses()
    }
    getOffenses = () => {
        fetch(Constants.OFFENSES_URL)
        .then(res => res.json())
        .then(json => {
            this.setState({offenses: json})
            })
    }
    getOffenders = () => {
        fetch(Constants.OFFENDERS_URL)
        .then(res => res.json())
        .then(json => {
            this.setState({offenders: json})
            })
    }
    handleDeleteOffender = (offenderId) => {
        fetch(`${Constants.OFFENDERS_URL}/${offenderId}`, {
            method: "DELETE",})
        .then(() => {
            this.setState({offenders: this.state.offenders.filter(offender => offender.id !== offenderId)})
        });
    }
    handleDeleteOffense = (offenseId) => {
        fetch(`${Constants.OFFENSES_URL}/${offenseId}`, {
            method: "DELETE",})
        .then(() => {
            this.setState({offenses: this.state.offenses.filter(offense => offense.id !== offenseId)})
        });
    }


    render() {
        return (
            <>
                <Navbar/>
                <Header/>
                <div className="w3-sand w3-grayscale w3-large">
                    <About/>
                    <OffendersOffensesContainer offenses={this.state.offenses} offenders={this.state.offenders} 
                        handleDeleteOffender={this.handleDeleteOffender}
                        handleDeleteOffense={this.handleDeleteOffense}/>
                    <ShameContainer/>
                    <OffendersForm/>
                    <OffensesForm/>
                </div>
                <Footer/>
            </>
        )
    }
}
