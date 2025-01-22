import type { Metadata } from 'next'
import { Providers } from '@/app/providers'
import Script from 'next/script'
import './style.css'

export const metadata: Metadata = {
  title: '失落小站 - galgame资源站',
  description: "shinnku's galgame site",
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='zh'>
      <head>
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-61P3NL510C'
        />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-61P3NL510C');
        `}
        </Script>
        <Script
          defer
          src='https://static.cloudflareinsights.com/beacon.min.js'
          data-cf-beacon='{"token": "65325546c71740a78ecc6e8fa7815010"}'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
