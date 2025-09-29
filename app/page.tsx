import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ShoppingCart,
  User,
  Star,
  Leaf,
  Award,
  Shield,
  Menu,
  Heart,
  Sparkles,
  Search,
} from "lucide-react"
import Link from "next/link"
// ✅ import your real product data here:
import { products } from "./data/products"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shadow-lg border border-primary/20">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-primary font-sans">SATTVA SKIN</h1>
            </div>

            {/* Search */}
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
            0
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {["Shop", "Men", "Women", "Kids"].map((nav, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-foreground hover:text-primary transition-all duration-300 font-serif relative group"
                >
                  {nav}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button
                size="sm"
                variant="ghost"
                className="lg:hidden hover:scale-110 transition-transform duration-300 p-2"
              >
                <Search className="w-5 h-5 text-foreground" />
              </Button>

              <Link href="/login">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif px-6 py-2 rounded-full transition-all duration-300 hidden sm:flex">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Button size="sm" variant="ghost" className="hover:scale-110 transition-transform duration-300 p-2">
                <ShoppingCart className="w-5 h-5 text-foreground" />
              </Button>

              <Button size="sm" variant="ghost" className="md:hidden p-2">
                <Menu className="w-5 h-5 text-foreground" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10"
          style={{
            backgroundImage: `url('/serene-nature-forest-with-flowing-water-natural-sk.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-primary/10">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2 bg-primary px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                  <span className="text-sm font-serif text-primary-foreground">Premium Natural Skincare</span>
                </div>
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 font-sans leading-tight">
                Embrace Your
                <span className="text-primary block">Natural Beauty</span>
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-10 font-serif leading-relaxed max-w-2xl mx-auto">
                Discover the transformative power of organic ingredients with our luxurious skincare collection.
                Crafted with love, designed for your skin's natural radiance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Shop Collection
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-serif px-10 py-4 text-lg rounded-full transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 bg-primary px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-serif text-primary-foreground">Customer Favorites</span>
              </div>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-sans">Best Sellers</h3>
            <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
              Our most loved products for radiant, healthy skin that glows from within
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="group">
                <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square rounded-t-lg overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-serif">
                          {product.badge}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3 font-serif">{product.name}</h4>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-primary font-bold text-xl font-sans">{product.price}</span>
                          <span className="text-muted-foreground line-through text-sm font-sans">
                            {product.originalPrice}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif rounded-full py-3 transition-all duration-300 hover:shadow-lg">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* ...unchanged trust building & testimonials section... */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        {/* ...unchanged footer... */}
      </footer>
    </div>
  )
}
