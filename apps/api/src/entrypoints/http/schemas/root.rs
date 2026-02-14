use serde::Serialize;
use utoipa::ToSchema;

#[derive(Serialize, ToSchema)]
pub struct RootResponse {
    pub name: String,
    pub version: String,
    pub message: String,
}
