import { useEffect, useRef } from "react";

interface Particle {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  color: string;
  glowColor: string;
  glowSize: number;
  orbitTilt: number; // slight y-squash to fake 3D tilt
  phase: number; // offset so particles aren't clumped
}

const PALETTE = [
  { color: "#F1C56D", glow: "rgba(241,197,109,0.6)" },   // gold
  { color: "#E8B85C", glow: "rgba(232,184,92,0.5)" },     // warm gold
  { color: "#FF6B6B", glow: "rgba(255,107,107,0.5)" },    // red
  { color: "#E84393", glow: "rgba(232,67,147,0.4)" },     // pink
  { color: "#2DD4A8", glow: "rgba(45,212,168,0.5)" },     // teal
  { color: "#4ADE80", glow: "rgba(74,222,128,0.5)" },     // green
  { color: "#60A5FA", glow: "rgba(96,165,250,0.5)" },     // blue
  { color: "#818CF8", glow: "rgba(129,140,248,0.45)" },   // indigo
  { color: "#C084FC", glow: "rgba(192,132,252,0.4)" },    // purple
  { color: "#FB923C", glow: "rgba(251,146,60,0.5)" },     // orange
  { color: "#F472B6", glow: "rgba(244,114,182,0.4)" },    // rose
  { color: "#34D399", glow: "rgba(52,211,153,0.45)" },    // emerald
];

function createParticles(count: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const pal = PALETTE[i % PALETTE.length];
    // Some particles orbit near center, others further out
    const radiusBand = Math.random() < 0.35
      ? 0.03 + Math.random() * 0.15   // 3-18% — inner/center region
      : 0.18 + Math.random() * 0.28;  // 18-46% — outer region
    particles.push({
      angle: Math.random() * Math.PI * 2,
      radius: radiusBand,
      speed: (0.003 + Math.random() * 0.008) * (Math.random() > 0.5 ? 1 : -1),
      size: 4 + Math.random() * 6,
      color: pal.color,
      glowColor: pal.glow,
      glowSize: 20 + Math.random() * 30,
      orbitTilt: 0.55 + Math.random() * 0.45, // y squash 0.55–1.0
      phase: Math.random() * Math.PI * 2,
    });
  }
  return particles;
}

