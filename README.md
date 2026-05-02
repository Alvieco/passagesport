# PassageSport

Blog sepakbola yang berfokus pada analisis taktikal mendalam, berita transfer pemain terpanas, dan kabar terkini dari dunia sepakbola.

## Kategori Konten

- **Analisis Taktikal** — Pembedahan strategi, formasi, dan taktik tim-tim top dunia
- **Transfer Pemain** — Berita dan evaluasi transfer, rumor bursa, serta dampak taktis perpindahan pemain
- **Berita Terkini** — Preview pertandingan, hasil, dan kabar terbaru dunia sepakbola

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Content | Content Collections (type-safe markdown) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Server akan berjalan di `http://localhost:3000`.

## Menambahkan Artikel Baru

Buat file markdown baru di `content/posts/` dengan frontmatter berikut:

```markdown
---
date: 2026-05-01
title: "Judul Artikel"
summary: "Ringkasan singkat artikel."
categories:
  - Analisis Taktikal   # atau: Transfer Pemain / Berita Terkini
image: placeholder.png
---

Konten artikel dalam format markdown...
```

Slug artikel dibuat otomatis dari judul (huruf kecil, spasi diganti underscore).

## Build untuk Produksi

```bash
npm run build
```

Output ke direktori `dist/client`, siap deploy ke Netlify.
