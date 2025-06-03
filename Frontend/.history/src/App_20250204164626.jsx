import Home from "./Pages/Home/home";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Video from "./Pages/video/video";
import Profile from "./Pages/profile/profile";
import VideoUpload from "./Pages/videoUpload/videoUpload";

function App() {
  // youtube humburger menu collaspe
  const [sideNav, setSideNav] = useState(true);

  function setSidenav(value) {
    setSideNav(value);
  }

  return (
    <>
      <Navbar setSideNav={setSidenav} sideNav={sideNav} /> {/**props */}
      <Routes>
        <Route path="/" element={<Home sideNav={sideNav} />} />
        <Route path="/watch/:id" element = {<Video/>}/>
        <Route path="/user/:id" element = {<Profile sideNav={sideNav}/>}/>
        <Route path="/:id/upload" element = {<VideoUpload/>}/>
        <Route path="/signup" element/>
      </Routes>
    </>
  );
}

export default App;
