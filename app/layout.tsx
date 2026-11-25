import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { EnquiryProvider } from "@/components/EnquiryContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });

export const metadata: Metadata = {
  title: "Ahmadiah International Elevator Co. W.L.L (AIEC) – Elevators, Escalators & Moving Walks in Kuwait",
  description:
    "AIEC – a joint venture between Ahmadiah Contracting & Trading Co. and Hitachi Limited Japan. Supply, installation and after-sales service of elevators, escalators, moving walks and façade cleaning systems in Kuwait.",
  icons: { icon: { url: "/images/favicon.png?v=4", type: "image/png" } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Map the next/font families onto the existing CSS variables (same fallback stacks as the original CSS).
const fontVars = {
  "--font-head": `${jakarta.style.fontFamily},'Inter',system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif`,
  "--font-body": `${inter.style.fontFamily},system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif`,
} as React.CSSProperties;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={fontVars} suppressHydrationWarning>
      <head>
        {/* same as the original script's first line: enables the .rv reveal styles */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <EnquiryProvider>{children}</EnquiryProvider>
      </body>
    </html>
  );
}
