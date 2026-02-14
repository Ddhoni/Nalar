pub mod health_repository;

use std::sync::Arc;

use crate::repositories::health_repository::HealthRepository;

#[derive(Clone)]
pub struct InMemoryRepositories {
    pub health_repo: Arc<dyn HealthRepository>,
}

impl InMemoryRepositories {
    pub fn new() -> Self {
        Self {
            health_repo: Arc::new(health_repository::InMemoryHealthRepository),
        }
    }
}
