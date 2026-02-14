use axum::{extract::State, response::IntoResponse, Json};

use crate::{state::AppState, entrypoints::http::schemas::root::RootResponse};

#[utoipa::path(
    get,
    path = "/",
    tag = "Root",
    responses(
        (status = 200, description = "API root info", body = RootResponse)
    )
)]
pub async fn root(State(_state): State<AppState>) -> impl IntoResponse {
    Json(RootResponse {
        name: "Nalar Consulting API".to_string(),
        version: env!("CARGO_PKG_VERSION").to_string(),
        message: "Welcome. See /docs for Swagger UI.".to_string(),
    })
}

pub async fn handler(State(state): State<AppState>) -> impl IntoResponse {
    root(State(state)).await
}
