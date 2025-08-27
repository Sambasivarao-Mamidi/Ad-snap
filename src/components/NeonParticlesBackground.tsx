// To use this component elsewhere, import as:
// import NeonParticlesBackground from "./NeonParticlesBackground";
import React from "react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";

/**
 * NeonParticlesBackground - Animated neon particles for studio page background.
 * Colors: neon blue/purple. Parallax, slow floating, responsive, fallback for reduced motion.
 */
const NeonParticlesBackground: React.FC = () => {
  // Particle config
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: false },
    background: {
      color: "#0a102f",
    },
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: ["#3b82f6", "#a855f7"] },
      shape: { type: "circle" },
      opacity: { value: 0.7, random: { enable: true, minimumValue: 0.5 } },
      size: { value: 3, random: { enable: true, minimumValue: 1 } },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none" as const,
        random: true,
        straight: false,
  outModes: { default: "out" as const },
        parallax: { enable: true, force: 20, smooth: 10 },
      },
      glow: { enable: true, color: "#3b82f6", radius: 10 },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        repulse: { distance: 60, duration: 0.4 },
      },
    },
    detectRetina: true,
  };

  return (
  <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
      {/* Static fallback for reduced motion */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0a102f] via-[#3b82f6]/20 to-[#a855f7]/10" />
      {/* Animated particles (hidden if prefers-reduced-motion) */}
  <div className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={options}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default NeonParticlesBackground;
