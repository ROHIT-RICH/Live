import React from "react";
import "./profile.css";
import SideNav from "../../Components/SideNav/sideNav";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Profile({sideNav}){
    return(
        <div className="profile">
            <SideNav sideNav = {sideNav}/>

            <div className="profilePage">

                <div className="profileTopsection">
                    <div className="profileTopsection-profile">
                        <img src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?cs=srgb&dl=pexels-kowalievska-1055691.jpg&fm=jpg" alt="" className="profileTopsectionImg" />
                    </div>

                    <div className="profileTOpsection-About">
                        <div className="profileTopsection-AboutNmae">User 1</div>
                        <div className="profileTopsection-AboutInfo">
                            @User1  . 4 videos
                        </div>
                        <div className="profileTopsection-AboutInfo">
                            About My Channel
                        </div>
                    </div>
                </div>

                <div className="profileVideos">
                    <div className="profileVideoTitle">Videos  <ArrowRightIcon sx={{fontSize: "34px"}}/></div>

                    <div className="profileVideosShow">
                        {/* div for video list */}
                        <div className="profileVideo-block">
                            <div className="profilVideo-blockThumbnail">
                                <img src="https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.jpg?s=612x612&w=0&k=20&c=UafU4a4xSbepJow4kvNu0q-LD4hFUoli7q3fvwkp79s=" alt="" className="profileVideo-blockThumbnailImg" />
                            </div>

                            <div className="profileVideo-blockDetail">
                                <div className="profileVideo-blockDetail-name">Video Title</div>
                                div.pro
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Profile;