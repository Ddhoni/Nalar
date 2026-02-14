#[derive(Clone, Debug)]
pub struct Config {
    pub port: u16,
    pub database_url: String,
    pub environment: String,
}

impl Config {
    pub fn from_env() -> Self {
        let port = std::env::var("PORT")
            .ok()
            .and_then(|v| v.parse::<u16>().ok())
            .unwrap_or(8080);

        let database_url = std::env::var("DATABASE_URL")
            .unwrap_or_else(|_| "sqlite://consulting.db".to_string());

        let environment = std::env::var("ENVIRONMENT")
            .unwrap_or_else(|_| "development".to_string());

        Self {
            port,
            database_url,
            environment,
        }
    }

    pub fn bind_addr(&self) -> String {
        format!("0.0.0.0:{}", self.port)
    }

    pub fn is_production(&self) -> bool {
        self.environment == "production"
    }
}
