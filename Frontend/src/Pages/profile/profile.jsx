import React, { useEffect, useState } from "react";
import "./profile.css";
import SideNav from "../../Components/SideNav/sideNav";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Profile({sideNav}){

    const[data,setData] = useState([]);
    const[user, setUser] = useState(null);
    const{id} = useParams();

    async function fetchProfileData() {
        axios.get(`http://localhost:4000/api/${id}/channel`).then(res=>{
            // console.log(res);
            setData(res.data.video);

            setUser(res.data.video[0]?.user);
        }).catch((err) => console.log(err));
    }

    useEffect(()=>{
        fetchProfileData();
    },[]);


    return(
        <div className="profile">
            <SideNav sideNav = {sideNav}/>

            <div className={sideNav ? "profilePage" : "profilePageFull"}>

                <div className="profileTopsection">
                    <div className="profileTopsection-profile">
                        <img src={user?.profilePic} alt="" className="profileTopsectionImg" />
                    </div>

                    <div className="profileTOpsection-About">
                        <div className="profileTopsection-AboutNmae">{user?.channelName}</div>
                        <div className="profileTopsection-AboutInfo">
                            {user?.userName}  . {data?.length} videos
                        </div>
                        <div className="profileTopsection-AboutInfo">
                            {user?.about}
                        </div>
                    </div>
                </div>

                <div className="profileVideos">
                    <div className="profileVideoTitle">Videos  <ArrowRightIcon sx={{fontSize: "34px"}}/></div>

                    <div className="profileVideosShow">
                        {/* div for video list */}
                        {
                            data.map((item, index)=>{
                                return(
                                    <Link to={`/watch/${item._id}`} key={index} className="profileVideo-block">
                                    <div className="profilVideo-blockThumbnail">
                                        <img src= {item.thumbnail} alt="" className="profileVideo-blockThumbnailImg" />
                                    </div>
        
                                    <div className="profileVideo-blockDetail">
                                        <div className="profileVideo-blockDetail-name">{item?.title}</div>
                                        <div className="profileVideo-blockDetail-about">{item?.createdAt.slice(0,10)}</div>
                                    </div>
                                </Link>
                                )
                            })
                        }
                       

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Profile;