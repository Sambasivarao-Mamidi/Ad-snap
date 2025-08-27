// ...existing code...
import AuroraBackground from './AuroraBackground';
import NeonParticlesBackground from './NeonParticlesBackground';

/**
 * Multi-layer animated background for HomePage.
 * Aurora gradient behind, neon particles in front, both fill viewport.
 */
export default function HomeBackgroundLayers() {
  return (
    <>
      {/* Aurora gradient background (behind) */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none">
        <AuroraBackground />
      </div>
      {/* Neon particles foreground (in front, but pointer-events-none) */}
      <div className="fixed inset-0 z-10 pointer-events-none select-none">
        <NeonParticlesBackground />
      </div>
    </>
  );
}
