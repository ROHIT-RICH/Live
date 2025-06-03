import Home from "./Pages/Home/home";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Video from "./Pages/video/video";
import Profile from "./Pages/profile/profile";
import VideoUpload from "./Pages/videoUpload/videoUpload";
import SignUp from "./Pages/signup/signUp";

// Integrating Backend
// import axios from "axios";

function App() {
  // youtube humburger menu collaspe
  const [sideNav, setSideNav] = useState(true);

  function setSidenav(value) {
    setSideNav(value);
  }

  // useEffect for fetching from backend
  // useEffect(()=>{
  //   axios.get('http://localhost:4000/api/allVideos').then(res => console.log(res)).catch(err => console.log(err));
  // },[]);

  return (
    <>
      <Navbar setSideNav={setSidenav} sideNav={sideNav} /> {/**props */}
      <Routes>
        <Route path="/" element={<Home sideNav={sideNav} />} />
        <Route path="/watch/:id" element = {<Video/>}/>
        <Route path="/user/:id" element = {<Profile sideNav={sideNav}/>}/>
        <Route path="/:id/upload" element = {<VideoUpload/>}/>
        <Route path="/signup" element = {<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
