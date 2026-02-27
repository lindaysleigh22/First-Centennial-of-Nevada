# Video Hosting Guide - First Centennial Title of Nevada

## 🎥 Making Streamable Videos Permanent

This guide explains how to replace temporary Streamable videos with permanent self-hosted solutions.

---

## Option 1: Self-Host Videos (Recommended)

### **Step 1: Download Videos from Streamable**

Visit each Streamable URL and download the video:

1. **Home Page Hero:** https://streamable.com/9al1x7
2. **About Page:** https://streamable.com/gq9r27  
3. **Mobile Farming App:** https://streamable.com/40hdg0
4. **Zoccam Demo:** https://streamable.com/1pevft
5. **ClosingLock Demo:** https://streamable.com/wsrwot

**How to Download:**
- Right-click on the video → "Save video as..."
- Or click the download button if available
- Save as MP4 format

---

### **Step 2: Create Videos Directory**

In your project, create a public videos folder:

```
/public/videos/
  ├── hero-video.mp4
  ├── about-company.mp4
  ├── mobile-farming-demo.mp4
  ├── zoccam-demo.mp4
  └── closinglock-demo.mp4
```

**Note:** The `/public` folder is automatically served by Vite. Files in `/public/videos/` will be accessible at `/videos/filename.mp4`

---

### **Step 3: Update Code to Use Local Videos**

Replace Streamable iframes with HTML5 `<video>` tags:

#### **Example 1: Home Page Hero Video**

**Current Code (Streamable iframe):**
```tsx
<iframe
  src="https://streamable.com/e/9al1x7?autoplay=1&loop=1&muted=1"
  allow="autoplay; fullscreen"
  allowFullScreen
  className="absolute inset-0 w-full h-full object-cover"
/>
```

**New Code (Self-hosted video):**
```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
  style={{ 
    filter: 'grayscale(100%) contrast(1.4) brightness(0.65)' 
  }}
>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

#### **Example 2: Mobile Farming App - iPad Mockup Video**

**Current Code (Streamable with cropping):**
```tsx
<div className="relative w-full h-full overflow-hidden">
  <iframe 
    allow="fullscreen;autoplay" 
    allowFullScreen 
    src="https://streamable.com/e/40hdg0?autoplay=1&nocontrols=1" 
    className="border-none"
    style={{ 
      border: 'none', 
      width: '120%', 
      height: '120%', 
      position: 'absolute', 
      left: '-10%', 
      top: '-10%', 
      overflow: 'hidden' 
    }}
  />
</div>
```

**New Code (Self-hosted video with cropping):**
```tsx
<div className="relative w-full h-full overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="border-none"
    style={{ 
      border: 'none', 
      width: '120%', 
      height: '120%', 
      position: 'absolute', 
      left: '-10%', 
      top: '-10%', 
      overflow: 'hidden',
      objectFit: 'cover'
    }}
  >
    <source src="/videos/mobile-farming-demo.mp4" type="video/mp4" />
  </video>
</div>
```

#### **Example 3: About Page Company Video**

**Current Code:**
```tsx
<iframe 
  allow="autoplay; fullscreen" 
  allowFullScreen 
  height="100%" 
  src="https://streamable.com/o/gq9r27?autoplay=1&nocontrols=1&muted=1" 
  width="100%" 
  style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }}
/>
```

**New Code:**
```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/about-company.mp4" type="video/mp4" />
</video>
```

---

### **Step 4: Code Changes Summary**

Update the following files:

| File | Line # | Video to Replace |
|------|--------|------------------|
| `/src/app/components/pages/Home.tsx` | ~136 | Home hero video |
| `/src/app/components/pages/About.tsx` | ~129 | About company video |
| `/src/app/components/pages/MobileFarmingApp.tsx` | ~274 | Mobile Farming demo |
| `/src/app/components/pages/Zoccam.tsx` | ~697 | Zoccam demo |
| `/src/app/components/pages/ClosingLock-new.tsx` | ~1105 | ClosingLock demo |

---

### **Step 5: Optimize Videos (Optional but Recommended)**

Use a tool like **HandBrake** or **FFmpeg** to optimize file size:

**FFmpeg Command (reduce file size by ~50%):**
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4
```

