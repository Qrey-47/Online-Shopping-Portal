"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Leaf, ShoppingCart, User, Menu, Search } from "lucide-react"
import { useCart } from "@/app/context/CartContext"

export default function Navbar() {
  const [user, setUser] = useState<{ firstName: string } | null>(null)
  const { cart } = useCart() // <-- use cart from context

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) setUser(JSON.parse(storedUser))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shadow-lg border border-primary/20">
            <Leaf className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-primary font-sans">SATTVA SKIN</h1>
        </Link>

        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-full bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 font-serif text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="font-semibold text-foreground">Hi, {user.firstName} 👋</span>
              <Button size="sm" variant="outline" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif px-6 py-2 rounded-full transition-all duration-300 hidden sm:flex">
              <User className="w-4 h-4 mr-2" />
              <Link href="/login">Login</Link>
            </Button>
          )}

          <Button size="sm" variant="ghost" className="relative hover:scale-110 transition-transform duration-300 p-2">
            <ShoppingCart className="w-5 h-5 text-foreground" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Button>

          <Button size="sm" variant="ghost" className="md:hidden p-2">
            <Menu className="w-5 h-5 text-foreground" />
          </Button>
        </div>
      </div>
    </header>
  )
}
