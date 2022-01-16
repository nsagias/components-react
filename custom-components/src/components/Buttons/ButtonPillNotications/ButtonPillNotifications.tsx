import React from "react";
import "./ButtonPillNotifications.css";

export default function ButtonPillNotifications() {
  return (
    <>
      <p>
        <a href="#" className="blue-button-notification">
          <span>Inbox</span>
          <span className="blue-button-notification-badge">3</span>
        </a>
      </p>
      <p>
        <a href="#" className="yellow-button-notification">
          <span>Inbox</span>
          <span className="yellow-button-notification-badge">3</span>
        </a>
      </p>
    </>
  );
}