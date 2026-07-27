# 🌐 Cara Deploy Website ke Online

## ❌ PENTING: File .bat TIDAK DIPERLUKAN untuk deploy online!

File `.bat` cuma buat development di komputer lokal. Kalau deploy online, website akan jalan otomatis tanpa perlu `.bat`.

---

## 🚀 Opsi 1: Deploy ke Vercel (RECOMMENDED - PALING MUDAH)

### Kenapa Vercel?
- ✅ **Gratis**
- ✅ **Otomatis dari GitHub**
- ✅ **Super cepat**
- ✅ **HTTPS gratis**
- ✅ **Custom domain gratis**

### Langkah-langkah:

1. **Upload ke GitHub dulu** (ikutin `UPLOAD-TO-GITHUB.md`)

2. **Buka Vercel:**
   - Pergi ke https://vercel.com
   - Sign up/Login dengan GitHub

3. **Import Project:**
   - Click "Add New..." → "Project"
   - Select repository kamu (birthday-premium)
   - Click "Import"

4. **Configure:**
   - Framework Preset: **Vite** (otomatis terdeteksi)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (otomatis)
   - Output Directory: `dist` (otomatis)
   - **Jangan ubah apapun, langsung deploy!**

5. **Deploy:**
   - Click "Deploy"
   - Wait 1-2 menit
   - Done! Website kamu online!

6. **URL:**
   - Kamu akan dapat URL: `https://nama-project.vercel.app`
   - Bisa ganti nama di settings
   - Atau connect custom domain

### Update Website:
Tinggal push ke GitHub, otomatis update di Vercel!

```bash
git add .
git commit -m "Update content"
git push
```

---

## 🚀 Opsi 2: Deploy ke Netlify

### Langkah-langkah:

1. **Upload ke GitHub dulu**

2. **Buka Netlify:**
   - Pergi ke https://netlify.com
   - Sign up/Login dengan GitHub

3. **Import Project:**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select repository

4. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

5. **Done!**
   - URL: `https://nama-random.netlify.app`
   - Bisa custom domain gratis

---

## 🚀 Opsi 3: Deploy ke GitHub Pages

### Langkah-langkah:

1. **Upload ke GitHub dulu**

2. **Install gh-pages:**
   ```bash
   cd birthday-premium
   npm install --save-dev gh-pages
   ```

3. **Edit `package.json`** - tambahkan `homepage`:
   ```json
   {
     "name": "birthday-premium",
     "homepage": "https://username.github.io/repository-name",
     "scripts": {
       "deploy": "npm run build && npx gh-pages -d dist"
     }
   }
   ```
   Ganti `username` dengan GitHub username kamu dan `repository-name` dengan nama repo.

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Buka repository di GitHub
   - Settings → Pages
   - Source: `gh-pages` branch
   - Save

6. **Done!**
   - URL: `https://username.github.io/repository-name`

---

## 📱 Cara Akses Website Setelah Deploy:

### Development (Local - Pakai .bat):
```
http://localhost:3000
```

### Production (Online - Otomatis):
```
https://your-website.vercel.app
atau
https://your-website.netlify.app
atau
https://username.github.io/repo-name
```

---

## ⚙️ Penjelasan Teknis:

### Development (npm run dev):
- Jalan di komputer kamu
- Port 3000
- Hot reload (otomatis refresh)
- Pakai file `.bat` untuk convenience

### Production (npm run build):
- Build ke folder `dist/`
- HTML, CSS, JS sudah dioptimasi
- Siap upload ke hosting
- **TIDAK PERLU .bat atau npm commands!**
- Hosting service (Vercel/Netlify) akan serve file di `dist/` otomatis

---

## 🎯 Rekomendasi:

**Pakai Vercel!**
- Paling mudah
- Otomatis deploy dari GitHub
- Gratis selamanya
- Custom domain gratis
- HTTPS otomatis

---

## 🔥 Quick Command Reference:

```bash
# Development (local)
npm run dev          # Jalan di http://localhost:3000

# Build for production
npm run build        # Output ke folder dist/

# Preview production build locally
npm run preview      # Test hasil build sebelum deploy

# Deploy ke GitHub Pages
npm run deploy       # Build + push ke gh-pages branch
```

---

## ❓ FAQ:

**Q: Kok website gak bisa diakses setelah deploy?**
A: Check:
- File media (MP3, MP4) mungkin terlalu besar (>100MB)
- Path file harus relative (sudah diatur di vite.config.js)
- Cek console browser untuk error

**Q: File media gak muncul?**
A: File di `public/` folder harus di-upload ke GitHub atau hosting terpisah

**Q: Bisa ganti domain?**
A: Bisa! Vercel & Netlify support custom domain gratis

**Q: Gratis selamanya?**
A: Ya! Vercel, Netlify, GitHub Pages gratis untuk personal project

---

Kalau ada masalah, tanya aja! 😊
