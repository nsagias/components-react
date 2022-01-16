import React from "react";
import "./CardCarousel.css";

export default function CardCarousel() {
  return (
    <>
      <div className="container">
        <div className="carousel">
          <div className="item a">A</div>
          <div className="item b">B</div>
          <div className="item c">C</div>
          <div className="item d">D</div>
          <div className="item e">E</div>
          <div className="item f">F</div>
        </div>
      </div>
      <div className="next">Next</div>
      <div className="prev">Prev</div>      
    </>
  );
}