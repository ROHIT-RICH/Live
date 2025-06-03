import React, { useState } from "react";
import "./signUp.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

function SignUp() {

    const[signUpField, setSignUpField] = useState({"channelName":"" , "userName":"", "password":"", "about":"", "profilePic":""})

  return (
    <div className="signup">
      <div className="signupCard">
        <div className="signupTitlecard">
          <YouTubeIcon sx={{ fontSize: "54px" }} className="signupYoutubeImg" />
          Signup
        </div>

        <div className="signupDetail">
          <div className="signupUserName">
            <input
              type="text"
              value={signUpField.channelName}
              className="userNameInput"
              placeholder="Channel Name"
            />
            <input
              type="text"
              value={signUpField.userName}
              className="userNameInput"
              placeholder="User Name"
            />
            <input
              type="password"
              className="userNameInput"
              placeholder="Password"
            />
            <input
              type="text"
              className="userNameInput"
              placeholder="About Your Channel"
            />

            <div className="imageUpload">
                <input type="file"  />
                <div className="imageUploaded">
                    <img src={"https://png.pngtree.com/png-vector/20220624/ourmid/pngtree-unknown-user-question-mark-about-png-image_5178068.png"} alt="" className="signupImg" />
                </div>
            </div>
          </div>
        </div>

        <div className="signupButtons">
          <div className="signupBtn">Signup</div>
          <Link to={'/'} className="signupBtn">
            HomePage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
