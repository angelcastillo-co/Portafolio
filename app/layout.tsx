import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Outfit, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { LanguageProvider } from '@/components/providers/language-provider'
import { CustomCursor } from '@/components/system/custom-cursor'
import { AmbientBackground } from '@/components/system/ambient-background'
import { AngelChat } from '@/components/system/angel-chat'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Angel Castillo — Creative Technologist & Software Engineer',
  description:
    'The personal operating system of Angel Castillo — Software Engineer, Creative Technologist and Digital Analytics Developer. A futuristic, bilingual portfolio system.',
  generator: 'v0.app',
  keywords: [
    'Angel Castillo',
    'Software Engineer',
    'Creative Technologist',
    'Digital Analytics',
    'UI Systems Designer',
    'Portfolio',
  ],
  openGraph: {
    title: 'Angel Castillo — Creative Technologist',
    description:
      'Entering the personal operating system of an elite creative developer.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1a1426' },
    { media: '(prefers-color-scheme: light)', color: '#f4f2f9' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="bg-background">
      <body
        className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <AmbientBackground />
            <CustomCursor />
            {children}
            <AngelChat />
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
