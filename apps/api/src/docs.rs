use axum::Router;
use utoipa::OpenApi;
use utoipa_swagger_ui::SwaggerUi;

use crate::entrypoints::http;

#[derive(OpenApi)]
#[openapi(
    paths(
        http::handlers::root::root,
        http::handlers::health::health,
        http::handlers::sitemap::site_map,
        http::handlers::consulting::get_services,
        http::handlers::consulting::create_consultation,
        http::handlers::consulting::get_consultation_requests,
    ),
    components(
        schemas(
            http::schemas::root::RootResponse,
            http::schemas::health::HealthResponse,
            http::schemas::sitemap::SitemapResponse,
            http::schemas::sitemap::SitemapPageItem,
            http::schemas::sitemap::NavItem,
            http::handlers::consulting::CreateServiceRequest,
            http::handlers::consulting::ConsultationRequestPayload,
            http::handlers::consulting::ServiceResponse,
            http::handlers::consulting::ConsultationResponse,
        )
    ),
    tags(
        (name = "Root", description = "General endpoints"),
        (name = "Health", description = "Health check endpoints"),
        (name = "Consulting", description = "Consulting services and requests")
    )
)]
pub struct ApiDoc;

pub fn swagger_router() -> Router {
    Router::new().merge(
        SwaggerUi::new("/docs")
            .url("/api-doc/openapi.json", ApiDoc::openapi()),
    )
}
