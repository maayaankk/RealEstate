import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HouseContextProvider} from './context/HouseContext';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './Components/FindHome/LandingPage';
import {FindHome, SellProperty, ManageRentals, HomeLoans} from './utilities/LandingData'


ReactDOM.render(
    <BrowserRouter>
        <HouseContextProvider>
            <Switch>

                <Route path="/" exact>
                    <App />
                </Route>  

                <Route path="/Find-A-Home" exact>   
                    <LandingPage data={FindHome}/>
                </Route>

                <Route path="/Sell-A-Property" exact>   
                    <LandingPage data={SellProperty}/>
                </Route>
                <Route path="/Manage-Rentals" exact>   
                    <LandingPage data={ManageRentals}/>
                </Route>
                <Route path="/Home-Loans" exact>   
                    <LandingPage data={HomeLoans}/>
                </Route>

                <Route path="/">
                    <App />
                </Route>   

            </Switch>
        </HouseContextProvider>
    </BrowserRouter>
, document.getElementById('root'));
