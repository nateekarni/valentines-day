import type { Metadata } from "next";
import { Caveat, Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // โหลดมาทุกน้ำหนัก
  variable: "--font-kanit",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Our Timeline Story",
  description: "A journey of us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} ${caveat.variable} antialiased bg-bg text-gray-900 overflow-x-hidden font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
