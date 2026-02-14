use crate::domain::consulting::*;
use crate::repositories::Repositories;

#[derive(Clone)]
pub struct ConsultingService {
    repositories: Repositories,
}

impl ConsultingService {
    pub fn new(repositories: Repositories) -> Self {
        Self { repositories }
    }

    pub async fn get_services(&self) -> Result<Vec<Service>, String> {
        self.repositories
            .get_services()
            .await
            .map_err(|e| format!("Database error: {}", e))
    }

    pub async fn create_consultation_request(
        &self,
        name: String,
        email: String,
        message: String,
    ) -> Result<ConsultationRequest, String> {
        // Validation
        if name.is_empty() || name.len() > 100 {
            return Err("Invalid name".to_string());
        }
        if email.is_empty() || email.len() > 100 {
            return Err("Invalid email".to_string());
        }
        if message.is_empty() || message.len() > 5000 {
            return Err("Invalid message".to_string());
        }

        self.repositories
            .create_consultation_request(name, email, message)
            .await
            .map_err(|e| format!("Database error: {}", e))
    }

    pub async fn get_consultation_requests(&self) -> Result<Vec<ConsultationRequest>, String> {
        self.repositories
            .get_consultation_requests()
            .await
            .map_err(|e| format!("Database error: {}", e))
    }
}
