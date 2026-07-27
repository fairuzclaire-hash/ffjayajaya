# 🚀 Panduan Deploy Birthday Website

## 📦 File Yang Perlu Di-Upload ke GitHub

### ✅ WAJIB Upload:
```
birthday-premium/
├── src/                    ✅ (semua file code)
├── public/                 ⚠️ (lihat catatan di bawah)
├── index.html             ✅
├── package.json           ✅
├── package-lock.json      ✅
├── vite.config.js         ✅
├── .gitignore             ✅
└── README.md              ✅
```

### ⚠️ CATATAN FILE BESAR (public folder):
File di `public/` seperti MP3, MP4, gambar:
- **Jika upload semua**: Repo jadi besar (ratusan MB)
- **Alternatif**: Upload tanpa media, lalu upload media langsung ke hosting

**Pilihan:**
1. **Upload semua** (simple tapi repo besar) ✅
2. **Exclude media** (tambahkan ke .gitignore, upload manual ke Vercel)

---

## 🌐 Cara Deploy ke Vercel (GRATIS & MUDAH)

### Step 1: Buat Akun & Repository

#### A. Buat Repository GitHub
1. Buka https://github.com/new
2. **Repository name**: `birthday-website` (atau nama lain)
3. **Visibility**: 
   - **Public** ✅ (recommended, gratis unlimited)
   - **Private** (juga bisa, tapi kuota terbatas)
4. **JANGAN** centang "Add README" (kita sudah punya)
5. Click **Create repository**

#### B. Upload Code ke GitHub

Buka **Command Prompt** di folder `birthday-premium`:

```bash
# 1. Initialize Git (kalau belum)
git init

# 2. Add semua file
git add .

# 3. Commit
git commit -m "Initial commit: Birthday website"

# 4. Tambahkan remote (GANTI URL dengan URL repo kamu!)
git remote add origin https://github.com/username/birthday-website.git

# 5. Push ke GitHub
git branch -M main
git push -u origin main
```

**GANTI:**
- `username` = username GitHub kamu
- `birthday-website` = nama repo yang kamu buat

---

### Step 2: Deploy ke Vercel

#### A. Buat Akun Vercel
1. Buka https://vercel.com/signup
2. Click **Continue with GitHub**
3. Login dengan GitHub kamu
4. Authorize Vercel

#### B. Import Project
1. Di dashboard Vercel, click **Add New** → **Project**
2. Click **Import Git Repository**
3. Cari repo `birthday-website` kamu
4. Click **Import**

#### C. Configure Project
```
Framework Preset: Vite
Root Directory: ./ (default)
Build Command: npm run build (default)
Output Directory: dist (default)
Install Command: npm install (default)
```

**Semua setting default sudah benar!**

#### D. Deploy!
1. Click **Deploy**
2. Tunggu 2-3 menit
3. ✅ Website online!

#### E. Dapat URL
Setelah deploy sukses, kamu dapat URL seperti:
```
https://birthday-website-username.vercel.app
```

**URL ini bisa langsung dikasih ke dia!**

---

## 🎯 Cara Upload Media Files (Jika Exclude dari GitHub)

### Opsi 1: Upload via Vercel Dashboard
1. Buka project di Vercel
2. Settings → General → **Upload Files**
3. Upload semua file di `public/` (MP3, MP4, JPG)

### Opsi 2: Include di Git (RECOMMENDED - Paling Simple)
Upload semua file termasuk media. Vercel limit: 250MB per project.

Cek total size folder public:
```bash
# Windows CMD
dir /s public

# Check size
# Kalau < 200MB, aman upload semua!
```

---

## 🔧 Update Website (Setelah Deploy)

Kalau mau update code atau ganti file:

```bash
# 1. Edit file (code, gambar, dll)

# 2. Add changes
git add .

# 3. Commit
git commit -m "Update: pesan kamu"

# 4. Push
git push

# Vercel auto-deploy dalam 1-2 menit!
```

---

## ⚙️ Custom Domain (Optional)

### Free Subdomain
Vercel kasih free subdomain:
```
https://your-project.vercel.app
```

### Custom Domain (Punya Domain Sendiri)
1. Beli domain (Niagahoster, Namecheap, dll)
2. Di Vercel: Settings → Domains
3. Add domain kamu
4. Update DNS di registrar
5. Tunggu propagation (1-24 jam)

---

## 📝 Checklist Sebelum Deploy

- [ ] Ganti nomor WhatsApp di `src/App.jsx`:
  ```javascript
  const phoneNumber = "6281234567890" // GANTI!
  ```

- [ ] Test di local: `npx vite`
- [ ] Cek semua file ada (gambar, video, audio)
- [ ] Commit & push ke GitHub
- [ ] Deploy ke Vercel
- [ ] Test website online
- [ ] Share link ke dia! 💕

---

## 🆘 Troubleshooting

### "Failed to deploy"
- Cek error log di Vercel
- Pastikan `package.json` ada
- Cek typo di code

### "Video/Audio tidak muncul"
- Cek nama file di `public/` sama dengan di code
- Case-sensitive! `Gallery1.jpg` ≠ `gallery1.jpg`
- Format didukung: MP4, MP3, JPG, JPEG, PNG

### "Website lambat"
- Compress video/gambar dulu sebelum upload
- Gunakan tools: TinyPNG, HandBrake

### "Repository too large"
- Pindah file besar ke Git LFS
- Atau exclude dari git, upload manual ke Vercel

---

## 💡 Tips

1. **Test dulu di local** sebelum deploy
2. **Backup code** sebelum push
3. **Jangan commit `.env`** kalau ada secrets
4. **Private repo** kalau mau lebih aman (tapi public juga OK)
5. **Share direct link** aja ke dia, gak usah kasih repo link

---

## 🎉 Done!

Setelah deploy, kamu punya:
- ✅ Website online 24/7
- ✅ HTTPS (secure)
- ✅ Fast loading (CDN)
- ✅ Free hosting
- ✅ Auto-deploy on update
- ✅ Custom domain (optional)

**Selamat! Website birthday sudah online! 🎂✨**

Tinggal share link ke dia dan tunggu reaksinya! 💕
