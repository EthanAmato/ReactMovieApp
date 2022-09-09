import React from "react";
import { BrowserRouter as Router,
    Route,
    Routes,
    Link} from 'react-router-dom'; 


function About(props){
    return(
        <div className="container-fluid">
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <h2 style={{textAlign:"center"}}>About us</h2>
                    <p style={{textAlign:"center", fontSize:"20px"}}>
                        We are a company that deeply values watching movies and that's why we delete all your entries
                        whenever you change pages so that you get to put them back in and relive all the memories 
                    </p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/9/93/Jurassic_Park_%28franchise_logo%29.png"/>
                </div>
            </div>
        </div>
    );
}

export default About