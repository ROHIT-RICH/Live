import React, { useState } from "react";
import "./login.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

function Login({setLoginModal}){

    const loginField = useState({"userName":"","password":""});


    return(
        <div className="login">
            <div className="loginCard">
                <div className="loginTitlecard">
                    <YouTubeIcon sx={{fontSize:"54px"}} className="loginYoutubeImg"/>
                    Login
                </div>

                <div className="loginDetail">
                    <div className="loginUserName">
                        <input type="text" className="userNameInput" value={logi} placeholder="UserName" />
                    </div>
                    <div className="loginUserName">
                        <input type="password" className="userNameInput" placeholder="Password" />
                    </div>
                </div>

                <div className="loginButtons">
                    <div className="loginBtn">Login</div>
                    <Link to={'/signup'} className="loginBtn" onClick={()=>setLoginModal()}>SignUp</Link>
                    <div className="loginBtn" onClick={()=>setLoginModal()}>Cancel</div>
                </div>
            </div>
        </div>
    )
}

export default Login;