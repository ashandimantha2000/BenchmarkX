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

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/abtesting" element={<ABTesting />} />
      </Routes>
    </>
  );
}

export default App;
