import React, { useEffect, useState } from "react";
import "./AutoText.css";

export default function AutoText() {
  let [autoTextShow, setAutoTextShow] = useState("");

  const autoText = "Auto Text Effect...";
  const autoTextSplit =  autoText.split('')

  let parsedAutotTextSplit = Array.isArray(autoTextSplit) && autoTextSplit.map(text => (
    <h1 id="text">{autoTextShow}</h1>
  ));


  // autoTextWriter();
 
    // let autoTextIndex = 0;
    // autoTextShow = autoText.slice(0, autoTextIndex);
    // autoTextIndex++;

    // if (autoTextIndex > autoText.length) {

    // }
    

    // for (let i = 0; i < autoText.length; i++) {

    //   setTimeout(() =>{}, 1000)
    //   console.log("bingo");
    // }
    
  


  


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