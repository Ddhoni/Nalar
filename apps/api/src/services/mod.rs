pub mod health_service;
pub mod consulting_service;

use crate::repositories::Repositories;

#[derive(Clone)]
pub struct Services {
    pub health: health_service::HealthService,
    pub consulting: consulting_service::ConsultingService,
}

impl Services {
    pub fn new(repos: Repositories) -> Self {
        Self {
            health: health_service::HealthService::new(),
            consulting: consulting_service::ConsultingService::new(repos),
        }
    }

    pub async fn get_services(&self) -> Result<Vec<crate::domain::consulting::Service>, String> {
        self.consulting.get_services().await
    }

    pub async fn create_consultation_request(
        &self,
        name: String,
        email: String,
        message: String,
    ) -> Result<crate::domain::consulting::ConsultationRequest, String> {
        self.consulting
            .create_consultation_request(name, email, message)
            .await
    }

    pub async fn get_consultation_requests(&self) -> Result<Vec<crate::domain::consulting::ConsultationRequest>, String> {
        self.consulting.get_consultation_requests().await
    }
}
