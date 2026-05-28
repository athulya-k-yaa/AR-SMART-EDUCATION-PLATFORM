import { OrbitControls, Sphere, Box, Torus, Float, Text } from '@react-three/drei';

function Organelle({ position, color, size, name, type = 'sphere' }) {
  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
        {type === 'sphere' ? (
          <Sphere args={[size, 32, 32]}>
            <meshStandardMaterial color={color} roughness={0.5} />
          </Sphere>
        ) : (
          <Box args={[size, size, size]}>
            <meshStandardMaterial color={color} roughness={0.5} />
          </Box>
        )}
        <Text
          position={[0, size + 0.3, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
        >
          {name}
        </Text>
      </Float>
    </group>
  );
}

export default function Botany() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      
      {/* Cell Wall */}
      <Box args={[5, 4, 3]}>
        <meshStandardMaterial 
          color="#059669" 
          opacity={0.2} 
          transparent 
          wireframe
        />
      </Box>
      <Box args={[4.8, 3.8, 2.8]}>
        <meshStandardMaterial 
          color="#10b981" 
          opacity={0.1} 
          transparent 
        />
      </Box>

      {/* Nucleus */}
      <Organelle position={[-1, 0.5, 0.5]} color="#8b5cf6" size={0.6} name="Nucleus" />
      
      {/* Vacuole */}
      <Organelle position={[1, -0.5, -0.5]} color="#3b82f6" size={1.2} name="Vacuole" type="box" />
      
      {/* Chloroplasts */}
      <Organelle position={[-1.5, -1, 0.5]} color="#047857" size={0.3} name="Chloroplast" />
      <Organelle position={[1.5, 1, 0]} color="#047857" size={0.3} name="Chloroplast" />
      <Organelle position={[0, 1.2, -0.5]} color="#047857" size={0.3} name="Chloroplast" />

      {/* Mitochondria */}
      <group position={[0.5, 0.8, 0.5]}>
        <Torus args={[0.3, 0.1, 16, 32]}>
          <meshStandardMaterial color="#ef4444" />
        </Torus>
        <Text position={[0, 0.6, 0]} fontSize={0.15} color="white">Mitochondria</Text>
      </group>

      <OrbitControls makeDefault />
    </>
  );
}
