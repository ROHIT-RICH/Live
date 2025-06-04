import React, { useEffect } from "react";
import { useState } from "react";
import "./navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
// Icons Imports
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Login from "../login/login";
import axios from "axios";

function navbar({ setSideNav, sideNav }) {
  // default display pic changes dynamically
  const [userPic, setUserPic] = useState(
    "https://t4.ftcdn.net/jpg/07/88/67/21/360_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg"
  );

  const [isLogedIn, setIsLogedIn] = useState(false);
  // login menu
  const [navModel, setNavModel] = useState(false);

  function handleClickModel() {
    setNavModel((prev) => !prev);
  }

  // side menu using call back function to pass props from child to parent
  function sidenav() {
    setSideNav(!sideNav);
  }

  const navigate = useNavigate();

  function handleProfile() {
    let userId = localStorage.getItem("userId");
    navigate(`/user/${userId}`);
    setNavModel(false);
  }

  const [login, setLogin] = useState(false);

  function setLoginModal() {
    setLogin(false);
  }

  function onclickofPopup(button) {
    setNavModel(false);
    if (button === "login") {
      setLogin(true);
    } else {
      localStorage.clear();
      getLogOut();
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);
    }
  }

  async function getLogOut() {
    axios
      .post(
        `https://live-lp4l.onrender.com/auth/logout`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        console.log("LogOut");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    let userProfilePic = localStorage.getItem("userProfilePic");
    setIsLogedIn(localStorage.getItem("userId") !== null ? true : false);
    if (userProfilePic !== null) {
      setUserPic(userProfilePic);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="hamburger" onClick={sidenav}>
          <MenuIcon />
        </div>
        <Link to={"/"} className="nav-youtubeIconBox">
          <YouTubeIcon
            sx={{ fontSize: "34px" }}
            className="navabar-youtubeIcon"
          />
          <div className="navbar-youtubeTitle">YouTube</div>
        </Link>
      </div>

      <div className="nav-middle">
        <div className="nav-searchbox">
          <input
            type="text"
            placeholder="Search Here"
            className="nav-searchInput"
          />
          <div className="nav-searchIconBox">
            <SearchIcon sx={{ fontSize: "28px", color: "white" }} />
          </div>
        </div>
        <div className="nav-mic">
          <MicIcon sx={{ color: "white" }} />
        </div>
      </div>

      <div className="nav-right">
        {isLogedIn && (
          <Link to={"/1/upload"}>
            <VideoCallIcon
              sx={{ fontSize: "30px", cursor: "pointer", color: "white" }}
            />
          </Link>
        )}

        <NotificationsIcon
          sx={{ fontSize: "30px", cursor: "pointer", color: "white" }}
        />
        <img
          onClick={handleClickModel}
          className="nav-rightlogo"
          src={userPic}
          alt="logo"
        />

        {navModel && (
          <div className="nav-profile-model">
            {isLogedIn && (
              <div className="nav-profile" onClick={handleProfile}>
                Profile
              </div>
            )}
            {isLogedIn && (
              <div
                className="nav-profile"
                onClick={() => onclickofPopup("logout")}
              >
                Logout
              </div>
            )}
            {!isLogedIn && (
              <div
                className="nav-profile"
                onClick={() => onclickofPopup("login")}
              >
                Login
              </div>
            )}
          </div>
        )}
      </div>

      {login && <Login setLoginModal={setLoginModal} />}
    </div>
  );
}

export default navbar;
