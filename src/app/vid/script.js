import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, useScroll } from "@react-three/drei";
import { TextureLoader } from "three";

const FrameAnimation = () => {
  const meshRef = useRef();
  const scroll = useScroll();

  // Get the viewport size and aspect ratio
  const { viewport } = useThree();

  // Load 212 images as textures using useMemo to cache the textures
  const textures = useMemo(() => {
    const loader = new TextureLoader();
    const frames = [];
    for (let i = 1; i <= 212; i++) {
      frames.push(loader.load(`/assests/canvas/canvas (${i}).png`));
    }
    return frames;
  }, []);

  useFrame(() => {
    if (meshRef.current && meshRef.current.material) {
      const frameIndex = Math.min(
        Math.floor(scroll.offset * (textures.length - 1)),
        textures.length - 1
      );

      meshRef.current.material.map = textures[frameIndex];
      meshRef.current.material.needsUpdate = true;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]} // Keep the mesh centered at (0, 0, 0)
    >
      {/* Set geometry size to match the viewport */}
      <planeGeometry args={[viewport.width, viewport.height]} />
      <meshBasicMaterial />
    </mesh>
  );
};

const SmoothScrollAnimation = () => {
  return (
    <Canvas>
      {/* Increase the pages prop to extend the scroll height */}
      <ScrollControls pages={10} damping={4}>
        <FrameAnimation />
      </ScrollControls>
    </Canvas>
  );
};

export default SmoothScrollAnimation;
