import React from "react";
import "./AutoText.css";

export default function AutoText() {
  return (
    <>
      <h1 id="text">Auto Text Effect...</h1>
      <div>
        <label htmlFor="speed">Speed</label>
        <input 
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