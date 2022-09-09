import { BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useNavigate,
    useLocation} from 'react-router-dom'; 
import React from 'react';




function Login(props){
    let [email, setEmail] = React.useState("")
    let [password, setPassword] = React.useState("")

    function LoginButton(props) {

        let navigate = useNavigate(); //gives us a navigation object. useNavigate is made for FUNCTIONAL COMPONENTS
        
        function handleButton(event){
            console.log(props.email)
            console.log(props.password)
            navigate("/loggedin", {state: {loginName: props.email}}); // sends us to / which is home
        }
        return(
            <button className="btn btn-primary" onClick = {handleButton}>Push</button>
        ); 
    }

    return(
        <div id="content" className="flex">
            <div>
                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header"><strong>Login to MovieHolder</strong></div>
                                <div className="card-body">
                                    
                                    <div className="form-group">
                                        <label className="text-muted" htmlFor="inputEmail">Email address</label>
                                        <input type="text" className="form-control" id="inputEmail" aria-describedby="emailHelp" 
                                            placeholder="Enter email" onChange={(e)=> {setEmail(e.target.value)}}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="text-muted" htmlFor="inputPassword">Password</label>
                                        <input type="password" className="form-control" id="inputPassword" 
                                            placeholder="Password" onChange={(e)=> {setPassword(e.target.value)}}/> 
                                    </div>

                                    <LoginButton email = {email} password = {password}></LoginButton>
                                    
                                    
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login