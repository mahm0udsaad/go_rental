import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { SystemProvider } from '@/context/context'
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SystemProvider>
      <html lang={lng} dir={dir(lng)}>
        <body >
          {children}
          </body>
      </html>
      </SystemProvider>
      </ClerkProvider>
  )
}