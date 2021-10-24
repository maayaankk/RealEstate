import React, { useContext } from 'react';
import { HouseContext } from '../context/HouseContext';
import HouseListing from '../Components/HouseListing';
import ReactLoading from 'react-loading';


const DashBoard = () => {
    const {houses} = useContext(HouseContext)
    let Home = houses.Homes[0] || ""
    let Loading = houses.Input.loading
    let Found = houses.Input.passed
    let CityL = houses.Input.city
    let StateL = houses.Input.sta
    let Result = Found ? "Results" : "No Results";
    return ( 
        <div className = "DashBoard">
            <h1>{Found ? <>{Result} <span>in {Home.city}, {Home.state}</span></> : <>{Result}<p> in {CityL}, {StateL}</p></>}</h1>
            
            {!Loading ? <div>
                {houses.Homes.map((x,i) => <HouseListing key={i} elem = {i}/>)}
            </div> : <ReactLoading id= "Loader" type={"bars"} color={"#0acc3c"} height={'26%'} width={'26%'} />}
        </div>
     );
}
export default DashBoard;