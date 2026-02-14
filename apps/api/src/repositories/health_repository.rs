use crate::domain::health::entity::HealthStatus;

pub trait HealthRepository: Send + Sync + 'static {
    fn get_status(&self) -> HealthStatus;
}
