import { useState, useEffect } from "react";
import VarientA from "../TestApp/ABTesting/VarientA";
import VarientB from "../TestApp/ABTesting/VarientB";


const UserApp = () => {
  const [variant, setVariant] = useState("");

  // Function to choose a variant randomly
  const chooseVariant = () => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      setVariant("A");
    } else {
      setVariant("B");
    }
  };

  // Run A/B test when the component mounts
  useEffect(() => {
    chooseVariant();
  }, []);

  return (
    <div>
      {/*Add Testing Website Here */}
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
            <div>
              {variant === "A" && (
                <div>
                  {/* Variant A content */}
                  <VarientA />
                </div>
              )}
              {variant === "B" && (
                <div>
                  {/* Variant B content */}
                  <VarientB />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserApp;
