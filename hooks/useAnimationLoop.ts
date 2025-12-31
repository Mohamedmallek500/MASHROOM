'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function useAnimationLoop(
  renderer: THREE.WebGLRenderer | null,
  scene: THREE.Scene,
  camera: THREE.Camera,
  onFrame?: (delta: number) => void,
  onUpdate?: () => void
) {
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!renderer) return;

    const clock = new THREE.Clock();

    const loop = () => {
      const delta = clock.getDelta();
      onFrame?.(delta);
      onUpdate?.();
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(frameRef.current);
  }, [renderer, scene, camera, onFrame, onUpdate]);
}
