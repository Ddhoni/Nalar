export default function GenericPage({ title, purpose, sections, comingSoon = false }) {
  return (
    <section className="mx-auto w-[min(1120px,92%)] py-16">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">NALAR</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600">{purpose}</p>

      {comingSoon && (
        <div className="mt-6 inline-flex rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
          Coming soon
        </div>
      )}

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section} className="rounded-2xl border border-blue-100 bg-white p-5">
            <h2 className="font-semibold">{section}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
