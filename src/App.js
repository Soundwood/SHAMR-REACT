import React, { Component } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import OffendersOffensesContainer from './OffendersOffensesContainer'
import ShameContainer from './ShameContainer'
import OffenderForm from './OffenderForm'
import OffenseForm from './OffenseForm'
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
            this.setState({offenses: json.map(offense => ({...offense, checked: false}))})
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
    handleOffenseSubmit = (description) => {
        fetch(`${Constants.OFFENSES_URL}`, {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
                    name: description,
                },),})
            .then(resp => resp.json())
            .then((json) => {
                let newOffenseArr = this.state.offenses
                newOffenseArr.push(json)
                this.setState({offenses: newOffenseArr})
            })
    }
    handleOffenderSubmit = (e, sanitizedTwitterUsername) => {
        e.preventDefault()
        let checkedOffensesArr = this.state.offenses.filter(offense => offense.checked === true)
        fetch(`${Constants.TWITTER_USER_INFO_URL}/${sanitizedTwitterUsername}`)
        .then(res => res.json())
        .then(json => {
            if (json.errors || json.error) {
                alert(json.error || json.errors)
            } else {
                this.handleCreateOffender(json.data, checkedOffensesArr)
                alert("Offender Successfully Created")
        }})
    }
    handleCreateOffender = (offender, offenses) => {
        fetch(`${Constants.OFFENDERS_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    username: offender.username,
                    user_id: offender.id,
                    display_name: offender.name,
                    offense_categories: offenses,})})
        .then((resp) => resp.json())
        .then((data) => {
            if (data.errors) {
                console.log(data.errors);
            } else {
                let newOffenderArr = this.state.offenders
                newOffenderArr.push(data)
                this.setState(newOffenderArr)
            }
        })
    }
    handleCheckboxCheck = (e, id) => {
        let offenses = [...this.state.offenses]
        let index = offenses.findIndex((offense) => offense.id === id)
        let offense = {...offenses[index]}
        offense.checked = !offense.checked
        offenses[index] = offense
        this.setState({offenses})
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
                    <OffenderForm offenses={this.state.offenses} handleCheckboxCheck={this.handleCheckboxCheck} handleOffenderSubmit={this.handleOffenderSubmit}/>
                    <OffenseForm handleOffenseSubmit={this.handleOffenseSubmit}/>
                </div>
                <Footer/>
            </>
        )
    }
}
