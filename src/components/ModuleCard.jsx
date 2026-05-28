import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ModuleCard({ module }) {
  const Icon = module.icon;
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -8 }}
    >
      <Link 
        to={`/module/${module.id}`}
        className="glass-card block p-8 h-full relative overflow-hidden group no-underline"
      >
        {/* Hover Glow Effect */}
        <div 
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[100px] opacity-20 transition-opacity group-hover:opacity-40"
          style={{ backgroundColor: module.color }}
        />
        
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 glass"
          style={{ color: module.color }}
        >
          <Icon size={28} />
        </div>
        
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-2 orbitron">
          {module.category}
        </p>
        
        <h3 className="text-2xl font-bold mb-3 orbitron text-white">
          {module.title}
        </h3>
        
        <p className="text-zinc-400 font-light leading-relaxed">
          {module.description}
        </p>
        
        <div className="mt-8 flex items-center text-sm font-bold secondary-text group-hover:gap-2 transition-all gap-0">
          <span style={{ color: module.color }}>EXPLORE MODULE</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: module.color }}>→</span>
        </div>
      </Link>
    </motion.div>
  );
}
