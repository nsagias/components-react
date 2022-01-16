import React, { useEffect, useState } from "react";
import "./ButtonPillNotifications.css";

export default function ButtonPillNotifications() {
  const [blueNote, setBlueNote] = useState(0);
  const [yellowNote, setYellowNote] = useState(0);

  const blueButtonHandler = () => {
    console.log("Blue Button Handler")
  };

  const yellowButtonHandler = () => {
    console.log("Yellow Button Handler")
  };

  useEffect(() => {
    // get messsages for buttons
    // set to check for updates
    setBlueNote(5);
    setYellowNote(10);

  }, []);

  return (
    <>
      <p>
        <a href="#"onClick={blueButtonHandler} className="blue-button-notification">
          <span>Inbox</span>
          <span className="blue-button-notification-badge">{blueNote}</span>
        </a>
      </p>
      <p>
        <a href="#" onClick={yellowButtonHandler} className="yellow-button-notification">
          <span>Inbox</span>
          <span className="yellow-button-notification-badge">{yellowNote}</span>
        </a>
      </p>
    </>
  );
}