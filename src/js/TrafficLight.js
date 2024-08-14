import React, { useState, useEffect } from "react";
import "./TrafficLight.css"; // 

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const handleClick = (newColor) => {
    setColor(newColor);
  };

  const cycleColors = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  const addPurple = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  useEffect(() => {
    const interval = setInterval(cycleColors, 10000); // 10 seconds interval
    return () => clearInterval(interval); // 
  }, [color, colors]); // 

  return (
    <div className="traffic-light">
      {colors.map((col) => (
        <div
          key={col}
          className={`light ${col} ${color === col ? "glow" : ""}`}
          onClick={() => handleClick(col)}
        ></div>
      ))}
      <button onClick={cycleColors}>Cycle Colors</button>
      <button onClick={addPurple}>Add Purple</button>
    </div>
  );
};

export default TrafficLight;
