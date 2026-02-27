# Figma Asset Migration Guide
**First Centennial Title of Nevada - Image Replacement Roadmap**

---

## Overview

This document maps all `figma:asset` virtual imports currently used across the website. These images work perfectly in Figma Make but are virtual modules. Use this guide to replace them with actual files in the `/src/assets/images/` directory structure.

**Total Images to Replace:** 57 images across 5 pages

---

## How to Replace Images

### Step 1: Add Your Image File
Place the actual image file in the appropriate directory under `/src/assets/images/`

### Step 2: Update the Import Statement
Replace the `figma:asset` import with a standard import:

**BEFORE:**
```tsx
import teamPhoto from 'figma:asset/abc123.png';
```

**AFTER:**
```tsx
import teamPhoto from '@/assets/images/team/member-name.jpg';
```

### Step 3: Test
Verify the image displays correctly on the page.

---

## Image Inventory by Page

### 1️⃣ ABOUT PAGE (`/src/app/components/pages/About.tsx`)
**Total: 15 images**

#### Award Badges (3 images)
📁 **Target Directory:** `/src/assets/images/awards/`

| Variable Name | Current Import | Description | Suggested Filename |
|--------------|----------------|-------------|-------------------|
| `award2025Img` | `figma:asset/46de49c557c4620bbffc3025075e3819bcb02e60.png` | Stevie Award 2025 badge | `stevie-award-2025.png` |
| `award2024Img` | `figma:asset/e5999794e40912872ef4f298fd9582a8317eedcc.png` | Stevie Award 2024 badge | `stevie-award-2024.png` |
| `award2021Img` | `figma:asset/17a17bb38867cf3e11951714440f31f875aa5a92.png` | Stevie Award 2021 badge | `stevie-award-2021.png` |

#### Best of Southern Nevada Awards (3 images)
📁 **Target Directory:** `/src/assets/images/awards/`

| Variable Name | Current Import | Description | Suggested Filename |
|--------------|----------------|-------------|-------------------|
| `bestOfSN2025Img` | `figma:asset/27cda00440f0026b73da6c9c2a63299d6375695d.png` | Best of SN 2025 badge | `best-of-sn-2025.png` |
| `bestOfSN2024Img` | `figma:asset/e8a831d76a0aed94533ab1a3afcf97c7e332552d.png` | Best of SN 2024 badge | `best-of-sn-2024.png` |
| `bestOfSN2023Img` | `figma:asset/811b2ad6390e20eeddcf27ca5227b56dc6dac4e9.png` | Best of SN 2023 badge | `best-of-sn-2023.png` |

#### Core Values Images (3 images)
📁 **Target Directory:** `/src/assets/images/about/`

| Variable Name | Current Import | Description | Suggested Filename |
|--------------|----------------|-------------|-------------------|
| `communityImg` | `figma:asset/b340906b26df3afcdc74e25746017fa355df41b4.png` | Community value hero image | `value-community.jpg` |
| `consistencyImg` | `figma:asset/b8372723ed83ed1a3e8cbe65439724c700832db5.png` | Consistency value hero image | `value-consistency.jpg` |
| `collaborationImg` | `figma:asset/8acedf75533614dbde840c7f313cae5953688e20.png` | Collaboration value hero image | `value-collaboration.jpg` |

#### Leadership Team Photos (6 images)
📁 **Target Directory:** `/src/assets/images/team/leadership/`

| Variable Name | Current Import | Description | Suggested Filename |
|--------------|----------------|-------------|-------------------|
| `russSmithImg` | `figma:asset/e8d290a249760b39461d5895257c4c57eebdb5f7.png` | Russ Smith headshot | `russ-smith.jpg` |
| `andyTourinImg` | `figma:asset/8b1779d1342c5f1af7d7addedc31e6c0ffe1463a.png` | Andy Tourin headshot | `andy-tourin.jpg` |
| `rondaPlamondonImg` | `figma:asset/98dafecf0b80791aff38bddfaa5c8f322ba6b9c0.png` | Ronda Plamondon headshot | `ronda-plamondon.jpg` |
| `lisaQuiliciImg` | `figma:asset/ccbfd8d43e94173b636dc8e9a7ded471ff410d83.png` | Lisa Quilici headshot | `lisa-quilici.jpg` |
| `roseEchevarriaImg` | `figma:asset/714cf8566710e5a0930b7a8bcb19928e09c16a15.png` | Rose Echevarria headshot | `rose-echevarria.jpg` |
| `lorynBlairImg` | `figma:asset/0169483f6b5320d4d3bd41b0cbb2cfc90cd31491.png` | Loryn Blair headshot | `loryn-blair.jpg` |

