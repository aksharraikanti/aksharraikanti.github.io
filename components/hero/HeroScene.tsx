'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import type { Mesh } from 'three';

function DistortedIcosahedron() {
  const meshRef = useRef<Mesh>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;
    meshRef.current.rotation.x += (pointer.y * 0.3 - meshRef.current.rotation.x * 0.02) * 0.02;
    meshRef.current.rotation.y += (pointer.x * 0.3 - meshRef.current.rotation.y * 0.02) * 0.02;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh
        ref={meshRef}
        onPointerMove={(e) => setPointer({ x: e.pointer.x, y: e.pointer.y })}
        scale={1.65}
      >
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#0071e3"
          attach="material"
          distort={0.28}
          speed={1.4}
          roughness={0.2}
          metalness={0.65}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene({ active }: { active: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? 'always' : 'never'}
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      gl={{ antialias: true, powerPreference: 'low-power' }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 3]} intensity={1.4} color="#2997ff" />
      <pointLight position={[-3, -2, -2]} intensity={0.6} color="#ffffff" />
      <DistortedIcosahedron />
      <Sparkles count={50} scale={5} size={2} speed={0.3} color="#2997ff" />
    </Canvas>
  );
}

export default HeroScene;
