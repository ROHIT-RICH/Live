import React from "react";
import "./sideNav.css";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function SideNav() {
  return (
    <div className="home-sidenav">
      <div className="home-sidenav-top">
        <div className={`home-sidenav-topOption`}>
          <HomeIcon />
          <div className="home-sidenav-topOption-title">Home</div>
        </div>

        <div className={`home-sidenav-topOption`}>
          <VideocamIcon />
          <div className="home-sidenav-topOption-title">Shorts</div>
        </div>

        <div className={`home-sidenav-topOption`}>
          <SubscriptionsIcon />
          <div className="home-sidenav-topOption-title">Subscription</div>
        </div>
      </div>

      <div className="home-sidenav-middle">
        <div className={`home-sidenav-topOption`}>
          <div className="home-sidenav-topOption-title">You</div>
          <ChevronRightIcon />
        </div>

        <div className={`home-sidenav-topOption`}>
          <SubscriptionsIcon />
          <div className="home-sidenav-topOption-title">Your Channel</div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
