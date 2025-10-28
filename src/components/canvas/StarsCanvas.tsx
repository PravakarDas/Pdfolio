'use client';

import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, type PointsProps, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import * as random from 'maath/random';
import type { Points as PointsImpl } from 'three';

const Stars = (props: PointsProps) => {
  const ref = useRef<PointsImpl | null>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 1.8 }));

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.0018}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1.35] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
