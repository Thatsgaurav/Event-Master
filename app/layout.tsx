import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: "Event Master",
  description: "Event Master is a platform for event management",
  icons: {
    icon: '/assets/images/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={urbanist.className}>{children}
        </body>
      </html>
    </ClerkProvider>
  );
}