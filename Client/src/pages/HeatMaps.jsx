import React, { useState, useEffect } from "react";
import TestApp from "../TestApp/MyApp";
import HeatMapPreview from "../components/HeatMap/HeatMapPreview";
import { Helmet } from "react-helmet";

// Import Components
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function HeatMaps() {
  const user = localStorage.getItem("token");
  if (user === null) {
    window.location.href = "/signin";
  }
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const savedMovements = localStorage.getItem("movements");
    if (savedMovements) {
      setMovements(JSON.parse(savedMovements));
    }
  }, []);

  const handleMovement = (movement) => {
    setMovements((prevMovements) => {
      const newMovements = [...prevMovements, movement];
      localStorage.setItem("movements", JSON.stringify(newMovements));
      return newMovements;
    });
  };
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
          <div className="px-4 sm:px-6 lg:px-8 pt-6 w-full max-w-9xl mx-auto flex-1">
            <h1 className="sub-heading">Heat Maps <span className="font-normal text-lg">Nortion</span></h1>
            <hr />
          </div>

          <div>
            <div>
              <div className="absolute z-10">
                <HeatMapPreview  />
              </div>
              {/* TestApp Imported Here */}
             <div className="mx-12 py-8"> <TestApp /></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HeatMaps;