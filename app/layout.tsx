
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Container from "@/components/container"

const meta = {
  title: '120 front-end questions',
  description:
    '120 front-end questions posed by Ruben Paschoarelli',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | 120 front-end questions',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
      <Container>
        {children}
      </Container>
      </body>
    </html>
  );
}
