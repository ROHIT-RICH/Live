import React from "react";
import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
// Icons Imports
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";


function navbar({setSideNav , sideNav}) {
 
  // default display pic changes dynamically
  const [userPic, setUserPic] = useState(
    "https://t4.ftcdn.net/jpg/07/88/67/21/360_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg"
  );
  
  // login menu
  const [navModel, setNavModel] = useState(false);

  function handleClickModel(){
    setNavModel(prev => !prev);
  }

  // side menu using call back function to pass props from child to parent
  function sidenav(){
    setSideNav(!sideNav)
  }

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="hamburger" onClick={sidenav}>
          <MenuIcon />
        </div>
        <Link to={'/'} className="nav-youtubeIconBox">
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
        <VideoCallIcon
          sx={{ fontSize: "30px", cursor: "pointer", color: "white" }}
        />
        <NotificationsIcon
          sx={{ fontSize: "30px", cursor: "pointer", color: "white" }}
        />
        <img onClick={handleClickModel} className="nav-rightlogo" src={userPic} alt="logo" />

        { navModel &&
          <div className="nav-profile-model">
            <Link className="nav-profile">Profile</Link>
            <div className="nav-profile">Logout</div>
            <div className="nav-profile">Login</div>
          </div>
        }
      </div>
    </div>
  );
}

export default navbar;
