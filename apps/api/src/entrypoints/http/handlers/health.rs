use axum::{extract::State, response::IntoResponse, Json};

use crate::{
    entrypoints::http::schemas::health::HealthResponse,
    state::AppState,
};

#[utoipa::path(
    get,
    path = "/health",
    tag = "Health",
    responses(
        (status = 200, description = "Health check", body = HealthResponse)
    )
)]
pub async fn health(State(state): State<AppState>) -> impl IntoResponse {
    let status = state.services.health.check();

    Json(HealthResponse {
        status: status.status,
    })
}

pub async fn handler(State(state): State<AppState>) -> impl IntoResponse {
    health(State(state)).await
}
