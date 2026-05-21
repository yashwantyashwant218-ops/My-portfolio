import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yashwant | Portfolio',
  description: 'Automation Enthusiast | Python Learner | n8n Workflow Builder | Robotics Explorer - Personal portfolio showcasing projects and skills',
  keywords: ['Yashwant', 'Portfolio', 'Python', 'Automation', 'n8n', 'Robotics', 'Web Development'],
  authors: [{ name: 'Yashwant' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Yashwant | Portfolio',
    description: 'Automation Enthusiast | Python Learner | n8n Workflow Builder | Robotics Explorer',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#00d4ff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
