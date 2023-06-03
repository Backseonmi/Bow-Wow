import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {faPaw } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';
import './App.css'
import Abandoned from './abandoned/Abandoned';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginPage from './components/views/LoginPage/LoginPage';
import LandingPage from './components/views/LandingPage/LandingPage.js';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import Home from './home/Home';

const App = () => {

    return (
        <div>
            
            <Route exact path="/" component={Auth(LandingPage,null,false)}/>
            <Route exact path="/home" component={Auth(Home,null,false)}/>
            <Route exact path="/Landing" component={Auth(LandingPage,null,true)}/>
            <Route exact path="/login" component={Auth(LoginPage, false)}/>
            <Route exact path="/register" component={Auth(RegisterPage,false)}/>            
            <Route exact path="/abandoned" component={Abandoned}/>
            
        </div>
        
    )
}

export default App;
