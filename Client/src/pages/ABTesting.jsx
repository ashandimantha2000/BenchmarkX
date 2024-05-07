import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, Title, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(ArcElement, CategoryScale, Title, Tooltip);

// Import Components
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import VarientA from "../TestApp/ABTesting/VarientA";
import VarientB from "../TestApp/ABTesting/VarientB";

function ABTesting(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [varientAClicks, setVarientAClicks] = useState(0);
  const [varientBClicks, setVarientBClicks] = useState(0);

  useEffect(() => {
    // Fetch varient A clicks
    fetch("http://localhost:5555/varientA")
      .then((response) => response.json())
      .then((data) => setVarientAClicks(data.count))
      .catch((error) => console.error(error));

    // Fetch varient B clicks
    fetch("http://localhost:5555/varientB")
      .then((response) => response.json())
      .then((data) => setVarientBClicks(data.count))
      .catch((error) => console.error(error));
  }, []);

  const data = {
    labels: ["Varient A", "Varient B"],
    datasets: [
      {
        data: [varientAClicks, varientBClicks],
        backgroundColor: ["#DC2626", "#9333DA"],
        hoverBackgroundColor: ["#EB3D8D", "#0F52BA"],
      },
    ],
  };

  return (
    <div className="flex h-screen overflow-hidden bg-light_background">
      <Helmet>
        <title>A/B Testing | BenchmarkX</title>
      </Helmet>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-6 w-full max-w-9xl mx-auto flex-1">
            <h1 className="sub-heading">A/B Testing</h1>
            <hr></hr>
          </div>
          <div>
            <div className="px-4 sm:px-6 lg:px-8 py-6 w-full max-w-9xl mx-auto">
              <div className="flex justify-between w-4/5">
                <div>
                  <VarientA />
                  <div className="flex">
                    <h1 className="font-bold pt-7 px-3">CTA Clicks :</h1>
                    <h1 className="font-bold pt-7 text-purple-600">
                      {varientAClicks}
                    </h1>
                  </div>
                  <div className="flex">
                    <h1 className="font-bold pt-1 px-3">Conversion Rate :</h1>
                    <h1 className="font-bold pt-1 text-purple-600">
                      {((varientAClicks / 40) * 100).toFixed(2)}%
                    </h1>
                  </div>
                </div>
                <div>
                  <VarientB />
                  <div className="flex">
                    <h1 className="font-bold pt-7 px-3">CTA Clicks :</h1>
                    <h1 className="font-bold pt-7 text-red-600">
                      {varientBClicks}
                    </h1>
                  </div>
                  <div className="flex">
                    <h1 className="font-bold pt-1 px-3">Conversion Rate :</h1>
                    <h1 className="font-bold pt-1 text-red-600">
                      {((varientBClicks / 40) * 100).toFixed(2)}%
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <br />
          <div className="flex">
            <div className="bg-white drop-shadow-xl shadow-slate-300 ml-10 rounded-2xl w-96 pb-9 ">
              <h1 className="text-lg text-gray-600 font-bold p-7">
                Call to Action Clicks
              </h1>
              <div className="px-10 " style={{ width: "100%" }}>
                <Pie data={data} />
              </div>
            </div>
            <div className="bg-white ml-10 rounded-2xl drop-shadow-xl shadow-slate-300 w-96 pb-9 h-fit">
              <h1 className="text-lg text-red-600 font-bold px-7 pt-7">
                Results
                <span className="font-normal text-gray-500">
                  {" "}
                  | Most Optimal Varient
                </span>
              </h1>

              <div className="p-5 " style={{ width: "100%" }}>
                {/* here */}
                {varientAClicks > varientBClicks ? (
                  <div>
                    <VarientA />
                    <h1 className="p-3 font-bold text-green-600">
                      Varient A is performing better*
                    </h1>
                  </div>
                ) : (
                  <div>
                    <VarientB />
                    <h1 className="p-3 font-bold text-green-600">
                      Varient B is performing better*
                    </h1>
                  </div>
                )}
                <br />
                <div>
                  <hr />
                  <h2 className="pt-3 px-2 text-sm">
                    *Considering CTA clicks and conversion rates. <br />
                    With the collected data. The accuracy of the results may high when the sample size is large.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </main>
        <br />
      </div>
    </div>
  );
}

export default ABTesting;
