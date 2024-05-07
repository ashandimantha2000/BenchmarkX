import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

//Import CSS Styles
import "./css/style.css";

// Import Pages
import Dashboard from "./pages/Dashboard";
import ABTesting from "./pages/ABTesting";
import HeatMaps from "./pages/HeatMaps";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserApp from "./pages/UserApp";
import TestRun from "./pages/TestRun";
import FeedbackForm from "./TestApp/FeedBacks/FeedbackForm";



function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  //HeatMaps Interaction
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const savedMovements = localStorage.getItem('movements');
    if (savedMovements) {
      setMovements(JSON.parse(savedMovements));
    }
  }, []);

  const handleMovement = (movement) => {
    setMovements((prevMovements) => {
      const newMovements = [...prevMovements, movement];
      localStorage.setItem('movements', JSON.stringify(newMovements));
      return newMovements;
    });
  };


  return (
    <>
      <Routes>
        {/* BenchmarkX Routes */}
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/heatmaps" element={<HeatMaps />} />
        <Route exact path="/abtesting" element={<ABTesting />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
      {/* Test App Routes */}
      <Routes>
        <Route exact path="/test" element={<UserApp onMovement={handleMovement} />} />

        <Route exact path="/test/feedback" element={<FeedbackForm />} />
      </Routes>
      {/* Developing Testing */}
      <Routes>
        <Route exact path="/run" element={<TestRun />} />

      </Routes>
    </>
  );
}

export default App;
