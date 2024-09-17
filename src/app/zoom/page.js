"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollZoomAni = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth - 20, window.innerHeight + 10);
    containerRef.current.appendChild(renderer.domElement);

    // const geometry = new THREE.BoxGeometry(3, 2, 1);
    // const material = new THREE.MeshBasicMaterial({
    //   color: 0xff00ff,
    //   wireframe: true,
    // });
    // const cube = new THREE.Mesh(geometry, material);

    //new geo
    const geo2 = new THREE.SphereGeometry(15, 12, 12);
    const mate2 = new THREE.MeshBasicMaterial({
      color: 0x24e3a3,
      wireframe: true,
    });
    const cube2 = new THREE.Mesh(geo2, mate2);

    // scene.add(cube);
    scene.add(cube2);

    camera.position.z = 55;
    camera.position.y = 0.5;
    camera.position.x = 0.2;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    gsap.to(camera.position, {
      z: 1, // zoom in to a closer position
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    gsap.to(cube2.rotation, {
      y: Math.PI,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      renderer.dispose();
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ height: "200vh" }}></div>;
};
export default ScrollZoomAni;
