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
    const radiusBand = 0.15 + Math.random() * 0.32; // 15-47% of canvas half
    particles.push({
      angle: Math.random() * Math.PI * 2,
      radius: radiusBand,
      speed: (0.002 + Math.random() * 0.006) * (Math.random() > 0.5 ? 1 : -1),
      size: 2 + Math.random() * 4,
      color: pal.color,
      glowColor: pal.glow,
      glowSize: 8 + Math.random() * 16,
      orbitTilt: 0.5 + Math.random() * 0.5, // y squash 0.5–1.0
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
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      // Use 1x resolution for simplicity & performance
      canvas.width = w;
      canvas.height = h;
    };
    resize();
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

      // --- Orbit rings (faint) ---
      const ringRadii = [0.22, 0.30, 0.38, 0.46];
      ctx.strokeStyle = "rgba(241,197,109,0.08)";
      ctx.lineWidth = 0.5;
      for (const r of ringRadii) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, r * half * 2, r * half * 2 * 0.7, 0, 0, Math.PI * 2);
        ctx.stroke();
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
      const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, half * 0.55);
      centerGrad.addColorStop(0, "rgba(241,197,109,0.18)");
      centerGrad.addColorStop(0.3, "rgba(241,197,109,0.08)");
      centerGrad.addColorStop(0.6, "rgba(241,197,109,0.02)");
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