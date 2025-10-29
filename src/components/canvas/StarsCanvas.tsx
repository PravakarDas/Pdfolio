'use client';

import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import * as random from 'maath/random';
import type { Points as PointsImpl } from 'three';

const Stars = () => {
  const ref = useRef<PointsImpl | null>(null);

  // Generate star positions once (TypedArray -> cast to Float32Array)
  const sphere = useMemo<Float32Array>(() => {
    const pts = random.inSphere(new Float32Array(6000), { radius: 1.8 });
    // Some versions type this as generic TypedArray; cast to Float32Array
    return (pts ?? new Float32Array()) as Float32Array;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}  // ✔ Float32Array
        stride={3}
        frustumCulled
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
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
