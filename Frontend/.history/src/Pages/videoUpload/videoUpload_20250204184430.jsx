import React from "react";
import "./videoUpload.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

function VideoUpload(){

    const[u]


    return(
        <div className="videoUpload">
            <div className="uploadBox">
                <div className="uploadTitle">
                    <YouTubeIcon sx={{ fontSize: "54px", color:"red"}}/>
                    Upload Video
                </div>

                <div className="uploadForm">
                    <input type="text" className="uploadFormInputs" placeholder="Title of video" />
                    <input type="text" className="uploadFormInputs" placeholder="Description" />
                    <input type="text" className="uploadFormInputs" placeholder="Category" />
                    <div className="file">Thumbnail &nbsp; <input type="file" accept="image/*" /></div>
                    <div className="file">Video &nbsp; <input type="file" accept="video/mp4, video/webm, video/*" /></div>

                </div>

                <div className="uploadButton">
                    <div className="uploadAction">Submit</div>
                    <Link to={'/'} className="uploadAction">Home</Link>
                </div>


            </div>
        </div>
    )
}

export default VideoUpload;