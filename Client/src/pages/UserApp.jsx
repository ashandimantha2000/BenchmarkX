import React, { useState, useEffect } from "react";
import MyApp from '../TestApp/MyApp'

function TestApp({ children, onMovement }) {
  const handleMouseMove = (event) => {
    onMovement({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      {/* Testing Application Imported Here */}
      <MyApp />
    </div>
  )
}

export default TestApp