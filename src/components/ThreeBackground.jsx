import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // ─── SYMBOL SETS ─────────────────────────────────────────────────────────
    // Orthodox Ge'ez spiritual symbols
    const orthodoxSymbols = [
      { char: '✝',  color: '#FFD600', size: 28, glow: '#FFD600' },
      { char: 'ሀ',  color: '#FFFFFF', size: 24, glow: '#FFD600' },
      { char: 'ለ',  color: '#D4CDC5', size: 22, glow: '#FFD600' },
      { char: 'ሐ',  color: '#FFFFFF', size: 22, glow: '#FFD600' },
      { char: 'መ',  color: '#D4CDC5', size: 22, glow: '#FFD600' },
      { char: 'ዘ',  color: '#FFFFFF', size: 22, glow: '#FFD600' },
      { char: 'ዐ',  color: '#D4CDC5', size: 22, glow: '#FFD600' },
      { char: 'ጸ',  color: '#FFFFFF', size: 22, glow: '#FFD600' },
      { char: '⛪',  color: '#FFD600', size: 20, glow: '#FFD600' },
    ];

    // Software / coding symbols
    const codeSymbols = [
      { char: '</>',   color: '#FFD600', size: 16, glow: '#FFD600' },
      { char: '{}',    color: '#FFFFFF', size: 20, glow: '#88CFFF' },
      { char: '=>',    color: '#FFD600', size: 18, glow: '#FFD600' },
      { char: '//',    color: '#8E8076', size: 16, glow: '#FFFFFF' },
      { char: '&&',    color: '#FFFFFF', size: 18, glow: '#88CFFF' },
      { char: '01',    color: '#FFD600', size: 16, glow: '#FFD600' },
      { char: 'fn()',  color: '#D4CDC5', size: 14, glow: '#FFFFFF' },
      { char: '#!',    color: '#FFFFFF', size: 18, glow: '#88CFFF' },
      { char: '[]',    color: '#FFD600', size: 18, glow: '#FFD600' },
      { char: '::',    color: '#8E8076', size: 16, glow: '#FFFFFF' },
    ];

    const allSymbols = [...orthodoxSymbols, ...codeSymbols];

    // ─── BUILD ONE SPRITE TEXTURE PER SYMBOL ─────────────────────────────────
    const makeGlyphTexture = ({ char, color, size, glow }) => {
      const canvas = document.createElement('canvas');
      canvas.width = 80; canvas.height = 80;
      const ctx = canvas.getContext('2d');

      // Radial glow halo
      const grad = ctx.createRadialGradient(40, 40, 0, 40, 40, 38);
      grad.addColorStop(0,   `${glow}44`);
      grad.addColorStop(0.5, `${glow}11`);
      grad.addColorStop(1,   `${glow}00`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 80, 80);

      // Glow pass
      ctx.font = `bold ${size}px "Courier New", monospace, serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = glow;
      ctx.shadowBlur = 12;
      ctx.fillStyle = color;
      ctx.fillText(char, 40, 40);

      // Crisp top pass
      ctx.shadowBlur = 0;
      ctx.fillStyle = color;
      ctx.fillText(char, 40, 40);

      const tex = new THREE.CanvasTexture(canvas);
      tex.minFilter = THREE.LinearFilter;
      return tex;
    };

    // ─── CREATE ONE PARTICLE GROUP PER SYMBOL ────────────────────────────────
    const particlesPerGroup = 45;
    const particleSystems = [];

    allSymbols.forEach((sym) => {
      const tex = makeGlyphTexture(sym);
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(particlesPerGroup * 3);
      const speeds = [];

      for (let i = 0; i < particlesPerGroup; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 95;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 95;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 65 - 20;

        speeds.push({
          vy:    0.008 + Math.random() * 0.012,
          swayX: (Math.random() - 0.5) * 0.008,
          freq:  Math.random() * 0.004 + 0.002,
          phase: Math.random() * Math.PI * 2
        });
      }

      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const mat = new THREE.PointsMaterial({
        size: 1.8,
        map: tex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: 0.82,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);
      particleSystems.push({ points, geo, mat, tex, speeds });
    });

    // ─── CLICK BURST — golden crosses + </> signs ────────────────────────────
    const burstSymbols = ['✝', '</>', '{}', '=>', 'ጸ'];
    const burstSystems = burstSymbols.map((char) => {
      const color = char === '✝' || char === 'ጸ' ? '#FFD600' : '#FFFFFF';
      const tex = makeGlyphTexture({ char, color, size: 22, glow: '#FFD600' });
      const bCount = 20;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(bCount * 3);
      for (let i = 0; i < bCount; i++) {
        pos[i * 3] = 9999; pos[i * 3 + 1] = 9999; pos[i * 3 + 2] = 9999;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        size: 2.2, map: tex, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false
      });
      const points = new THREE.Points(geo, mat);
      scene.add(points);
      return { points, geo, mat, tex, bCount, vels: Array.from({ length: bCount }, () => ({ x: 0, y: 0, z: 0 })) };
    });

    let burstAge = 0;

    const triggerBurst = (sx, sy) => {
      const v = new THREE.Vector3(
        (sx / window.innerWidth) * 2 - 1,
        -(sy / window.innerHeight) * 2 + 1,
        0.5
      );
      v.unproject(camera);
      const dir = v.sub(camera.position).normalize();
      const dist = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(dist));

      burstSystems.forEach(bs => {
        const pa = bs.geo.attributes.position.array;
        for (let i = 0; i < bs.bCount; i++) {
          pa[i * 3]     = pos.x + (Math.random() - 0.5) * 0.4;
          pa[i * 3 + 1] = pos.y + (Math.random() - 0.5) * 0.4;
          pa[i * 3 + 2] = pos.z;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(Math.random() * 2 - 1);
          const spd = 0.06 + Math.random() * 0.18;
          bs.vels[i] = {
            x: Math.sin(phi) * Math.cos(theta) * spd,
            y: Math.sin(phi) * Math.sin(theta) * spd,
            z: Math.cos(phi) * spd
          };
        }
        bs.geo.attributes.position.needsUpdate = true;
        bs.mat.opacity = 1.0;
      });
      burstAge = 1.0;
    };

    // ─── MOUSE ───────────────────────────────────────────────────────────────
    let mx = 0, my = 0, txm = 0, tym = 0;
    const onMove = e => {
      txm = e.clientX / window.innerWidth - 0.5;
      tym = e.clientY / window.innerHeight - 0.5;
    };
    const onClick = e => triggerBurst(e.clientX, e.clientY);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);

    // ─── ANIMATE ─────────────────────────────────────────────────────────────
    let t = 0, rafId;

    const animate = () => {
      t += 0.5;
      mx += (txm - mx) * 0.06;
      my += (tym - my) * 0.06;

      particleSystems.forEach(({ points, geo, speeds }) => {
        points.rotation.y = mx * 0.28;
        points.rotation.x = my * 0.28;
        points.rotation.z += 0.00018;

        const pa = geo.attributes.position.array;
        for (let i = 0; i < particlesPerGroup; i++) {
          const sp = speeds[i];
          pa[i * 3 + 1] += sp.vy;
          pa[i * 3]     += Math.sin(t * sp.freq + sp.phase) * 0.004;
          if (pa[i * 3 + 1] > 48) {
            pa[i * 3 + 1] = -48;
            pa[i * 3]     = (Math.random() - 0.5) * 95;
          }
        }
        geo.attributes.position.needsUpdate = true;
      });

      // Burst update
      if (burstAge > 0) {
        burstAge -= 0.016;
        burstSystems.forEach(bs => {
          const pa = bs.geo.attributes.position.array;
          for (let i = 0; i < bs.bCount; i++) {
            pa[i * 3]     += bs.vels[i].x;
            pa[i * 3 + 1] += bs.vels[i].y;
            pa[i * 3 + 2] += bs.vels[i].z;
            bs.vels[i].x *= 0.94;
            bs.vels[i].y *= 0.94;
            bs.vels[i].z *= 0.94;
          }
          bs.mat.opacity = Math.max(0, burstAge);
          bs.geo.attributes.position.needsUpdate = true;
        });
      } else {
        burstSystems.forEach(bs => {
          const pa = bs.geo.attributes.position.array;
          if (pa[0] !== 9999) {
            for (let i = 0; i < bs.bCount; i++) {
              pa[i * 3] = 9999; pa[i * 3 + 1] = 9999; pa[i * 3 + 2] = 9999;
            }
            bs.geo.attributes.position.needsUpdate = true;
          }
        });
      }

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // ─── CLEANUP ─────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);
      particleSystems.forEach(({ geo, mat, tex }) => { geo.dispose(); mat.dispose(); tex.dispose(); });
      burstSystems.forEach(({ geo, mat, tex }) => { geo.dispose(); mat.dispose(); tex.dispose(); });
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="three-bg-canvas" />;
};

export default ThreeBackground;
