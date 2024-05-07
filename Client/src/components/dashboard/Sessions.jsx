import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

function SessionRecordings() {
  const [sessionData, setSessionData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5555/sessions")
      .then(response => {
        const data = response.data.data
          .map(session => session.sessionDuration)
          .slice(-10); // Get the last 10 items
        setSessionData(data);
      })
      .catch(error => console.error(`Error: ${error}`));
  }, []);

  const options = {
    chart: {
      id: "basic-line"
    },
    xaxis: {
      categories: sessionData.map((_, index) => `S${index + 1}`),
      title: {
        text: 'Session'
      }
    },
    yaxis: {
      title: {
        text: 'Duration (seconds)'
      },
      labels: {
        formatter: function (value) {
          return (value * 0.01).toFixed(1); // Multiply all y-axis values by 2 and limit to 2 digits
        }
      }
    }
  };

  const series = [
    {
      name: "session",
      data: sessionData
    }
  ];

  return (
    <div className="bg-slate-100 w-full h-full rounded-lg drop-shadow-xl shadow-slate-300 my-8 mr-11 p-7">
      <h1 className="text-fuchsia-500 text-lg font-bold">Average Session</h1>

      <div className="relative overflow-x-auto">
        <Chart options={options} series={series} type="line" />
      </div>
    </div>
  );
}

export default SessionRecordings;