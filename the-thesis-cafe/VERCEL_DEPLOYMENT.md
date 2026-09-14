# Vercel Deployment Configuration for The Thesis Cafe

This project is built with **Vite + React** and is optimized for automatic detection by Vercel.

## ✅ Framework Detection

Vercel will automatically detect this as a **Vite/React** project based on:
- `package.json` containing `vite` and `@vitejs/plugin-react`
- `vite.config.js` configuration file
- React dependencies (`react`, `react-dom`, `react-router-dom`)

## 🚀 Deploy to Vercel

### Option 1: GitHub Integration (Recommended)
1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the framework and configure build settings
6. Click "Deploy"

### Option 2: Vercel CLI
```bash
npm install -g vercel
cd /workspace/the-thesis-cafe
vercel login
vercel
```

## ⚙️ Build Settings (Auto-detected)

Vercel will automatically use these settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## 📁 Project Structure

```
the-thesis-cafe/
├── public/
│   ├── images/          # Add cafe photos here
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components (Home, Menu, About, Reviews, Contact)
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Documentation
```

## 🖼️ Adding Real Images

1. Download images from The Thesis Cafe's Instagram (@thethesiscafe) and Facebook
2. Save them in the `public/images/` folder
3. Use these filenames:
   - `hero-bg.jpg` - Main hero background
   - `about-story.jpg` - About page story image
   - `coffee-1.jpg`, `coffee-2.jpg` - Coffee images
   - `food-1.jpg`, `food-2.jpg`, `food-3.jpg` - Food images
   - `interior-1.jpg`, `interior-2.jpg` - Interior/ambiance images
   - `team.jpg` - Team/staff image (optional)

4. Update image references in the code if you use different filenames

## 🎨 Color Scheme

- **Primary Green**: `#2d5016` (Deep forest green)
- **Radiant Blue**: `#00B4D8` (Bright cyan blue)
- **Light Radiant Blue**: `#48CAE4` (Soft sky blue)
- **Accent Gold**: `#d4a853` (Premium gold for highlights)

## 📧 Contact Information

- **Email**: thethesiscafe@gmail.com
- **Location**: Pratap Nagar, Nagpur
- **Instagram**: @thethesiscafe
- **Facebook**: The Thesis Cafe

## 🔧 Troubleshooting

If Vercel doesn't auto-detect the framework:

1. **Check package.json**: Ensure `vite` and `@vitejs/plugin-react` are in dependencies
2. **Verify vite.config.js**: Make sure it exports the React plugin configuration
3. **Manual Configuration**: In Vercel dashboard, set:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

## 🌐 Live Preview

After deployment, Vercel will provide:
- A production URL (e.g., `the-thesis-cafe.vercel.app`)
- Automatic HTTPS
- Global CDN distribution
- Automatic preview deployments for every git push

---

**Built with ❤️ for The Thesis Cafe, Nagpur**
