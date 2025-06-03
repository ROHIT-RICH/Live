import React from "react";
import "./signUp.css";
import YouTubeIcon from "@mui/icons-material/YouTube";

function SignUp(){
    return(
        <div className="signup">
            <div className="signupCard">
                <div className="signupTitlecard">
                    <YouTubeIcon sx={{fontSize:"54px"}} className="signupYoutubeImg"/>
                    Signup
                </div>

                <div className="signupDetail">
                    <div className="signupUserName">
                    <input type="text" className="userNameInput" placeholder="Name" />
                        <input type="text" className="userNameInput" placeholder="UserName" />
                    </div>
                </div>

                <div className="signupButtons">
                    <div className="signupBtn">signup</div>
                    <div className="signupBtn" onClick={()=>setsignupModal()}>Cancel</div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;