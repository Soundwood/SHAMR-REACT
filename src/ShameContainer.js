import React, { Component } from 'react'

export default class ShameContainer extends Component {
    render() {
        return (
            <div className="w3-container" id="shame" style={{paddingBottom: "32px"}}>
                <div className="w3-content" style={{maxWidth: "700px"}}>
                    <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">SHAME THOSE THAT ASSOCIATE</span></h5>
                    <p><span className="w3-tag">FYI!</span> Enter the twitter name of anyone to see who they have fraternized with and what evil offenses 
                        they are guilty of via association. SHAME THEM INTO COMPLIANCE!</p>
                    <p><input id="shame_input" className="w3-input w3-padding-16 w3-border" type="text" placeholder="Twitter Handle" required name="Name"/></p>
                    <p><button id="shame_button" className="w3-button w3-black" type="submit">SHAME!</button></p>
                </div>
                <div className="w3-content" id="shame_response_cont"></div>
            </div>
        )
    }
}
