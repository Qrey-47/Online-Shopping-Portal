import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Leaf, Menu, Search, Star } from "lucide-react";
import Link from "next/link";

// import products array
import { products } from "@/app/data/products";

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) return notFound();

    // === Calculate Average Rating ===
    const averageRating =
        product.reviews && product.reviews.length > 0
            ? product.reviews.reduce((sum, r) => sum + r.rating, 0) /
            product.reviews.length
            : 0;

    return (
        <div className="min-h-screen bg-background">
            {/* ===== NAVBAR ===== */}
            <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-border">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo (Clickable) */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shadow-lg border border-primary/20">
                                <Leaf className="w-6 h-6 text-primary" />
                            </div>
                            <h1 className="text-2xl font-bold text-primary font-sans">
                                SATTVA SKIN
                            </h1>
                        </Link>

                        {/* Search Bar */}
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

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <Link href="/login">
                                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif px-6 py-2 rounded-full transition-all duration-300 hidden sm:flex">
                                    <User className="w-4 h-4 mr-2" />
                                    Login
                                </Button>
                            </Link>
                            <Button
                                size="sm"
                                variant="ghost"
                                className="hover:scale-110 transition-transform duration-300 p-2"
                            >
                                <ShoppingCart className="w-5 h-5 text-foreground" />
                            </Button>
                            <Button size="sm" variant="ghost" className="md:hidden p-2">
                                <Menu className="w-5 h-5 text-foreground" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* ===== PRODUCT SECTION ===== */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Product Image */}
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full rounded-2xl shadow-lg object-cover"
                            />
                            {product.badge && (
                                <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-serif shadow-sm">
                                    {product.badge}
                                </span>
                            )}
                        </div>

                        {/* Product Details */}
                        <div>
                            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>

                            {/* Average Rating */}
                            {averageRating > 0 && (
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.round(averageRating)
                                                        ? "fill-primary text-primary"
                                                        : "text-muted-foreground"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        {averageRating.toFixed(1)} / 5 ({product.reviews.length}{" "}
                                        reviews)
                                    </span>
                                </div>
                            )}

                            {/* Price */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-primary font-bold text-2xl">
                                    {product.price}
                                </span>
                                <span className="text-muted-foreground line-through">
                                    {product.originalPrice}
                                </span>
                            </div>

                            {/* Description */}
                            {product.description && (
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    {product.description}
                                </p>
                            )}

                            {/* Add to Cart */}
                            <Button className="bg-primary text-primary-foreground rounded-full px-6 py-3">
                                Add to Cart
                            </Button>
                        </div>
                    </div>

                    {/* ===== REVIEWS SECTION ===== */}
                    {product.reviews && (
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {product.reviews.map((review, index) => (
                                    <div
                                        key={index}
                                        className="border border-border rounded-lg p-4 bg-background/50 shadow-sm"
                                    >
                                        {/* User + Rating */}
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold">{review.user}</span>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < review.rating
                                                                ? "fill-primary text-primary"
                                                                : "text-muted-foreground"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        {/* Comment */}
                                        <p className="text-muted-foreground text-sm">
                                            {review.comment}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
