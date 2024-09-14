// components/ThreeScene.tsx
'use client';

import React from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei'; // Import useful helpers

const ThreeScene: React.FC = () => {
  // Optional ref for the cube
  const cubeRef = React.useRef<THREE.Mesh>(null);

  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      {/* Camera controls */}
      <OrbitControls enableZoom={false} />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Spinning Cube */}
      <Box
        ref={cubeRef}
        args={[1, 1, 1]}
        rotation={[Math.PI / 4, Math.PI / 4, 0]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial attach='material' color='orange' />
      </Box>
    </Canvas>
  );
};

export default ThreeScene;
