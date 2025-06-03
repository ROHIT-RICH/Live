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
                    div.loginUser
                </div>
            </div>
        </div>
    )
}

export default Login;