import React from 'react'
import Heading from './Heading'
import NavBar from '../NavBar'
import MainText from './MainText'
import ActionSteps from './ActionStepa'
import Benefits from './Benefits'

const LandingPage = (data) => {
    return (
        <div className ="FindHomeWrapper">
            <NavBar />
            <Heading data = {data}/>
            <MainText data = {data}/>
            <ActionSteps data = {data}/>
            <Benefits data = {data}/>
        </div>
    )
}

export default LandingPage
