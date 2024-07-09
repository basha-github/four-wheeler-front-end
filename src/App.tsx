//import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
//import NavBar from "./components/NavBar";
import AddNewVehicle from "./components/AddNewVehicle";
import AllVehicles from "./components/AllVehicles";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <div>

      <BrowserRouter>
     
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route  path="/" element={<Login />}/>
        <Route path="/add" element={<AddNewVehicle />}/>
        <Route  path="/all" element={<AllVehicles />}/>
        <Route path="/contact" element={<ContactUs />}/>
      </Routes>
      
      </BrowserRouter>



    
    </div>
  )
}
