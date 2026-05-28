import { useParams, Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { XR, createXRStore } from '@react-three/xr';
import { ArrowLeft, Maximize2, Info } from 'lucide-react';
import { modules } from '../data/modules';

// Import modules
import SolarSystem from '../modules/SolarSystem';
import HumanAnatomy from '../modules/HumanAnatomy';
import Botany from '../modules/Botany';
import Zoology from '../modules/Zoology';
import Molecules from '../modules/Molecules';
import Physics from '../modules/Physics';

const moduleComponents = {
  'solar-system': SolarSystem,
  'human-anatomy': HumanAnatomy,
  'botany': Botany,
  'zoology': Zoology,
  'molecules': Molecules,
  'physics': Physics,
};

const store = createXRStore();

export default function ModuleDetail() {
  const { id } = useParams();
  const module = modules.find(m => m.id === id);
  const SceneComponent = moduleComponents[id];

  if (!module) return <div>Module not found</div>;

  return (
    <div className="h-screen w-full flex flex-col">
      {/* HUD Header */}
      <div className="absolute top-0 left-0 w-full p-6 z-10 flex justify-between items-start pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <Link to="/dashboard" className="btn-secondary flex items-center gap-2 py-2 px-4 text-sm glass">
            <ArrowLeft size={16} />
            BACK TO GRAVITY
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-right pointer-events-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#3b82f6] orbitron">{module.category}</p>
          <h1 className="text-3xl font-bold orbitron">{module.title}</h1>
        </motion.div>
      </div>

      {/* Main 3D View */}
      <div className="flex-1 bg-black">
        <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
          <XR store={store}>
            <Suspense fallback={null}>
              <SceneComponent />
            </Suspense>
          </XR>
        </Canvas>
      </div>

      {/* Control Panel */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex justify-between items-end pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-6 max-w-sm pointer-events-auto"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 glass rounded-lg text-secondary">
              <Info size={20} />
            </div>
            <div>
              <h3 className="font-bold mb-1 orbitron text-sm">Description</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {module.description}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="pointer-events-auto"
        >
          <button 
            onClick={() => store.enterAR()}
            className="btn-primary py-4 px-8 text-lg font-bold orbitron shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-pulse"
          >
            <Maximize2 size={24} />
            LAUNCH AR
          </button>
        </motion.div>
      </div>
    </div>
  );
}
