import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 35;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- Particles Construction ---
    const particleCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const initialSpeeds = [];

    // Colors: Yellow (#FFD600), White (#FFFFFF), Warm Light Brown (#A1887F), Deep Bronze (#8D6E63)
    const colorPalette = [
      new THREE.Color('#FFD600'), // Yellow
      new THREE.Color('#FFFFFF'), // White
      new THREE.Color('#A1887F'), // Sand Brown
      new THREE.Color('#FFC107')  // Golden Yellow
    ];

    for (let i = 0; i < particleCount; i++) {
      // Scatter in a cylinder or wide sphere
      const x = (Math.random() - 0.5) * 80;
      const y = (Math.random() - 0.5) * 80;
      const z = (Math.random() - 0.5) * 60 - 20;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Select random color from palette
      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;

      // Speeds for float animation
      initialSpeeds.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02 + 0.015, // Drift slightly upwards
        z: (Math.random() - 0.5) * 0.01,
        ampX: Math.random() * 2,
        ampY: Math.random() * 2,
        freq: Math.random() * 0.005 + 0.002,
        phase: Math.random() * Math.PI * 2
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create a circular glowing particle texture programmatically
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();

    const material = new THREE.PointsMaterial({
      size: 0.45,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // --- Interactive Mouse Particle Bursts ---
    const burstCount = 100;
    const burstGeometry = new THREE.BufferGeometry();
    const burstPositions = new Float32Array(burstCount * 3);
    const burstColors = new Float32Array(burstCount * 3);
    const burstVelocities = [];

    // Fill hidden burst particles
    for (let i = 0; i < burstCount; i++) {
      burstPositions[i * 3] = 9999; // Keep them hidden out of screen
      burstPositions[i * 3 + 1] = 9999;
      burstPositions[i * 3 + 2] = 9999;

      const burstColor = new THREE.Color('#FFD600');
      burstColors[i * 3] = burstColor.r;
      burstColors[i * 3 + 1] = burstColor.g;
      burstColors[i * 3 + 2] = burstColor.b;

      burstVelocities.push({ x: 0, y: 0, z: 0 });
    }

    burstGeometry.setAttribute('position', new THREE.BufferAttribute(burstPositions, 3));
    burstGeometry.setAttribute('color', new THREE.BufferAttribute(burstColors, 3));

    const burstMaterial = new THREE.PointsMaterial({
      size: 0.6,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    });

    const burstSystem = new THREE.Points(burstGeometry, burstMaterial);
    scene.add(burstSystem);

    let activeBurstIndex = 0;
    let burstAge = 0;

    // Trigger click explosion
    const triggerExplosion = (screenX, screenY) => {
      // Project 2D coordinates back to 3D space
      const vector = new THREE.Vector3(
        (screenX / window.innerWidth) * 2 - 1,
        -(screenY / window.innerHeight) * 2 + 1,
        0.5
      );
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z; // Target the plane z=0
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      const posArray = burstGeometry.attributes.position.array;
      
      // Update burst positions and give them velocities
      for (let i = 0; i < burstCount; i++) {
        posArray[i * 3] = pos.x + (Math.random() - 0.5) * 0.5;
        posArray[i * 3 + 1] = pos.y + (Math.random() - 0.5) * 0.5;
        posArray[i * 3 + 2] = pos.z + (Math.random() - 0.5) * 0.5;

        // Spherical explosion velocities
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const speed = Math.random() * 0.18 + 0.08;

        burstVelocities[i] = {
          x: Math.sin(phi) * Math.cos(theta) * speed,
          y: Math.sin(phi) * Math.sin(theta) * speed,
          z: Math.cos(phi) * speed
        };
      }
      
      burstGeometry.attributes.position.needsUpdate = true;
      burstAge = 1.0; // Reset burst age (1.0 to 0.0 opacity)
    };

    // --- Interactive Mouse Move Parallax ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event) => {
      targetMouseX = (event.clientX / window.innerWidth) - 0.5;
      targetMouseY = (event.clientY / window.innerHeight) - 0.5;
    };

    const handleMouseClick = (event) => {
      triggerExplosion(event.clientX, event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);

    // --- Animation Loop ---
    let time = 0;
    let animationFrameId;

    const animate = () => {
      time += 0.5;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      // Parallax rotation of the whole system
      particleSystem.rotation.y = mouseX * 0.3;
      particleSystem.rotation.x = mouseY * 0.3;
      
      // Gentle constant rotation
      particleSystem.rotation.z += 0.0003;

      // Update base particles positions (drift & float)
      const posArray = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const speed = initialSpeeds[i];
        
        // Upward flow drift
        posArray[i * 3 + 1] += speed.y;
        
        // Wave-like floating on X/Z axis
        posArray[i * 3] += Math.sin(time * speed.freq + speed.phase) * 0.008;
        posArray[i * 3 + 2] += Math.cos(time * speed.freq + speed.phase) * 0.005;

        // Reset if particles go out of screen top
        if (posArray[i * 3 + 1] > 40) {
          posArray[i * 3 + 1] = -40;
          posArray[i * 3] = (Math.random() - 0.5) * 80;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // Update burst system if active
      if (burstAge > 0) {
        burstAge -= 0.015;
        const bPosArray = burstGeometry.attributes.position.array;
        
        for (let i = 0; i < burstCount; i++) {
          const vel = burstVelocities[i];
          bPosArray[i * 3] += vel.x;
          bPosArray[i * 3 + 1] += vel.y;
          bPosArray[i * 3 + 2] += vel.z;

          // Apply drag
          vel.x *= 0.95;
          vel.y *= 0.95;
          vel.z *= 0.95;
        }
        
        burstMaterial.opacity = Math.max(0, burstAge);
        burstGeometry.attributes.position.needsUpdate = true;
      } else {
        // Move burst out of bounds when finished to avoid processing
        const bPosArray = burstGeometry.attributes.position.array;
        if (bPosArray[0] !== 9999) {
          for (let i = 0; i < burstCount; i++) {
            bPosArray[i * 3] = 9999;
            bPosArray[i * 3 + 1] = 9999;
            bPosArray[i * 3 + 2] = 9999;
          }
          burstGeometry.attributes.position.needsUpdate = true;
        }
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // --- Responsive Resize ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
      window.removeEventListener('resize', handleResize);
      
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      
      burstGeometry.dispose();
      burstMaterial.dispose();
      
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="three-bg-canvas" />;
};

export default ThreeBackground;
