import type { Metadata } from "next";
import "./globals.css";
import "../src/styles/index.css";

export const metadata: Metadata = {
  title: "NL Visuals | Photography",
  description:
    "NL Visuals — capturing moments through the lens. Photography portfolio showcasing landscapes, portraits, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100">
        {children}
      </body>
    </html>
  );
}
