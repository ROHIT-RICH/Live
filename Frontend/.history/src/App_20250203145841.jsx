import Home from './Pages/Home/home';
import './App.css';
import Navbar from "./Components/Navbar/navbar";
import { useState } from 'react';

function App() {
// youtube humburger menu collaspe
  const[sideNav , setSideNav] = useState(true);
  
  function setSidenav(value){
    setSideNav(value);
  }
  

  return (
    <>
    <Navbar setideNav = {setSidenav}  sideNav = {sideNav}/> {/**props */}
    <Home/>
    </>
  )
}

export default App
