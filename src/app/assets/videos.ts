/**
 * VIDEO ASSETS REGISTRY
 * ======================
 * Central management for all video assets across the website.
 * All videos are hosted on Vimeo for reliable, professional delivery.
 * 
 * Usage Example:
 * ```tsx
 * import { videos } from '@/app/assets/videos';
 * 
 * <iframe
 *   src={videos.home.hero}
 *   allow="autoplay; fullscreen"
 *   allowFullScreen
 * />
 * ```
 * 
 * VIMEO VIDEO IDs:
 * ----------------
 * - Home Hero: 1165876717
 * - About: 1165876703
 * - ClosingLock Demo: 1165876711
 * - Zoccam: 1165876887
 * - Mobile Farming App: 1165876918
 * 
 * DEVELOPER HANDOFF NOTES:
 * ------------------------
 * To replace with self-hosted videos:
 * 1. Place MP4 files in `/public/videos/` directory
 * 2. Update URLs below to: `/videos/filename.mp4`
 * 3. Replace <iframe> tags with native <video> tags
 * 4. Maintain autoplay, loop, and muted attributes
 */

export const videos = {
  // Home page hero video
  home: {
    hero: 'https://player.vimeo.com/video/1165876717?autoplay=1&loop=1&muted=1&background=1',
    heroEmbed: 'https://player.vimeo.com/video/1165876717',
  },

  // About page video
  about: {
    hero: 'https://player.vimeo.com/video/1165876703?autoplay=1&loop=1&muted=1&background=1&controls=0',
    heroEmbed: 'https://player.vimeo.com/video/1165876703',
  },

  // ClosingLock page video
  closingLock: {
    demo: 'https://player.vimeo.com/video/1165876711?autoplay=1&loop=1&muted=1&background=1&controls=0',
    demoEmbed: 'https://player.vimeo.com/video/1165876711',
  },

  // Zoccam page
  zoccam: {
    demo: 'https://player.vimeo.com/video/1165876887?autoplay=1&loop=1&muted=1&background=1',
    demoEmbed: 'https://player.vimeo.com/video/1165876887',
  },

  // Mobile Farming App page
  mobileFarmingApp: {
    demo: 'https://player.vimeo.com/video/1165876918?autoplay=1&loop=1&muted=1&background=1&controls=0',
    demoEmbed: 'https://player.vimeo.com/video/1165876918',
  },
} as const;

/**
 * VIMEO EMBED CONFIGURATION
 * ==========================
 * URL Parameters:
 * - autoplay=1: Auto-play video on load
 * - loop=1: Loop video continuously
 * - muted=1: Mute audio (required for autoplay in most browsers)
 * - background=1: Hide all controls (background video mode)
 * - controls=0: Alternative way to hide controls
 * 
 * For interactive videos (with controls):
 * Remove `background=1` and `muted=1` parameters
 */
