import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { animationConfig } from '@/app/utils/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSection({ children, delay = 0, className = '' }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: animationConfig.reveal.distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: animationConfig.reveal.duration,
        delay,
      }}
      className={className}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.div>
  );
}
