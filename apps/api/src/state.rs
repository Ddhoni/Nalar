use crate::{
    config::Config,
    services::Services,
    repositories::Repositories,
};

#[derive(Clone)]
pub struct AppState {
    pub config: Config,
    pub services: Services,
    pub db: sqlx::SqlitePool,
}

impl AppState {
    pub fn new(config: Config, db: sqlx::SqlitePool) -> Self {
        // Repositories
        let repos = Repositories::new(db.clone());

        // Services (usecases)
        let services = Services::new(repos);

        Self {
            config,
            services,
            db,
        }
    }
}
