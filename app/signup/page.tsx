"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Leaf, Eye, EyeOff, Calendar, Star, Award, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-spa-botanical-background.jpg"
          alt="Luxury spa background"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/30 to-transparent" />
      </div>

      {/* Left side - Enhanced Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/75 to-secondary/65 z-10" />
        <img
          src="/premium-skincare-spa-treatment.jpg"
          alt="Premium skincare spa treatment"
          className="w-full h-full object-cover floating-effect opacity-75"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-12">
          <div className="text-center space-y-8 max-w-lg">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-28 h-28 bg-white/35 rounded-full flex items-center justify-center backdrop-blur-lg border-4 border-white/50 organic-shadow floating-effect">
                <Leaf className="w-14 h-14 text-white drop-shadow-2xl" />
              </div>
              <h1 className="text-7xl font-bold font-sans tracking-wide drop-shadow-2xl">SATTVA SKIN</h1>
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl font-bold font-sans leading-tight text-balance drop-shadow-lg">
                Transform Your Skin, Transform Your Life
              </h2>
              <p className="text-2xl font-serif opacity-95 text-pretty leading-relaxed drop-shadow-md">
                Join our exclusive community of beauty enthusiasts and discover the secret to naturally radiant,
                youthful skin with our premium botanical formulations.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4 text-white bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/25">
                <Award className="w-8 h-8 text-white drop-shadow-lg" />
                <span className="font-serif text-xl font-medium">Award-Winning Formulations</span>
              </div>
              <div className="flex items-center gap-4 text-white bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/25">
                <Users className="w-8 h-8 text-white drop-shadow-lg" />
                <span className="font-serif text-xl font-medium">Join 100,000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-4 text-white bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/25">
                <Star className="w-8 h-8 text-white drop-shadow-lg" />
                <span className="font-serif text-xl font-medium">4.9/5 Customer Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Enhanced Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative z-10">
        <div className="absolute inset-0 opacity-15">
          <div className="w-full h-full bg-gradient-to-br from-primary/8 via-transparent to-secondary/8" />
          <div className="absolute inset-0 leaf-pattern" />
        </div>

        <div className="w-full max-w-lg relative z-10">
          {/* Mobile Logo */}
          <div className="text-center mb-8 lg:hidden">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center organic-shadow border-2 border-primary/20 group-hover:shadow-xl transition-all duration-500">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-primary font-sans">SATTVA SKIN</h1>
            </Link>
          </div>

          <Card className="organic-shadow border-0 bg-white/97 backdrop-blur-2xl border-2 border-primary/10 hover:shadow-3xl transition-all duration-500">
            <CardHeader className="text-center pb-8 pt-10">
              <CardTitle className="text-5xl font-bold text-foreground font-sans mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Join SATTVA SKIN
              </CardTitle>
              <p className="text-muted-foreground font-serif text-xl leading-relaxed">
                Begin your journey to naturally beautiful, radiant skin
              </p>
            </CardHeader>
            <CardContent className="space-y-8 px-10 pb-10">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-foreground font-serif text-base font-semibold">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="First name"
                      className="h-14 border-2 border-border focus:border-primary focus:ring-accent/30 font-serif text-base rounded-2xl bg-white/70 backdrop-blur-sm transition-all duration-500 hover:bg-white/90"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-foreground font-serif text-base font-semibold">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Last name"
                      className="h-14 border-2 border-border focus:border-primary focus:ring-accent/30 font-serif text-base rounded-2xl bg-white/70 backdrop-blur-sm transition-all duration-500 hover:bg-white/90"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-foreground font-serif text-base font-semibold">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="h-14 border-2 border-border focus:border-primary focus:ring-accent/30 font-serif text-base rounded-2xl bg-white/70 backdrop-blur-sm transition-all duration-500 hover:bg-white/90"
                  />
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="dob"
                    className="text-foreground font-serif text-base font-semibold flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Date of Birth
                  </Label>
                  <Input
                    id="dob"
                    type="date"
                    className="h-14 border-2 border-border focus:border-primary focus:ring-accent/30 font-serif text-base rounded-2xl bg-white/70 backdrop-blur-sm transition-all duration-500 hover:bg-white/90"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="password" className="text-foreground font-serif text-base font-semibold">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="h-14 border-2 border-border focus:border-primary focus:ring-accent/30 font-serif text-base rounded-2xl bg-white/70 backdrop-blur-sm pr-14 transition-all duration-500 hover:bg-white/90"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="confirmPassword" className="text-foreground font-serif text-base font-semibold">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="h-14 border-2 border-border focus:border-primary focus:ring-accent/30 font-serif text-base rounded-2xl bg-white/70 backdrop-blur-sm pr-14 transition-all duration-500 hover:bg-white/90"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-5 h-5 mt-1 rounded-lg border-2 border-border text-primary focus:ring-accent/30 focus:ring-2"
                  />
                  <Label htmlFor="terms" className="text-muted-foreground font-serif text-sm leading-relaxed">
                    I agree to the{" "}
                    <Link
                      href="#"
                      className="text-primary hover:text-accent transition-colors font-semibold underline decoration-2 underline-offset-2"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="#"
                      className="text-primary hover:text-accent transition-colors font-semibold underline decoration-2 underline-offset-2"
                    >
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full h-16 bg-primary hover:bg-accent text-primary-foreground font-serif text-lg font-bold rounded-2xl organic-shadow hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1"
                >
                  Create Your Account
                </Button>
              </form>

              <div className="relative py-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t-2 border-border/50" />
                </div>
                <div className="relative flex justify-center text-sm uppercase">
                  <span className="bg-white px-6 text-muted-foreground font-serif font-semibold tracking-wider">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-14 font-serif border-2 border-border hover:bg-accent/10 bg-white/70 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:border-accent/50 hover:shadow-lg"
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
                  className="h-14 font-serif border-2 border-border hover:bg-accent/10 bg-white/70 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:border-accent/50 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Button>
              </div>

              <div className="text-center pt-6">
                <p className="text-muted-foreground font-serif text-base">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-primary hover:text-accent transition-colors font-bold underline decoration-2 underline-offset-2"
                  >
                    Sign in here
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
