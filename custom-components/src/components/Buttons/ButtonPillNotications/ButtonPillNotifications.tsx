import React from "react";
import "./ButtonPillNotifications.css";

export default function ButtonPillNotifications() {
  return (
    <>
      <a href="#" className="notification">
        <span>Inbox</span>
        <span className="badge">3</span>
      </a>
      <button className="button-pill yellow-inverse">Yellow</button>
    </>
  );
}