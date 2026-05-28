import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter orbitron">
          GRA<span className="gradient-text">VITY</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-12 font-light max-w-2xl mx-auto">
          Experience Education in a New Dimension. Visualize scientific concepts through immersive AR.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link to="/dashboard" className="btn-primary text-lg">
            Get Started
            <ArrowRight size={20} />
          </Link>
          <a href="#about" className="btn-secondary text-lg">
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Floating UI elements for aesthetic */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10 left-10 text-left hidden md:block"
      >
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">Status</p>
        <p className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          WebXR Core Online
        </p>
      </motion.div>
    </div>
  );
}
