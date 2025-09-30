import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/app/context/CartContext" // <-- import your context

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "SATTVA SKIN - Natural Skincare",
  description: "Embrace your natural beauty with premium organic skincare products",
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <body>
        {/* CartProvider wraps all pages so cart state is accessible globally */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
