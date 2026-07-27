# 🌐 Cara Buka Website

## 📍 Ada 2 Cara:

---

## 1️⃣ Development (Di Komputer Kamu)

### Windows:
**Opsi A: Pakai .bat file (Paling Mudah)**
```
Double-click file: START-SERVER.bat
```

**Opsi B: Pakai Command Prompt**
```bash
cd birthday-premium
npm run dev
```

**Opsi C: Pakai PowerShell**
```powershell
cd birthday-premium
npm run dev
```

Website akan buka otomatis di: `http://localhost:3000`

---

## 2️⃣ Online (Deploy ke Internet)

### Kalau Sudah Deploy:
Tinggal buka URL yang dikasih dari:
- Vercel: `https://nama-project.vercel.app`
- Netlify: `https://nama-project.netlify.app`
- GitHub Pages: `https://username.github.io/repo-name`

**Gak perlu .bat atau npm commands!** Website langsung bisa diakses kayak website biasa.

### Cara Deploy:
Baca file: `DEPLOY-ONLINE.md`

---

## 🎯 Ringkasan:

| Cara | Lokasi | Butuh .bat? | Command |
|------|--------|-------------|---------|
| **Development** | Komputer lokal | Ya (optional) | `npm run dev` |
| **Production** | Online (Internet) | ❌ TIDAK | Otomatis jalan |

---

## ❓ FAQ:

**Q: Kenapa harus pakai npm run dev?**
A: Karena ini React app yang butuh build process. Gak bisa langsung buka index.html.

**Q: Kalau deploy online, kok gak pakai npm run dev?**
A: Karena kita build dulu (`npm run build`), hasilnya di folder `dist/` yang bisa langsung jalan tanpa server.

**Q: File .bat itu apa?**
A: Shortcut Windows buat jalanin command `npm run dev` otomatis. Cuma buat development di komputer lokal.

**Q: Kalau mau share ke temen, gimana?**
A: Deploy online (pakai Vercel/Netlify), terus share URL-nya. Temen kamu tinggal buka URL kayak buka website biasa.

---

Kalau masih bingung, tanya aja! 😊
