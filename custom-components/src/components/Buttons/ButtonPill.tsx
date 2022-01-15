import React from "react";
import "./ButtonPill.css";

export default function ButtonPill() {
  return (
    <>
      <button className="button-pill info">Info</button>
      <button className="button-pill info-inverse">Info</button>
      <button className="button-pill yellow">Yellow</button>
      <button className="button-pill yellow-inverse">Yellow</button>
      <button className="button-pill success">Success</button>
      <button className="button-pill danger">Danger</button>
      <button className="button-pill default">Default</button>
    </>
  );
}