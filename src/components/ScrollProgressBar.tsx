import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-black/5 dark:bg-white/5 pointer-events-none"
      role="progressbar"
      aria-label="Page scroll progress"
    >
      <motion.div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 origin-left shadow-[0_0_10px_rgba(249,115,22,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgressBar;
