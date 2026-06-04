import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeHeroScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      1, // Aspect ratio will be maintained in parent container
      0.1,
      100
    );
    camera.position.z = 12;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(400, 400);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Geometries and Objects ---
    // 1. Torus Knot wireframe
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.45, 120, 16);
    
    const material = new THREE.MeshBasicMaterial({
      color: 0xFFD600, // Bright yellow
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // 2. Inner core sphere (glow effect)
    const innerGeo = new THREE.IcosahedronGeometry(0.8, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    // 3. Floating orbit dust
    const dustCount = 80;
    const dustGeo = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    const dustSpeeds = [];

    for (let i = 0; i < dustCount; i++) {
      // Position dust on shell surrounding the torus knot
      const radius = 2.5 + Math.random() * 1.5;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      dustPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      dustPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      dustPositions[i * 3 + 2] = radius * Math.cos(phi);

      dustSpeeds.push({
        orbitSpeed: 0.005 + Math.random() * 0.01,
        axisX: (Math.random() - 0.5),
        axisY: (Math.random() - 0.5),
        axisZ: (Math.random() - 0.5)
      });
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));

    // Simple canvas texture for circular dust
    const createCanvasTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 8;
      canvas.height = 8;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(4, 4, 3, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const dustTexture = createCanvasTexture();
    const dustMat = new THREE.PointsMaterial({
      size: 0.12,
      map: dustTexture,
      transparent: true,
      opacity: 0.6,
      color: 0xFFD600
    });

    const dustParticles = new THREE.Points(dustGeo, dustMat);
    scene.add(dustParticles);

    // --- Interactive Mouse ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = x * 0.003;
      targetY = y * 0.003;
    };

    window.addEventListener('mousemove', onMouseMove);

    // --- Animation Loop ---
    let animationFrameId;
    const animate = () => {
      // Smooth movement interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Base rotations
      torusKnot.rotation.y += 0.006;
      torusKnot.rotation.x += 0.004;

      innerSphere.rotation.y -= 0.004;

      dustParticles.rotation.y += 0.002;
      dustParticles.rotation.x += 0.001;

      // Apply mouse influence
      torusKnot.rotation.y += mouseX * 0.2;
      torusKnot.rotation.x += mouseY * 0.2;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // --- Handle Container Sizing ---
    const updateSize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(containerRef.current);
    updateSize();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      if (containerRef.current && renderer.domElement.parentNode) {
        containerRef.current.removeChild(renderer.domElement);
      }
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      dustTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '300px', 
        maxHeight: '450px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative'
      }} 
    />
  );
};

export default ThreeHeroScene;
