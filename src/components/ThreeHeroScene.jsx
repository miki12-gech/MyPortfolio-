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
      1,
      0.1,
      100
    );
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(400, 400);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Lighting (Crucial for Moon Craters) ---
    // Warm golden directional light (Sunlight)
    const dirLight = new THREE.DirectionalLight(0xFFD600, 2.2);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    // Soft white point light for rim lighting / fill
    const pointLight = new THREE.PointLight(0xFFFFFF, 1.5, 30);
    pointLight.position.set(-5, -2, 2);
    scene.add(pointLight);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x221510, 0.8);
    scene.add(ambientLight);

    // --- Procedural Textures ---
    // 1. Color texture for moon craters
    const createMoonTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      
      // Base dark chocolate tone
      ctx.fillStyle = '#221510';
      ctx.fillRect(0, 0, 512, 256);
      
      // Add subtle noise/dust
      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 256;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255, 214, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
        ctx.fillRect(x, y, 1, 1);
      }

      // Draw craters
      for (let i = 0; i < 35; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 256;
        const r = 4 + Math.random() * 20;
        
        // Shadow/depth color
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(18, 10, 7, 0.9)';
        ctx.fill();

        // Rim highlight
        ctx.beginPath();
        ctx.arc(x + r * 0.15, y + r * 0.15, r * 0.9, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 214, 0, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Secondary crater floor highlight
        ctx.beginPath();
        ctx.arc(x - r * 0.1, y - r * 0.1, r * 0.65, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 21, 16, 0.7)';
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    // 2. Bump map for physical 3D crater heights
    const createMoonBumpMap = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      
      // Neutral gray background
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, 512, 256);
      
      for (let i = 0; i < 35; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 256;
        const r = 4 + Math.random() * 20;
        
        // Rim (highest bump)
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = '#cccccc';
        ctx.fill();
        
        // Basin (lowest depth)
        ctx.beginPath();
        ctx.arc(x, y, r * 0.85, 0, Math.PI * 2);
        ctx.fillStyle = '#333333';
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const moonColor = createMoonTexture();
    const moonBump = createMoonBumpMap();

    // --- 3D Moon Object ---
    const geometry = new THREE.SphereGeometry(1.8, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: moonColor,
      bumpMap: moonBump,
      bumpScale: 0.12,
      roughness: 0.85,
      metalness: 0.1
    });
    
    const moon = new THREE.Mesh(geometry, material);
    scene.add(moon);

    // Subtle holographic outer glow wireframe ring
    const glowGeo = new THREE.SphereGeometry(1.85, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xFFD600,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    const moonGlow = new THREE.Mesh(glowGeo, glowMat);
    scene.add(moonGlow);

    // --- Orbiting Moon Dust Particles ---
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const orbits = [];

    for (let i = 0; i < particleCount; i++) {
      // Setup particles in a beautiful flat tilt orbital ring
      const angle = (i / particleCount) * Math.PI * 2 + Math.random() * 0.2;
      const radius = 2.6 + Math.random() * 0.8;
      
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 0.15; // thin ring
      const z = Math.sin(angle) * radius;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      orbits.push({
        angle,
        radius,
        speed: 0.004 + Math.random() * 0.006,
        yAmplitude: 0.05 + Math.random() * 0.1
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Circle texture for orbital dust particles
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 8;
      canvas.height = 8;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#FFD600';
      ctx.beginPath();
      ctx.arc(4, 4, 3, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();
    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      color: 0xFFD600
    });

    const orbitRing = new THREE.Points(particleGeo, particleMat);
    // Tilt the whole ring slightly for asthetic value (30 degrees)
    orbitRing.rotation.x = Math.PI / 6;
    orbitRing.rotation.z = Math.PI / 12;
    scene.add(orbitRing);

    // --- Interactive Cursor Tracking ---
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
    let time = 0;

    const animate = () => {
      time += 0.05;

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate moon sphere slowly
      moon.rotation.y += 0.004;
      moon.rotation.x = 0.1; // slight offset tilt

      // Counter-rotate glow mesh
      moonGlow.rotation.y -= 0.002;

      // Apply mouse gravity sway to the Moon
      moon.rotation.y += mouseX * 0.15;
      moon.rotation.x += mouseY * 0.15;
      moonGlow.rotation.y += mouseX * 0.15;
      moonGlow.rotation.x += mouseY * 0.15;

      // Update orbital ring particles
      const posArray = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const p = orbits[i];
        p.angle += p.speed;
        
        // Orbital X-Z rotation
        posArray[i * 3] = Math.cos(p.angle) * p.radius;
        posArray[i * 3 + 2] = Math.sin(p.angle) * p.radius;
        // Minor float ripple height
        posArray[i * 3 + 1] = Math.sin(time + p.angle) * p.yAmplitude;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Spin the entire orbit ring system
      orbitRing.rotation.y += 0.003;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // --- Resize Observer ---
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
      glowGeo.dispose();
      glowMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      
      moonColor.dispose();
      moonBump.dispose();
      particleTexture.dispose();
      
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
