import React from "react";
import "./sideNav.css";
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';

function SideNav(){
    return(
        <div className="home-sidenav">
            <div className="home-sidenav-top">
                <div className={`home-sidenav-topOption`}>
                    <HomeIcon/>
                    <div className="home-sidenav-topOption-title">Home</div>
                </div>

                <div className={`home-sidenav-topOption`}>
                    <VideocamIcon/>
                    <div className="home-sidenav-topOption-title">Home</div>
                </div>
            </div>
        </div>
    )
}

export default SideNav;