---

### 2️⃣ SERVICES PAGE (`/src/app/components/pages/Services.tsx`)
**Total: 4 images**

📁 **Target Directory:** `/src/assets/images/services/`

| Variable Name | Current Import | Description | Suggested Filename |
|--------------|----------------|-------------|-------------------|
| `documentServicesImage` | `figma:asset/0a94f66329be2ecae422753a2f04b0f9befa1eb7.png` | Document services hero image | `document-services.jpg` |
| `titleInsuranceImage` | `figma:asset/d65d1fab480a50eae79e0772fdaef7469aac9790.png` | Title insurance hero image | `title-insurance.jpg` |
| `commercialServicesImage` | `figma:asset/434f662b0aa6ff73ddae81b2d9d8eaeb005cd7c9.png` | Commercial services hero image | `commercial-services.jpg` |
| `residentialEscrowImage` | `figma:asset/a6e5f5d5a96f2fce623f8bdbfd3ce4f2eeb0751d.png` | Residential escrow hero image | `residential-escrow.jpg` |

---

### 3️⃣ UNDERWRITERS PAGE (`/src/app/components/pages/Underwriters.tsx`)
**Total: 4 images**

📁 **Target Directory:** `/src/assets/images/logos/underwriters/`

| Variable Name | Current Import | Description | Suggested Filename |
|--------------|----------------|-------------|-------------------|
| `stewartLogo` | `figma:asset/cf781d40dd8c83af586d1c0c09843f0684605234.png` | Stewart Title logo | `stewart-title.png` |
| `oldRepublicLogo` | `figma:asset/f6e2a2569ab16946176ca6aacbdc97786a3a8c86.png` | Old Republic Title logo | `old-republic-title.png` |
| `westcorLogo` | `figma:asset/278a83db74f6eff8e002f5321f09afcabec57c65.png` | Westcor Land Title logo | `westcor-land-title.png` |
| `firstAmericanLogo` | `figma:asset/0466b2c920fe84ea6cf3950cdb272c2598983fff.png` | First American Title logo | `first-american-title.png` |

---

### 4️⃣ TEAM PAGE (`/src/app/components/pages/Team.tsx`)
**Total: 30 images**

📁 **Target Directory:** `/src/assets/images/team/`

#### Executive Team Photos

| Variable Name | Current Import | Team Member | Suggested Filename |
|--------------|----------------|-------------|-------------------|
| `andyTourinImg` | `figma:asset/4f4e5c866e1f66f1a79fdc40e1a5926da0d4b72f.png` | Andy Tourin | `andy-tourin.jpg` |
| `rondaPlamondonImg` | `figma:asset/b055eed5c51b2a5e2d2c3b7d3f0a5b7f7a67b4e6.png` | Ronda Plamondon | `ronda-plamondon.jpg` |
| `lisaQuiliciImg` | `figma:asset/4a73dac4e7086f5e0d4e3f3e7e3a3e7e3a73dac4.png` | Lisa Quilici | `lisa-quilici.jpg` |
| `lorynBlairImg` | `figma:asset/b8fc2a5e2d2c3b7d3f0a5b7f7a67b4e6b055eed5.png` | Loryn Blair | `loryn-blair.jpg` |

#### Escrow Officers & Staff Photos

