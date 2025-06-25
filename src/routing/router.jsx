import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Why from "../pages/why"
import Contact from "../pages/contact";
import Nav from "../pages/nav/nav";
import Footer from "../pages/footer/footer";
import DentalImplants from "../pages/subPages/dentalImplants";
import CosmeticDentistry from "../pages/subPages/cosmeticDentistry";
const Router = () => {
    return(
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Implants" element={<DentalImplants/>} />
                <Route path="/Dentistry" element={<CosmeticDentistry/>} />
                <Route path="/why" element={<Why/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}


export default Router