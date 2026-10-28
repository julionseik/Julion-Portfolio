# Portofolio Profesional Soleman Julion Seik, S.Kom
Lulusan Sistem Informasi - Fakultas FIKTI Universitas Gunadarma

Website portofolio modern yang menampilkan profil pribadi, CV resmi, dan 7 sertifikasi kursus Universitas Gunadarma.

---

## 🚀 Cara Cepat Deploy ke GitHub Pages

Proyek ini telah dikonfigurasi agar **langsung siap online** di GitHub Pages tanpa konfigurasi rumit.

### Opsi 1: Paling Mudah (Ubah "None" ke "main" di Settings)
1. **Push** seluruh folder proyek ini ke repository GitHub Anda (di branch `main`).
2. Di halaman repository GitHub Anda, klik tab **Settings** (di menu atas).
3. Di sidebar sebelah kiri, klik **Pages**.
4. Di bagian **Build and deployment**:
   - **Source**: Pilih `Deploy from a branch`
   - **Branch**: Ubah dari `None` menjadi **`main`**
   - **Folder**: Pilih **`/docs`** (folder ini sudah berisi hasil build statis siap saji)
   - Klik tombol **Save**.
5. Tunggu 1–2 menit, link website portofolio Anda akan langsung aktif di atas (contoh: `https://username.github.io/nama-repo/`).

---

### Opsi 2: Otomatis via GitHub Actions (Rekomendasi Modern)
File `.github/workflows/deploy.yml` sudah tersedia di dalam proyek ini:
1. Masuk ke **Settings** -> **Pages**.
2. Pada dropdown **Source**, pilih **GitHub Actions**.
3. Selesai! GitHub akan otomatis meng-compile dan meng-update website Anda setiap kali Anda melakukan push ke branch `main`.

---

## 💻 Menjalankan di Komputer Lokal

```bash
# 1. Install dependensi
npm install

# 2. Jalankan server lokal
npm run dev

# 3. Build untuk produksi
npm run build
# atau jika ingin update folder docs:
npm run build:docs
```
