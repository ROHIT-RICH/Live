import React from "react";
import "./navbar.css";
// Icons Imports 
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

function navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="hamburger">
          <MenuIcon />
        </div>
        <div className="nav-youtubeIconBox">
          <YouTubeIcon
            sx={{ fontSize: "34px" }}
            className="navabar-youtubeIcon"
          />
          <div className="navbar-youtubeTitle">YouTube</div>
        </div>
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
          <MicIcon sx={{color: "white"}} />
        </div>
      </div>

      <div className="nav-right">
        <VideoCallIcon sx={{fontSize: "30px", cursor: "pointer", color: "white"}}/>
        <NotificationsIcon sx={}/>
      </div>
    </div>
  );
}

export default navbar;
