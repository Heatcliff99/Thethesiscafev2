# 🚀 The Thesis Cafe - Vercel Deployment Guide

## ✅ Project Configuration Verified

Your project is **100% ready for Vercel deployment** with the following confirmed setup:

### Framework Detection
- **Framework**: Vite + React 19
- **Build Tool**: Vite 8.3.0
- **Plugin**: @vitejs/plugin-react 6.1.1
- **Router**: React Router DOM 7.18.3

### Build Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

## 📋 Pre-Deployment Checklist

- [x] `package.json` contains all required dependencies
- [x] `vite.config.js` properly configured with React plugin
- [x] `vercel.json` created with explicit framework setting
- [x] Build tested successfully (dist/ folder generated)
- [x] All 5 pages implemented (Home, Menu, About, Reviews, Contact)
- [x] Green & Radiant Blue color scheme applied
- [x] Contact email: thethesiscafe@gmail.com
- [x] Social media links integrated

## 🌐 Deploy to Vercel - Step by Step

### Method 1: GitHub Integration (RECOMMENDED)

1. **Push to GitHub**:
   ```bash
   cd /workspace/the-thesis-cafe
   git init
   git add .
   git commit -m "Initial commit - The Thesis Cafe website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite framework
   - Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd /workspace/the-thesis-cafe

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## ⚙️ Vercel Auto-Detection Settings

Vercel will automatically detect and configure:

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node Version | 18.x (auto-detected) |

## 🔧 If Auto-Detection Fails

If Vercel doesn't auto-detect the framework correctly, manually set these in Vercel Dashboard:

1. Go to Project Settings → Build & Development Settings
2. Set:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

## 🎨 Color Scheme Implemented

```css
--primary-green: #2d5016      /* Deep forest green */
--radiant-blue: #00B4D8       /* Bright cyan blue */
--light-radiant-blue: #48CAE4 /* Soft sky blue */
--deep-blue: #0077B6          /* Ocean blue */
--gold: #D4AF37               /* Premium gold accent */
```

## 📁 Project Structure

```
the-thesis-cafe/
├── public/
│   ├── images/              # Add real cafe photos here
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── SocialIcons.jsx
│   ├── pages/
│   │   ├── Home.jsx         # Hero, Features, Live Reviews
│   │   ├── Menu.jsx         # Full menu with categories
│   │   ├── About.jsx        # Story, Values, Stats
│   │   ├── Reviews.jsx      # All customer reviews
│   │   └── Contact.jsx      # Contact form & info
│   ├── App.jsx              # Main app with routing
│   ├── App.css              # Color variables & global styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Base styles
├── index.html
├── package.json
├── vite.config.js
├── vercel.json              # Vercel configuration
└── README.md
```

## 🖼️ Adding Real Images from Instagram/Facebook

1. Download images from:
   - Instagram: [@thethesiscafe](https://www.instagram.com/thethesiscafe/)
   - Facebook: [The Thesis Cafe](https://www.facebook.com/p/The-Thesis-Cafe-61573692057380/)

2. Save to `public/images/` with these names:
   - `hero-bg.jpg` - Main hero background
   - `about-story.jpg` - About section image
   - `coffee-1.jpg`, `coffee-2.jpg` - Coffee images
   - `food-1.jpg`, `food-2.jpg`, `food-3.jpg` - Food dishes
   - `interior-1.jpg`, `interior-2.jpg` - Cafe interior
   - `menu-header.jpg` - Menu page header

3. The website will automatically use these images once added!

## 📧 Contact Information

- **Email**: thethesiscafe@gmail.com
- **Location**: Pratap Nagar, Nagpur, Maharashtra
- **Instagram**: https://www.instagram.com/thethesiscafe/
- **Facebook**: https://www.facebook.com/p/The-Thesis-Cafe-61573692057380/

## ✨ Features Included

✅ 5 Complete Pages (Home, Menu, About, Reviews, Contact)  
✅ Premium Green & Radiant Blue Design  
✅ Responsive Mobile-First Layout  
✅ Animated Components with Framer Motion  
✅ Live Reviews Section  
✅ Full Menu with 6 Categories  
✅ Contact Form with Email Integration  
✅ Social Media Integration  
✅ SEO Optimized  
✅ Fast Performance (Vite Build)  

## 🔗 After Deployment

Once deployed, you'll get:
- **Production URL**: `the-thesis-cafe.vercel.app` (or your custom domain)
- **Automatic HTTPS**: SSL certificate included
- **Global CDN**: Fast loading worldwide
- **Preview Deployments**: Test changes before going live

---

**Built with ❤️ for The Thesis Cafe, Nagpur**  
*Where Every Sip Tells a Story* ☕📖
