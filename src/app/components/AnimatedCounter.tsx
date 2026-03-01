import { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  ticker?: boolean;
}

export function AnimatedCounter({ end, duration = 2, suffix = '', prefix = '', className = '', ticker = false }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: !ticker, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);
      setCount(currentCount);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(end);
        
        // If ticker mode, restart after a brief pause
        if (ticker) {
          setTimeout(() => {
            startTime = null;
            setCount(0);
            animationId = requestAnimationFrame(animate);
          }, 1500);
        }
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [end, duration, isInView, ticker]);

  return (
    <div ref={ref} className={className}>
      {prefix && <span>{prefix}</span>}
      <span>{count}</span>
      {suffix && <span>{suffix}</span>}
    </div>
  );
}
