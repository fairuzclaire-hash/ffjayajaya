# 📤 Cara Upload ke GitHub

## Yang AKAN di-upload ke GitHub:
✅ `src/` folder (semua kode)
✅ `index.html`
✅ `package.json`
✅ `package-lock.json`
✅ `vite.config.js`
✅ `README.md`
✅ `.gitignore`

## Yang TIDAK akan di-upload (sudah di .gitignore):
❌ `node_modules/` (terlalu besar, bisa di-install ulang)
❌ `dist/` (hasil build, ga perlu)
❌ `.vscode/` (setting editor pribadi)
❌ `*.bat` files (START.bat, dll - khusus Windows)
❌ `*.ps1` files (PowerShell scripts)
❌ `SETUP-INSTRUCTIONS.md` (local setup aja)

## ⚠️ PENTING: File Media (MP3, MP4, PNG)

File di `public/` folder seperti:
- `bucket-bunga.png`
- `*.mp3` (lagu-lagu)
- `video.mp4`

**Pilihan 1: Upload ke GitHub**
- Akan di-upload karena tidak ada di `.gitignore`
- ⚠️ GitHub ada limit 100MB per file
- ⚠️ Repo akan jadi besar

**Pilihan 2: Tidak Upload Media (Recommended)**
- Uncomment baris ini di `.gitignore`:
  ```
  public/*.mp3
  public/*.mp4
  public/*.png
  public/*.jpg
  ```
- Upload file media ke hosting terpisah (Google Drive, Dropbox, dll)
- Update URL di `App.jsx`

## 🚀 Langkah-langkah Upload:

### 1. Buat Repository di GitHub
- Buka https://github.com/new
- Beri nama repository (contoh: `birthday-website`)
- Pilih "Public" atau "Private"
- Jangan centang "Initialize with README" (kita sudah punya)
- Click "Create repository"

### 2. Initialize Git di Folder birthday-premium

Buka Command Prompt di folder `birthday-premium`:

```bash
# Initialize git
git init

# Add semua file (yang ga ada di .gitignore akan di-add)
git add .

# Commit pertama
git commit -m "Initial commit: Birthday website"

# Tambahkan remote (ganti URL dengan URL repo kamu)
git remote add origin https://github.com/username/repository-name.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

### 3. Verifikasi Upload
- Refresh halaman GitHub repo
- Cek file apa aja yang ke-upload
- Pastikan `node_modules/` dan `*.bat` TIDAK ada

## 🌐 Cara Orang Lain Clone & Run:

Orang yang clone repo kamu perlu:

```bash
# Clone repository
git clone https://github.com/username/repository-name.git
cd repository-name

# Install dependencies
npm install

# Run development server
npm run dev
```

## 💡 Tips:

1. **Jika mau update code:**
   ```bash
   git add .
   git commit -m "Update messages"
   git push
   ```

2. **Jika mau deploy online:**
   - Vercel: Gratis, otomatis deploy dari GitHub
   - Netlify: Gratis, drag & drop
   - GitHub Pages: Gratis, tapi perlu setup tambahan

3. **Protect sensitive info:**
   - Ganti link hadiah dengan placeholder sebelum upload
   - Jangan upload foto/video pribadi kalau repo public
   - Atau buat repo private

## 🔒 Private vs Public Repository:

**Public:**
- ✅ Gratis
- ✅ Bisa di-access siapa aja
- ❌ Semua orang bisa lihat code & file

**Private:**
- ✅ Hanya kamu & collaborator yang bisa lihat
- ✅ Lebih aman untuk konten pribadi
- ✅ Gratis di GitHub (unlimited private repos)

---

Kalau ada error atau bingung, tanya aja! 😊
