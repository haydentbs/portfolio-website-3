import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hayden Tibbals - Physics Graduate & Developer',
  description: 'Personal portfolio showcasing projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Analytics />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-LB0FBB0MEC"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LB0FBB0MEC');
            `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  )
}

