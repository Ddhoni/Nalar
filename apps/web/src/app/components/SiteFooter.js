import Link from "next/link";
import { footerLinks } from "../content/siteMapData";

export default function SiteFooter() {
  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="mx-auto flex w-[min(1120px,92%)] flex-col gap-3 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© 2026 NALAR Consulting. Data, AI, Marketing, and SaaS.</p>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-700">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
