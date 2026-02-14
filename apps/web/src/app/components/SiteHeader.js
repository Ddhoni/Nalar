"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { headerNav, productLinks } from "../content/siteMapData";

export default function SiteHeader() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (!isProductsOpen) return;
      const inMenu = menuRef.current?.contains(event.target);
      const inTrigger = triggerRef.current?.contains(event.target);
      if (!inMenu && !inTrigger) setIsProductsOpen(false);
    };

    const onEscape = (event) => {
      if (event.key === "Escape") {
        setIsProductsOpen(false);
        setIsMobileOpen(false);
        setIsMobileProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [isProductsOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-[min(1120px,92%)] items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 px-4 py-3 text-white shadow-lg shadow-blue-200"
        >
          <div className="text-2xl font-extrabold leading-none tracking-[0.2em]">NALAR</div>
          <div className="mt-1 text-[11px] text-blue-50">
            Consulting &amp; SaaS for Growth
          </div>
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {headerNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-blue-700">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsProductsOpen((prev) => !prev)}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition ${
                isProductsOpen
                  ? "bg-blue-700 text-white"
                  : "bg-blue-50 text-slate-900 hover:bg-blue-100"
              }`}
              aria-expanded={isProductsOpen}
              aria-controls="products-menu"
            >
              SaaS <span className="text-xs">{isProductsOpen ? "▲" : "▼"}</span>
            </button>
          </li>
          <li>
            <Link
              href="/company/contact"
              className="rounded-full bg-pink-600 px-4 py-2 text-white transition hover:bg-pink-700"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => {
              setIsMobileOpen(false);
              setIsMobileProductsOpen((prev) => !prev);
            }}
            className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold"
          >
            SaaS {isMobileProductsOpen ? "▲" : "▼"}
          </button>
          <button
            type="button"
            onClick={() => {
              setIsMobileProductsOpen(false);
              setIsMobileOpen((prev) => !prev);
            }}
            className="rounded-full bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white"
          >
            Menu {isMobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <div
        className={`absolute left-0 right-0 top-full hidden px-4 pb-4 transition-all duration-150 md:block md:px-0 ${
          isProductsOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div
          ref={menuRef}
          id="products-menu"
          className="mx-auto mt-2 w-[min(940px,92%)] rounded-3xl border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-100/70"
        >
          <div className="grid gap-5 md:grid-cols-[220px_1fr]">
            <div className="rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 p-5 text-white">
              <p className="text-xs uppercase tracking-[0.16em] text-blue-100">SaaS</p>
              <h3 className="mt-2 text-2xl font-bold">Product Suite</h3>
              <p className="mt-2 text-sm text-blue-100">
                Explore NALAR products built for business operations.
              </p>
            </div>
            <div className="space-y-2">
              {productLinks.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  onClick={() => setIsProductsOpen(false)}
                  className="block rounded-xl border border-blue-100 p-4 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  <p className="font-semibold">{product.label}</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {product.label === "Untung POS"
                      ? "POS modern untuk transaksi, inventory, dan reporting real-time."
                      : "Insight workspace untuk monitoring performa bisnis periodik."}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden border-blue-100 bg-white px-4 transition-all duration-150 md:hidden ${
          isMobileOpen
            ? "max-h-[600px] border-t py-4 opacity-100"
            : "max-h-0 border-t-0 py-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-[min(1120px,92%)] space-y-2">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl bg-slate-50 px-4 py-3 font-semibold"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/company/contact"
            className="block rounded-xl bg-pink-600 px-4 py-3 text-center font-semibold text-white"
            onClick={() => setIsMobileOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>

      <div
        className={`overflow-hidden border-blue-100 bg-white px-4 transition-all duration-150 md:hidden ${
          isMobileProductsOpen
            ? "max-h-[320px] border-t py-4 opacity-100"
            : "max-h-0 border-t-0 py-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-[min(1120px,92%)] space-y-2">
          {productLinks.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              onClick={() => setIsMobileProductsOpen(false)}
              className="block rounded-xl border border-blue-100 bg-blue-50 px-4 py-3"
            >
              <p className="font-semibold">{product.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
