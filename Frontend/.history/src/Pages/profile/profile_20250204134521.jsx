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
                        <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg" alt="" className="profileTopsectionImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;