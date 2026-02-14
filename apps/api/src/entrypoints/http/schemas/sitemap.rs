use serde::Serialize;
use utoipa::ToSchema;

#[derive(Serialize, ToSchema)]
pub struct NavItem {
    pub label: String,
    pub href: String,
}

#[derive(Serialize, ToSchema)]
pub struct SitemapPageItem {
    pub name: String,
    pub url: String,
    pub purpose: String,
}

#[derive(Serialize, ToSchema)]
pub struct SitemapResponse {
    pub generated_at: String,
    pub header_nav: Vec<NavItem>,
    pub pages: Vec<SitemapPageItem>,
}
