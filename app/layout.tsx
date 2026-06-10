import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sagarrawat.dev"),
  title: {
    default: "Sagar Rawat | Full-Stack Developer & AI Builder",
    template: "%s | Sagar Rawat",
  },
  description:
    "Premium personal portfolio for Sagar Rawat, focused on full-stack engineering, AI integrations, and modern web product development.",
  keywords: [
    "Sagar Rawat",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "AI Engineer",
    "TypeScript Developer",
    "Modern Web Developer",
  ],
  openGraph: {
    title: "Sagar Rawat | Full-Stack Developer & AI Builder",
    description:
      "Full-stack development, AI experimentation, polished interfaces, and modern product engineering.",
    url: "https://sagarrawat.dev",
    siteName: "Sagar Rawat Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar Rawat | Full-Stack Developer & AI Builder",
    description:
      "Full-stack development, AI experimentation, polished interfaces, and modern product engineering.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
