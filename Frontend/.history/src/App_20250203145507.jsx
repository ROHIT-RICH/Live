import Home from './Pages/Home/home';
import './App.css';
import Navbar from "./Components/Navbar/navbar";
import { useState } from 'react';

function App() {
// youtube humburger mer
  const[sideNav , setSideNav] = useState(true);
  
  function sidenav(value){
    setSideNav(value);
  }
  

  return (
    <>
    <Navbar sideNav = {sidenav}/> {/**props */}
    <Home/>
    </>
  )
}

export default App
