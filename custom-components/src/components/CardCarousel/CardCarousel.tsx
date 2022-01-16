import Reac, { useState } from "react";
import "./CardCarousel.css";

export default function CardCarousel() {

  const [curentDeg, setCurrentDeg] = useState(0);


  const handleClickNext = () => {
    setCurrentDeg( curentDeg - 60);
   // "transform": "rotateY("+currdeg+"deg)";
  };
  const handleClickPrev = () => {
    setCurrentDeg( curentDeg + 60);
    //"transform": "rotateY("+currdeg+"deg)";
  };


 let carousel = (".carousel")
 

// $(".next").on("click", { d: "n" }, rotate);
// $(".prev").on("click", { d: "p" }, rotate);

//  function rotate () {

//   if(event.data.d=="n"){

//     currdeg = currdeg - 60;
//   }
//   if(event.data.d=="p"){
//     currdeg = currdeg + 60;
//   }
//   carousel.css({
//     "transform": "rotateY("+currdeg+"deg)"
//   });
// }

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