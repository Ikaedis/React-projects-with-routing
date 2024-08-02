import "./TrafficLightsComponent.css"; // Importing the CSS file
import { useEffect, useState } from "react";

const lightsConfigs = {
  green: {
    backgroundColor: "green",
    next: "yellow",
    timeActive: 3000,
  },
  yellow: {
    backgroundColor: "yellow",
    next: "red",
    timeActive: 500,
  },
  red: {
    backgroundColor: "red",
    next: "green",
    timeActive: 4000,
  },
};

const TrafficLightsComponent = () => {
  const [currentColor, setCurrentColor] = useState("green");

  useEffect(() => {
    const { next, timeActive } = lightsConfigs[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, timeActive);

    return () => {
      clearInterval(timerId);
    };
  }, [currentColor]);

  return (
    <div className="boxes-container">
      {Object.keys(lightsConfigs).map((color) => {
        return (
          <div
            key={color}
            className={"trafficLight"}
            style={{
              backgroundColor: currentColor === color ? color : undefined,
            }}
          >
            {color}
          </div>
        );
      })}
    </div>
  );
};

export default TrafficLightsComponent;
