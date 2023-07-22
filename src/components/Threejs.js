import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import React, { useEffect, useRef } from 'react';
import '../styles/Threejs.css';

const ThreeJSComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xffc0cb, roughness: 0.2, metelness: 1 });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const geometry2 = new THREE.TorusGeometry(5, 1.5, 8, 50);
    const material2 = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
    const torus2 = new THREE.Mesh(geometry2, material2);
    scene.add(torus2);

    const geometry3 = new THREE.TorusGeometry(20, 6, 32, 200);
    const material3 = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
    const torus3 = new THREE.Mesh(geometry3, material3);
    scene.add(torus3);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(0, 0, 50);
    scene.add(directionalLight);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth * 0.95, window.innerHeight * 0.95);
    renderer.setClearColor(0xffffff);

    camera.position.setZ(30);

    // const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      torus2.rotation.x -= 0.005;
      torus2.rotation.y -= 0.01;
      torus2.rotation.z -= 0.005;

      torus3.rotation.x -= 0.01;
      torus3.rotation.y -= 0.01;
      torus3.rotation.z -= 0.005;

      camera.position.z = 45;
    //   controls.update();

      // directionalLight.position.copy(camera.position);
    };

    animate();

    return () => {
      // Cleanup
      scene.remove(torus);
      scene.remove(torus2);
      scene.remove(torus3);
      renderer.dispose();
    };
  }, []);

  return <canvas className="App" ref={canvasRef} />;
};

export default ThreeJSComponent;
