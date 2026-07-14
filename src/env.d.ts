/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_UMAMI_SRC?: string;
  readonly PUBLIC_UMAMI_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "canvas-confetti" {
  interface Options {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    ticks?: number;
    origin?: { x?: number; y?: number };
    colors?: string[];
    shapes?: Array<"square" | "circle" | "star">;
    scalar?: number;
    zIndex?: number;
    disableForReducedMotion?: boolean;
  }

  export default function confetti(
    options?: Options,
  ): Promise<undefined> | null;
}
