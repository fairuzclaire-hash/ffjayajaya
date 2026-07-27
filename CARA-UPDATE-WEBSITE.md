# 🚀 Cara Update Website (Super Gampang!)

## ✅ Setup Sudah Selesai!

Website kamu sekarang sudah:
- ✅ Connected ke GitHub
- ✅ Media files (MP3, MP4, gambar) di Google Drive
- ✅ Code siap di-push ke GitHub

---

## 📝 Cara Update Website

### Setiap Kali Mau Update Code:

1. **Edit file** di Kiro (atau editor apapun)
2. **Double-click**: `PUSH-TO-GITHUB.bat`
3. **Tulis pesan** (atau Enter aja)
4. **DONE!** ✅

Sesimpel itu! 😊

---

## 🎯 Contoh Update:

### Update Pesan Birthday:
1. Buka `src/App.jsx` di Kiro
2. Edit text yang mau diubah
3. Save (Ctrl+S)
4. Double-click `PUSH-TO-GITHUB.bat`
5. Ketik: "Update pesan birthday"
6. SELESAI!

### Update Gambar/Video/Lagu:
1. Upload file baru ke Google Drive
2. Ambil FILE_ID dari link share
3. Buka `src/App.jsx` di Kiro
4. Edit object `MEDIA_URLS` (di bagian atas)
5. Ganti FILE_ID dengan yang baru
6. Save & jalankan `PUSH-TO-GITHUB.bat`

---

## 📂 File Penting:

- `src/App.jsx` - Main code website
- `src/App.css` - Styling/tampilan
- `PUSH-TO-GITHUB.bat` - Script auto push
- `.gitignore` - File yang ga ke-upload

---

## 💡 Tips:

### Cek Status Git:
```bash
git status
```

### Lihat History:
```bash
git log --oneline
```

### Batal Commit (sebelum push):
```bash
git reset HEAD~1
```

---

## ⚠️ File Media (MP3, MP4, Gambar):

File media **TIDAK** ke-upload ke GitHub karena:
- Terlalu besar (201MB total)
- Sudah ada di Google Drive
- Website load lebih cepat

Kalau mau ganti media:
1. Upload file baru ke Google Drive
2. Share → Get link → Copy FILE_ID
3. Update `MEDIA_URLS` di `App.jsx`

---

## 🌐 Deploy Online (Opsional):

Kalau mau website online beneran:

### Vercel (RECOMMENDED):
1. Buka https://vercel.com
2. Connect GitHub account
3. Import repository kamu
4. Deploy! (otomatis)

### Netlify:
1. Buka https://netlify.com
2. Connect GitHub
3. Deploy

---

## 🆘 Troubleshooting:

### Push Error:
```bash
git pull origin main
git push
```

### Lupa Password GitHub:
- Pake **Personal Access Token** bukan password
- Generate di: Settings → Developer Settings → Tokens

### File Ga Ke-upload:
- Cek `.gitignore` - file yang ada di situ ga bakal ke-upload

---

Gampang kan? Sekarang kamu bisa update website kapan aja! 🎉
