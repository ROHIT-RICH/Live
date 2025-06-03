import React from "react";
import "./login.css";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Login(){
    return(
        <div className="login">
            <div className="loginCard">
                <div className="loginTitlecard">
                    <YouTubeIcon sx={{fontSize:"54px"}} className="loginYoutubeImg"/>
                    Login
                </div>

                <div className="loginDetail">
                    <div className="loginUserName">
                        <input type="text" className="userNameInput" placeholder="UserName" />
                    </div>
                    <div className="loginUserName">
                        <input type="password" className="userNameInput" placeholder="Password" />
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Login;