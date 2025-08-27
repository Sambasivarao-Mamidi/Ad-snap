import { motion } from "framer-motion";
import React from "react";

/**
 * AuroraBackground - Animated aurora gradient ribbons for homepage background.
 * Colors: deep navy, neon blue (#3b82f6), purple (#a855f7), soft teal.
 * Responsive, elegant, subtle behind content. Fallback for reduced motion.
 */
const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden">
      {/* Static fallback for reduced motion */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0a102f] via-[#3b82f6]/30 to-[#a855f7]/20" />
      {/* Animated ribbons (hidden if prefers-reduced-motion) */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, #3b82f6 0%, transparent 70%)," +
            "radial-gradient(ellipse 60% 40% at 80% 70%, #a855f7 0%, transparent 70%)," +
            "radial-gradient(ellipse 50% 30% at 50% 80%, #2dd4bf 0%, transparent 70%)",
          mixBlendMode: "screen",
          filter: "blur(32px)",
          opacity: 0.7,
        }}
      >
        {/* Aurora ribbons using CSS keyframes */}
        <div className="absolute w-full h-full animate-aurora-ribbon" />
      </motion.div>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-aurora-ribbon {
            animation: none !important;
          }
        }
        .animate-aurora-ribbon {
          animation: auroraRibbon 12s ease-in-out infinite alternate;
        }
        @keyframes auroraRibbon {
          0% { transform: translateY(0) scaleX(1); opacity: 0.8; }
          50% { transform: translateY(-40px) scaleX(1.1); opacity: 1; }
          100% { transform: translateY(0) scaleX(1); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default AuroraBackground;
