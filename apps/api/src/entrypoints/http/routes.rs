use axum::{routing::{get, post}, Router};

use crate::state::AppState;

use super::handlers;

pub fn http_router() -> Router<AppState> {
    Router::new()
        .route("/", get(handlers::root::handler))
        .route("/health", get(handlers::health::handler))
        .route("/api/site-map", get(handlers::sitemap::handler))
        .route("/api/services", get(handlers::consulting::get_services))
        .route("/api/consultations", post(handlers::consulting::create_consultation))
        .route("/api/consultations/requests", get(handlers::consulting::get_consultation_requests))
}
