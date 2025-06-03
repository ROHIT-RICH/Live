import React from "react";
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';

function navbar(){
    return (
        <div className="navbar">
            <div className="nav-left">
                <div className="hamburger">
                    <MenuIcon/>
                </div>
                <div className="nav-youtubeIcon">
                    <YouTubeIcon sx={{fontSize: "34px"}} className="navabar-youtubeImg"/>
                    <div className="navbar-youtubeTitle">YouTube</div>
                </div>
            </div>
        </div>
    )
}

export default navbar;