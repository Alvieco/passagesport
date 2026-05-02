# AGENTS.md

Dokumen ini menjelaskan arsitektur proyek PassageSport untuk developer dan AI agent yang bekerja di codebase ini.

## Gambaran Proyek

PassageSport adalah blog sepakbola berbasis TanStack Start yang menampilkan tiga kategori konten: Analisis Taktikal, Transfer Pemain, dan Berita Terkini. Konten dikelola melalui file markdown type-safe menggunakan Content Collections.

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Content | Content Collections (markdown type-safe) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Struktur Direktori

```
content/posts/          # Artikel markdown — satu file per artikel
src/
  components/
    blog-posts.tsx      # Grid kartu artikel dengan badge kategori dan sorting terbaru
    ui/card.tsx         # Komponen Card primitif
  lib/utils.ts          # Helper cn() untuk Tailwind class merging
  routes/
    __root.tsx          # Root layout: header hijau, footer, navigasi kategori
    index.tsx           # Halaman beranda — semua artikel, hero banner
    posts.$slug.tsx     # Halaman detail artikel
    category.$category.tsx  # Filter artikel per kategori
  styles.css            # Global styles: Tailwind import + prose styles manual
content-collections.ts  # Skema Zod untuk frontmatter artikel
```

## Konvensi Konten

### Frontmatter Wajib

```yaml
date: YYYY-MM-DD
title: "Judul Artikel"
summary: "Ringkasan satu paragraf."
categories:
  - Analisis Taktikal  # HARUS salah satu dari tiga kategori resmi
image: placeholder.png
```

### Tiga Kategori Resmi

- `Analisis Taktikal` — badge biru
- `Transfer Pemain` — badge kuning
- `Berita Terkini` — badge merah

Jangan buat kategori baru tanpa menambahkan warnanya di `categoryColors` dalam `blog-posts.tsx` dan `posts.$slug.tsx`.

### Slug Otomatis

Slug dibuat dari judul: huruf kecil, karakter non-alphanumeric diganti `_`. Didefinisikan di `content-collections.ts` dalam fungsi `transform`.

## Keputusan Desain Penting

### Prose Styles Manual (bukan @tailwindcss/typography)

`@tailwindcss/typography` tidak diinstal. Semua styling untuk konten artikel (`.prose`) ditulis manual di `src/styles.css`. Jika ingin menambahkan elemen HTML baru di artikel, tambahkan juga selector-nya di bagian prose CSS.

### Sorting Artikel

Artikel diurutkan berdasarkan tanggal terbaru di `blog-posts.tsx` menggunakan sort pada array `allPosts`. Tidak ada pagination — semua artikel ditampilkan sekaligus.

### Navigasi Kategori

Header di `__root.tsx` memiliki link langsung ke tiga kategori. Jika kategori baru ditambahkan, tambahkan juga link-nya di header.

### Warna Tema

Tema menggunakan green-800/green-600 untuk elemen utama (header, aksen) dan yellow-300 untuk highlight branding "Sport" dalam logo.

## Perintah Development

```bash
npm run dev      # Dev server di port 3000
npm run build    # Build produksi
```
