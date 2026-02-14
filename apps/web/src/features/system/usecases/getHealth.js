import { httpSystemRepository } from "../adapters/httpSystemRepository";

export async function getHealth() {
  const repo = httpSystemRepository();
  return repo.getHealth();
}
