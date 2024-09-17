"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollZoomAni = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth - 20, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a sphere with more detailed geometry
    const geo2 = new THREE.SphereGeometry(1, 32, 32); // Higher width and height segments for better visibility
    const mate2 = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geo2, mate2);
    scene.add(sphere);

    // Adjust camera position further back
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // GSAP Scroll-triggered rotation
    gsap.to(sphere.rotation, {
      y: 6.28, // Full rotation (2 * Math.PI)
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true, // Makes the animation smooth
      },
    });

    // Clean up the renderer on component unmount
    return () => {
      renderer.dispose();
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ height: "200vh" }}></div>;
};

export default ScrollZoomAni;
