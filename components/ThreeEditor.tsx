'use client';

import { useRef } from 'react';
import { useThreeScene } from '@/hooks/useThreeScene';
import { useThreeRenderer } from '@/hooks/useThreeRenderer';
import { useAnimationLoop } from '@/hooks/useAnimationLoop';

export default function ThreeEditor() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scene, camera, cube } = useThreeScene();
  const renderer = useThreeRenderer(containerRef, camera);

  useAnimationLoop(renderer, scene, camera, (delta) => {
    cube.rotation.x += delta;
    cube.rotation.y += delta * 0.5;
  });

  return <div ref={containerRef} className="w-full h-screen" />;
}
