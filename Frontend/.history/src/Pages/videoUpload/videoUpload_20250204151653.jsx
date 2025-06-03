import React from "react";
import "./videoUpload.css";
import YouTubeIcon from "@mui/icons-material/YouTube";

function VideoUpload(){
    return(
        <div className="videoUpload">
            <div className="uploadBox">
                <div className="uploadTitle">
                    <YouTubeIcon sx={{ fontSize: "54px", color:"red"}}/>
                    Upload
                </div>
            </div>
        </div>
    )
}

export default VideoUpload;