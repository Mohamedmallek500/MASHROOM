'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function useOrbitControls(
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer | null
) {
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!renderer) return;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    controlsRef.current = controls;

    return () => {
      controls.dispose();
      controlsRef.current = null;
    };
  }, [camera, renderer]);

  return controlsRef;
}
