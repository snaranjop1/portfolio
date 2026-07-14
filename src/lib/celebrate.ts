import confetti from "canvas-confetti";

export function celebrateFromTopRight() {
  return confetti({
    particleCount: 80,
    spread: 70,
    startVelocity: 35,
    origin: { x: 0.92, y: 0.08 },
    colors: ["#4ade80", "#22c55e", "#f97316", "#fbbf24", "#ffffff"],
  });
}
