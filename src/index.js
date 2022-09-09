import React from 'react';
import ReactDOM from 'react-dom/client';
import MovieHolder from './components/MovieHolder';
import About from './components/About'
import Navbar from './components/Navbar';
import Login from './components/Login';
import LoggedIn from './components/LoggedIn';
import { BrowserRouter as Router,
         Route,
         Routes,
         useLocation} from 'react-router-dom'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes/>    
  </React.StrictMode>
);



function MyRoutes(props) {
  return (
  <Router>
        <div>
          <Navbar />
          <hr /> 
          <Routes>
            <Route name="Home" exact path="/" element={<MovieHolder/>}/>
            <Route name="About" path="/about" element={<About/>} />
            <Route name= "Login" path="/login" element={<Login/>}/>
            <Route name= "LoggedIn" path="/loggedin" element={<LoggedIn/>}/>
          </Routes>
        </div>
  </Router>
  );
}