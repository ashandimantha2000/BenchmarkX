import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import HeatMaps from "../components/dashboard/HeatMaps";
import ABTesting from "../components/dashboard/ABTesting";
import OnsiteSurveys from "../components/dashboard/OnsiteSurveys";
import SessionRecordings from "../components/dashboard/SessionRecordings";
import Scores from "../components/dashboard/Scores";
import Sessions from "../components/dashboard/Sessions";

function Dashboard() {
  const user = localStorage.getItem("token");
  if (user === null) {
    window.location.href = "/signin";
  }
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
      
            <Scores />
            <div className="flex justify-between w-full">
              <HeatMaps />
              <ABTesting />
            </div>
            <div className="flex justify-between w-full">
              <OnsiteSurveys />
              {/* <SessionRecordings /> */}
              <Sessions />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
