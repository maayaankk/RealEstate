import React, {useContext} from 'react';
import NavBar from './Components/NavBar';
import SearchBars from './Components/SearchBars';
import GMap from './Components/GMap';
import {HouseContext} from './context/HouseContext';
import DashBoard from './Components/DashBoard';
import HouseInfo from './Components/HouseInfo';

function App() {

  const {houses} = useContext(HouseContext);

  return (
      <div className ="MainWrapper" >
        <NavBar />        
        <SearchBars />
        <GMap />
        {houses.Display.DashBoard ? <DashBoard /> : <HouseInfo input={houses.Display.item} />}
      </div>
  );
}
export default App;
