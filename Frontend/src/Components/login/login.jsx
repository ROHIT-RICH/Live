import React, { useState } from "react";
import "./login.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ setLoginModal }) {
  const [loginField, setLoginField] = useState({ userName: "", password: "" });

  function handleOnchangeInput(e, name) {
    setLoginField({
      ...loginField,
      [name]: e.target.value,
    });
  }

  async function handleLogin() {
    axios.post(`http://localhost:4000/auth/logIn`,loginField,{withCredentials:true}).then(res=>{
        // console.log(res);
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("userId",res.data.user._id)
        localStorage.setItem("userProfilePic", res.data.user.profilePic)
        window.location.reload();
    }).catch(err=>{
        // console.log(err);
        toast.error("Invalid Username or Password");
    })
  }

  return (
    <div className="login">
      <div className="loginCard">
        <div className="loginTitlecard">
          <YouTubeIcon sx={{ fontSize: "54px" }} className="loginYoutubeImg" />
          Login
        </div>

        <div className="loginDetail">
          <div className="loginUserName">
            <input
              type="text"
              className="userNameInput"
              value={loginField.userName}
              onChange={(e) => handleOnchangeInput(e, "userName")}
              placeholder="UserName"
            />
          </div>
          <div className="loginUserName">
            <input
              type="password"
              className="userNameInput"
              value={loginField.password}
              onChange={(e) => handleOnchangeInput(e, "password")}
              placeholder="Password"
            />
          </div>
        </div>

        <div className="loginButtons">
          <div className="loginBtn" onClick={handleLogin}>
            Login
          </div>
          <Link
            to={"/signup"}
            className="loginBtn"
            onClick={() => setLoginModal()}
          >
            SignUp
          </Link>
          <div className="loginBtn" onClick={() => setLoginModal()}>
            Cancel
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Login;
