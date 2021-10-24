import React, { useState } from 'react'
import { FaTwitch, FaFileExcel } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

const UnitList = (props) => {
    const [IsHover, setHover] = useState(false)

        return (
            <div style={houseList} onMouseEnter={() => setHover(!IsHover)} onMouseLeave={() => setHover(!IsHover)}>
                    <ul style={divStyle}>
                        <li style={navPosition}><img style={houseImg}src={'https://photos.zillowstatic.com/p_e/ISbhrpeyhqaynd0000000000.jpg'} alt="boohoo"  /></li>
                        <li style={navPosition}>2292 Barnes Ave</li>
                        <li style={navPosition}>WilliamBrige Bronx</li>
                        <li style={navPosition}>400,500</li>
                    </ul>
                    <ul style={houseListBottom}> 
                            <li style={navPosition}>4</li>
                            <li><FaSearch size={15} color={'a2a9a9'}/></li>
                    </ul>

            </div>
        )
}
const divStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overFlow: 'hidden',
  };
  const houseList = {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'blue'
    };
    const houseListMain = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'blue'
        };
    const houseListBottom = {
        listStyleType: 'none',
        margin: 0,
        padding: 5,
        overFlow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'red',
        };
const navPosition = {
    //float: 'left',
    //backgroundColor: 'red'
    padding: '0px 7px'

}
const houseImg = {
    width: 180,
    height: 110
}
const IconImg = {
    size: 10,
}
const navText = {
  display: 'block',
  color: 'black',
  textAlign: 'start',
  padding: '4px 10px',
  textDecoration: 'none',
  fontSize: '0.8rem',
  height: '100%'
}
export default UnitList;