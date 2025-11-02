import type { Metadata } from 'next'
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    
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
