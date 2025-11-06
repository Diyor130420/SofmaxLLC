import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sofmax LLC – U.S. Import Partner",
  description:
    "Sofmax helps international brands enter and scale in the U.S. market. We handle go-to-market, compliance, and logistics end-to-end.",
  metadataBase: new URL("https://www.sofmax.us"),
  icons: {
    icon: [
      { url: "/sofmax-logo.png", type: "image/png", sizes: "32x32" },
      { url: "/sofmax-logo.png", type: "image/png", sizes: "48x48" },
      { url: "/logo192.png", type: "image/png", sizes: "192x192" },
      { url: "/logo512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: [
      { url: "/sofmax-logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/logo192.png", sizes: "180x180", type: "image/png" },
      { url: "/logo512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://www.sofmax.us",
    title: "Sofmax LLC – U.S. Import Partner",
    description:
      "Import/export, compliance, logistics, marketplace ops — all in one partner.",
    images: [
      {
        url: "/logo512.png",
        width: 512,
        height: 512,
        alt: "Sofmax LLC",
      },
    ],
  },
  // not required but nice
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/sofmax-logo.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/sofmax-logo.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/logo512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/logo512.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sofmax LLC",
              url: "https://www.sofmax.us",
              logo: "https://www.sofmax.us/logo512.png",
              sameAs: ["https://www.linkedin.com/company/sofmax"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
