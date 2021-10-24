import React, {useContext} from 'react';

import { FaToilet } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { HouseContext } from '../context/HouseContext';


const HouseListing = ({ x, elem }) => {
    const {houses,dispatch} = useContext(HouseContext)
    let houseData = houses.Homes[elem]
    const MoreInfo = () => {
        dispatch({type:'HOUSE_INFO', dash: false, Item: elem})
    }
    return ( 
        <div onClick = {() => MoreInfo()} className = "DashBoardItems">
                <div className = "DashBoardImg">
                    <img src = {houseData.images[0]} name={elem} alt = {houseData.street}/>
                    <li>${houseData.zestimate ? houseData.zestimate : houseData.rentzestimate}</li>
                    <div/>
                </div>
                <div className = "DashBoardMainData">
                    <li> {houseData.street}</li>
                    <li>{houseData.city}, {houseData.state}</li>
                </div>
            <div style = {underline}/>
            <div className = "DashBoardIcons">
                <li style={{paddingLeft: 0}}><FaBed style = {Icons}/> {houseData.bedrooms}</li>
                <li><FaToilet style = {Icons}/> {houseData.bathrooms}</li>
                {houseData.finishedSqFt ?<li><FaExternalLinkSquareAlt style = {Icons}/>{houseData.finishedSqFt} ft<sup>2</sup></li> : null}
            </div>
        </div>
     );
}
const Icons = {
    style: { verticalAlign: 'middle' },
    padding: '0 0.2em 0 0.2em',
}
const underline = {
    borderBottom: '2px solid #DEE1E1',
    width: '87%',
    marginLeft: '4%',
}
export default HouseListing;