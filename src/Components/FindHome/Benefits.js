import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const Benefits = (props) => {
    
    const Benefits = props.data.data.Benefits;
    return (
        <div className="Benefits-Wrapper">  
            <p>{Benefits[0]}</p>
                <div >  
                    <div>
                        <div>
                            <h1>{Benefits[1]}</h1>
                        </div>
                        <div>
                            <div style ={symbolDiv}><FaChevronRight/></div>
                            <div>
                                <h1>{Benefits[2]}</h1>
                                <p>{Benefits[3]}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style ={symbolDiv}><FaChevronRight/></div>
                            <div>
                                <h1>{Benefits[4]}</h1>
                                <p>{Benefits[5]}</p>
                            </div>
                        </div>
                        <div>
                            <div style ={symbolDiv}><FaChevronRight/></div>
                            <div>
                                <h1>{Benefits[6]}</h1>
                                <p>{Benefits[7]}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
const symbolDiv = {
  display: 'flex',
  justifyContent: 'flex-start',
  width: '15%',
  height: '100%',
}

export default Benefits
