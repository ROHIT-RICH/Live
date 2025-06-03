import React from "react";
import "./home.css";
import SideNav from "../../Components/SideNav/sideNav";
import HomePage from "../../Components/HomePage/homePage";

function Home({sideNav}){
    return(
        <div className="home">
            <SideNav sideNav = {}side/>
            <HomePage/>
        </div>
    )
}

export default Home;