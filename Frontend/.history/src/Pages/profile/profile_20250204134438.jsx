import React from "react";
import "./profile.css";
import SideNav from "../../Components/SideNav/sideNav";

function Profile({sideNav}){
    return(
        <div className="profile">
            <SideNav sideNav = {sideNav}/>

            <div className="profilePage">
                <div className="profileTopsection">
                    div.profileTopsection
                </div>
            </div>
        </div>
    )
}

export default Profile;