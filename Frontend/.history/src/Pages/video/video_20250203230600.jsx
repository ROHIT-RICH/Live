import React from "react";
import "./video.css"

function Video(){
    return(
        <div className="video">
            <div className="videopost-Section">
                <div className="video-youtube">
                    <video width= "400" controls autoPlay className="video-list">
                        <source src="https://www.youtube.com/f212327e-83b7-47ba-9640-baba73be7959" type="video/mp4" />
                        <source src="https://i.ytimg.com/vi/x9jUO8fwqeM/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDHWAQRZte5IztFwI96CY3pLjtrKA" type="video/webm"/>
                    </video>
                </div>

                <div className="video-about">
                    <div className="video-title">JavaScript for Bignners</div>
                    <div className="videoProfile-left">
                        <div className="videoProfileI-leftmg">
                            <img src="" alt="" className="videoProfile-Img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="videoSuggestions">
                fvhjknsmlc
            </div>
        </div>
    )
}

export default Video;