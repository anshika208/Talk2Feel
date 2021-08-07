import React from "react";
import { GoogleOutlined } from '@ant-design/icons';                                                                                                                                                                                                                                                                                                                                                                  
import firebase from "firebase/app";
import {auth} from "../firebase";


const Login = () =>{
	return (
		<div id ="login-page">
             <div id = "login-card">
               <h2> Welcome to Talk2Feel!</h2>

               <div
                className = 'login-button google' onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                  <GoogleOutlined/> Sign IN With Google
               </div>
              </div>
        </div>

		);
}

export default Login;