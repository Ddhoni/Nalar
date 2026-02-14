import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-[min(1120px,92%)] py-20">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
        404
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
      >
        Back to home
      </Link>
    </main>
  );
}
