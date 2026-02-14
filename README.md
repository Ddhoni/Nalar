# 🎯 Nalar Consulting - Website Consulting Minimal Memory

Website consulting yang dibangun dengan Rust dan dirancang untuk VPS dengan memory paling minim. 

## 🚀 Fitur Utama

- **Backend Rust**: Menggunakan Axum framework (very lightweight)
- **Frontend Statis**: HTML/CSS/JS minimal (tidak memerlukan Node.js runtime)
- **Database SQLite**: In-file database dengan zero setup
- **Docker Optimized**: Total memory usage < 200MB
- **API-First**: RESTful API dengan Swagger documentation

## 📊 Memory Footprint

| Komponen | Memory Limit | Typical Usage |
|----------|-------------|---------------|
| Rust API | 128 MB | 60-80 MB |
| Static Web (Caddy) | 64 MB | 30-40 MB |
| **Total** | **192 MB** | **90-120 MB** |

Jauh lebih hemat dibanding Next.js (~300-500MB) atau Node.js monolithic apps!

## 🛠️ Tech Stack

### Backend
- **Framework**: Axum (Rust)
- **Runtime**: Tokio
- **Database**: SQLite dengan SQLx
- **API Docs**: Swagger/OpenAPI

### Frontend
- **Server**: Caddy (16 MB image)
- **Assets**: Pure HTML/CSS/JS
- **Size**: < 1 MB

## 📦 Requirements

### Development
- Rust 1.70+
- Docker & Docker Compose
- Python 3 (untuk testing web server)

### Production
- Docker & Docker Compose
- 512MB RAM minimum (untuk safety margin)

## 🚀 Quick Start

### Development Mode

```bash
# Copy environment file
cp .env.example .env

# Setup (first time only)
make db-init

# Run everything locally
make dev

# Or run separately
make dev-api      # Terminal 1: http://localhost:8080
make dev-web      # Terminal 2: http://localhost:3000
```

### Docker Mode (Production)

```bash
# Build images
make docker

# Start containers
make docker-up

# View logs
make docker-logs

# Stop containers
make docker-down
```

Access:
- **Website**: http://localhost:3000
- **API**: http://localhost:8080
- **API Docs**: http://localhost:8080/docs

## 📝 API Endpoints

### Services
- `GET /api/services` - Daftar layanan consulting

### Consultations
- `POST /api/consultations` - Buat request konsultasi baru
- `GET /api/consultations/requests` - Lihat semua request

### Health
- `GET /health` - Health check
- `GET /` - Root endpoint

## 🗂️ Project Structure

```
.
├── apps/
│   ├── api/                          # Rust backend
│   │   ├── src/
│   │   │   ├── main.rs              # Entry point
│   │   │   ├── config.rs            # Configuration
│   │   │   ├── state.rs             # App state
│   │   │   ├── domain/              # Domain models
│   │   │   ├── repositories/        # Database access
│   │   │   ├── services/            # Business logic
│   │   │   └── entrypoints/http/    # API endpoints
│   │   ├── Cargo.toml               # Rust dependencies
│   │   ├── Dockerfile               # Multi-stage build
│   │   └── migrations/              # Database migrations
│   │
│   └── web/                          # Static frontend
│       ├── public/
│       │   └── index.html            # Main page
│       ├── Dockerfile               # Caddy web server
│       └── Caddyfile                # Web server config
│
├── docker-compose.yml               # Docker orchestration
├── Makefile                         # Build commands
└── README.md                        # This file
```

## 🚀 Deployment

### VPS Minimal (512MB)

1. **Install Docker**
   ```bash
   curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
   ```

2. **Clone Repository**
   ```bash
   git clone <repo-url> nalar-consulting
   cd nalar-consulting
   ```

3. **Deploy**
   ```bash
   cp .env.example .env
   make docker-up
   ```

### Production Tips

1. **Reverse Proxy**: Gunakan Nginx/Traefik untuk reverse proxy
2. **SSL/TLS**: Setup Let's Encrypt untuk HTTPS
3. **Database Backup**: Backup `consulting.db` regularly
4. **Monitoring**: Setup uptime monitoring atau health checks

## 🔒 Security

- Non-root user di Docker containers
- Database permissions terbatas
- Input validation di API
- CORS dapat dikonfigurasi
- Rate limiting dapat ditambahkan

## 📈 Performance Optimization

1. **SQLite**: Cukup untuk < 10,000 konsultasi/bulan
2. **Static Assets**: Cached aggressively
3. **Compression**: Enabled di web server
4. **Connection Pool**: 5 connections (minimal)

Untuk scale lebih besar:
- Migrate ke PostgreSQL
- Add Redis caching
- Setup CDN untuk static assets
- Load balancing dengan multiple instances

---

**Build with ❤️ for minimal resource footprint**

*Optimized for VPS dengan 512MB RAM - Production Ready*
