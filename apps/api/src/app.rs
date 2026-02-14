use axum::Router;

use crate::{
    config::Config,
    docs::swagger_router,
    entrypoints::http::routes::http_router,
    state::AppState,
};

pub fn build_app(config: Config, db: sqlx::SqlitePool) -> Router {
    let state = AppState::new(config, db);

    Router::new()
        .merge(http_router().with_state(state.clone()))
        .merge(swagger_router())
}
