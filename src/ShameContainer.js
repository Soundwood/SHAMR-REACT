import React, { Component } from 'react'
import ShameResponse from './ShameResponse'
import * as Constants from './Constants'

export default class ShameContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            shameAttempt: false,
            intersection: [],
            fetch_cursor: -1,
            friends_ids_list: [],
            offenders_ids: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({username: e.target.value})
    }
    handleSubmit() {
        const sanitizedUsername = this.sanitizeUsername(this.state.username)
        this.getFriendsFetch(sanitizedUsername)
    }
    sanitizeUsername(username) {
        if (username[0] === "@") {
            return username.substring(1)
        } else {
            return username}
    }
    getFriendsFetch(sanitizedUsername) {
        fetch(`${Constants.GET_TWITTER_FRIENDS_URL}/${sanitizedUsername}&cursor=${this.state.fetch_cursor}`)
            .then(res => res.json())
            .then(json => {
                if (json.next_cursor !== 0) {
                    this.setState({fetch_cursor: json.next_cursor})
                    json.users.forEach((user) => {
                        this.state.friends_ids_list.push(user.id)})
                    this.getFriendsFetch(sanitizedUsername)
                } else {
                    this.setState({shameAttempt: true})
                    json.users.forEach((user) => {
                        this.state.friends_ids_list.push(user.id)})
                    this.setState({intersection: this.state.offenders_ids.filter(element => this.state.friends_ids_list.includes(element))})
                }
            })
    }
    render() {
        return (
            <div className="w3-container" id="shame" style={{paddingBottom: "32px"}}>
                <div className="w3-content" style={{maxWidth: "700px"}}>
                    <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">SHAME THOSE THAT ASSOCIATE</span></h5>
                    <p><span className="w3-tag">FYI!</span> Enter the twitter name of anyone to see who they have fraternized with and what evil offenses 
                        they are guilty of via association. SHAME THEM INTO COMPLIANCE!</p>
                    <p><input value={this.state.username} onChange={this.handleChange} id="shame_input" className="w3-input w3-padding-16 w3-border" type="text" placeholder="Twitter Handle" required name="Name"/></p>
                    <p><button onClick={() => this.handleSubmit()} id="shame_button" className="w3-button w3-black" type="submit">SHAME!</button></p>
                </div>
                { this.state.shameAttempt ? <ShameResponse intersection={this.state.intersection}/> : null }
            </div>
        )
    }
}
