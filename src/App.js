import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Blogs from './component/Blogs';
import RecentProject from './component/RecentProject';
import Hireus from './component/Hireus';
import Membership from './component/Membership'
import Contact from './component/Contact';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      // document.body.style.backgroundColor="red";
    }
    else{
      setMode('light');
      // document.body.style.backgroundColor="orange";
    }
  }
  return (
    <>
      <Router>
        <Navbar name="Tejas Phatangare" mode={mode} togglemode={togglemode} />
        <Routes>
          <Route exact path='/' element={<Home />}  />
          <Route exact path='About' element={<About />}  />
          <Route exact path='Services' element={<Services/>}  />
          <Route exact path='Blog' element={<Blogs />} />
          <Route exact path='RecentProject' element={<RecentProject />} />
          <Route exact path='Hireus' element={<Hireus />} />
          <Route exact path='Membership' element={<Membership />} />
          <Route exact path='Contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
