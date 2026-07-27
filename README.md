# Birthday Premium Website 🎉

Website ulang tahun premium dengan animasi interaktif dan fitur lengkap!

## ✨ Fitur Lengkap:

- ✅ **Confetti Animation** - Animasi confetti 10 detik saat load
- ✅ **Floating Hearts** - Background hati melayang romantis
- ✅ **Interactive Title** - Judul Comic Sans yang bisa diklik & bounce
- ✅ **3 Buttons Utama:**
  - 💐 Bucket Bunga - Modal dengan animasi falling petals
  - 💌 Baca Pesan - Pesan panjang romantis
  - 🎁 Hadiah Spesial - Surat + link hadiah
- ✅ **Music Player** - 5 lagu, play/pause/skip, volume control, minimize
- ✅ **Interactive Cards** - 3D rotation on hover
- ✅ **Timeline Kenangan** - Journey bersama
- ✅ **Gallery** - 6 foto (bisa diganti)
- ✅ **Video Section** - Video spesial + pesan setelah video selesai
- ✅ **Responsive Design** - Bagus di mobile & desktop

## 🚀 Cara Menjalankan:

### Opsi 1: Double-click
Double-click file `START-SERVER.bat`

### Opsi 2: Command Prompt
```bash
cd birthday-premium
npx vite --open
```

Website akan terbuka otomatis di browser di `http://localhost:3000`

## 🎨 Cara Customize:

### 1. Ganti Link Hadiah
Edit `src/App.jsx`, cari baris:
```javascript
href="https://linkmu.com"
```
Ganti dengan link hadiah kamu.

### 2. Upload Foto Gallery
Taruh foto-foto kamu di folder `public/` dengan nama:
- `foto1.jpg`
- `foto2.jpg`
- `foto3.jpg`
- dst...

Lalu edit `src/App.jsx` pada bagian gallery, ganti placeholder dengan:
```javascript
<img src="/foto1.jpg" alt="Memory 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```

### 3. Upload Video
Taruh video kamu di `public/video.mp4`

### 4. Edit Pesan
Edit text di `src/App.jsx`:
- **MessageModal** - untuk pesan utama
- **GiftModal** - untuk surat hadiah
- **VideoMessageModal** - untuk pesan setelah video

### 5. Edit Timeline Memories
Cari array `memories` di `src/App.jsx` dan ganti dengan kenangan kalian.

### 6. Ganti Warna Tema
Edit `src/App.css` - cari gradient colors dan ganti sesuai selera.

## 📁 Struktur File:

```
birthday-premium/
├── public/           # File statis (gambar, audio, video)
│   ├── bucket-bunga.png
│   ├── Arash Buana - i've always loved u (MV).mp3
│   ├── Dendi Nata - Abadi (Indo Version) Lyric Video.mp3
│   ├── I'd like to watch you sleeping  lirik dan musik oleh Sal Priadi.mp3
│   ├── Joon - with ease (Official Lyric Video).mp3
│   └── Yovie & Nuno - Sampai Akhir Waktu.mp3
├── src/
│   ├── App.jsx      # Komponen utama
│   ├── App.css      # Styling
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── index.html
├── package.json
└── START-SERVER.bat # Quick start
```

## 🛠️ Build untuk Production:

```bash
npm run build
```

Hasil build ada di folder `dist/`

## 💡 Tips:

- Text dan elemen bisa diinteraksi (klik, hover)
- Music player bisa di-minimize
- Semua modal bisa di-close dengan klik di luar atau tombol X
- Video message muncul otomatis setelah video selesai atau klik button

## 🎯 Tech Stack:

- React 18
- Vite
- Framer Motion (animations)
- React Confetti

---

Dibuat dengan ❤️ untuk ulang tahun spesial!
