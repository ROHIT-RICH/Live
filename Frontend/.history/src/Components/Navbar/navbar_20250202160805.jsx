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
                <div className="navIcon">
                    <YouTubeIcon className="na"/>
                </div>
            </div>
        </div>
    )
}

export default navbar;