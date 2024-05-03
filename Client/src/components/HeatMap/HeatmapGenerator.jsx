import React, { useState } from 'react';


const HeatmapGenerator = () => {
    const [heatmapData, setHeatmapData] = useState([]);

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const newDataPoint = { x: clientX, y: clientY };
        setHeatmapData((prevData) => [...prevData, newDataPoint]);
    };

    const getColor = (usageLevel) => {
        if (usageLevel >= 80) {
            return 'red';
        } else if (usageLevel >= 50) {
            return 'orange';
        } else {
            return 'green';
        }
    };

    return (
        <div
            style={{ width: '100%', height: '100%' }}
            onMouseMove={handleMouseMove}
        >
            {heatmapData.map((dataPoint, index) => {
                const usageLevel = Math.floor(Math.random() * 100); // Replace with your actual usage level calculation
                const color = getColor(usageLevel);

                return (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            left: dataPoint.x,
                            top: dataPoint.y,
                            width: '10px',
                            height: '10px',
                            background: color,
                            opacity: 0.5,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default HeatmapGenerator;