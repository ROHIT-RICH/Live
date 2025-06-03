import Home from './Pages/Home/home';
import './App.css';
import Navbar from "./Components/Navbar/navbar";
import { useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
// youtube humburger menu collaspe
  const[sideNav , setSideNav] = useState(true);
  
  function setSidenav(value){
    setSideNav(value);
  }
  

  return (
    <>
    <Navbar setSideNav = {setSidenav}  sideNav = {sideNav}/> {/**props */}
    <Routes>
      
    </Routes>
    <Home sideNav = {sideNav}/>
    </>
  )
}

export default App
