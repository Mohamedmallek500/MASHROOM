'use client';

import { useEffect, useState } from 'react';
import * as THREE from 'three';

export function useThreeRenderer(
  containerRef: React.RefObject<HTMLDivElement | null>,
  camera: THREE.PerspectiveCamera
) {
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const r = new THREE.WebGLRenderer({ antialias: true });
    r.setPixelRatio(window.devicePixelRatio);

    const resize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      r.setSize(w, h);
    };

    resize();
    containerRef.current.appendChild(r.domElement);
    setRenderer(r);

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      r.dispose();
      containerRef.current?.removeChild(r.domElement);
      setRenderer(null);
    };
  }, [containerRef, camera]);

  return renderer;
}
