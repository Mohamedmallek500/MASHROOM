import { useEffect } from 'react';
import * as THREE from 'three';

export function useAnimationLoop(
  renderer: THREE.WebGLRenderer | null,
  scene: THREE.Scene,
  camera: THREE.Camera,
  onFrame?: (delta: number) => void
) {
  useEffect(() => {
    if (!renderer) return;

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      const delta = clock.getDelta();
      onFrame?.(delta);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [renderer, scene, camera, onFrame]);
}