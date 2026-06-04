import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeHeroScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(400, 400);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // ─── LIGHTING ─────────────────────────────────────────────────────────────
    // Golden "Holy Light" directional beam
    const sunLight = new THREE.DirectionalLight(0xFFD600, 2.5);
    sunLight.position.set(5, 4, 5);
    scene.add(sunLight);

    // Blue-violet ambient mystery fill
    const mysteryFill = new THREE.PointLight(0x3D1C8A, 1.8, 30);
    mysteryFill.position.set(-6, -3, 2);
    scene.add(mysteryFill);

    // Deep dark ambient
    const ambient = new THREE.AmbientLight(0x0D0812, 1.2);
    scene.add(ambient);

    // ─── HELPER: Canvas Texture Factory ───────────────────────────────────────
    const makeCanvasTexture = (draw, w = 512, h = 256) => {
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      draw(c.getContext('2d'), w, h);
      const t = new THREE.CanvasTexture(c);
      t.minFilter = THREE.LinearFilter;
      return t;
    };

    // ─── MOON SURFACE TEXTURE ─────────────────────────────────────────────────
    const moonColorTex = makeCanvasTexture((ctx, w, h) => {
      ctx.fillStyle = '#1A1008';
      ctx.fillRect(0, 0, w, h);

      // Noise dust
      for (let i = 0; i < 8000; i++) {
        const x = Math.random() * w, y = Math.random() * h;
        const a = 0.02 + Math.random() * 0.08;
        ctx.fillStyle = Math.random() > 0.6
          ? `rgba(255,214,0,${a})` : `rgba(255,255,220,${a})`;
        ctx.fillRect(x, y, 1, 1);
      }

      // Craters
      for (let i = 0; i < 40; i++) {
        const x = Math.random() * w, y = Math.random() * h;
        const r = 3 + Math.random() * 24;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(12,6,3,0.92)'; ctx.fill();
        ctx.beginPath(); ctx.arc(x + r * 0.15, y + r * 0.15, r * 0.9, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255,214,0,0.3)'; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.beginPath(); ctx.arc(x, y, r * 0.55, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(24,14,8,0.8)'; ctx.fill();
      }

      // Mystical Ge'ez inscription rings on equator of texture
      ctx.font = 'bold 18px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = '#FFD600';
      ctx.shadowBlur = 6;
      const glyphs = ['ሀ','ለ','ሐ','መ','ሠ','ዘ','ዐ','የ','ጸ','✝','ሀ','ለ','ሐ','✝'];
      glyphs.forEach((g, i) => {
        const x = (i / glyphs.length) * w + (w / glyphs.length / 2);
        ctx.fillStyle = 'rgba(255,214,0,0.35)';
        ctx.fillText(g, x, h * 0.5);       // equator band
        ctx.fillStyle = 'rgba(255,255,255,0.12)';
        ctx.fillText(g, x, h * 0.25);      // upper band
        ctx.fillText(g, x, h * 0.75);      // lower band
      });
    });

    // ─── MOON BUMP MAP ─────────────────────────────────────────────────────────
    const moonBumpTex = makeCanvasTexture((ctx, w, h) => {
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 40; i++) {
        const x = Math.random() * w, y = Math.random() * h;
        const r = 3 + Math.random() * 24;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = '#c8c8c8'; ctx.fill();
        ctx.beginPath(); ctx.arc(x, y, r * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = '#2a2a2a'; ctx.fill();
      }
    });

    // ─── MOON SPHERE ──────────────────────────────────────────────────────────
    const moonGeo = new THREE.SphereGeometry(1.8, 80, 80);
    const moonMat = new THREE.MeshStandardMaterial({
      map: moonColorTex,
      bumpMap: moonBumpTex,
      bumpScale: 0.14,
      roughness: 0.88,
      metalness: 0.05
    });
    const moon = new THREE.Mesh(moonGeo, moonMat);
    scene.add(moon);

    // ─── ATMOSPHERE HALO ──────────────────────────────────────────────────────
    const haloGeo = new THREE.SphereGeometry(1.95, 48, 48);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xFFD600,
      transparent: true,
      opacity: 0.04,
      side: THREE.BackSide
    });
    scene.add(new THREE.Mesh(haloGeo, haloMat));

    // Outer wireframe grid — ancient map grid of the heavens
    const gridGeo = new THREE.SphereGeometry(2.05, 18, 18);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0xFFD600,
      wireframe: true,
      transparent: true,
      opacity: 0.05
    });
    scene.add(new THREE.Mesh(gridGeo, gridMat));

    // ─── ETHIOPIAN CROSS HOVERING ABOVE ───────────────────────────────────────
    const crossTex = makeCanvasTexture((ctx, w, h) => {
      ctx.fillStyle = 'transparent';
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2, cy = h / 2;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.45);
      g.addColorStop(0, 'rgba(255,214,0,0.95)');
      g.addColorStop(0.6, 'rgba(255,180,0,0.6)');
      g.addColorStop(1, 'rgba(255,214,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      ctx.font = `bold ${Math.floor(w * 0.55)}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = '#FFFFFF';
      ctx.shadowBlur = 20;
      ctx.fillStyle = '#FFD600';
      ctx.fillText('✝', cx, cy);
    }, 128, 128);

    const crossSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: crossTex, transparent: true, blending: THREE.AdditiveBlending })
    );
    crossSprite.scale.set(0.75, 0.75, 1);
    crossSprite.position.set(0, 2.55, 0);
    scene.add(crossSprite);

    // ─── GE'EZ GLYPH ORBITAL RING ─────────────────────────────────────────────
    // Alternating Orthodox + Software symbols on the orbital ring
    const geezGlyphs = ['ሀ','</>','ሐ','{}','✝','=>','ዘ','//','ጸ','&&','ዐ','01','ሠ','fn()','✝','[]'];
    const glyphSprites = [];

    geezGlyphs.forEach((glyph, i) => {
      const gtex = makeCanvasTexture((ctx, w, h) => {
        ctx.clearRect(0, 0, w, h);
        const grd = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w/2);
        grd.addColorStop(0, 'rgba(255,214,0,0.6)');
        grd.addColorStop(1, 'rgba(255,214,0,0)');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, w, h);
        ctx.font = `bold ${Math.floor(w*0.55)}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = '#FFD600';
        ctx.shadowBlur = 12;
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(glyph, w/2, h/2);
      }, 64, 64);

      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: gtex, transparent: true, blending: THREE.AdditiveBlending })
      );
      sprite.scale.set(0.35, 0.35, 1);
      scene.add(sprite);
      glyphSprites.push({ sprite, index: i, total: geezGlyphs.length });
    });

    // ─── INCENSE SMOKE PARTICLES ───────────────────────────────────────────────
    const smokeCount = 160;
    const smokeGeo = new THREE.BufferGeometry();
    const smokePos = new Float32Array(smokeCount * 3);
    const smokeSpeeds = [];

    const smokeTex = makeCanvasTexture((ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const g = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w/2);
      g.addColorStop(0, 'rgba(200,170,130,0.8)');
      g.addColorStop(1, 'rgba(100,60,20,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(w/2, h/2, w/2, 0, Math.PI * 2);
      ctx.fill();
    }, 32, 32);

    for (let i = 0; i < smokeCount; i++) {
      const r = 2.3 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      smokePos[i * 3] = r * Math.cos(theta) * Math.cos(phi);
      smokePos[i * 3 + 1] = r * Math.sin(phi);
      smokePos[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi);
      smokeSpeeds.push({
        vy: 0.006 + Math.random() * 0.008,
        drift: (Math.random() - 0.5) * 0.005,
        phase: Math.random() * Math.PI * 2
      });
    }
    smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokePos, 3));
    const smokeMat = new THREE.PointsMaterial({
      size: 0.22,
      map: smokeTex,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xD4A96A
    });
    const smokeParticles = new THREE.Points(smokeGeo, smokeMat);
    scene.add(smokeParticles);

    // ─── GOLDEN DUST ORBITAL ──────────────────────────────────────────────────
    const dustCount = 100;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    const dustOrbits = [];

    const dustSpriteTex = makeCanvasTexture((ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#FFD600';
      ctx.beginPath(); ctx.arc(w/2, h/2, w/2 - 1, 0, Math.PI * 2); ctx.fill();
    }, 8, 8);

    for (let i = 0; i < dustCount; i++) {
      const angle = (i / dustCount) * Math.PI * 2 + Math.random() * 0.3;
      const radius = 2.5 + Math.random() * 0.7;
      dustPos[i * 3] = Math.cos(angle) * radius;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 0.12;
      dustPos[i * 3 + 2] = Math.sin(angle) * radius;
      dustOrbits.push({ angle, radius, speed: 0.005 + Math.random() * 0.007 });
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 0.1, map: dustSpriteTex,
      transparent: true, opacity: 0.8,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    const dustRing = new THREE.Points(dustGeo, dustMat);
    dustRing.rotation.x = Math.PI / 7;
    scene.add(dustRing);

    // ─── CURSOR TRACKING ──────────────────────────────────────────────────────
    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
    const onMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      targetX = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 2;
      targetY = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ─── ANIMATION ────────────────────────────────────────────────────────────
    let animId;
    let t = 0;

    const animate = () => {
      t += 0.01;
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      // Moon rotation + cursor sway
      moon.rotation.y += 0.003 + mouseX * 0.006;
      moon.rotation.x += mouseY * 0.004;

      // Cross bob
      crossSprite.position.y = 2.55 + Math.sin(t * 1.6) * 0.08;
      crossSprite.material.opacity = 0.75 + Math.sin(t * 2.2) * 0.25;

      // Ge'ez glyphs orbit tilted ring
      glyphSprites.forEach(({ sprite, index, total }) => {
        const angle = (index / total) * Math.PI * 2 + t * 0.6;
        const tilt = Math.PI / 5; // 36° tilt — like incense smoke rising
        const rx = 3.1;
        const ry = 3.1 * Math.sin(tilt);
        sprite.position.x = Math.cos(angle) * rx;
        sprite.position.y = Math.sin(angle) * ry;
        sprite.position.z = Math.sin(angle) * rx * Math.cos(tilt);
        sprite.material.opacity = 0.4 + Math.abs(Math.sin(angle + t)) * 0.6;
      });

      // Incense smoke drift upward and reset
      const sPos = smokeGeo.attributes.position.array;
      for (let i = 0; i < smokeCount; i++) {
        const sp = smokeSpeeds[i];
        sPos[i * 3 + 1] += sp.vy;
        sPos[i * 3] += Math.sin(t + sp.phase) * sp.drift;
        if (sPos[i * 3 + 1] > 4.5) {
          sPos[i * 3 + 1] = -2.5;
          sPos[i * 3] = (Math.random() - 0.5) * 2;
        }
      }
      smokeGeo.attributes.position.needsUpdate = true;
      smokeParticles.rotation.y += 0.001;

      // Dust orbit
      const dPos = dustGeo.attributes.position.array;
      for (let i = 0; i < dustCount; i++) {
        const p = dustOrbits[i];
        p.angle += p.speed;
        dPos[i * 3] = Math.cos(p.angle) * p.radius;
        dPos[i * 3 + 2] = Math.sin(p.angle) * p.radius;
        dPos[i * 3 + 1] = Math.sin(t * 2 + p.angle) * 0.06;
      }
      dustGeo.attributes.position.needsUpdate = true;
      dustRing.rotation.y += 0.002;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    // ─── RESIZE ───────────────────────────────────────────────────────────────
    const updateSize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(updateSize);
    ro.observe(containerRef.current);
    updateSize();

    // ─── CLEANUP ──────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      if (containerRef.current?.contains(renderer.domElement))
        containerRef.current.removeChild(renderer.domElement);
      ro.disconnect();
      [moonGeo, haloGeo, gridGeo, smokeGeo, dustGeo, burstGeo].forEach(g => g?.dispose?.());
      [moonMat, haloMat, gridMat, smokeMat, dustMat].forEach(m => m?.dispose?.());
      [moonColorTex, moonBumpTex, crossTex, smokeTex, dustSpriteTex].forEach(tx => tx?.dispose?.());
      glyphSprites.forEach(({ sprite }) => sprite.material.map?.dispose() && sprite.material.dispose());
      crossSprite.material.dispose();
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
