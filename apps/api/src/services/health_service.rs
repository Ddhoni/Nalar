use crate::domain::health::entity::HealthStatus;

#[derive(Clone)]
pub struct HealthService;

impl HealthService {
    pub fn new() -> Self {
        Self
    }

    pub fn check(&self) -> HealthStatus {
        HealthStatus {
            status: "ok".to_string(),
        }
    }
}