| Variable Name | Current Import | Team Member | Suggested Filename |
|--------------|----------------|-------------|-------------------|
| `ronSchofieldImg` | `figma:asset/5b7f7a67b4e6b055eed5b8fc2a5e2d2c3b7d3f0a.png` | Ron Schofield | `ron-schofield.jpg` |
| `moniquemassetImg` | `figma:asset/cb3ab4d3ade55cce34a41d4e4b03e8d6e2bb1868.png` | Monique Masset | `monique-masset.jpg` |
| `kristinFrancoImg` | `figma:asset/ccbbc52c83354c1c26aa9d892db06231b870cfab.png` | Kristin Franco | `kristin-franco.jpg` |
| `christopherKeenanImg` | `figma:asset/9d892db06231b870cfabccbbc52c83354c1c26aa.png` | Christopher Keenan | `christopher-keenan.jpg` |
| `shonPlamondonImg` | `figma:asset/5db1c3f4d4e4b03e8d6e2bb1868cb3ab4d3ade55.png` | Shon Plamondon | `shon-plamondon.jpg` |
| `rachelQuiliciImg` | `figma:asset/06acea423ae189b48d108a0644b708017a40d34d.png` | Rachel Quilici | `rachel-quilici.jpg` |
| `gerritSchmidtImg` | `figma:asset/04adbebf9b1d0b82023a354d029977f547d7a64e.png` | Gerrit Schmidt | `gerrit-schmidt.jpg` |
| `suzanneSilvermanImg` | `figma:asset/d92ce3179eebaef1858338f82a04b8e604bb8abc.png` | Suzanne Silverman | `suzanne-silverman.jpg` |
| `cherylDoughertyImg` | `figma:asset/6994f7d54ba17e1e7df23d64a8196b174d66c9c2.png` | Cheryl Dougherty | `cheryl-dougherty.jpg` |
| `lauraVoorheesImg` | `figma:asset/2ebb3c364d3f9113cdf39b9df8d692dcc75ebd04.png` | Laura Voorhees | `laura-voorhees.jpg` |
| `lynneScottImg` | `figma:asset/640da57585a9217b1cdffe9dd10f1b1210562fa9.png` | Lynne Scott | `lynne-scott.jpg` |
| `susieNicholsImg` | `figma:asset/ac51669b3de395825b10f7efd47714405e19c13c.png` | Susie Nichols | `susie-nichols.jpg` |
| `jenniferLivermoreImg` | `figma:asset/a7cee38fe867c9babf4946206824f61292cd8c8e.png` | Jennifer Livermore | `jennifer-livermore.jpg` |
| `rachelleLungerImg` | `figma:asset/ed6dc68f11dcaf39b3bfa50ee7ba5c1621318458.png` | Rachelle Lunger | `rachelle-lunger.jpg` |
| `shelbyMaganaImg` | `figma:asset/ac18a9a1c32b0c9e3e83ad90a82c6637edd630bd.png` | Shelby Magana | `shelby-magana.jpg` |
| `sherryAckermanImg` | `figma:asset/d030dbbf9c11c2a8ed3ee9ff723960a9d47be36b.png` | Sherry Ackerman | `sherry-ackerman.jpg` |
| `denaReedImg` | `figma:asset/580daefb142d81dbb7cbcf336f7194ad6eb05ef7.png` | Dena Reed | `dena-reed.jpg` |
| `jenniferSammonsImg` | `figma:asset/464ba07644b6df7ab6e9999961a869320314643f.png` | Jennifer Sammons | `jennifer-sammons.jpg` |
| `loganOrtizImg` | `figma:asset/eac356570dc32d8eb89542ac2025fad7bdca21c0.png` | Logan Ortiz | `logan-ortiz.jpg` |
| `lisaMarvitzImg` | `figma:asset/423120b80437a9790b7a1fef9ac180c1d0d12ea3.png` | Lisa Marvitz | `lisa-marvitz.jpg` |
| `amandaChanImg` | `figma:asset/f37a77664a36aab07551d8fd6c0723a9805d84e4.png` | Amanda Chan | `amanda-chan.jpg` |
| `deniseClarkImg` | `figma:asset/8bbe45c072371c1e1d2b71348c38ab09577904d3.png` | Denise Clark | `denise-clark.jpg` |
| `ginaDoyleImg` | `figma:asset/632a00ec23f36d1751658d4e8f7bdd344f45a7ac.png` | Gina Doyle | `gina-doyle.jpg` |
| `cynthiaFailorImg` | `figma:asset/e2b243029f094563dcc1b9eb8b76027e4b3f8ff4.png` | Cynthia Failor | `cynthia-failor.jpg` |
| `ryanLitteralImg` | `figma:asset/41a8c3a63cee20df0ef438b481cb8a8597d7358a.png` | Ryan Litteral | `ryan-litteral.jpg` |

#### Placeholder/Fallback Image

| Variable Name | Current Import | Description | Suggested Filename |
|--------------|----------------|-------------|-------------------|
| `placeholderSilhouette` | `figma:asset/0e872a70eb168a66040ab776bb2742a307ebd76a.png` | Generic silhouette placeholder | `placeholder-silhouette.png` |

---

### 5️⃣ CLOSING SOFTWARE PAGE (`/src/app/components/pages/ClosingSoftware.tsx`)
**Total: 4 images** ✅ **ALREADY MIGRATED**

📁 **Target Directory:** `/src/assets/images/software/`

These have already been converted to standard file imports:

