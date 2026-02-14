use axum::{
    extract::{State, Json},
    response::{IntoResponse, Json as JsonResponse},
};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;

use crate::state::AppState;

#[derive(Serialize, Deserialize, Debug, ToSchema)]
pub struct CreateServiceRequest {
    pub name: String,
    pub description: String,
    #[serde(default)]
    pub price_range: Option<String>,
    #[serde(default)]
    pub duration: Option<String>,
}

#[derive(Serialize, Deserialize, Debug, ToSchema)]
pub struct ConsultationRequestPayload {
    pub name: String,
    pub email: String,
    pub phone: Option<String>,
    pub company: Option<String>,
    pub message: String,
}

#[derive(Serialize, Deserialize, Debug, ToSchema)]
pub struct ServiceResponse {
    pub id: String,
    pub name: String,
    pub description: String,
    pub price_range: Option<String>,
    pub duration: Option<String>,
}

#[derive(Serialize, Deserialize, Debug, ToSchema)]
pub struct ConsultationResponse {
    pub id: String,
    pub name: String,
    pub email: String,
    pub phone: Option<String>,
    pub company: Option<String>,
    pub message: String,
    pub status: String,
}

/// Get all consulting services
#[utoipa::path(
    get,
    path = "/api/services",
    responses(
        (status = 200, description = "List of services", body = Vec<ServiceResponse>),
        (status = 500, description = "Server error")
    ),
    tag = "Consulting"
)]
pub async fn get_services(State(state): State<AppState>) -> impl IntoResponse {
    match state.services.get_services().await {
        Ok(services) => {
            let response: Vec<ServiceResponse> = services.into_iter()
                .map(|s| ServiceResponse {
                    id: s.id,
                    name: s.name,
                    description: s.description,
                    price_range: s.price_range,
                    duration: s.duration,
                })
                .collect();
            (axum::http::StatusCode::OK, JsonResponse(response)).into_response()
        }
        Err(e) => {
            tracing::error!("Error getting services: {}", e);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, JsonResponse(serde_json::json!({
                "error": "Failed to get services"
            }))).into_response()
        }
    }
}

/// Create a new consultation request
#[utoipa::path(
    post,
    path = "/api/consultations",
    request_body = ConsultationRequestPayload,
    responses(
        (status = 201, description = "Consultation request created", body = ConsultationResponse),
        (status = 400, description = "Invalid input"),
        (status = 500, description = "Server error")
    ),
    tag = "Consulting"
)]
pub async fn create_consultation(
    State(state): State<AppState>,
    Json(payload): Json<ConsultationRequestPayload>,
) -> impl IntoResponse {
    match state.services.create_consultation_request(
        payload.name,
        payload.email,
        payload.message,
    ).await {
        Ok(request) => {
            tracing::info!("New consultation request from {}", request.email);
            let response = ConsultationResponse {
                id: request.id,
                name: request.name,
                email: request.email,
                phone: request.phone,
                company: request.company,
                message: request.message,
                status: request.status,
            };
            (axum::http::StatusCode::CREATED, JsonResponse(response)).into_response()
        }
        Err(e) => {
            tracing::error!("Error creating consultation: {}", e);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, JsonResponse(serde_json::json!({
                "error": "Failed to create consultation request"
            }))).into_response()
        }
    }
}

/// Get all consultation requests
#[utoipa::path(
    get,
    path = "/api/consultations/requests",
    responses(
        (status = 200, description = "List of consultation requests", body = Vec<ConsultationResponse>),
        (status = 500, description = "Server error")
    ),
    tag = "Consulting"
)]
pub async fn get_consultation_requests(State(state): State<AppState>) -> impl IntoResponse {
    match state.services.get_consultation_requests().await {
        Ok(requests) => {
            let response: Vec<ConsultationResponse> = requests.into_iter()
                .map(|r| ConsultationResponse {
                    id: r.id,
                    name: r.name,
                    email: r.email,
                    phone: r.phone,
                    company: r.company,
                    message: r.message,
                    status: r.status,
                })
                .collect();
            (axum::http::StatusCode::OK, JsonResponse(response)).into_response()
        }
        Err(e) => {
            tracing::error!("Error getting requests: {}", e);
            (axum::http::StatusCode::INTERNAL_SERVER_ERROR, JsonResponse(serde_json::json!({
                "error": "Failed to get requests"
            }))).into_response()
        }
    }
}
