import React from "react";
import "./signUp.css";

function SignUp(){
    return(
        <div className="signup">
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

                <div className="loginButtons">
                    <div className="loginBtn">Login</div>
                    <Link to={'/signup'} className="loginBtn" onClick={()=>setLoginModal()}>SignUp</Link>
                    <div className="loginBtn" onClick={()=>setLoginModal()}>Cancel</div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;