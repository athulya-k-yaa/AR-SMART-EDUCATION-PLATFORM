import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder, OrbitControls, Float, Box } from '@react-three/drei';

export default function Physics() {
  const pivotRef = useRef();
  const length = 3;
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Simple pendulum equation: theta = A * cos(sqrt(g/L) * t)
    const amplitude = Math.PI / 4;
    const gravity = 9.8;
    const frequency = Math.sqrt(gravity / length);
    const theta = amplitude * Math.cos(frequency * t);
    
    pivotRef.current.rotation.z = theta;
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />

      {/* Ceiling Mount */}
      <Box args={[1, 0.2, 1]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#334155" />
      </Box>

      {/* Pendulum Group */}
      <group position={[0, 2, 0]} ref={pivotRef}>
        {/* Rod */}
        <mesh position={[0, -length / 2, 0]}>
          <cylinderGeometry args={[0.02, 0.02, length, 8]} />
          <meshStandardMaterial color="#94a3b8" />
        </mesh>
        
        {/* Bob */}
        <Sphere args={[0.3, 32, 32]} position={[0, -length, 0]}>
          <meshStandardMaterial 
            color="#3b82f6" 
            emissive="#3b82f6" 
            emissiveIntensity={0.5} 
            metalness={0.9} 
            roughness={0.1} 
          />
        </Sphere>
      </group>

      <OrbitControls makeDefault />
    </>
  );
}
