import { useState, useEffect, useRef } from "react";
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


  //Tracking the session time
  const startTimeRef = useRef(new Date().getTime());

  useEffect(() => {
    const handleUnload = () => {
      const endTime = new Date().getTime();
      const sessionTime = (endTime - startTimeRef.current) / 1000; // Convert to seconds
      console.log(`Visiting session time: ${sessionTime} seconds`);
      
      //Check Bounce Rate
      if(sessionTime<5){
        console.log("Bounce Rate is High")
      }
      else{
        console.log("Bounce Rate is Low")
      }
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
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
