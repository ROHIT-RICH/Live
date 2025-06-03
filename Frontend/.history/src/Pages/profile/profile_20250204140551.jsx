import React from "react";
import "./profile.css";
import SideNav from "../../Components/SideNav/sideNav";

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

                div.


            </div>
        </div>
    )
}

export default Profile;