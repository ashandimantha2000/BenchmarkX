import React, { useEffect, useState } from "react";
import HeatMap from "react-heatmap-grid";

const HeatMapPreview = () => {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const savedMovements = localStorage.getItem("movements");
    if (savedMovements) {
      setMovements(JSON.parse(savedMovements));
    }
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
    const yIndex = Math.floor(y / (window.innerHeight / (yLabels.length-6)));
    data[yIndex][xIndex]++;
  });

  return (
    <div className="w-8/12 h-5">
      <div >
        <HeatMap xLabels={xLabels} yLabels={yLabels} data={data} />
      </div>
    </div>
  );
};

export default HeatMapPreview;
