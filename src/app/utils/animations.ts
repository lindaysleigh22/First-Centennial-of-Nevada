// Global animation configuration for sophisticated lo-fi aesthetic
// Inspired by luxury automotive brands (Lexus, Mercedes) and warm modern coffee shops

export const animationConfig = {
  // Duration in seconds
  duration: {
    // Quick micro-interactions
    fast: 0.4,
    // Standard interactions
    normal: 0.8,
    // Emphasized movements
    slow: 1.2,
    // Page transitions and major reveals
    slowest: 2.0,
    // Ambient background elements
    ambient: 20,
  },

  // Easing curves for premium feel
  ease: {
    // Premium easing curve - ultra smooth
    premium: [0.25, 0.1, 0.25, 1] as const,
    // Standard easing
    standard: [0.4, 0, 0.2, 1] as const,
    // Smooth entry
    easeOut: [0.4, 0, 0.2, 1] as const,
    // Smooth exit
    easeIn: [0.4, 0, 1, 1] as const,
  },

  // Hover effects - Subtle and refined
  hover: {
    lift: -2, // pixels
    scale: 1.01,
    duration: 0.8,
  },

  // Scroll reveal animations
  reveal: {
    distance: 20, // pixels
    duration: 0.8,
    stagger: 0.15, // delay between items
  },

  // Floating/ambient animations
  float: {
    scale: [1, 1.05, 1] as const,
    opacity: [0.15, 0.25, 0.15] as const,
    duration: 22,
  },

  // Opacity values for layered elements
  opacity: {
    muted: 0.6,
    text: 0.7,
    textHover: 0.9,
    overlay: 0.15,
    overlayHover: 0.25,
  },
};

// Utility function for consistent transitions
export const getTransition = (
  duration: number = animationConfig.duration.normal
) => ({
  duration,
});
