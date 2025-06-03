import React from "react";
import "./sideNav.css";


function SideNav(){
    return(
        <div className="home-sidenav">
            <div className="home-sidenav-top">
                <div className={`home-sidenav-topOption`}>
                    <HomeIcon/>
                </div>
            </div>
        </div>
    )
}

export default SideNav;