import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Trail, Float, OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const planets = [
  { name: 'Mercury', distance: 1.5, size: 0.2, color: '#9ca3af', speed: 1.5 },
  { name: 'Venus', distance: 2.2, size: 0.35, color: '#fbbf24', speed: 1.2 },
  { name: 'Earth', distance: 3.2, size: 0.4, color: '#3b82f6', speed: 1.0 },
  { name: 'Mars', distance: 4.2, size: 0.3, color: '#ef4444', speed: 0.8 },
  { name: 'Jupiter', distance: 6.5, size: 0.8, color: '#d97706', speed: 0.5 },
  { name: 'Saturn', distance: 8.5, size: 0.7, color: '#fcd34d', speed: 0.4, ring: true },
];

function Planet({ distance, size, color, speed, ring, name }) {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    meshRef.current.position.x = Math.cos(t) * distance;
    meshRef.current.position.z = Math.sin(t) * distance;
  });

  return (
    <group>
      {/* Orbit Line */}
      <mesh rotation-x={Math.PI / 2}>
        <ringGeometry args={[distance - 0.01, distance + 0.01, 64]} />
        <meshBasicMaterial color="#ffffff" opacity={0.1} transparent />
      </mesh>
      
      <group ref={meshRef}>
        <Sphere args={[size, 32, 32]}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} roughness={0.7} />
        </Sphere>
        
        {ring && (
          <mesh rotation-x={Math.PI / 2}>
            <ringGeometry args={[size * 1.4, size * 2.2, 64]} />
            <meshStandardMaterial color={color} opacity={0.5} transparent side={THREE.DoubleSide} />
          </mesh>
        )}
        
        <Text
          position={[0, size + 0.3, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </group>
    </group>
  );
}

export default function SolarSystem() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[0, 0, 0]} intensity={100} color="#fbbf24" />
      <spotLight position={[10, 10, 10]} intensity={2} />
      
      {/* Sun */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial 
            color="#fbbf24" 
            emissive="#fbbf24" 
            emissiveIntensity={2} 
          />
        </Sphere>
      </Float>

      {planets.map((planet) => (
        <Planet key={planet.name} {...planet} />
      ))}
      
      <OrbitControls makeDefault />
    </>
  );
}
