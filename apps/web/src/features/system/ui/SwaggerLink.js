import Link from "next/link";
import { env } from "../../../shared/config/env";

export function SwaggerLink() {
  return (
    <Link
      className="inline-flex px-4 py-2 rounded-xl border hover:bg-slate-50"
      href={`${env.API_URL}/docs`}
      target="_blank"
    >
      Open Swagger
    </Link>
  );
}