| Variable Name | Current Import Path | Description |
|--------------|-------------------|-------------|
| `softproLogo` | `@/assets/images/logos/softpro-logo.png` | SoftPro logo |
| `secureLoginImage` | `@/assets/images/software/secure-login.jpg` | Secure login screenshot |
| `mobileAppImage` | `@/assets/images/software/mobile-app.jpg` | Mobile app interface |
| `collaborationImage` | `@/assets/images/software/collaboration.jpg` | Team collaboration |

**Note:** These files currently contain placeholder text. Replace with actual image files.

---

## Quick Reference: Asset Directory Structure

```
/src/assets/images/
├── logos/
│   ├── softpro-logo.png ✅ (migrated, needs file)
│   └── underwriters/
│       ├── stewart-title.png
│       ├── old-republic-title.png
│       ├── westcor-land-title.png
│       └── first-american-title.png
├── awards/
│   ├── stevie-award-2025.png
│   ├── stevie-award-2024.png
│   ├── stevie-award-2021.png
│   ├── best-of-sn-2025.png
│   ├── best-of-sn-2024.png
│   └── best-of-sn-2023.png
├── team/
│   ├── leadership/
│   │   ├── russ-smith.jpg
│   │   ├── andy-tourin.jpg
│   │   ├── ronda-plamondon.jpg
│   │   ├── lisa-quilici.jpg
│   │   ├── rose-echevarria.jpg
│   │   └── loryn-blair.jpg
│   ├── andy-tourin.jpg
│   ├── ronda-plamondon.jpg
│   ├── [... 26+ team member photos]
│   └── placeholder-silhouette.png
├── services/
│   ├── document-services.jpg
│   ├── title-insurance.jpg
│   ├── commercial-services.jpg
│   └── residential-escrow.jpg
├── software/
│   ├── secure-login.jpg ✅ (migrated, needs file)
│   ├── mobile-app.jpg ✅ (migrated, needs file)
│   └── collaboration.jpg ✅ (migrated, needs file)
└── about/
    ├── value-community.jpg
    ├── value-consistency.jpg
    └── value-collaboration.jpg
```

---

## Migration Priority

### 🔴 High Priority (Brand Critical)
1. Company logo(s)
2. Underwriter logos (4 images)
3. Leadership team photos (6 images)

### 🟡 Medium Priority (Public-Facing)
4. Award badges (6 images)
5. Services hero images (4 images)
6. Full team roster photos (30 images)

### 🟢 Low Priority (Internal/Stock)
7. Core values hero images (3 images)
8. Software screenshots (3 images - already migrated structure)

---

## Developer Notes

### Current Status
- ✅ All `figma:asset` imports are **working** in Figma Make
- ✅ Asset directory structure is created
- ✅ Closing Software page imports are converted (awaiting files)
- ⏳ 53 images still using virtual `figma:asset` imports

### Image Specifications
- **Team Photos:** Recommended 800x800px, square crop, professional headshots
- **Logos:** PNG with transparent background, minimum 500px width
- **Hero Images:** Minimum 1920x1080px, landscape orientation
- **Award Badges:** PNG, transparent background, 300-400px square

### Best Practices
1. Use consistent naming: `lowercase-with-hyphens.jpg`
2. Optimize images before upload (use WebP for photos when possible)
3. Keep originals in a `/high-res/` backup folder
4. Test on multiple pages if the same person appears in multiple locations

---

## Troubleshooting

**Q: The image import path changed but the image still looks the same?**  
A: The old `figma:asset` is cached. Clear your browser cache or do a hard refresh (Ctrl+Shift+R / Cmd+Shift+R).

**Q: Can I use JPEG instead of PNG?**  
A: Yes! Use `.jpg` for photos (smaller file size) and `.png` for logos/graphics with transparency.

**Q: Do I need to update multiple files if the same photo is used twice?**  
A: Yes - search all `.tsx` files for the `figma:asset` hash and replace all occurrences.

---

## Migration Checklist Template

```markdown
- [ ] Replace underwriter logos (4 files)
- [ ] Replace leadership team photos (6 files)  
- [ ] Replace award badges (6 files)
- [ ] Replace services hero images (4 files)
- [ ] Replace team roster photos (30 files)
- [ ] Replace core values images (3 files)
- [ ] Add actual files to Closing Software placeholders (3 files)
- [ ] Test all pages for broken images
- [ ] Optimize image file sizes
- [ ] Update this guide with completion date
```

---

**Last Updated:** January 27, 2026  
**Total Images:** 57 across 5 pages  
**Status:** Virtual imports active, migration roadmap complete