export function SpinningOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>(createParticles(40));
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let running = true;
    let w = 0;
    let h = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.round(rect.width);
      h = Math.round(rect.height);
      if (w > 0 && h > 0) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    // Delay initial resize to ensure layout is computed
    const resizeTimer = setTimeout(resize, 100);
    window.addEventListener("resize", resize);

    const draw = () => {
      if (!running) return;
      if (w === 0 || h === 0) {
        resize();
        animRef.current = requestAnimationFrame(draw);
        return;
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      const cx = w / 2;
      const cy = h / 2;
      const half = Math.min(cx, cy);

      ctx.clearRect(0, 0, w, h);

      // --- Outer circular rings (prominent) ---
      const outerRings = [0.92, 0.85, 0.78, 0.72];
      for (let i = 0; i < outerRings.length; i++) {
        const r = outerRings[i] * half;
        const alpha = i === 0 ? 0.5 : i === 1 ? 0.35 : 0.2;
        ctx.strokeStyle = `rgba(241,197,109,${alpha})`;
        ctx.lineWidth = i === 0 ? 1.8 : i === 1 ? 1.2 : 0.8;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // --- Tick marks on outermost ring ---
      const outerR = outerRings[0] * half;
      ctx.strokeStyle = "rgba(241,197,109,0.4)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 72; i++) {
        const a = (i / 72) * Math.PI * 2;
        const tickLen = i % 9 === 0 ? 8 : 3;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * outerR, cy + Math.sin(a) * outerR);
        ctx.lineTo(cx + Math.cos(a) * (outerR - tickLen), cy + Math.sin(a) * (outerR - tickLen));
        ctx.stroke();
      }

      // --- Planetary tilted orbit ellipses (prominent) ---
      const orbitConfigs = [
        { rx: 0.65, ry: 0.25, rot: -0.4, alpha: 0.4, lw: 1.5 },
        { rx: 0.58, ry: 0.35, rot: 0.3, alpha: 0.35, lw: 1.3 },
        { rx: 0.50, ry: 0.20, rot: -0.7, alpha: 0.3, lw: 1.2 },
        { rx: 0.70, ry: 0.30, rot: 0.6, alpha: 0.25, lw: 1.0 },
        { rx: 0.45, ry: 0.40, rot: -0.15, alpha: 0.3, lw: 1.1 },
        { rx: 0.60, ry: 0.18, rot: 0.9, alpha: 0.22, lw: 0.9 },
      ];
      for (const o of orbitConfigs) {
        ctx.strokeStyle = `rgba(241,197,109,${o.alpha})`;
        ctx.lineWidth = o.lw;
        ctx.beginPath();
        ctx.ellipse(cx, cy, o.rx * half, o.ry * half, o.rot, 0, Math.PI * 2);
        ctx.stroke();
      }

      // --- Meridian / longitude arcs ---
      const meridians = [-1.2, -0.8, -0.4, 0, 0.4, 0.8, 1.2];
      for (const rot of meridians) {
        ctx.strokeStyle = "rgba(241,197,109,0.2)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.ellipse(cx, cy, half * 0.28, half * 0.55, rot, 0, Math.PI * 2);
        ctx.stroke();
      }

      // --- Cross / axis lines through center ---
      ctx.strokeStyle = "rgba(241,197,109,0.25)";
      ctx.lineWidth = 0.8;
      // Vertical
      ctx.beginPath();
      ctx.moveTo(cx, cy - half * 0.7);
      ctx.lineTo(cx, cy + half * 0.7);
      ctx.stroke();
      // Horizontal
      ctx.beginPath();
      ctx.moveTo(cx - half * 0.7, cy);
      ctx.lineTo(cx + half * 0.7, cy);
      ctx.stroke();
      // Diagonals
      ctx.strokeStyle = "rgba(241,197,109,0.15)";
      ctx.beginPath();
      ctx.moveTo(cx - half * 0.5, cy - half * 0.5);
      ctx.lineTo(cx + half * 0.5, cy + half * 0.5);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + half * 0.5, cy - half * 0.5);
      ctx.lineTo(cx - half * 0.5, cy + half * 0.5);
      ctx.stroke();

      // --- Small diamond markers at cardinal points ---
      const diamondSize = 5;
      ctx.fillStyle = "rgba(241,197,109,0.6)";
      for (const a of [0, Math.PI / 2, Math.PI, Math.PI * 1.5]) {
        const dr = outerRings[1] * half;
        const dx = cx + Math.cos(a) * dr;
        const dy = cy + Math.sin(a) * dr;
        ctx.beginPath();
        ctx.moveTo(dx, dy - diamondSize);
        ctx.lineTo(dx + diamondSize * 0.6, dy);
        ctx.lineTo(dx, dy + diamondSize);
        ctx.lineTo(dx - diamondSize * 0.6, dy);
        ctx.closePath();
        ctx.fill();
      }

      // --- Constellation lines (connect nearby particles) ---
      const particles = particlesRef.current;
      const positions: { x: number; y: number }[] = [];
      for (const p of particles) {
        const px = cx + Math.cos(p.angle) * p.radius * half * 2;
        const py = cy + Math.sin(p.angle) * p.radius * half * 2 * p.orbitTilt;
        positions.push({ x: px, y: py });
      }

      ctx.strokeStyle = "rgba(241,197,109,0.06)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const dx = positions[i].x - positions[j].x;
          const dy = positions[i].y - positions[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < half * 0.45) {
            const alpha = 1 - dist / (half * 0.45);
            ctx.strokeStyle = `rgba(241,197,109,${(0.07 * alpha).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(positions[i].x, positions[i].y);
            ctx.lineTo(positions[j].x, positions[j].y);
            ctx.stroke();
          }
        }
      }

      // --- Center glow ---
      const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, half * 0.65);
      centerGrad.addColorStop(0, "rgba(241,197,109,0.25)");
      centerGrad.addColorStop(0.2, "rgba(241,197,109,0.12)");
      centerGrad.addColorStop(0.5, "rgba(241,197,109,0.04)");
      centerGrad.addColorStop(1, "transparent");
      ctx.fillStyle = centerGrad;
      ctx.fillRect(0, 0, w, h);

      // --- Particles ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const px = positions[i].x;
        const py = positions[i].y;

        // Glow
        const grad = ctx.createRadialGradient(px, py, 0, px, py, p.glowSize);
        grad.addColorStop(0, p.glowColor);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, p.glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Advance angle
        p.angle += p.speed;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(animRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}