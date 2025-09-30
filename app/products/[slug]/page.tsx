"use client"

import { useState, useEffect } from "react"
import { products } from "@/app/data/products"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { notFound } from "next/navigation"

export default function page({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return notFound()

  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) setCartCount(JSON.parse(storedCart).length)
  }, [])

  const handleAddToCart = () => {
    const storedCart = localStorage.getItem("cart")
    const cart = storedCart ? JSON.parse(storedCart) : []
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
    setCartCount(cart.length)
    alert(`${product.name} added to cart!`)
  }

  const averageRating =
    product.reviews && product.reviews.length > 0
      ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
      : 0

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <img src={product.image} alt={product.name} className="w-full rounded-2xl shadow-lg object-cover" />
          <div>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>

            {averageRating > 0 && (
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(averageRating) ? "fill-primary text-primary" : "text-muted-foreground"
                    }`}
                  />
                ))}
                <span className="text-sm text-muted-foreground">
                  {averageRating.toFixed(1)} / 5 ({product.reviews.length} reviews)
                </span>
              </div>
            )}

            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-bold text-2xl">{product.price}</span>
              <span className="text-muted-foreground line-through">{product.originalPrice}</span>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            <Button className="bg-primary text-primary-foreground rounded-full px-6 py-3" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
