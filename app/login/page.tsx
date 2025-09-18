"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Leaf, Eye, EyeOff, Sparkles, Shield, Heart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-spa-botanical-background.jpg"
          alt="Luxury spa background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent" />
      </div>

      {/* Left side - Enhanced Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/60 z-10" />
        <img
          src="/natural-skincare-ingredients-background.jpg"
          alt="Natural skincare ingredients"
          className="w-full h-full object-cover floating-effect opacity-80"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-12">
          <div className="text-center space-y-8 max-w-lg">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-lg border-4 border-white/40 organic-shadow floating-effect">
                <Leaf className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
              <h1 className="text-6xl font-bold font-sans tracking-wide drop-shadow-2xl">SATTVA SKIN</h1>
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl font-bold font-sans leading-tight text-balance drop-shadow-lg">
                Unlock Your Natural Radiance
              </h2>
              <p className="text-2xl font-serif opacity-95 text-pretty leading-relaxed drop-shadow-md">
                Experience the transformative power of nature's most precious ingredients, carefully crafted for your
                skin's ultimate wellness.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4 text-white bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <Shield className="w-8 h-8 text-white drop-shadow-lg" />
                <span className="font-serif text-xl font-medium">Clinically Proven Results</span>
              </div>
              <div className="flex items-center gap-4 text-white bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <Heart className="w-8 h-8 text-white drop-shadow-lg" />
                <span className="font-serif text-xl font-medium">Loved by 50,000+ Customers</span>
              </div>
              <div className="flex items-center gap-4 text-white bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <Sparkles className="w-8 h-8 text-white drop-shadow-lg" />
                <span className="font-serif text-xl font-medium">30-Day Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Enhanced Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative z-10">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute inset-0 leaf-pattern" />
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Mobile Logo */}
          <div className="text-center mb-8 lg:hidden">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center organic-shadow border-2 border-primary/20 group-hover:shadow-xl transition-all duration-300">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-primary font-sans">SATTVA SKIN</h1>
            </Link>
          </div>

          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-2xl border-2 border-primary/10 organic-shadow hover:shadow-3xl transition-all duration-500">
            <CardHeader className="text-center pb-8 pt-10">
              <CardTitle className="text-5xl font-bold text-foreground font-sans mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Welcome Back
              </CardTitle>
              <p className="text-muted-foreground font-serif text-xl leading-relaxed">
                Continue your journey to naturally beautiful, radiant skin
              </p>
            </CardHeader>
            <CardContent className="space-y-8 px-8 pb-8">
              <form className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-foreground font-serif text-base font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="h-12 border-2 border-border focus:border-primary focus:ring-primary/20 font-serif text-base rounded-xl bg-white/50 backdrop-blur-sm transition-all duration-300"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="password" className="text-foreground font-serif text-base font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="h-12 border-2 border-border focus:border-primary focus:ring-primary/20 font-serif text-base rounded-xl bg-white/50 backdrop-blur-sm pr-12 transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-3">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-border text-primary focus:ring-primary/20 focus:ring-2"
                    />
                    <Label htmlFor="remember" className="text-muted-foreground font-serif">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    href="#"
                    className="text-primary hover:text-primary/80 transition-colors font-serif font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Sign In to Your Account
                </Button>
              </form>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t-2 border-border/50" />
                </div>
                <div className="relative flex justify-center text-sm uppercase">
                  <span className="bg-white px-4 text-muted-foreground font-serif font-medium tracking-wider">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-12 font-serif border-2 border-border hover:bg-primary/5 bg-white/50 backdrop-blur-sm rounded-xl transition-all duration-300 hover:border-primary/50"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="h-12 font-serif border-2 border-border hover:bg-primary/5 bg-white/50 backdrop-blur-sm rounded-xl transition-all duration-300 hover:border-primary/50"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="text-muted-foreground font-serif text-base">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-primary hover:text-primary/80 transition-colors font-semibold underline decoration-2 underline-offset-2"
                  >
                    Create your account
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
