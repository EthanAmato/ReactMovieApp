import React from "react";


import { BrowserRouter as Router,
    Route,
    Routes,
    Link} from 'react-router-dom'; 


function Navbar(props) {
    return(
        <div className = "">
         <nav className = "navbar navbar-expand-sm navbar-dark bg-secondary">
            <a className = "navbar-brand" href = "#"><Link to="/" style={{color:"white"}}>MovieHolder</Link></a>
            <button className = "navbar-toggler" type = "button" data-toggle = "collapse" 
               data-target = "#navbarSupportedContent" 
               aria-controls = "navbarSupportedContent" aria-expanded = "false" 
               aria-label = "Toggle navigation">
               
               <span className = "navbar-toggler-icon"></span>
            </button>
            
            <div className = "collapse navbar-collapse" id = "navbarSupportedContent">
               <ul className = "navbar-nav mr-auto">
                  <li className = "nav-item active">
                     <a className = "nav-link" href = "#"><Link to="/" style={{color:"white"}}>Home</Link> 
                        <span className = "sr-only">(current)</span>
                     </a>
                  </li>
                  <li className = "nav-item">
                     <a className = "nav-link" href = "#"><Link to="/about"  style={{color:"white"}}>About</Link></a>
                  </li>
                  <li className = "nav-item">
                     <a className = "nav-link" href = "#"><Link to="/login" style={{color:"white"}}>Login</Link></a>
                  </li>
               </ul>
               
            </div>
         </nav>
      </div>
      
    );
  }
{/* <div className="nav">
        <Link to="/">| Home | </Link>  
        <Link to="/about">| About | </Link>
        <Link to="/login">| Log in |</Link>
      </div> */}

export default Navbar