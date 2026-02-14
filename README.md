# NALAR Monorepo

Monorepo untuk website dan API NALAR:
- `apps/api`: Rust + Axum API
- `apps/web`: Next.js 14 frontend

## Stack

- Backend: Rust, Axum, Tokio, SQLite
- Frontend: Next.js 14, React 18, Tailwind CSS
- Container: Docker + Docker Compose

## Struktur Proyek

```text
.
├── apps/
│   ├── api/
│   │   ├── src/
│   │   ├── Cargo.toml
│   │   └── Dockerfile
│   └── web/
│       ├── app/
│       ├── src/
│       ├── package.json
│       └── Dockerfile
├── docker-compose.yml
├── Makefile
└── README.md
```

## Prasyarat

- Rust toolchain (untuk menjalankan API lokal)
- Node.js 20+ dan npm (untuk frontend lokal)
- Docker + Docker Compose (untuk mode container)

## Menjalankan Lokal (Tanpa Docker)

### 1) API

```bash
make dev-api
```

API akan berjalan di `http://localhost:8080`.

### 2) Web (Next.js)

```bash
make dev-web
```

Web akan berjalan di `http://localhost:3000`.

## Menjalankan dengan Docker

```bash
make docker
make docker-up
```

Akses service:
- Web: `http://localhost:3000`
- API: `http://localhost:8080`
- API docs: `http://localhost:8080/docs`

Catatan port web di `docker-compose.yml` menggunakan mapping `3000:3001` (host:container), jadi aplikasi Next.js di dalam container listen pada port `3001`.

## Endpoint API

Berdasarkan router saat ini di `apps/api/src/entrypoints/http/routes.rs`:

- `GET /`
- `GET /health`
- `GET /api/site-map`
- `GET /api/services`
- `POST /api/consultations`
- `GET /api/consultations/requests`

## Perintah Penting

```bash
make help
make dev
make dev-api
make dev-web
make docker
make docker-up
make docker-down
make docker-logs
make clean
```

## Troubleshooting

- Jika Next.js error chunk/module tidak ditemukan (`Cannot find module './xxx.js'`), hentikan dev server lalu hapus cache build `.next` dan jalankan ulang `npm run dev` di `apps/web`.
- Direktori backup build seperti `.next_broken_*` tidak perlu di-commit.
