import { Sphere, Cylinder, OrbitControls } from '@react-three/drei';

function Atom({ position, color, size, label }) {
  return (
    <group position={position}>
      <Sphere args={[size, 32, 32]}>
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.1} />
      </Sphere>
    </group>
  );
}

function Bond({ start, end }) {
  const direction = [
    end[0] - start[0],
    end[1] - start[1],
    end[2] - start[2],
  ];
  const length = Math.sqrt(direction[0]**2 + direction[1]**2 + direction[2]**2);
  const position = [
    (start[0] + end[0]) / 2,
    (start[1] + end[1]) / 2,
    (start[2] + end[2]) / 2,
  ];

  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.08, 0.08, length, 8]} />
      <meshStandardMaterial color="#cbd5e1" />
    </mesh>
  );
}

export default function Molecules() {
  // Simple representation of a ring molecule
  const atoms = [
    { pos: [0, 1.5, 0], color: '#ef4444', size: 0.5, label: 'O' },
    { pos: [0, 0, 0], color: '#374151', size: 0.6, label: 'C' },
    { pos: [1.3, -0.7, 0], color: '#374151', size: 0.6, label: 'C' },
    { pos: [-1.3, -0.7, 0], color: '#374151', size: 0.6, label: 'C' },
    { pos: [1.3, -2.1, 0], color: '#3b82f6', size: 0.5, label: 'N' },
    { pos: [-1.3, -2.1, 0], color: '#3b82f6', size: 0.5, label: 'N' },
  ];

  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      
      <group rotation={[0.5, 0.5, 0]}>
        {atoms.map((atom, i) => (
          <Atom key={i} position={atom.pos} color={atom.color} size={atom.size} />
        ))}
        
        <Bond start={atoms[0].pos} end={atoms[1].pos} />
        <Bond start={atoms[1].pos} end={atoms[2].pos} />
        <Bond start={atoms[1].pos} end={atoms[3].pos} />
        <Bond start={atoms[2].pos} end={atoms[4].pos} />
        <Bond start={atoms[3].pos} end={atoms[5].pos} />
      </group>

      <OrbitControls makeDefault />
    </>
  );
}
