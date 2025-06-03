import React from "react";
import "./signUp.css";
import YouTubeIcon from "@mui/icons-material/YouTube";

function SignUp(){
    return(
        <div className="signup">
            <div className="signupCard">
                <div className="signupTitlecard">
                    <YouTubeIcon sx={{fontSize:"54px"}} className="signupYoutubeImg"/>
                    signup
                </div>
            </div>
        </div>
    )
}

export default SignUp;