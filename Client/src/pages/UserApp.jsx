import React, { useState, useEffect } from "react";
import MyApp from '../TestApp/MyApp'

function TestApp() {
    const handleMouseMove = (event) => {
        const data = { x: event.clientX, y: event.clientY };
        fetch('http://localhost:5555/heatmap', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
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