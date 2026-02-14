"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  academyLinks,
  companyLinks,
  headerNav,
  insightsLinks,
  productLinks,
  solutionsLinks,
} from "../content/siteMapData";

export default function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const desktopNavRef = useRef(null);

  const dropdownLinks = {
    Solutions: solutionsLinks,
    Products: productLinks,
    Insights: insightsLinks,
    Academy: academyLinks,
    Company: companyLinks,
  };

  useEffect(() => {
    const onClickOutside = (event) => {
      if (!activeMenu) return;
      const inDesktopNav = desktopNavRef.current?.contains(event.target);
      if (!inDesktopNav) setActiveMenu(null);
    };

    const onEscape = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setIsMobileOpen(false);
        setActiveMobileMenu(null);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [activeMenu]);

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

        <ul ref={desktopNavRef} className="hidden items-center gap-4 text-sm font-semibold md:flex">
          {headerNav.map((item) => (
            <li key={item.href} className="relative">
              {dropdownLinks[item.label] ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMenu((prev) => (prev === item.label ? null : item.label))
                    }
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition ${
                      activeMenu === item.label
                        ? "bg-blue-700 text-white"
                        : "hover:bg-blue-50 hover:text-blue-700"
                    }`}
                    aria-expanded={activeMenu === item.label}
                    aria-controls={`menu-${item.label.toLowerCase()}`}
                  >
                    {item.label} <span className="text-xs">{activeMenu === item.label ? "▲" : "▼"}</span>
                  </button>
                  <div
                    id={`menu-${item.label.toLowerCase()}`}
                    className={`absolute left-0 top-full mt-2 w-64 rounded-2xl border border-blue-100 bg-white p-2 shadow-xl transition ${
                      activeMenu === item.label
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    {dropdownLinks[item.label].map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setActiveMenu(null)}
                        className="block rounded-xl px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href} className="rounded-full px-3 py-1.5 hover:bg-blue-50 hover:text-blue-700">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
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
              setIsMobileOpen((prev) => !prev);
            }}
            className="rounded-full bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white"
          >
            Menu {isMobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-blue-100 bg-white px-4 transition-all duration-150 md:hidden ${
          isMobileOpen
            ? "max-h-[600px] border-t py-4 opacity-100"
            : "max-h-0 border-t-0 py-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-[min(1120px,92%)] space-y-2">
          {headerNav.map((item) => (
            <div key={item.href} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              {dropdownLinks[item.label] ? (
                <div className="flex items-center justify-between px-4 py-3 font-semibold">
                  <Link href={item.href} onClick={() => setIsMobileOpen(false)}>
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMobileMenu((prev) => (prev === item.label ? null : item.label))
                    }
                    className="rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-slate-100"
                    aria-expanded={activeMobileMenu === item.label}
                  >
                    {activeMobileMenu === item.label ? "▲" : "▼"}
                  </button>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block px-4 py-3 font-semibold"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
              {dropdownLinks[item.label] && activeMobileMenu === item.label && (
                <div className="border-t border-slate-100 bg-slate-50 p-2">
                  {dropdownLinks[item.label].map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={() => {
                        setIsMobileOpen(false);
                        setActiveMobileMenu(null);
                      }}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-100 hover:text-blue-700"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
    </header>
  );
}
