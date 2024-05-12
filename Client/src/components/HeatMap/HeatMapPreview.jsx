import React, { useEffect, useState } from "react";
import HeatMap from "react-heatmap-grid";
import { SketchPicker } from "react-color";
import tinycolor from "tinycolor2";

const HeatMapPreview = () => {
  const [movements, setMovements] = useState([]);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    fetch("http://localhost:5555/heatmap")
      .then((response) => response.json())
      .then((data) => setMovements(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Define the size of the heatmap grid
  const xLabels = new Array(30).fill(0);
  const yLabels = new Array(30).fill(0);

  // Initialize an empty heatmap data array
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() => new Array(xLabels.length).fill(0));

  // Populate the heatmap data array based on the mouse movements
  movements.forEach(({ x, y }) => {
    const xIndex = Math.floor(x / (window.innerWidth / xLabels.length));
    const yIndex = Math.floor(y / (window.innerHeight / (yLabels.length - 6)));
    data[yIndex][xIndex]++;
  });

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  const rgbColor = tinycolor(color).toRgb();

  const [showPicker, setShowPicker] = useState(false);

  const handleButtonClick = () => {
    setShowPicker(!showPicker);
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest(".picker-container")) return;
    setShowPicker(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-8/12 h-5">
      <div className="relative">
        <button
          onClick={handleButtonClick}
          className="absolute top-0 right-0 ml-7 w-fit px-3 py-2 bg-gradient-to-r from-sky-400 to-blue-600 hover:scale-105 text-white font-bold rounded-t-xl rounded-r-xl"
        >
          Colour Picker
        </button>
        <div className="absolute top-0 right-0">
          {showPicker && (
            <div className="picker-container">
              <SketchPicker
                color={color}
                onChangeComplete={handleColorChange}
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <HeatMap
          xLabels={xLabels}
          yLabels={yLabels}
          data={data}
          cellStyle={(background, value, min, max, data, x, y) => ({
            background: `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${
              1 - (max - value) / (max - min)
            })`,
            fontSize: "11.5px",
          })}
        />
      </div>
    </div>
  );
};

export default HeatMapPreview;
