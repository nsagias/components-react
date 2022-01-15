import React from "react";
import "./ButtonPill.css";

export default function ButtonPill() {
  return (
    <>
      <button className="button-pill blue">Info</button>
      <button className="button-pill blue-inverse">Info</button>
      <button className="button-pill yellow">Yellow</button>
      <button className="button-pill yellow-inverse">Yellow</button>
      <button className="button-pill default">Default</button>
    </>
  );
}