use crate::{
    domain::health::entity::HealthStatus,
    repositories::health_repository::HealthRepository,
};

pub struct InMemoryHealthRepository;

impl HealthRepository for InMemoryHealthRepository {
    fn get_status(&self) -> HealthStatus {
        HealthStatus {
            status: "ok".to_string(),
        }
    }
}
