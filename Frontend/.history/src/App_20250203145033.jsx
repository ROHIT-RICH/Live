import Home from './Pages/Home/home';
import './App.css';
import Navbar from "./Components/Navbar/navbar";
import { useState } from 'react';

function App() {

  const[sideNav , setSideNav] = useState
  

  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
