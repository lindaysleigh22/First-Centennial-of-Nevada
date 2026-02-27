# ✅ Complete Deployment Checklist

**First Centennial Title of Nevada - Production Launch**

Use this checklist to track your progress from Figma Make to live production!

---

## 📅 Pre-Deployment (Before You Start)

### Accounts Setup
- [ ] GitHub account created ([github.com](https://github.com))
- [ ] Vercel account created ([vercel.com](https://vercel.com)) *OR*
- [ ] Netlify account created ([netlify.com](https://netlify.com)) *OR*
- [ ] Cloudflare account created ([pages.cloudflare.com](https://pages.cloudflare.com))
- [ ] Supabase account accessible (you already have this ✅)

### Software Installed
- [ ] Visual Studio Code installed
- [ ] Node.js installed (LTS version from [nodejs.org](https://nodejs.org))
- [ ] Git installed ([git-scm.com](https://git-scm.com))

### Information Gathered
- [ ] Supabase URL copied (from Supabase dashboard)
- [ ] Supabase Anon Key copied
- [ ] Supabase Service Role Key copied
- [ ] Current domain name documented (e.g., firstcentennialtitle.com)
- [ ] Domain registrar login info available (GoDaddy, Namecheap, etc.)

---

## 📦 Phase 1: Export from Figma Make

### Finding the Export Button
- [ ] Checked top-right corner for "Export" button
- [ ] Checked "Share" dropdown menu
- [ ] Checked "File" or hamburger menu
- [ ] Checked Settings/gear icon
- [ ] Found the export button! 🎉

### Download Process
- [ ] Clicked Export/Download
- [ ] Selected "ZIP File" or "Complete Project" option
- [ ] Waited for ZIP to generate
- [ ] ZIP file downloaded to computer
- [ ] Saved to known location (Desktop, Documents, etc.)

### Extract Files
- [ ] Located downloaded ZIP file
- [ ] Extracted ZIP to folder (e.g., `fct-website`)
- [ ] Verified extraction completed successfully
- [ ] Folder contains: `src/`, `package.json`, etc.

**Status:** 📦 **Code Exported** ✅

---

## 💻 Phase 2: Local Setup in VS Code

### Open Project
- [ ] Launched Visual Studio Code
- [ ] File → Open Folder
- [ ] Selected extracted project folder
- [ ] Project opened successfully in VS Code

### Install Dependencies
- [ ] Opened terminal in VS Code (Ctrl+~ or Cmd+~)
- [ ] Ran `npm install`
- [ ] All packages installed (no errors)
- [ ] `node_modules/` folder created

### Environment Variables
- [ ] Created `.env.local` file in project root
- [ ] Added `VITE_SUPABASE_URL=...`
- [ ] Added `VITE_SUPABASE_ANON_KEY=...`
- [ ] Added `VITE_SUPABASE_SERVICE_ROLE_KEY=...`
- [ ] Saved `.env.local` file

### Test Locally
- [ ] Ran `npm run dev` in terminal
- [ ] Server started successfully (no errors)
- [ ] Opened `http://localhost:5173` in browser
- [ ] **Home page loads** ✅
- [ ] **Navigation works** ✅
- [ ] **No console errors** ✅
- [ ] **Downloads page shows login screen** ✅ (not auto-logged in)
- [ ] **Mobile responsive working** ✅

**Status:** 💻 **Local Development Working** ✅

---

## 🔧 Phase 3: Git & GitHub Setup

### Initialize Git
- [ ] Opened terminal in VS Code
- [ ] Ran `git init`
- [ ] Created `.gitignore` file (or verified it exists)
- [ ] `.env.local` is in `.gitignore` (DO NOT commit secrets!)

### First Commit
- [ ] Ran `git add .`
- [ ] Ran `git commit -m "Initial commit - FCT website production ready"`
- [ ] Ran `git branch -M main`

### Push to GitHub
- [ ] Created new repository on GitHub
- [ ] Copied repository URL
- [ ] Ran `git remote add origin [YOUR_GITHUB_URL]`
- [ ] Ran `git push -u origin main`
- [ ] Code visible on GitHub ✅

**Status:** 🔧 **Code on GitHub** ✅

---

## 🚀 Phase 4: Deploy to Hosting Platform

### Choose Platform
- [ ] Decided on: **Vercel** / **Netlify** / **Cloudflare** (circle one)

### Deploy (Vercel Example)
- [ ] Logged into Vercel
- [ ] Clicked "New Project"
- [ ] Connected GitHub account
- [ ] Selected FCT website repository
- [ ] Vercel detected framework (Vite) automatically
- [ ] Clicked "Deploy"
- [ ] Waited for deployment to complete (~2-3 minutes)
- [ ] **Deployment successful** ✅

### Add Environment Variables
- [ ] Went to Project Settings → Environment Variables
- [ ] Added `VITE_SUPABASE_URL` (value from .env.local)
- [ ] Added `VITE_SUPABASE_ANON_KEY` (value from .env.local)
- [ ] Added `VITE_SUPABASE_SERVICE_ROLE_KEY` (value from .env.local)
- [ ] Saved all environment variables
- [ ] Triggered redeploy (automatic or manual)
- [ ] **Redeploy completed** ✅

### Test Staging URL
- [ ] Copied staging URL (e.g., `yourproject.vercel.app`)
- [ ] Opened in browser
- [ ] **Home page loads** ✅
- [ ] **Navigation works** ✅
- [ ] **All service pages load** ✅
- [ ] **Downloads page shows login** ✅
- [ ] **No 404 errors** ✅
- [ ] **No console errors** ✅
- [ ] **HTTPS working** (green padlock) ✅

**Status:** 🚀 **Deployed to Staging** ✅

---

## 🔐 Phase 5: Test Authentication

### Test Login Flow
- [ ] Navigated to `/downloads` on staging URL
- [ ] **Login screen appears** (not auto-logged in) ✅
- [ ] Tried logging in with test credentials
- [ ] Login works OR shows appropriate error ✅
- [ ] After login, Downloads page accessible ✅

### Test Admin Panel
- [ ] Navigated to `/admin` on staging URL
- [ ] **Login screen appears** ✅
- [ ] Logged in with admin credentials
- [ ] Admin panel loads correctly ✅
- [ ] Can create test employee account ✅
- [ ] Test employee can log in ✅

### Create Real Employee Accounts
- [ ] Used Admin Panel to create accounts for team
- [ ] Sent credentials to employees
- [ ] Each employee tested their login
- [ ] **All employees can access Downloads page** ✅

**Status:** 🔐 **Authentication Working** ✅

---

## 🌐 Phase 6: Custom Domain Setup

### Domain Configuration
- [ ] Decided on domain: `_________________.com`
- [ ] Logged into domain registrar
- [ ] Found DNS settings

### Add Domain to Hosting Platform
- [ ] In Vercel/Netlify: Project Settings → Domains
- [ ] Clicked "Add Domain"
- [ ] Entered custom domain
- [ ] **Platform provided DNS instructions** ✅

### Update DNS Records
- [ ] In domain registrar DNS settings:
- [ ] **Option A:** Added A record pointing to hosting IP
  - Record: `@` or `domain.com`
  - Type: `A`
  - Value: `76.76.21.21` (Vercel) or hosting provider's IP
- [ ] **Option B:** Added CNAME record
  - Record: `www` or `@`
  - Type: `CNAME`
  - Value: Provided by hosting platform
- [ ] Saved DNS changes
- [ ] **Waiting for DNS propagation** (5 min - 48 hours)

### Verify Domain
- [ ] Checked domain in browser
- [ ] **Domain loads website** ✅
- [ ] **HTTPS working** (green padlock) ✅
- [ ] **No SSL warnings** ✅

**Status:** 🌐 **Custom Domain Connected** ✅

---

## 🧪 Phase 7: Final Testing (Live Site)

### Page Testing
- [ ] **Home page** - loads correctly, animations smooth
- [ ] **About page** - team info displays
- [ ] **Smart Start Escrow** - audio players work
- [ ] **ClosingLock** - images load, content correct
- [ ] **Zoccam** - professional woman image displays
- [ ] **Other service pages** - all load correctly
- [ ] **Contact page** - form works (if applicable)
- [ ] **Downloads page** - requires login ✅
- [ ] **Admin panel** - requires login ✅

### Navigation Testing
- [ ] Main menu navigation works
- [ ] All links work (no 404s)
- [ ] Footer links work
- [ ] Mobile menu works
- [ ] Smooth scroll working
- [ ] Back button works correctly

### Mobile Testing
- [ ] Tested on iPhone/Safari
- [ ] Tested on Android/Chrome
- [ ] Responsive design working
- [ ] Touch interactions work
- [ ] No horizontal scroll issues
- [ ] Text readable on small screens

### Browser Testing
- [ ] **Chrome** (desktop) - works ✅
- [ ] **Safari** (desktop) - works ✅
- [ ] **Firefox** (desktop) - works ✅
- [ ] **Edge** (desktop) - works ✅
- [ ] **Mobile Safari** (iOS) - works ✅
- [ ] **Chrome Mobile** (Android) - works ✅

### Performance Testing
- [ ] Ran Lighthouse audit (Chrome DevTools)
- [ ] Performance score > 90 ✅
- [ ] Accessibility score > 90 ✅
- [ ] Page load time < 3 seconds ✅
- [ ] Images load quickly
- [ ] Animations smooth (not laggy)

### Asset Testing
- [ ] All images load (no broken images)
- [ ] Audio files play correctly
- [ ] Videos play (if applicable)
- [ ] Fonts display correctly
- [ ] Icons render properly
- [ ] No missing assets

### Security Testing
- [ ] HTTPS active (green padlock)
- [ ] No mixed content warnings
- [ ] Downloads page protected
- [ ] Admin panel protected
- [ ] Can't access protected pages without login ✅
- [ ] Sign out works correctly

**Status:** 🧪 **All Tests Passing** ✅

---

## 👥 Phase 8: Team Training

### Admin Training
- [ ] Showed team how to access Admin Panel
- [ ] Demonstrated creating employee accounts
- [ ] Explained password requirements
- [ ] Practiced creating test account together

### Employee Training
- [ ] Showed employees how to access Downloads page
- [ ] Explained login process
- [ ] Demonstrated downloading assets
- [ ] Answered questions

### Documentation Handoff
- [ ] Shared `README_PRODUCTION.md` with team
- [ ] Shared `ASSET-MANIFEST.md` for reference
- [ ] Explained how to make content updates
- [ ] Documented contact info for support

**Status:** 👥 **Team Trained** ✅

---

## 🎯 Phase 9: Go Live!

### Pre-Launch Final Checks
- [ ] All testing complete ✅
- [ ] Team trained ✅
- [ ] Employee accounts created ✅
- [ ] Content finalized ✅
- [ ] Domain DNS propagated ✅
- [ ] Backups of old site created ✅

### Launch Decision
- [ ] **Go/No-Go decision made:** _______________
- [ ] **Launch date scheduled:** _______________
- [ ] **Launch time scheduled:** _______________ (recommend off-peak)

### The Switch
- [ ] Verified new site working at custom domain
- [ ] Took screenshot of old site (just in case)
- [ ] DNS already pointing to new site ✅
- [ ] Confirmed HTTPS working
- [ ] **Website is LIVE!** 🎉

### Immediate Post-Launch
- [ ] Tested website from different devices
- [ ] Checked analytics (if configured)
- [ ] Monitored for errors (browser console)
- [ ] Checked Supabase logs
- [ ] Checked hosting platform logs (Vercel/Netlify)
- [ ] **No critical issues found** ✅

**Status:** 🎯 **LIVE IN PRODUCTION** ✅✅✅

---

## 📊 Phase 10: Post-Launch Monitoring

### First 24 Hours
- [ ] **Hour 1:** Checked for immediate errors
- [ ] **Hour 6:** Verified traffic flowing
- [ ] **Hour 12:** Checked all pages still working
- [ ] **Hour 24:** Reviewed any issues reported

### First Week
- [ ] **Day 1:** Full site check
- [ ] **Day 2:** Monitor analytics
- [ ] **Day 3:** Check authentication working
- [ ] **Day 4:** Review team feedback
- [ ] **Day 5:** Address any minor issues
- [ ] **Day 6:** Performance check
- [ ] **Day 7:** Week 1 review meeting

### Ongoing Tasks
- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Configure analytics (Google Analytics)
- [ ] Enable error tracking (Sentry, etc.)
- [ ] Schedule regular backups
- [ ] Plan content update schedule
- [ ] Document any issues and solutions

**Status:** 📊 **Monitoring Active** ✅

---

## 🎉 Success Metrics

### Launch Day Success
- [ ] Website accessible at custom domain ✅
- [ ] Zero critical errors ✅
- [ ] All pages loading ✅
- [ ] Authentication working ✅
- [ ] Team can access admin functions ✅
- [ ] Mobile responsive ✅
- [ ] HTTPS secure ✅

### Week 1 Success
- [ ] No downtime
- [ ] No major bugs reported
- [ ] Team comfortable with admin panel
- [ ] Positive feedback from users
- [ ] Performance targets met

### Long-term Success
- [ ] Regular content updates happening
- [ ] Employee accounts managed properly
- [ ] Website maintained and healthy
- [ ] Team self-sufficient with updates

---

## 🆘 Troubleshooting Reference

### Common Issues Checklist

**Website not loading:**
- [ ] Check DNS propagation (use [whatsmydns.net](https://whatsmydns.net))
- [ ] Verify domain pointed to correct hosting
- [ ] Check hosting platform status page

**Authentication not working:**
- [ ] Verify environment variables in hosting platform
- [ ] Check Supabase project is active
- [ ] Review Supabase logs for errors

**Images not loading:**
- [ ] Check browser console for 404 errors
- [ ] Verify all assets committed to GitHub
- [ ] Check deployment logs

**Slow performance:**
- [ ] Run Lighthouse audit
- [ ] Check image sizes (optimize if needed)
- [ ] Review hosting plan limits

---

## 📞 Support Contacts

### Platform Support
- **Vercel:** [vercel.com/support](https://vercel.com/support)
- **Netlify:** [netlify.com/support](https://netlify.com/support)
- **Cloudflare:** [developers.cloudflare.com/support](https://developers.cloudflare.com/support)
- **Supabase:** [supabase.com/support](https://supabase.com/support)

### Documentation
- **This project:** See all `*.md` files in root directory
- **React:** [react.dev](https://react.dev)
- **Tailwind:** [tailwindcss.com](https://tailwindcss.com)

---

## 🏆 Deployment Complete!

When ALL checkboxes are marked:

### You have successfully:
✅ Exported code from Figma Make  
✅ Set up local development environment  
✅ Deployed to production hosting  
✅ Connected custom domain  
✅ Configured authentication  
✅ Tested all functionality  
✅ Trained your team  
✅ Launched to production  
✅ Monitoring and maintaining  

---

## 🎊 CONGRATULATIONS!

**Your First Centennial Title website is LIVE!**

You've built and deployed a:
- ✨ Professional, modern website
- 🔒 Secure employee portal
- 📱 Mobile-responsive experience
- 🚀 Fast, optimized platform
- 💼 Enterprise-grade solution

**Amazing work! Enjoy your new website! 🎉**

---

**Deployment Date:** _______________  
**Deployed By:** _______________  
**Platform:** _______________ (Vercel/Netlify/Cloudflare)  
**Domain:** _______________  
**Status:** 🟢 LIVE

---

**Version:** 1.0  
**Last Updated:** February 27, 2026  
**Document:** Complete Deployment Checklist
