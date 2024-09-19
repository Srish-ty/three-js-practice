import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, useScroll } from "@react-three/drei";
import { TextureLoader } from "three";

const FrameAnimation = () => {
  const meshRef = useRef();
  const scroll = useScroll();

  const { viewport } = useThree();

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
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <meshBasicMaterial />
    </mesh>
  );
};

const SmoothScrollAnimation = () => {
  return (
    <Canvas>
      <ScrollControls pages={1} damping={0}>
        <FrameAnimation />
      </ScrollControls>
    </Canvas>
  );
};

export default SmoothScrollAnimation;
