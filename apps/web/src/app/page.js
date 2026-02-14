import Link from "next/link";
import SiteShell from "./components/SiteShell";
import { solutionsLinks } from "./content/siteMapData";

const fallbackServiceAreas = [
  {
    title: "Data & Analytics Services",
    description:
      "Bangun fondasi data, dashboard eksekutif, dan KPI framework untuk keputusan yang cepat dan presisi.",
  },
  {
    title: "AI & Automation Solutions",
    description:
      "Implementasi AI assistant dan workflow automation untuk memangkas beban operasional tim.",
  },
  {
    title: "Digital Marketing & Growth Consulting",
    description:
      "Optimasi akuisisi, retensi, dan efisiensi budget marketing berbasis insight data.",
  },
  {
    title: "Research & Academic Support",
    description:
      "Methodology advisory, statistical analysis support, dan coaching untuk riset akademik dan institusi.",
  },
];

const processSteps = [
  "Discovery: identifikasi prioritas bisnis dan baseline saat ini.",
  "Design: susun roadmap solusi + target dampak terukur.",
  "Delivery: implementasi cepat dengan sprint dan governance.",
  "Optimization: monitoring hasil, iterasi, dan scale-up.",
];

const testimonials = [
  {
    vertical: "Retail",
    quote:
      "Tim NALAR membantu kami membenahi reporting harian dan forecasting. Sekarang keputusan replenishment jauh lebih cepat.",
    outcome: "Stockout turun 21% dalam 2 kuartal.",
  },
  {
    vertical: "Financial Services",
    quote:
      "Automasi workflow dan insight dashboard dari NALAR mempersingkat cycle kerja tim operasi dan compliance.",
    outcome: "Waktu proses operasional turun 38%.",
  },
  {
    vertical: "Education",
    quote:
      "Pendampingan metodologi dan analisis statistik sangat membantu tim riset menyelesaikan studi dengan lebih confident.",
    outcome: "Lead time publikasi riset lebih cepat 30%.",
  },
];

async function getServiceAreas() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
  try {
    const res = await fetch(`${apiUrl}/api/services`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(`Failed with ${res.status}`);

    const services = await res.json();
    if (!Array.isArray(services) || services.length === 0) {
      return fallbackServiceAreas;
    }

    return services.map((service) => ({
      title: service.name,
      description: service.description,
      priceRange: service.price_range,
      duration: service.duration,
    }));
  } catch {
    return fallbackServiceAreas;
  }
}

export default async function Home() {
  const serviceAreas = await getServiceAreas();

  return (
    <SiteShell>
      <section className="mx-auto w-[min(1120px,92%)] py-20">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
          NALAR Consulting + SaaS
        </p>
        <h1 className="mt-4 max-w-5xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Consulting and SaaS products to grow faster with data, AI, and execution.
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">
          NALAR membantu organisasi membangun sistem pertumbuhan end-to-end:
          dari strategi hingga implementasi, ditopang produk SaaS seperti Untung
          POS.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/company/contact"
            className="rounded-full bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Book Consultation
          </Link>
          <Link
            href="/products/untung-pos"
            className="rounded-full bg-blue-100 px-5 py-3 font-semibold text-slate-800 hover:bg-blue-200"
          >
            Request Untung POS Demo
          </Link>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,92%)] py-6">
        <h2 className="text-3xl font-bold md:text-4xl">What We Solve</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {serviceAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-blue-100 bg-white p-6"
            >
              <h3 className="font-semibold">{area.title}</h3>
              <p className="mt-2 text-slate-600">{area.description}</p>
              {(area.priceRange || area.duration) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.priceRange && (
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {area.priceRange}
                    </span>
                  )}
                  {area.duration && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {area.duration}
                    </span>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,92%)] py-10">
        <h2 className="text-3xl font-bold md:text-4xl">How We Work</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {processSteps.map((step) => (
            <div
              key={step}
              className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-slate-700"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,92%)] py-6">
        <h2 className="text-3xl font-bold md:text-4xl">Client Testimonials</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.vertical}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-xs uppercase tracking-wide text-blue-700">
                {item.vertical}
              </p>
              <p className="mt-3 text-sm text-slate-700">"{item.quote}"</p>
              <p className="mt-3 text-xs font-semibold text-emerald-700">
                {item.outcome}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,92%)] py-12">
        <div className="rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 p-8 text-white">
          <h2 className="text-3xl font-bold">Explore NALAR Solutions</h2>
          <p className="mt-2 max-w-2xl text-blue-100">
            Pilih track solusi sesuai prioritas organisasi kamu.
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {solutionsLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
