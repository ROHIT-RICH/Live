import React from "react";
import "./video.css";

function Video(){
    return(
        <div className="video">
            <div className="videopostSection">
                <div className="video-youtube">
                    <video width= "400" controls autoPlay className="video-list">
                        <source src="https://i.ytimg.com/vi/x9jUO8fwqeM/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDHWAQRZte5IztFwI96CY3pLjtrKA" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Video;