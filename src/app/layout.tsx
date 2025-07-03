import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Ale Rodríguez - Full-Stack Developer',
  description: 'Computer Engineering student and Full-Stack Developer specializing in modern web technologies. View my projects and get in touch!',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Ale Rodríguez' }],
  creator: 'Ale Rodríguez',
  openGraph: {
    title: 'Ale Rodríguez - Full-Stack Developer',
    description: 'Computer Engineering student and Full-Stack Developer specializing in modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ale Rodríguez - Full-Stack Developer',
    description: 'Computer Engineering student and Full-Stack Developer specializing in modern web technologies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <body className={`${robotoMono.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
