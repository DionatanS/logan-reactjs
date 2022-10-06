import React, { useState } from "react";  
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import './index.scss';
import TextField from "@material-ui/core/TextField";

export default function Login(){   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false)
    const navigate = useNavigate();

    function login(){
        console.log(password)
        console.log(email)
        if(password === "admin" &&  email === "admin"){
           navigate('/home')
        }else{
            setShowAlert(true);
        }
            
    }
    return(
        <div className="container">   
            <div className="wrap-login">

                <div className="title-section">
                    <h1>LOGAN</h1>
                    <div className="flag"></div>
                    <span>Admin</span>
                </div>

                <img src={Logo} alt="" />
                <div className="div-email">
                    <TextField type="email" id="standard" label="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                    <TextField type="password" id="standard" label="Password"  onChange={(e) => setPassword(e.target.value)}/>
                <span className="alert-login" style={{display: showAlert ? 'flex' : 'none'}}>Email ou Passowrd incorreto!</span>
                <button className="btn-login" onClick={login}>Login</button>

            </div>
        </div>
    )
}