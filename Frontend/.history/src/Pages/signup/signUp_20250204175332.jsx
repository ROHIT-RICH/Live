import React from "react";
import "./signUp.css";
import YouTubeIcon from "@mui/icons-material/YouTube";

function SignUp() {
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
              className="userNameInput"
              placeholder="Channel Name"
            />
            <input
              type="text"
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
                div
            </div>
          </div>
        </div>

        <div className="signupButtons">
          <div className="signupBtn">signup</div>
          <div className="signupBtn" onClick={() => setsignupModal()}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
