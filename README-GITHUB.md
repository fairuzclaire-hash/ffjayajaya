# Birthday Premium Website 🎂💔

Website ulang tahun emotional dengan animasi interaktif premium.

> "Untuk yang terakhir kalinya, selamat ulang tahun sayang..."

## ✨ Features

- 🎊 Confetti animation on load
- 💕 Floating hearts background
- 🌸 Bucket bunga modal with falling petals
- 💌 Emotional farewell messages
- 🎁 Gift section with personalized letter
- 🎵 Music player (5 songs, play/pause/skip, volume control)
- 📸 Photo gallery section
- 🎬 Video section with goodbye message
- 🎨 3D interactive cards
- 📅 Timeline of memories
- 📱 Fully responsive

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone repository
git clone <your-repo-url>
cd birthday-premium

# Install dependencies
npm install

# Run development server
npm run dev
```

Open `http://localhost:5173` in your browser.

## 📁 Project Structure

```
birthday-premium/
├── public/              # Static assets (images, audio, video)
├── src/
│   ├── App.jsx         # Main component
│   ├── App.css         # Styling
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### 1. Add Your Photos
Place photos in `public/` folder (e.g., `foto1.jpg`, `foto2.jpg`) and update gallery section in `App.jsx`.

### 2. Add Your Video
Place video as `public/video.mp4`.

### 3. Add Your Music
Place MP3 files in `public/` and update the `songs` array in `App.jsx`.

### 4. Change Gift Link
Edit `App.jsx`, find:
```javascript
href="https://linkmu.com"
```
Replace with your actual gift link.

### 5. Edit Messages
Customize text in `App.jsx`:
- `MessageModal` - Main farewell message
- `GiftModal` - Gift letter
- `VideoMessageModal` - Video goodbye message
- Timeline memories array

## 🛠️ Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## 🌐 Deploy

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

Drag and drop the `dist/` folder to [Netlify](https://app.netlify.com/drop).

## 🎯 Tech Stack

- React 18
- Vite
- Framer Motion
- React Confetti

## 📝 Notes

- Large media files (MP3, MP4) are gitignored by default
- You may need to host media files separately or use Git LFS for large files
- Update `.gitignore` if you want to include/exclude specific files

## 💔 Theme

This website uses a bittersweet, emotional farewell theme - celebrating a birthday while saying goodbye.

---

Made with 💔 for a special farewell
