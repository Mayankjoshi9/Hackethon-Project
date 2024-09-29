// src/App.js

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SkillDevelopment from './pages/SkillDevelopment';
import Events from './pages/Events';
import Resources from './pages/Resources';

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col ">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill-development" element={<SkillDevelopment />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
    
      
  
  );
}

export default App;
