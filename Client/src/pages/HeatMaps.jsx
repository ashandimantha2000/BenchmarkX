import React, { useState } from "react";
import TestApp from "../TestApp/MyApp";
import HeatmapGenerator from "../components/HeatMap/HeatmapGenerator";
import { Helmet } from "react-helmet";

// Import Components
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function HeatMaps() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-light_background">
      <Helmet>
        <title>Heat Maps | BenchmarkX</title>
      </Helmet>
      <Sidebar />
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-6 w-full max-w-9xl mx-auto flex-1">
            <h1 className="sub-heading">Heat Maps</h1>
            <hr></hr>
          </div>
          <div className="flex pb-3">
            <h3 className="px-3 font-semibold">Application Name:</h3>
            <h3>Nortion</h3>
          </div>
          {/* TestApp Imported Here */}
          <HeatmapGenerator />
          <TestApp />
        </main>
      </div>
    </div>
  );
}

export default HeatMaps;
