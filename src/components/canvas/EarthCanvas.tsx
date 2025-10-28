'use client';

import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import CanvasLoader from '../CanvasLoader';

const EARTH_MODEL_PATH = '/planet/scene.gltf';

const EarthModel = () => {
  const gltf = useGLTF(EARTH_MODEL_PATH);

  return (
    <primitive
      object={gltf.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      className="h-full w-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <EarthModel />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload(EARTH_MODEL_PATH);

export default EarthCanvas;
