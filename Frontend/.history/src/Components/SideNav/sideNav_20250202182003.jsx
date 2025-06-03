import React from "react";
import "./sideNav.css";
import HomeIcon from '@mui/icons-material/Home';

function SideNav(){
    return(
        <div className="home-sidenav">
            <div className="home-sidenav-top">
                <div className={`home-sidenav-topOption`}>
                    <HomeIcon/>
                    <div className="home-sidenav-topOption-title"></div>
                </div>
            </div>
        </div>
    )
}

export default SideNav;