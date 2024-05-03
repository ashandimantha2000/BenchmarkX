import React, { useState } from "react";
import { Helmet } from "react-helmet";

// Import Components
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import VarientA from "../TestApp/ABTesting/VarientA";
import VarientB from "../TestApp/ABTesting/VarientB";

function ABTesting() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
                    <h1 className="font-bold pt-7 px-3">Clicks :</h1>
                    <h1 className="font-bold pt-7 text-red-600">56</h1>
                  </div>
                </div>
                <div>
                  <VarientB />
                  <div className="flex">
                    <h1 className="font-bold pt-7 px-3">Clicks :</h1>
                    <h1 className="font-bold pt-7 text-red-600">12</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ABTesting;
