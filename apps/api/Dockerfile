FROM rust:latest as builder
WORKDIR /app

COPY Cargo.toml Cargo.lock* ./
COPY migrations ./migrations
RUN mkdir -p src && echo "fn main(){}" > src/main.rs
RUN cargo build --release

COPY src ./src
RUN cargo build --release

# Minimal runtime image
FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y --no-install-recommends sqlite3 ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app

COPY --from=builder /app/target/release/nalar_api /app/nalar_api
COPY migrations ./migrations

RUN useradd -m -u 1000 app && chown -R app:app /app
USER app

ENV PORT=8080 \
    DATABASE_URL=sqlite://consulting.db \
    ENVIRONMENT=production \
    RUST_LOG=info

EXPOSE 8080
CMD ["/app/nalar_api"]

