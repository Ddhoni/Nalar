use crate::domain::consulting::*;
use chrono::Utc;
use uuid::Uuid;
use sqlx::Row;

#[derive(Clone)]
pub struct Repositories {
    db: sqlx::SqlitePool,
}

impl Repositories {
    pub fn new(db: sqlx::SqlitePool) -> Self {
        Self { db }
    }

    pub async fn get_services(&self) -> Result<Vec<Service>, Box<dyn std::error::Error>> {
        let rows = sqlx::query(
            "SELECT id, name, description, price_range, duration, created_at, updated_at FROM services"
        )
        .fetch_all(&self.db)
        .await?;

        let services = rows.into_iter().map(|row| {
            Service {
                id: row.get("id"),
                name: row.get("name"),
                description: row.get("description"),
                price_range: row.get("price_range"),
                duration: row.get("duration"),
                created_at: row.get::<String, _>("created_at").parse().unwrap_or_else(|_| Utc::now()),
                updated_at: row.get::<String, _>("updated_at").parse().unwrap_or_else(|_| Utc::now()),
            }
        }).collect();

        Ok(services)
    }

    pub async fn create_consultation_request(
        &self,
        name: String,
        email: String,
        message: String,
    ) -> Result<ConsultationRequest, Box<dyn std::error::Error>> {
        let id = Uuid::new_v4().to_string();
        let now = Utc::now();

        sqlx::query(
            r#"
            INSERT INTO consultation_requests (id, name, email, message, status, created_at)
            VALUES (?, ?, ?, ?, 'pending', ?)
            "#
        )
        .bind(&id)
        .bind(&name)
        .bind(&email)
        .bind(&message)
        .bind(now.to_rfc3339())
        .execute(&self.db)
        .await?;

        Ok(ConsultationRequest {
            id,
            name,
            email,
            phone: None,
            company: None,
            service_id: None,
            message,
            status: "pending".to_string(),
            created_at: now,
        })
    }

    pub async fn get_consultation_requests(&self) -> Result<Vec<ConsultationRequest>, Box<dyn std::error::Error>> {
        let rows = sqlx::query(
            "SELECT id, name, email, phone, company, service_id, message, status, created_at FROM consultation_requests ORDER BY created_at DESC"
        )
        .fetch_all(&self.db)
        .await?;

        let requests = rows.into_iter().map(|row| {
            ConsultationRequest {
                id: row.get("id"),
                name: row.get("name"),
                email: row.get("email"),
                phone: row.get("phone"),
                company: row.get("company"),
                service_id: row.get("service_id"),
                message: row.get("message"),
                status: row.get("status"),
                created_at: row.get::<String, _>("created_at").parse().unwrap_or_else(|_| Utc::now()),
            }
        }).collect();

        Ok(requests)
    }
}

