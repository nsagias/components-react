import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./MobileMenu.css"


export default function MobileMenu() {

  
  return (
    <>
    <div className="mobile-container">
    <div className="topnav">
      <a href="#home" className="active">Logo</a>
      <div id="myLinks">
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <a href="javascript:void(0);" className="icon" >
      <FontAwesomeIcon icon={faBars}/>
      </a>
    </div>
        <div className="container-content">
          <h3>Vertical Mobile Navbar</h3>
          <p>This example demonstrates how a navigation menu on a mobile/smart phone could look like.</p>
          <p>Click on the hamburger menu (three bars) in the top right corner, to toggle the menu.</p>
        </div>

     </div>

    </>
  );
}