mod app;
mod config;
mod docs;
mod error;
mod state;

mod domain;
mod services;
mod repositories;
mod adapters;
mod entrypoints;
mod utils;

use crate::config::Config;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[tokio::main]
async fn main() {
    dotenvy::dotenv().ok();

    tracing_subscriber::registry()
        .with(tracing_subscriber::EnvFilter::from_default_env())
        .with(tracing_subscriber::fmt::layer())
        .init();

    let config = Config::from_env();
    
    // Initialize database
    let db_pool = sqlx::sqlite::SqlitePoolOptions::new()
        .max_connections(5)
        .connect(&config.database_url)
        .await
        .expect("Failed to connect to database");

    // Run migrations
    sqlx::migrate!("./migrations")
        .run(&db_pool)
        .await
        .expect("Failed to run migrations");

    let app = app::build_app(config.clone(), db_pool);

    let listener = tokio::net::TcpListener::bind(config.bind_addr())
        .await
        .expect("failed to bind");

    tracing::info!(
        "🚀 Consulting API running on http://{} (docs: /docs)",
        config.bind_addr()
    );

    axum::serve(listener, app).await.expect("server crashed");
}
