import React, { Component } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import OffendersOffensesContainer from './OffendersOffensesContainer'
import ShameContainer from './ShameContainer'
import OffendersForm from './OffendersForm'
import OffensesForm from './OffensesForm'
import Footer from './Footer'

export default class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Header/>
                <div className="w3-sand w3-grayscale w3-large">
                    <About/>
                    <OffendersOffensesContainer/>
                    <ShameContainer/>
                    <OffendersForm/>
                    <OffensesForm/>
                </div>
                <Footer/>
            </>
        )
    }
}
