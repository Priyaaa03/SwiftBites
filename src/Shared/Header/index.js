import React from "react";
import ReactDOM from "react-dom/client";
import { BrandLogo } from "../../utils/MockData";   
import "./Header.scss";

const Header = () =>{

    return(
        <div className="header-container">
            <div className="logo">
                <img src={BrandLogo} alt="BrandLogo" className="logo-image"/> 
                <div className="logo-text"> Swift Bites </div> 

            </div>
            <div className="nav-list">
                <a href="#" className="nav-link"> Home </a>
                <a href="#" className="nav-link"> About </a>
                <a href="#" className="nav-link"> Cart </a>
            </div>
        </div>
    )
}

export default Header;