import Reac, { useState } from "react";
import "./CardCarousel.css";

export default function CardCarousel() {

  const [curentDeg, setCurrentDeg] = useState(0);


  const handleClickNext = () => {
    setCurrentDeg( curentDeg + 60);
  };
  const handleClickPrev = () => {
    setCurrentDeg( curentDeg - 60);
  };

  return (
    <>
      <div className="container">
        <div className="carousel" style={{transform: `rotateY(${curentDeg}deg`}}>
          <div className="item a">A</div>
          <div className="item b">B</div>
          <div className="item c">C</div>
          <div className="item d">D</div>
          <div className="item e">E</div>
          <div className="item f">F</div>
        </div>
      </div>
      <div className="next" onClick={handleClickNext}>Next</div>
      <div className="prev" onClick={handleClickPrev}>Prev</div>      
    </>
  );
}