import React from "react";
import "./sideNav.css";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import NotStartedOutlinedIcon from "@mui/icons-material/NotStartedOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";

function SideNav({side}) {
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
          <RecentActorsIcon />
          <div className="home-sidenav-topOption-title">Your Channel</div>
        </div>

        <div className={`home-sidenav-topOption`}>
          <HistoryIcon />
          <div className="home-sidenav-topOption-title">History</div>
        </div>

        <div className={`home-sidenav-topOption`}>
          <PlaylistPlayIcon />
          <div className="home-sidenav-topOption-title">Playlists</div>
        </div>

        <div className={`home-sidenav-topOption`}>
          <NotStartedOutlinedIcon />
          <div className="home-sidenav-topOption-title">Your Videos</div>
        </div>

        <div className={`home-sidenav-topOption`}>
          <WatchLaterOutlinedIcon />
          <div className="home-sidenav-topOption-title">Watch Later</div>
        </div>

        <div className={`home-sidenav-topOption`}>
          <ThumbUpOutlinedIcon />
          <div className="home-sidenav-topOption-title">Liked Videos</div>
        </div>

        <div className={`home-sidenav-topOption`}>
          <AutoAwesomeMotionOutlinedIcon />
          <div className="home-sidenav-topOption-title">Your Clips</div>
        </div>
      </div>

      <div className="home-sidenav-bottom">
        <div className="home-sidenav-topOption">
          <div className="home-sidenav-topOption-title-headear">
            Subscription
          </div>
        </div>

        <div className="home-sidenav-topOption">
          <img className="home-sidenav-Imglogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSShdDyUiXauovuZb90_6n-Ve9sLhqlIcxorg&s" alt="logo" />
          <div className="home-sidenav-topOption-title">Aaj Tak</div>
        </div>

        <div className="home-sidenav-topOption">
          <img className="home-sidenav-Imglogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCsGk8Hk8ObfsNGMZlhWHXFpQqpQmOCFXGUQ&s" alt="logo" />
          <div className="home-sidenav-topOption-title">DNA News</div>
        </div>

        <div className="home-sidenav-topOption">
          <img className="home-sidenav-Imglogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQpn0BWcniRi_eOvp7WDW73Uyn_E-mgZwrA&s" alt="logo" />
          <div className="home-sidenav-topOption-title">NDTV India</div>
        </div>

      </div>
    </div>
  );
}

export default SideNav;
