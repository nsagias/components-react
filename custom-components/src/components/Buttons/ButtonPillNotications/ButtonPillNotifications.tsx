import React from "react";
import "./ButtonPillNotifications.css";

export default function ButtonPillNotifications() {
  return (
    <>
      <button className="button-pill blue">Blue</button>
      <a href="#" className="notification">
        <span>Inbox</span>
        <span className="badge">3</span>
      </a>
      <button className="button-pill blue-inverse">Blue</button>
      <button className="button-pill yellow">Yellow</button>
      <button className="button-pill yellow-inverse">Yellow</button>
      <button className="button-pill default">Default</button>
    </>
  );
}