import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { i18n } from '@/lib/i18n'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'iGourd - Advanced POS Solutions',
  description: 'iGourd provides cutting-edge Point of Sale systems for businesses of all sizes.',
}

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
    const lang = (await params).lang
  return (
    <html lang={lang}>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header lang={lang} params={params} />
        <main className="flex-grow">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  )
}

