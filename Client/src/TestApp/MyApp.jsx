import { useState, useEffect, useRef } from "react";
import VarientA from "../TestApp/ABTesting/VarientA";
import VarientB from "../TestApp/ABTesting/VarientB";
import Feedback from "./FeedBacks/Feedback";
import axios from "axios";
import { Helmet } from "react-helmet";

const UserApp = () => {
  const [variant, setVariant] = useState("");
  const [varientAClicks, setVarientAClicks] = useState(0);
  const [sessionDuration, setSessionDuration] = useState(0);
  const startTimeRef = useRef(new Date().getTime());

  const chooseVariant = () => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      setVariant("A");
    } else {
      setVariant("B");
    }
  };


  useEffect(() => {
    chooseVariant();
  }, []);

  useEffect(() => {
    const handleUnload = () => {
      const endTime = new Date().getTime();
      const sessionTime = (endTime - startTimeRef.current) / 1000; // Convert to seconds
      console.log(`Visiting session time: ${sessionTime} seconds`);

      setSessionDuration(sessionTime);

      // Call handleSaveSessionTime here
      handleSaveSessionTime(sessionTime);
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  const handleSaveSessionTime = (sessionTime) => {
    if (sessionTime > 0) {
      const data = {
        sessionDuration: sessionTime,
      };

      axios
        .post("http://localhost:5555/sessions", data)
        .then(() => {
          console.log("Session Time Sent");
        })
        .catch((error) => {
          console.log("My Error",error);
        });
    } else {
      console.log("Session duration is 0, not sending request");
    }
  }

  return (
    <div className="relative">
      <Feedback />
      <Helmet>
        <title>Demo App (Nortion) | BenchmarkX</title>
      </Helmet>
      <div>
        <div className="h-screen bg-[url('https://4kwallpapers.com/images/wallpapers/texture-dark-background-purple-2560x1440-3086.jpg')]">
          <div className="h-full flex justify-center items-center">
            <div>
              <h1 className="font-poppins font-extrabold text-white text-6xl text-center">
                Easily capture <br></br>emails on{" "}
                <span className="text-purple-500">Nortion.</span>
              </h1>
              <h4 className="font-poppins text-white text-center text-lg pt-4 pb-6">
                Capture your customer emails on a beautiful landing<br></br>{" "}
                page that syncs with your Nortion workspace.
              </h4>
              <div>
                {variant === "A" && (
                  <div>
                    <VarientA />
                  </div>
                )}
                {variant === "B" && (
                  <div>
                    <VarientB />
                  </div>
                )}
              </div>
              <div className="flex justify-center pt-5 text-white italic text-opacity-">This is a demo application of BenchmarkX*</div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserApp;