# ⚡ Quick Start - Deploy dalam 5 Menit

## 🚀 Langkah Cepat

### 1️⃣ Push ke GitHub (2 menit)

```bash
# Buka CMD di folder birthday-premium

git init
git add .
git commit -m "Birthday website"
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

**GANTI:**
- `USERNAME` = username GitHub kamu
- `REPO-NAME` = nama repo yang dibuat di GitHub

---

### 2️⃣ Deploy ke Vercel (2 menit)

1. Buka https://vercel.com
2. Login dengan GitHub
3. Click **Add New** → **Project**
4. Pilih repo kamu
5. Click **Deploy**
6. ✅ **DONE!**

---

### 3️⃣ Dapat Link & Share (1 menit)

Vercel kasih link:
```
https://your-project.vercel.app
```

**Share link ini ke dia! 💕**

---

## ⚙️ Sebelum Deploy

**PENTING! Edit ini dulu:**

File: `src/App.jsx` (line ~744)
```javascript
const phoneNumber = "6281234567890" // GANTI dengan nomor WA KAMU!
```

Format:
- ✅ `6281234567890`
- ❌ `+62 812-3456-7890`
- ❌ `081234567890`

---

## 📦 File Structure

```
birthday-premium/
├── src/              # React components
├── public/           # Media files (gambar, video, audio)
├── package.json      # Dependencies
└── vite.config.js    # Vite config
```

**Semua file ini akan di-upload ke GitHub!**

---

## 🔄 Update Setelah Deploy

```bash
# Edit file (code/media/dll)
git add .
git commit -m "Update website"
git push

# Vercel auto-deploy dalam 1-2 menit!
```

---

## 💾 Total Size

Cek size folder:
```bash
# Windows
dir /s birthday-premium
```

- Size < 200MB: ✅ Aman upload semua
- Size > 200MB: Compress video/gambar dulu

---

## ✅ Checklist

- [ ] Ganti nomor WhatsApp
- [ ] Test local: `npx vite`
- [ ] Push ke GitHub
- [ ] Deploy ke Vercel
- [ ] Test link online
- [ ] Share ke dia! 🎉

---

**THAT'S IT!** Website online dalam 5 menit! 🚀

Lihat `DEPLOY-GUIDE.md` untuk panduan lengkap.
