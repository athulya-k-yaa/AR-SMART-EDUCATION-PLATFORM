import { motion } from 'framer-motion';
import { modules } from '../data/modules';
import ModuleCard from '../components/ModuleCard';
import { LayoutGrid } from 'lucide-react';

export default function Dashboard() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 text-secondary mb-2">
          <LayoutGrid size={20} />
          <span className="text-sm font-semibold uppercase tracking-widest orbitron">Core Modules</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold orbitron">Select a <span className="gradient-text">Subject</span></h2>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </motion.div>
    </div>
  );
}
