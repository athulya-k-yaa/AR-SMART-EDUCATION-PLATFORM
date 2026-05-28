import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ModuleDetail from './pages/ModuleDetail';
import StarBackground from './components/StarBackground';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full bg-[#050510] text-white">
        <StarBackground />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/module/:id" element={<ModuleDetail />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
