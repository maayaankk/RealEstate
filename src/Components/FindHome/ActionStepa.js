import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";

const ActionSteps = (props) => {
    const ActionSteps = props.data.data.ActionStep;
    const Images = props.data.data.Images;
    return (
        <div className="ActionSteps-Wrapper">
            <div>
                <div>
                    <img src = {Images[2]} alt ="HouseImg"/>
                    <div><p>1</p></div>
                </div>
                <div>
                    <h1>{ActionSteps[0]}</h1>
                    <p>{ActionSteps[1]}</p>
                </div>
            </div>
            <div>
                <div>
                    <img src = {Images[3]} alt ="HouseImg1"/>
                    <div><p>2</p></div>
                </div>
                <div>
                    <h1>{ActionSteps[2]}</h1>
                    <p>{ActionSteps[3]}</p>
                </div>
            </div>
            <div>
                <div>
                    <img src = {Images[4]} alt ="HouseImg2"/>
                    <div><p>3</p></div>
                </div>
                <div>
                    <h1>{ActionSteps[4]}</h1>
                    <p>{ActionSteps[5]}</p>
                </div>
            </div>
        </div>
    )
}

export default ActionSteps
