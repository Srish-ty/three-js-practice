// ScrollAnimation.js
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const ScrollAnimation = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const video = document.createElement("video");
    video.src = "../vids/sd.mp4";
    video.loop = true;
    video.muted = true;
    video.play();

    const videoTexture = new THREE.VideoTexture(video);
    const videoMaterial = new THREE.MeshBasicMaterial({ map: videoTexture });

    const videoGeometry = new THREE.PlaneGeometry(16, 9);
    const videoMesh = new THREE.Mesh(videoGeometry, videoMaterial);
    scene.add(videoMesh);

    // Pos camera
    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    gsap.to(video, {
      currentTime: video.duration || 1,
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={videoRef} style={{ height: "200vh" }} />;
};

export default ScrollAnimation;
