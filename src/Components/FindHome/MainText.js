import React from 'react'

const MainText = (props) => {
    const MainText = props.data.data.MainText;
    const Images = props.data.data.Images;
    return (
        <div className="MainText-Wrapper">
            <div>
                <h1>{MainText[0]}</h1>
            </div>
            <div>
                <div>
                    <h2>{MainText[1]}</h2>
                    <p>{MainText[2]} </p>
                    <p>{MainText[3]}</p>
                </div>
                <div>
                    <img src = {Images[1]} alt ="HouseImg"/>
                </div>
            </div>
        </div>
    )
}

export default MainText
