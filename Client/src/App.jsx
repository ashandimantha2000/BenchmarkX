import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

//Import CSS Styles
import './css/style.css';


// Import Pages
import Dashboard from './pages/Dashboard';
import ABTesting from './pages/ABTesting';
import HeatMaps from './pages/HeatMaps';
import About from './pages/About';
import TestApp from './pages/TestApp';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
    {/* Use Outlets */}
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/heatmaps" element={<HeatMaps />} />
        <Route exact path="/abtesting" element={<ABTesting />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/test" element={<TestApp />} />
      </Routes>
    </>
  );
}

export default App;
