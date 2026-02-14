import { httpGet } from "../../../shared/api/httpClient";
import { ApiRoot } from "../entities/ApiRoot";
import { Health } from "../entities/Health";
import { SystemRepository } from "../repositories/SystemRepository";

export function httpSystemRepository() {
  return SystemRepository({
    getRoot: async () => {
      const data = await httpGet("/");
      return ApiRoot(data);
    },
    getHealth: async () => {
      const data = await httpGet("/health");
      return Health(data);
    },
  });
}
