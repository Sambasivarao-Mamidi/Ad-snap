import AuroraBackground from './AuroraBackground';
import NeonParticlesBackground from './NeonParticlesBackground';

/**
 * StudioBackgroundLayers - Multi-layer animated background for StudioPage.
 * - One layer behind content (z-0)
 * - One subtle overlay layer in front (z-20, pointer-events-none, blend mode, opacity)
 */
const StudioBackgroundLayers = () => (
  <>
    {/* Behind content */}
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <AuroraBackground />
      <NeonParticlesBackground />
    </div>
    {/* Overlay in front of content for depth */}
    <div className="fixed inset-0 z-20 w-full h-full pointer-events-none mix-blend-screen opacity-30">
      <AuroraBackground />
      <NeonParticlesBackground />
    </div>
  </>
);

export default StudioBackgroundLayers;