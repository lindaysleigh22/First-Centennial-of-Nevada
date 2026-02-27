# ⚡ QUICK START - Deploy in 1 Hour

**Get First Centennial Title website live FAST**

---

## 🎯 Goal: Live website in 60 minutes

---

## Step 1: Export (5 minutes)

1. Find **"Export"** or **"Download"** button in Figma Make (top-right)
2. Download ZIP file
3. Extract to a folder

**Details:** See `EXPORT_FROM_FIGMA_MAKE.md`

---

## Step 2: VS Code Setup (10 minutes)

```bash
# Open folder in VS Code
# Then in terminal:

npm install
npm run dev

# Visit: http://localhost:5173
```

✅ **Checkpoint:** Website loads locally with no errors

---

## Step 3: Deploy to Vercel (15 minutes)

### Create Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub

### Push to GitHub
```bash
git init
git add .
git commit -m "FCT website ready for production"
git branch -M main
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

### Import to Vercel
1. Click "New Project" in Vercel
2. Import your GitHub repo
3. Click "Deploy"

✅ **Checkpoint:** Website live at `yourproject.vercel.app`

---

## Step 4: Environment Variables (5 minutes)

In Vercel project settings → Environment Variables:

Add these 3 variables (get from [Supabase dashboard](https://app.supabase.com)):

```
VITE_SUPABASE_URL=your_url_here
VITE_SUPABASE_ANON_KEY=your_key_here
VITE_SUPABASE_SERVICE_ROLE_KEY=your_key_here
```

**Redeploy** after adding variables

✅ **Checkpoint:** Authentication works on live site

---

## Step 5: Connect Domain (20 minutes)

### In Vercel:
1. Project Settings → Domains
2. Add your domain (e.g., `firstcentennialtitle.com`)

### In Your Domain Registrar (GoDaddy, Namecheap, etc.):
Update DNS A record to: `76.76.21.21`

**Wait 5-30 minutes for DNS propagation**

✅ **Checkpoint:** Site loads at your custom domain with HTTPS

---

## Step 6: Test (5 minutes)

Visit your live site and check:

- [ ] Home page loads
- [ ] Navigation works
- [ ] All services pages load
- [ ] Downloads page requires login ✅
- [ ] Mobile responsive
- [ ] No console errors

---

## 🎉 DONE! You're Live!

Your website is now:
- ✅ Live on the internet
- ✅ Secure with HTTPS
- ✅ On your custom domain
- ✅ Professional and fast
- ✅ Ready for customers

---

## 📞 Having Issues?

### "Export button not found"
→ See `EXPORT_FROM_FIGMA_MAKE.md` for alternatives

### "npm install fails"
→ Install [Node.js](https://nodejs.org) first (LTS version)

### "Supabase not working"
→ Double-check environment variables in Vercel

### "Need more time"
→ Follow detailed guide: `PRODUCTION_DEPLOYMENT_GUIDE.md`

---

## 🔥 Pro Tips

1. **Test locally first** - Always run `npm run dev` before deploying
2. **Keep Figma Make open** - In case you need to make quick edits
3. **Backup everything** - Keep the ZIP file safe
4. **Use GitHub** - Every change auto-deploys via Vercel

---

## 📅 Timeline Breakdown

| Task | Time | Difficulty |
|------|------|------------|
| Export from Figma Make | 5 min | Easy |
| Setup in VS Code | 10 min | Easy |
| Deploy to Vercel | 15 min | Easy |
| Environment variables | 5 min | Easy |
| Connect domain | 20 min | Medium |
| Test & verify | 5 min | Easy |
| **TOTAL** | **60 min** | **Easy** |

---

## ⚡ Even Faster? (30 min)

Skip custom domain for now:
1. Export (5 min)
2. VS Code setup (10 min)
3. Deploy to Vercel (15 min)
4. Add env vars (5 min)

**Result:** Live at `yourproject.vercel.app` ✅

Connect custom domain later when you have more time.

---

## 🚀 Next Steps After Launch

- Create employee accounts via `/admin` panel
- Monitor traffic with Vercel Analytics (free)
- Share URL with team for feedback
- Schedule domain switchover for low-traffic time

---

## 📚 Full Documentation

For detailed instructions:
- `README_PRODUCTION.md` - Complete overview
- `PRODUCTION_DEPLOYMENT_GUIDE.md` - Step-by-step deployment
- `ASSET-MANIFEST.md` - All assets reference
- `HANDOFF_CHECKLIST.md` - Developer docs

---

**You've got this! Let's get your site live! 🎉**
