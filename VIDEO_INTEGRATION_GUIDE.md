# VIDEO INTEGRATION - DEVELOPER HANDOFF GUIDE
**Updated:** February 18, 2026  
**Integration Status:** ✅ Complete - All videos now using Vimeo hosting

---

## 📹 VIDEO SUMMARY

All 5 HD MP4 videos have been successfully integrated into the website using Vimeo hosting. The videos are managed centrally through `/src/app/assets/videos.ts` for easy maintenance.

### Videos Integrated:

1. **Home Page Hero** - Vimeo ID: `1165876717`
2. **About Page** - Vimeo ID: `1165876703`
3. **ClosingLock Demo** - Vimeo ID: `1165876711`
4. **Zoccam** - Vimeo ID: `1165876887`
5. **Mobile Farming App** - Vimeo ID: `1165876918`

---

## 🗂️ FILE LOCATIONS

### Central Video Registry
**File:** `/src/app/assets/videos.ts`  
**Purpose:** Single source of truth for all video URLs across the website

### Pages Using Videos:
- `/src/app/components/pages/Home.tsx` - Hero video background
- `/src/app/components/pages/About.tsx` - Hero video background
- `/src/app/components/pages/ClosingLock-new.tsx` - ClosingLock platform demo video (iframe embed)
- `/src/app/components/pages/Zoccam.tsx` - Zoccam platform demo video (iframe embed)
- `/src/app/components/pages/MobileFarmingApp.tsx` - Mobile app demo video (iframe embed)

### Pages WITHOUT Videos:
- `/src/app/components/pages/ClosingSoftware.tsx` - Uses static images only (no video)
- `/src/app/components/pages/Corefact.tsx` - No video currently

---

## 🔄 HOW TO REPLACE WITH SELF-HOSTED VIDEOS

When you're ready to host videos on your own infrastructure:

### Step 1: Prepare Video Files
1. Place all 5 MP4 files in `/public/videos/` directory
2. Recommended naming:
   ```
   /public/videos/home-hero.mp4
   /public/videos/about-hero.mp4
   /public/videos/closinglock-demo.mp4
   /public/videos/zoccam-demo.mp4
   /public/videos/mobile-farming-demo.mp4
   ```

### Step 2: Update Central Registry
Edit `/src/app/assets/videos.ts`:

```typescript
export const videos = {
  home: {
    hero: '/videos/home-hero.mp4',
  },
  about: {
    hero: '/videos/about-hero.mp4',
  },
  closingLock: {
    demo: '/videos/closinglock-demo.mp4',
  },
  zoccam: {
    demo: '/videos/zoccam-demo.mp4',
  },
  mobileFarmingApp: {
    demo: '/videos/mobile-farming-demo.mp4',
  },
} as const;
```

### Step 3: Update Video Components
**Change iframe embeds to native `<video>` tags:**

**Before (iframe):**
```tsx
<iframe
  src={videos.home.hero}
  allow="autoplay; fullscreen"
  allowFullScreen
/>
```

**After (native video):**
```tsx
<video
  src={videos.home.hero}
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
/>
```

**Benefits of native `<video>` tag:**
- ✅ Faster loading
- ✅ Better performance
- ✅ No third-party dependencies
- ✅ Full control over playback

---

## 🎬 CURRENT VIMEO CONFIGURATION

### Video Parameters in Use:
- `autoplay=1` - Auto-play on page load
- `loop=1` - Loop continuously
- `muted=1` - Muted audio (required for autoplay)
- `background=1` - Hide all player controls (background mode)
- `controls=0` - Alternative method to hide controls

### Example URLs:
```
https://player.vimeo.com/video/1165876717?autoplay=1&loop=1&muted=1&background=1
```

---

## 📝 NOTES FOR DEVELOPER

### Why Vimeo?
- Professional video hosting with reliable CDN
- No storage/bandwidth costs for the client during development
- Easy to test and iterate before self-hosting
- Higher quality video delivery than most free alternatives

### Migration Checklist
When moving to self-hosted videos:

- [ ] Upload all 5 MP4 files to `/public/videos/`
- [ ] Update `/src/app/assets/videos.ts` with new paths
- [ ] Replace all `<iframe>` tags with `<video>` tags
- [ ] Test autoplay, loop, and muted attributes work correctly
- [ ] Verify mobile responsiveness and playback
- [ ] Optimize video file sizes for web delivery (H.264 codec recommended)
- [ ] Consider adding poster images for faster perceived load times
- [ ] Test across browsers (Chrome, Safari, Firefox, Edge)

### Video Optimization Tips
- **Codec:** H.264 (maximum compatibility)
- **Resolution:** 1080p for desktop, 720p for mobile
- **Bitrate:** 2-5 Mbps for good quality/filesize balance
- **Format:** MP4 (most universally supported)
- **Audio:** Remove if not needed (smaller file size)

---

## ⚠️ IMPORTANT CLARIFICATIONS

### Video Mapping (CORRECTED):
1. **Home Hero** → `videos.home.hero` → Vimeo 1165876717
2. **About Page** → `videos.about.hero` → Vimeo 1165876703
3. **ClosingLock Demo** → `videos.closingLock.demo` → Vimeo 1165876711 ✅
4. **Zoccam** → `videos.zoccam.demo` → Vimeo 1165876887
5. **Mobile Farming App** → `videos.mobileFarmingApp.demo` → Vimeo 1165876918

### ❌ SoftPro/Closing Software Page:
- **Does NOT have a video**
- Uses static images only (`professionalTeamImage`, `secureLoginImage`)
- The ClosingLockDemo video (1165876711) is for the **ClosingLock page**, not SoftPro

---

## 🚀 CURRENT STATUS

**✅ All videos are functional and working**  
**✅ Centrally managed through `/src/app/assets/videos.ts`**  
**✅ Easy one-file update for future changes**  
**✅ Ready for tomorrow's presentation**  
**✅ Correct video assignments confirmed**  

---

## 🔗 VIMEO VIDEO LINKS

For reference or if you need to re-upload:

1. Home Hero: https://vimeo.com/1165876717
2. About Page: https://vimeo.com/1165876703
3. ClosingLock Demo: https://vimeo.com/1165876711
4. Zoccam Demo: https://vimeo.com/1165876887
5. Mobile Farming: https://vimeo.com/1165876918

---

**Questions?** Contact Lindsay Leigh Smith (Designer & Developer)
