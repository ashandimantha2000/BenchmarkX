import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import UpdateCard from "../components/dashboard/UpdateCard";
import HeatMaps from "../components/dashboard/HeatMaps";
import ABTesting from "../components/dashboard/ABTesting";


function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-light_background">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />
            <h1>Nortion</h1>
            <UpdateCard />
            <div className="flex justify-between w-full">
              <HeatMaps />
              <ABTesting />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
