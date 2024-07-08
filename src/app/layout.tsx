import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hydra Solutions - Landing Page",
  description: "Official Hydra Solutions Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
