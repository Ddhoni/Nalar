import Link from "next/link";
import { notFound } from "next/navigation";
import GenericPage from "../../src/app/components/GenericPage";
import SiteShell from "../../src/app/components/SiteShell";
import { allPaths, pageContent, sitemapTree } from "../../src/app/content/siteMapData";

function pathFromSlug(slug = []) {
  return `/${slug.join("/")}`;
}

function renderTreeNode(node) {
  const path = typeof node === "string" ? node : node.path;
  const children = typeof node === "string" ? [] : node.children || [];

  return (
    <li key={path} className="mt-2">
      <Link href={path} className="font-semibold text-blue-700 hover:underline">
        {path}
      </Link>
      {children.length > 0 && (
        <ul className="ml-5 mt-1 list-disc text-slate-700">
          {children.map((child) => renderTreeNode(child))}
        </ul>
      )}
    </li>
  );
}

function UntungPosPage({ content }) {
  const faqs = [
    {
      q: "Apakah Untung POS cocok untuk UMKM?",
      a: "Ya, Untung POS dirancang ringan, cepat dipakai, dan mudah diadopsi oleh tim kecil.",
    },
    {
      q: "Apakah bisa multi-user dan multi-outlet?",
      a: "Bisa. Multi-user tersedia by role, dan multi-outlet dapat diaktifkan sebagai opsi.",
    },
    {
      q: "Apakah pricing sudah fixed?",
      a: "Saat ini gunakan skema request pricing agar paket sesuai kebutuhan operasional bisnis.",
    },
  ];

  return (
    <section className="mx-auto w-[min(1120px,92%)] py-16">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
        Products / Untung POS
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
        {content.name}
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600">{content.purpose}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          "Transactions / cashier",
          "Product management",
          "Inventory tracking",
          "Sales reports",
          "Multi-user roles",
          "Optional multi-outlet",
        ].map((feature) => (
          <article key={feature} className="rounded-xl border border-blue-100 bg-white p-4">
            <h2 className="font-semibold">{feature}</h2>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-blue-100 bg-white p-5">
          <h3 className="font-semibold">Who it&apos;s for</h3>
          <p className="mt-2 text-sm text-slate-600">UMKM, retail stores, dan F&amp;B operations.</p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-white p-5 lg:col-span-2">
          <h3 className="font-semibold">How it works (3 steps)</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
            <li>Setup store profile, katalog produk, dan user role.</li>
            <li>Jalankan transaksi harian dan sinkronkan inventory.</li>
            <li>Pantau sales report untuk keputusan operasional cepat.</li>
          </ol>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-slate-500">
        Screenshots / Demo placeholder
      </div>

      <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <h3 className="font-semibold">Pricing</h3>
        <p className="mt-2 text-slate-700">
          Request pricing untuk menyesuaikan paket dengan skala operasional bisnis.
        </p>
      </div>

      <div className="mt-8 grid gap-3">
        {faqs.map((faq) => (
          <article key={faq.q} className="rounded-xl border border-blue-100 bg-white p-4">
            <h3 className="font-semibold">{faq.q}</h3>
            <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/company/contact"
          className="rounded-full bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
        >
          Request Demo
        </Link>
        <Link
          href="/company/contact"
          className="rounded-full bg-blue-100 px-5 py-3 font-semibold text-slate-800 hover:bg-blue-200"
        >
          Talk to Sales
        </Link>
      </div>
    </section>
  );
}

function ProductsPage({ content }) {
  return (
    <section className="mx-auto w-[min(1120px,92%)] py-16">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
        Product Landing
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
        {content.name}
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600">{content.purpose}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <article
          id="untung-pos"
          className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 p-6 text-white"
        >
          <p className="text-xs uppercase tracking-[0.15em] text-blue-100">Featured</p>
          <h2 className="mt-2 text-2xl font-bold">Untung POS</h2>
          <p className="mt-2 text-blue-100">
            Point of sale platform untuk UMKM, retail, dan F&B dengan cashier,
            inventory, dan reporting.
          </p>
          <Link
            href="/products/untung-pos"
            className="mt-4 inline-block rounded-full bg-white px-4 py-2 font-semibold text-blue-700"
          >
            View Product
          </Link>
        </article>

        <article id="jurnal" className="rounded-2xl border border-blue-100 bg-white p-6">
          <p className="text-xs uppercase tracking-[0.15em] text-blue-700">Product</p>
          <h2 className="mt-2 text-2xl font-bold">Jurnal</h2>
          <p className="mt-2 text-slate-600">
            Workspace insights untuk memonitor performa bisnis periodik dan
            menjaga ritme keputusan tim.
          </p>
          <Link
            href="/company/contact"
            className="mt-4 inline-block rounded-full bg-blue-100 px-4 py-2 font-semibold text-slate-800"
          >
            Request Early Access
          </Link>
        </article>
      </div>
    </section>
  );
}

function SitemapPage({ content }) {
  return (
    <section className="mx-auto w-[min(1120px,92%)] py-16">
      <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">{content.name}</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600">{content.purpose}</p>

      <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-6">
        <h2 className="text-2xl font-bold">Tree View</h2>
        <ul className="mt-3 list-disc pl-5">{sitemapTree.map((node) => renderTreeNode(node))}</ul>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-blue-100 bg-white p-4">
        <h2 className="mb-4 text-2xl font-bold">Page Matrix</h2>
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-2 py-2 font-semibold">Page</th>
              <th className="px-2 py-2 font-semibold">URL</th>
              <th className="px-2 py-2 font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {allPaths.map((path) => (
              <tr key={path} className="border-b border-slate-100 align-top">
                <td className="px-2 py-2 font-medium">{pageContent[path].name}</td>
                <td className="px-2 py-2 text-blue-700">{path}</td>
                <td className="px-2 py-2 text-slate-600">{pageContent[path].purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function CatchAllPage({ params }) {
  const path = pathFromSlug(params.slug);
  const content = pageContent[path];

  if (!content) {
    notFound();
  }

  return (
    <SiteShell>
      {path === "/products/untung-pos" ? (
        <UntungPosPage content={content} />
      ) : path === "/products" ? (
        <ProductsPage content={content} />
      ) : path === "/sitemap" ? (
        <SitemapPage content={content} />
      ) : (
        <GenericPage
          title={content.name}
          purpose={content.purpose}
          sections={content.sections}
          comingSoon={content.comingSoon}
        />
      )}
    </SiteShell>
  );
}
