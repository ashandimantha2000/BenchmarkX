import React from "react";
import VatientA from "../components/ABTesting/VarientA";
import VarientA from "../components/ABTesting/VarientA";
export default function App() {
  return (
    <div className="h-screen bg-[url('https://4kwallpapers.com/images/wallpapers/texture-dark-background-purple-2560x1440-3086.jpg')]">
      <div className="h-full flex justify-center items-center">
        <div c>
          <h1 className="font-poppins font-extrabold text-white text-6xl text-center">
            Easily capture <br></br>emails on{" "}
            <span className="text-purple-500">Nortion.</span>
          </h1>
          <h4 className="font-poppins text-white text-center text-lg pt-4 pb-6">
            Capture your customer emails on a beautiful landing<br></br> page
            that syncs with your Nortion workspace.
          </h4>
          <VarientA />
        </div>
      </div>
    </div>
  );
}
