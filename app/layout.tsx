// @styles
import "./globals.css";

// @meta
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launchify",
  description: "Saas Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
       {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
          type="text/css"
        /> */}
      {children}</body>
    </html>
  );
}
