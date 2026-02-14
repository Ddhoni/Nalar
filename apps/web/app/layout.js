import "./globals.css";

export const metadata = {
  title: "NALAR Consulting",
  description:
    "NALAR Consulting offers Data, AI, Growth consulting and SaaS products including Untung POS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
