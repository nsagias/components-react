import React from "react";
import "./ButtonPill.css";

export default function ButtonPill() {
  return (
    <>
      <button className="button-pill blue">Blue</button>
      <button className="button-pill blue-inverse">Blue</button>
      <button className="button-pill yellow">Yellow</button>
      <button className="button-pill yellow-inverse">Yellow</button>
      <button className="button-pill default">Default</button>
    </>
  );
}