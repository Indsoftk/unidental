import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Why from "../pages/why"
import Contact from "../pages/contact";
import Nav from "../pages/nav/nav";
import Footer from "../pages/footer/footer";
const Router = () => {
    return(
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/why" element={<Why/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}


export default Router