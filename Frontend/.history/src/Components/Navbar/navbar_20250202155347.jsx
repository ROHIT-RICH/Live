import React from "react";
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

function navbar(){
    return (
        <div className="navbar">
            <div className="nav-left">
                <div className="hamburger">
                    <MenuIcon/>
                </div>
            </div>
        </div>
    )
}

export default navbar;