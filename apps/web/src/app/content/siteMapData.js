export const headerNav = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Insights", href: "/insights" },
  { label: "Academy", href: "/academy" },
  { label: "Company", href: "/company" },
];

export const solutionsLinks = [
  { label: "Data & Analytics", href: "/solutions/data-analytics" },
  { label: "AI & Automation", href: "/solutions/ai-automation" },
  {
    label: "Digital Marketing & Growth",
    href: "/solutions/digital-marketing-growth",
  },
  { label: "Research Support", href: "/solutions/research-support" },
  { label: "Custom Integration", href: "/solutions/custom-integration" },
];

export const productLinks = [
  { label: "Untung POS", href: "/products/untung-pos" },
  { label: "Jurnal", href: "/products#jurnal" },
];

export const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Sitemap", href: "/sitemap" },
];

export const pageContent = {
  "/solutions": {
    name: "Solutions",
    purpose:
      "Hub untuk seluruh layanan consulting NALAR, dari data, AI, growth, sampai riset. Halaman ini membantu calon klien memilih track solusi paling relevan.",
    sections: [
      "Overview 5 solution tracks",
      "Industry fit dan contoh use case",
      "Delivery model: discovery, implementation, optimization",
      "Call-to-action konsultasi",
    ],
  },
  "/solutions/data-analytics": {
    name: "Data & Analytics Services",
    purpose:
      "Layanan untuk membangun fondasi data dan analytics yang bisa dipakai tim bisnis untuk keputusan cepat dan terukur.",
    sections: [
      "Assessment kualitas data & dashboard maturity",
      "Data warehouse / data mart strategy",
      "Executive dashboard dan KPI framework",
      "Governance, documentation, dan enablement",
    ],
  },
  "/solutions/ai-automation": {
    name: "AI & Automation Solutions",
    purpose:
      "Implementasi AI dan workflow automation untuk memangkas waktu operasional dan meningkatkan produktivitas tim.",
    sections: [
      "Opportunity mapping AI use case",
      "Agent / assistant design",
      "Automation workflow lintas tools",
      "Governance, monitoring, dan rollout",
    ],
  },
  "/solutions/digital-marketing-growth": {
    name: "Digital Marketing & Growth Consulting",
    purpose:
      "Layanan growth berbasis data untuk meningkatkan akuisisi, retensi, dan ROI marketing.",
    sections: [
      "Growth strategy dan experimentation plan",
      "Attribution, channel mix, dan budget optimization",
      "Campaign analytics & creative performance",
      "Playbook scaling dan operating cadence",
    ],
  },
  "/solutions/research-support": {
    name: "Research & Academic Support",
    purpose:
      "Dukungan metodologi riset, analisis statistik, dan coaching akademik untuk peneliti maupun institusi pendidikan.",
    sections: [
      "Methodology advisory",
      "Statistical analysis support",
      "Research coaching dan review",
      "Interpretation dan reporting guidance",
    ],
  },
  "/solutions/custom-integration": {
    name: "Custom Integration",
    purpose:
      "Integrasi custom untuk menyatukan sistem bisnis, data pipeline, dan tooling agar alur kerja lebih efisien.",
    sections: [
      "System mapping dan architecture blueprint",
      "API dan middleware integration",
      "Security, access control, dan observability",
      "Migration dan post-launch support",
    ],
  },
  "/products": {
    name: "Products",
    purpose:
      "Landing page untuk portfolio SaaS NALAR yang melengkapi layanan consulting.",
    sections: [
      "Product portfolio overview",
      "Featured product: Untung POS",
      "Use-case based value proposition",
      "CTA demo dan sales conversation",
    ],
  },
  "/products/untung-pos": {
    name: "Untung POS",
    purpose:
      "Halaman detail produk POS untuk UMKM, retail, dan F&B, fokus pada konversi ke demo dan sales.",
    sections: [
      "Product overview + value proposition",
      "Core features: cashier, product management, inventory, reports, roles, multi-outlet optional",
      "Who it's for: UMKM / retail / F&B",
      "How it works (3 steps)",
      "Screenshots/demo placeholder",
      "Pricing / Request pricing",
      "FAQ",
      "CTA: Request Demo / Talk to Sales",
    ],
  },
  "/insights": {
    name: "Insights",
    purpose:
      "Hub konten untuk artikel, report, studi kasus, dan resource praktis.",
    sections: [
      "Featured insights",
      "Kategori konten",
      "Trending topics",
      "Newsletter CTA",
    ],
  },
  "/insights/blog": {
    name: "Blog",
    purpose:
      "Publikasi artikel edukatif seputar data, AI, marketing, dan operasional bisnis.",
    sections: [
      "Latest posts",
      "Topic/category filter",
      "Editor picks",
      "Subscribe CTA",
    ],
  },
  "/insights/case-studies": {
    name: "Case Studies",
    purpose:
      "Kumpulan cerita implementasi dan outcome klien. Sementara ditandai coming soon.",
    sections: [
      "Coming soon message",
      "Framework contoh case study",
      "CTA konsultasi",
    ],
    comingSoon: true,
  },
  "/insights/reports": {
    name: "Reports",
    purpose:
      "Laman report dan publikasi insight untuk decision makers.",
    sections: [
      "Report library",
      "Highlights dan key takeaways",
      "Download / lead form",
      "Related resources",
    ],
  },
  "/insights/resources": {
    name: "Resources",
    purpose:
      "Koleksi template, checklist, dan toolkit yang bisa langsung dipakai tim.",
    sections: [
      "Resource index",
      "Filters by type",
      "Download cards",
      "CTA workshop/courses",
    ],
  },
  "/academy": {
    name: "Academy",
    purpose:
      "Learning hub NALAR untuk mempercepat skill data, AI, dan growth secara praktis.",
    sections: [
      "Learning paths",
      "Program highlights",
      "Mentor profile placeholder",
      "Enrollment CTA",
    ],
  },
  "/academy/courses": {
    name: "Courses",
    purpose:
      "Program pembelajaran terstruktur untuk individu dan tim.",
    sections: [
      "Course catalog",
      "Skill levels",
      "Learning outcomes",
      "Enrollment CTA",
    ],
  },
  "/academy/workshops": {
    name: "Workshops",
    purpose:
      "Workshop hands-on untuk tim yang ingin akselerasi implementasi.",
    sections: [
      "Workshop topics",
      "Format dan durasi",
      "Target audience",
      "Book workshop CTA",
    ],
  },
  "/academy/tutorials": {
    name: "Tutorials",
    purpose:
      "Tutorial singkat berbasis praktik untuk implementasi cepat.",
    sections: [
      "Tutorial list",
      "Difficulty tags",
      "Code/demo snippets placeholder",
      "Related courses CTA",
    ],
  },
  "/company": {
    name: "Company",
    purpose:
      "Halaman utama profil perusahaan NALAR dan akses cepat ke informasi penting.",
    sections: [
      "Company intro",
      "Vision, mission, values",
      "Quick links: About, Team, Contact, Careers",
      "Trust signals",
    ],
  },
  "/company/about": {
    name: "About",
    purpose:
      "Cerita, visi, dan diferensiasi NALAR dalam membantu organisasi tumbuh dengan data dan AI.",
    sections: [
      "Who we are",
      "Mission and values",
      "Approach to delivery",
      "Leadership note",
    ],
  },
  "/company/team": {
    name: "Team",
    purpose:
      "Profil tim inti dan kapabilitas spesialis. Sementara ditandai coming soon.",
    sections: [
      "Coming soon message",
      "Role clusters",
      "Collaboration model",
    ],
    comingSoon: true,
  },
  "/company/contact": {
    name: "Contact",
    purpose:
      "Halaman kontak utama untuk request demo, konsultasi, dan pertanyaan bisnis.",
    sections: [
      "Contact form",
      "Email / WhatsApp / call",
      "Response time expectation",
      "FAQ singkat",
    ],
  },
  "/company/careers": {
    name: "Careers",
    purpose:
      "Informasi lowongan dan budaya kerja NALAR. Saat ini bisa ditandai coming soon.",
    sections: [
      "Coming soon / open roles",
      "Work culture highlights",
      "Hiring process",
      "Apply CTA",
    ],
    comingSoon: true,
  },
  "/privacy-policy": {
    name: "Privacy Policy",
    purpose: "Kebijakan privasi tentang cara NALAR mengelola data pengguna.",
    sections: [
      "Data collection",
      "Data usage",
      "Retention policy",
      "User rights",
    ],
  },
  "/terms-of-service": {
    name: "Terms of Service",
    purpose:
      "Syarat dan ketentuan penggunaan layanan NALAR Consulting dan SaaS.",
    sections: [
      "Service scope",
      "User obligations",
      "Limitation of liability",
      "Governing law",
    ],
  },
  "/cookie-policy": {
    name: "Cookie Policy",
    purpose: "Penjelasan penggunaan cookie dan kontrol persetujuan pengguna.",
    sections: [
      "Cookie categories",
      "Why cookies are used",
      "Consent settings",
      "Contact details",
    ],
  },
  "/sitemap": {
    name: "Sitemap",
    purpose: "Indeks seluruh halaman publik untuk membantu navigasi pengguna.",
    sections: [
      "Tree view sitemap",
      "Tabular sitemap summary",
      "Footer legal links",
    ],
  },
};

export const allPaths = Object.keys(pageContent);

export const sitemapTree = [
  {
    path: "/",
    children: [
      {
        path: "/solutions",
        children: [
          "/solutions/data-analytics",
          "/solutions/ai-automation",
          "/solutions/digital-marketing-growth",
          "/solutions/research-support",
          "/solutions/custom-integration",
        ],
      },
      { path: "/products", children: ["/products/untung-pos"] },
      {
        path: "/insights",
        children: [
          "/insights/blog",
          "/insights/case-studies",
          "/insights/reports",
          "/insights/resources",
        ],
      },
      {
        path: "/academy",
        children: ["/academy/courses", "/academy/workshops", "/academy/tutorials"],
      },
      {
        path: "/company",
        children: [
          "/company/about",
          "/company/team",
          "/company/contact",
          "/company/careers",
        ],
      },
      "/privacy-policy",
      "/terms-of-service",
      "/cookie-policy",
      "/sitemap",
    ],
  },
];
