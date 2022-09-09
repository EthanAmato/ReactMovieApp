 
import '../css/MovieHolder.css';
import Movie from "./Movie.js"
import React from 'react';
import Login from './Login'

import { BrowserRouter as Router,
    Route,
    Routes,
    useLocation} from 'react-router-dom'; 


function LoggedIn(props){
    const state = useLocation();
    console.log(state)
    let value = "Not Logged In"
    if (state) {
        value = "Welcome to the Site, " + state.state.loginName;
    }

    return(
        <h1>{value}</h1>
    )
}

export default LoggedIn