**Recommended Settings:**
- Resolution: 1920x1080 (Full HD) or 1280x720 (HD)
- Bitrate: 2-5 Mbps for web
- Format: MP4 with H.264 codec
- Audio: AAC at 128kbps (or remove if not needed)

---

## Option 2: Use Vimeo Pro (Professional Alternative)

### **Pros:**
✅ No watermark (with Pro account)
✅ Better quality control
✅ Privacy controls (password protect, domain restrictions)
✅ No bandwidth limits
✅ Professional appearance

### **Cons:**
❌ Costs $20/month for Pro
❌ Requires account management

### **Setup:**

1. **Sign up for Vimeo Pro:** https://vimeo.com/upgrade

2. **Upload your videos**

3. **Get embed code:**
   - Click "Share" → "Embed"
   - Copy the iframe code
   - Or use the player URL

4. **Use background mode for autoplay:**
```tsx
<iframe 
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID?background=1&autoplay=1&loop=1&muted=1"
  frameBorder="0"
  allow="autoplay; fullscreen"
  allowFullScreen
  className="absolute inset-0 w-full h-full"
/>
```

**Note:** `background=1` removes all controls and branding for a clean look.

---

## Option 3: Use Cloudflare Stream (Best for Large Sites)

### **Pros:**
✅ Optimized delivery via CDN
✅ Automatic quality adjustment
✅ $1 per 1,000 minutes stored
✅ $1 per 1,000 minutes delivered
✅ Very fast loading

### **Setup:**

1. **Sign up for Cloudflare:** https://cloudflare.com

2. **Go to Stream** in dashboard

3. **Upload videos**

4. **Get embed code** and use in your site

---

## Option 4: Use AWS S3 + CloudFront (Enterprise Solution)

### **Best for:**
- Large websites
- Multiple videos
- Need complete control
- Already using AWS

### **Setup:**

1. **Upload to S3 bucket**
2. **Set up CloudFront CDN**
3. **Make files public**
4. **Use CDN URL in video tags**

**Example:**
```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  src="https://d1234abcd.cloudfront.net/videos/hero-video.mp4"
  className="absolute inset-0 w-full h-full object-cover"
/>
```

---

## Comparison Table

| Solution | Cost | Ease | Control | Speed | Recommended For |
|----------|------|------|---------|-------|----------------|
| **Self-host (public folder)** | Free | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Small sites, demos |
| **Vimeo Pro** | $20/mo | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Professional sites |
| **Cloudflare Stream** | ~$2-5/mo | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Growing businesses |
| **AWS S3 + CloudFront** | ~$5-20/mo | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Enterprise |
| **YouTube** | Free | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | Budget option |

---

## Recommended Solution for First Centennial Title

**For your presentation tomorrow:** Keep Streamable (it works fine for demos)

**For production launch:** 

1. **Best Option: Vimeo Pro** ($20/month)
   - Professional appearance
   - No watermarks
   - Privacy controls
   - Super easy to set up
   - Fast, reliable playback

2. **Budget Option: Self-host in /public/videos/**
   - Free
   - Complete control
   - Works great for small-medium sites
   - Easy to implement

---

## Quick Start: Self-Hosting (5 Minutes)

```bash
# 1. Create videos directory
mkdir -p public/videos

# 2. Download videos from Streamable and place in public/videos/

# 3. Update video tags in your React components (see examples above)

# 4. Test locally
pnpm dev

# 5. Deploy - videos will be included in build
pnpm build
```

---

## Need Help?

If you need assistance:
1. Share this guide with your developer
2. Videos will automatically be included when you deploy your site
3. The `/public` folder contents are copied to the build output

**Questions?** Your developer can reference this guide for implementation details.

---

**Last Updated:** February 17, 2026
