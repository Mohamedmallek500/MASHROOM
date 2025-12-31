'use client';

import { useRef } from 'react';
import { useThreeScene } from '@/hooks/useThreeScene';
import { useThreeRenderer } from '@/hooks/useThreeRenderer';
import { useAnimationLoop } from '@/hooks/useAnimationLoop';
import { useOrbitControls } from '@/hooks/useOrbitControls';

export default function ThreeEditor() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scene, camera, cube } = useThreeScene();
  const renderer = useThreeRenderer(containerRef, camera);
  const controls = useOrbitControls(camera, renderer);

  useAnimationLoop(
    renderer,
    scene,
    camera,
    (delta) => {
      cube.rotation.x += delta;
      cube.rotation.y += delta * 0.5;
    },
    () => {
      controls.current?.update();
    }
  );

  return <div ref={containerRef} className="w-full h-screen" />;
}
