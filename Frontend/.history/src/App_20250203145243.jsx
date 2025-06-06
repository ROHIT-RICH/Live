import Home from './Pages/Home/home';
import './App.css';
import Navbar from "./Components/Navbar/navbar";
import { useState } from 'react';

function App() {

  const[sideNav , setSideNav] = useState(true);
  
  const sidenav = (){
    setSideNav(value);
  }
  

  return (
    <>
    <Navbar sideNav = {sidenav}/>
    <Home/>
    </>
  )
}

export default App
