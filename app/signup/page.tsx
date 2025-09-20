"use client";

import type React from "react";
import { Leaf, Eye, EyeOff, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // Split fullName into firstName + lastName
      const [firstName, ...lastParts] = formData.fullName.trim().split(" ");
      const lastName = lastParts.join(" ") || "";

      // Construct the request body including all required fields
      const requestBody = {
        firstName,
        lastName,
        email: formData.email,
        password: formData.password,
        dob: formData.dateOfBirth,
        
      };

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Signup failed");
      } else {
        setMessage("✅ Account created successfully!");
        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          password: "",
          dateOfBirth: "",
        });
      }
    } catch (error) {
      setMessage("❌ Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full shadow-2xl border-0 bg-white/98 backdrop-blur-lg relative overflow-hidden leaf-decoration">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/2 to-accent/3 pointer-events-none"></div>

      <CardHeader className="space-y-1 pb-6 relative z-10">
        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full flex items-center justify-center border-2 border-primary/25 shadow-lg">
          <Leaf className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-3xl font-bold text-center text-foreground font-sans mb-2">
          Create Account
        </h3>
        <p className="text-muted-foreground text-center font-serif text-base">
          Join thousands who trust natural skincare
        </p>

        <div className="flex justify-center gap-4 mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-primary" />
            <span>Free shipping</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-primary" />
            <span>Expert tips</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-primary" />
            <span>Early access</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 relative z-10">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="space-y-2">
            <Label
              htmlFor="fullName"
              className="text-sm font-semibold text-foreground font-sans"
            >
              Full Name
            </Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("fullName")}
              onBlur={() => setFocusedField(null)}
              required
              className={`h-12 bg-input border-2 transition-all duration-300 rounded-xl font-serif ${
                focusedField === "fullName"
                  ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                  : "border-border hover:border-accent/50"
              }`}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-semibold text-foreground font-sans"
            >
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              required
              className={`h-12 bg-input border-2 transition-all duration-300 rounded-xl font-serif ${
                focusedField === "email"
                  ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                  : "border-border hover:border-accent/50"
              }`}
            />
          </div>

          {/* Password*/ }
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-semibold text-foreground font-sans"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a secure password"
                value={formData.password}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                required
                className={`h-12 bg-input border-2 transition-all duration-300 rounded-xl font-serif pr-12 ${
                  focusedField === "password"
                    ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                    : "border-border hover:border-accent/50"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>


          {/* Date of Birth */}
          <div className="space-y-2">
            <Label
              htmlFor="dateOfBirth"
              className="text-sm font-semibold text-foreground font-sans"
            >
              Date of Birth
            </Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("dateOfBirth")}
              onBlur={() => setFocusedField(null)}
              required
              className={`h-12 bg-input border-2 transition-all duration-300 rounded-xl font-serif ${
                focusedField === "dateOfBirth"
                  ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                  : "border-border hover:border-accent/50"
              }`}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-14 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-serif text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] border-0 relative overflow-hidden group"
          >
            <span className="relative z-10">
              {loading ? "Creating Account..." : "Join Sattva Skin"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
        </form>

        {message && (
          <p className="text-center text-sm font-medium mt-4 text-muted-foreground">
            {message}
          </p>
        )}

        <div className="text-center pt-6 border-t border-border/50">
          <p className="text-muted-foreground font-serif">
            Already have an account?{" "}
            <button className="text-primary hover:text-accent font-semibold transition-colors duration-200 underline decoration-primary/30 hover:decoration-accent/50">
              Log in
            </button>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

