import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import SkillDevelopment from './pages/SkillDevelopment';
import Events from './pages/Events';
import Resources from './pages/Resources';
import NavBar from './components/NavBar';
import CircleEffect from './components/CircleEffect'; 
import { AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const location = useLocation(); 

  return (
    <>
      <div className="w-screen min-h-screen flex flex-col overflow-hidden">
        <NavBar />
        <CircleEffect /> 

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill-development" element={<SkillDevelopment />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
