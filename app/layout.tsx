import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import LanguageHtmlUpdater from "@/components/language-html-updater"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Juan Martin Canguillen - Portfolio",
  description: "Personal portfolio of Juan Martin Canguillen, Full Stack Developer",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <LanguageHtmlUpdater>{children}</LanguageHtmlUpdater>
        </LanguageProvider>
      </body>
    </html>
  )
}
