import { env } from "../config/env";

export async function httpGet(path) {
  const res = await fetch(`${env.API_URL}${path}`, { cache: "no-store" });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error (${res.status}): ${text}`);
  }

  return res.json();
}
