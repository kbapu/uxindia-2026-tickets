import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tickets — UXINDIA 2026",
  description:
    "Register for UXINDIA 2026 — Leadership Summit and Rising Leaders Forum passes.",
  openGraph: {
    type: "website",
    title: "Tickets — UXINDIA 2026",
    description:
      "Register for UXINDIA 2026 — Leadership Summit and Rising Leaders Forum passes.",
    images: [
      {
        url: "/tickets-thumbnail.png",
        width: 1024,
        height: 576,
        alt: "UXINDIA 2026 Design Leadership Week — Be part of the people building what's next",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tickets — UXINDIA 2026",
    description:
      "Register for UXINDIA 2026 — Leadership Summit and Rising Leaders Forum passes.",
    images: ["/tickets-thumbnail.png"],
  },
};

export default function TicketsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
