import React, { useState } from "react";
import "./videoUpload.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import { Upload } from "@mui/icons-material";

function VideoUpload(){

    const[upLoad,setupLoad] = useState({
        "title":"",
        "description":"",
        "category":"",
        "image":"",
        "video":"",
    })

    function handleOnchange(){
        setupLoad({
            ...upLoad
        })
    }

    return(
        <div className="videoUpload">
            <div className="uploadBox">
                <div className="uploadTitle">
                    <YouTubeIcon sx={{ fontSize: "54px", color:"red"}}/>
                    Upload Video
                </div>

                <div className="uploadForm">
                    <input type="text" className="uploadFormInputs" onChange={(e)=>handleOnchange(e,"title")} placeholder="Title of video" />
                    <input type="text" className="uploadFormInputs" onChange={(e)=>handleOnchange(e,"description")} placeholder="Description" />
                    <input type="text" className="uploadFormInputs" onChange={(e)=>handleOnchange(e,"category")} placeholder="Category" />
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