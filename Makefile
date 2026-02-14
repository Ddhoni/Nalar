.PHONY: dev-api dev-web dev docker docker-up docker-down clean help

help:
	@echo "Nalar Consulting - Minimal Memory VPS Edition"
	@echo ""
	@echo "Available commands:"
	@echo "  make dev        - Run development (both API and Web)"
	@echo "  make dev-api    - Run API only"
	@echo "  make dev-web    - Run Web only"
	@echo "  make docker     - Build Docker images"
	@echo "  make docker-up  - Start Docker containers"
	@echo "  make docker-down - Stop Docker containers"
	@echo "  make clean      - Clean build artifacts"

dev-api:
	@echo "🚀 Starting Rust API..."
	cd apps/api && cargo run

dev-web:
	@echo "🌐 Starting Next.js Web App..."
	@echo "Open http://localhost:3000 in your browser"
	cd apps/web && npm run dev -- --port 3000

dev:
	@echo "🎯 Nalar Consulting - Development Mode"
	@echo "Starting API (8080) and Web (3000)..."
	make -j2 dev-api dev-web

docker:
	@echo "🐳 Building Docker images..."
	docker compose build --no-cache

docker-up:
	@echo "🚀 Starting Docker containers..."
	@echo "API:  http://localhost:8080"
	@echo "Web:  http://localhost:3000"
	@echo "Docs: http://localhost:8080/docs"
	docker compose up -d

docker-down:
	@echo "⏹️  Stopping Docker containers..."
	docker compose down

docker-logs:
	docker compose logs -f

docker-ps:
	docker compose ps

db-init:
	@echo "📊 Initializing database..."
	cd apps/api && sqlx database create && sqlx migrate run

clean:
	@echo "🧹 Cleaning build artifacts..."
	cd apps/api && cargo clean
	rm -f apps/api/consulting.db
