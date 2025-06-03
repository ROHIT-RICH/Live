import React from "react";
import "./signUp.css";

function SignUp(){
    return(
        <div className="signup">
            <div className="signupCard">
                <div className="signupTitlecard">
                    <YouTubeIcon sx={{fontSize:"54px"}} className="signupYoutubeImg"/>
                    signup
                </div>

                <div className="signupDetail">
                    <div className="signupUserName">
                        <input type="text" className="userNameInput" placeholder="UserName" />
                    </div>
                    <div className="signupUserName">
                        <input type="password" className="userNameInput" placeholder="Password" />
                    </div>
                </div>

                <div className="signupButtons">
                    <div className="signupBtn">signup</div>
                    <Link to={'/signup'} className="signupBtn" onClick={()=>setsignupModal()}>SignUp</Link>
                    <div className="signupBtn" onClick={()=>setsignupModal()}>Cancel</div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;