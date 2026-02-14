use axum::{extract::State, response::IntoResponse, Json};

use crate::{
    entrypoints::http::schemas::sitemap::{NavItem, SitemapPageItem, SitemapResponse},
    state::AppState,
};

#[utoipa::path(
    get,
    path = "/api/site-map",
    tag = "Root",
    responses(
        (status = 200, description = "Site map metadata", body = SitemapResponse)
    )
)]
pub async fn site_map(State(_state): State<AppState>) -> impl IntoResponse {
    Json(SitemapResponse {
        generated_at: chrono::Utc::now().to_rfc3339(),
        header_nav: vec![
            NavItem { label: "Home".into(), href: "/".into() },
            NavItem { label: "Solutions".into(), href: "/solutions".into() },
            NavItem { label: "Products".into(), href: "/products".into() },
            NavItem { label: "Insights".into(), href: "/insights".into() },
            NavItem { label: "Academy".into(), href: "/academy".into() },
            NavItem { label: "Company".into(), href: "/company".into() },
        ],
        pages: vec![
            SitemapPageItem { name: "Home".into(), url: "/".into(), purpose: "Conversion-focused landing page".into() },
            SitemapPageItem { name: "Solutions".into(), url: "/solutions".into(), purpose: "Consulting solutions hub".into() },
            SitemapPageItem { name: "Data & Analytics".into(), url: "/solutions/data-analytics".into(), purpose: "Data & BI services".into() },
            SitemapPageItem { name: "AI & Automation".into(), url: "/solutions/ai-automation".into(), purpose: "AI and workflow automation".into() },
            SitemapPageItem { name: "Digital Marketing & Growth".into(), url: "/solutions/digital-marketing-growth".into(), purpose: "Growth consulting".into() },
            SitemapPageItem { name: "Research Support".into(), url: "/solutions/research-support".into(), purpose: "Methodology and statistics support".into() },
            SitemapPageItem { name: "Custom Integration".into(), url: "/solutions/custom-integration".into(), purpose: "Tailored systems integration".into() },
            SitemapPageItem { name: "Products".into(), url: "/products".into(), purpose: "SaaS product landing".into() },
            SitemapPageItem { name: "Untung POS".into(), url: "/products/untung-pos".into(), purpose: "POS product detail page".into() },
            SitemapPageItem { name: "Insights".into(), url: "/insights".into(), purpose: "Insights hub".into() },
            SitemapPageItem { name: "Blog".into(), url: "/insights/blog".into(), purpose: "Articles and updates".into() },
            SitemapPageItem { name: "Case Studies".into(), url: "/insights/case-studies".into(), purpose: "Client outcomes (coming soon)".into() },
            SitemapPageItem { name: "Reports".into(), url: "/insights/reports".into(), purpose: "Research and reports".into() },
            SitemapPageItem { name: "Resources".into(), url: "/insights/resources".into(), purpose: "Guides and toolkits".into() },
            SitemapPageItem { name: "Academy".into(), url: "/academy".into(), purpose: "Learning hub".into() },
            SitemapPageItem { name: "Courses".into(), url: "/academy/courses".into(), purpose: "Course catalog".into() },
            SitemapPageItem { name: "Workshops".into(), url: "/academy/workshops".into(), purpose: "Hands-on workshops".into() },
            SitemapPageItem { name: "Tutorials".into(), url: "/academy/tutorials".into(), purpose: "Practical tutorials".into() },
            SitemapPageItem { name: "Company".into(), url: "/company".into(), purpose: "Company profile hub".into() },
            SitemapPageItem { name: "About".into(), url: "/company/about".into(), purpose: "About NALAR".into() },
            SitemapPageItem { name: "Team".into(), url: "/company/team".into(), purpose: "Team page (coming soon)".into() },
            SitemapPageItem { name: "Contact".into(), url: "/company/contact".into(), purpose: "Contact and inquiry page".into() },
            SitemapPageItem { name: "Careers".into(), url: "/company/careers".into(), purpose: "Careers page (coming soon)".into() },
            SitemapPageItem { name: "Privacy Policy".into(), url: "/privacy-policy".into(), purpose: "Privacy terms".into() },
            SitemapPageItem { name: "Terms of Service".into(), url: "/terms-of-service".into(), purpose: "Service terms".into() },
            SitemapPageItem { name: "Cookie Policy".into(), url: "/cookie-policy".into(), purpose: "Cookie usage".into() },
            SitemapPageItem { name: "Sitemap".into(), url: "/sitemap".into(), purpose: "Index of pages".into() },
        ],
    })
}

pub async fn handler(State(state): State<AppState>) -> impl IntoResponse {
    site_map(State(state)).await
}
