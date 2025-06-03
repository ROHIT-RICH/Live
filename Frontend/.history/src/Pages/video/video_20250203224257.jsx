import React from "react";
import "./video.css";

function Video(){
    return(
        <div className="video">
            <div className="videopostSection">
                <div className="video-youtube">
                    <video width= "400" controls autoPlay className="video-list">
                        <source />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Video;