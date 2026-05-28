import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder, OrbitControls, Float } from '@react-three/drei';

export default function Zoology() {
  const groupRef = useRef();
  
  const numPairs = 20;
  const radius = 1;
  const heightStep = 0.4;
  const rotationStep = Math.PI / 4;

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      
      <group ref={groupRef}>
        {Array.from({ length: numPairs }).map((_, i) => {
          const y = (i - numPairs / 2) * heightStep;
          const angle = i * rotationStep;
          
          const x1 = Math.cos(angle) * radius;
          const z1 = Math.sin(angle) * radius;
          
          const x2 = Math.cos(angle + Math.PI) * radius;
          const z2 = Math.sin(angle + Math.PI) * radius;

          return (
            <group key={i}>
              {/* Backbone 1 */}
              <Sphere args={[0.15, 16, 16]} position={[x1, y, z1]}>
                <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
              </Sphere>
              
              {/* Backbone 2 */}
              <Sphere args={[0.15, 16, 16]} position={[x2, y, z2]}>
                <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
              </Sphere>
              
              {/* Connecting Bar */}
              <mesh 
                position={[(x1 + x2) / 2, y, (z1 + z2) / 2]}
                rotation={[0, 0, Math.PI / 2]}
                rotation-z={angle}
              >
                <cylinderGeometry args={[0.05, 0.05, radius * 2, 8]} />
                <meshStandardMaterial color="#94a3b8" />
              </mesh>
            </group>
          );
        })}
      </group>

      <OrbitControls makeDefault />
    </>
  );
}
