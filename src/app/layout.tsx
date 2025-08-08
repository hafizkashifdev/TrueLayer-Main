import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});
export const metadata: Metadata = {
  title: "TrueLayer - Europe's leading open banking platform",
  description: "We power faster and safer online payments with our open banking payments network. Onboard users, accept payments & make payouts in seconds.",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      rel: "apple-touch-icon.png",
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
  openGraph: {
    title: "TrueLayer - Europe's leading open banking platform",
    description: "We power faster and safer online payments with our open banking payments network. Onboard users, accept payments & make payouts in seconds.",
    url: `https://truelayer.apiswagger.co.uk`,
    type: "website",
    images: [
      {
        url: `https://truelayer.apiswagger.co.uk/og.png`,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "TrueLayer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>{children}</body>
    </html>
  );
}