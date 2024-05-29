import type { Metadata } from "next";

import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: ["500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dunder Mifflin Paper Company",
  description: "Dunder Mifflin Paper Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}><h2>Dunder Mifflin</h2>{children}</body>
    </html>
  );
}
