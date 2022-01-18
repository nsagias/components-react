import React from "react";
import "./AutoText.css";

export default function AutoText() {

  const autoText = "Auto Text Effect...";
  let autoTextIndex = 1;
  let autoTextShow = autoText.slice(0, autoTextIndex);


  return (
    <>
        <h1 id="text">{autoTextShow}</h1>
        <div className="speed-control">
          <label htmlFor="speed">Speed</label>
          <input 
            className="input-speed"
            type="number"
            name="speed"
            id="speed"
            value="1"
            min="1"
            max="5"
            step="1"
          />
        </div>
    </>
  );
}