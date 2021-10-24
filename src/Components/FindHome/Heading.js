import React from 'react'
import { Link } from 'react-router-dom'

 const Heading = (props) => {

    const Header = props.data.data.Header;
    const Images = props.data.data.Images;
    const Background = {
        content: "",
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        background: Header[2],
        zIndex: '1',
    }
    return (
        <div className ="FindHome-Hero" style={{backgroundImage: `url(${Images[0]})`}}>
            <div className= "FindHome-Hero-Wrapper">
                <div className = "FindHome-Hero-Text">
                    <div>
                        <h1>{Header[0]}</h1>
                    </div>
                    <div>
                        <p>{Header[1]}</p>
                        <Link to ="/"><p>Seach For Homes</p></Link>
                    </div>
                </div>
            </div>
            <div style={Background}></div>
        </div>
    )
}

export default Heading