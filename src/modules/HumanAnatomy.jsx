import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Float, OrbitControls, MeshDistortMaterial } from '@react-three/drei';

export default function HumanAnatomy() {
  const heartRef = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Simulate heart beat rhythm (double beat)
    const beat = Math.pow(Math.sin(t * 4), 2) * 0.1 + Math.pow(Math.sin(t * 4 + 0.3), 2) * 0.05;
    const s = 1 + beat;
    heartRef.current.scale.set(s, s, s);
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ef4444" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={5} color="#ffffff" />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={heartRef}>
          {/* Main Body */}
          <Sphere args={[1, 64, 64]} scale={[0.8, 1.2, 0.8]}>
            <MeshDistortMaterial 
              color="#ef4444" 
              speed={2} 
              distort={0.3} 
              radius={1}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
          
          {/* Aorta/Veins representation */}
          <mesh position={[0.3, 1, 0]} rotation={[0, 0, -0.4]}>
            <cylinderGeometry args={[0.2, 0.2, 1, 32]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.1} />
          </mesh>
          <mesh position={[-0.3, 0.8, 0.2]} rotation={[0.5, 0, 0.4]}>
            <cylinderGeometry args={[0.15, 0.15, 0.8, 32]} />
            <meshStandardMaterial color="#1e3a8a" roughness={0.1} />
          </mesh>
        </group>
      </Float>

      <OrbitControls makeDefault />
    </>
  );
}
