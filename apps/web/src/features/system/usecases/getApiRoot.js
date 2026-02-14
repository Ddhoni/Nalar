import { httpSystemRepository } from "../adapters/httpSystemRepository";

export async function getApiRoot() {
  const repo = httpSystemRepository();
  return repo.getRoot();
}
