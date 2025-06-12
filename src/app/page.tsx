"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "user@teste.com" && password === "123456") {
      router.push("/home");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left: Hero Section */}
      <div className="lg:w-1/2 flex items-center justify-center bg-[#f5f5f5] py-12 px-8">
        <div className="max-w-md">
          {/* Header */}
          <div className="flex items-center gap-3">
            {/* Logo */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="text-[#1ed760]"
            >
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="currentColor"
                opacity="0.1"
              />
              <path d="M16 6L20 12H12L16 6Z" fill="currentColor" />
              <circle cx="16" cy="18" r="3" fill="currentColor" />
              <path
                d="M10 22L14 26H18L22 22"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold text-black">Lightify</span>
          </div>

          {/* Hero Text */}
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              Welcome back to
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              your music.
            </h2>
            <p className="text-lg text-[#666] mt-4">
              Log in to continue your musical journey.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="lg:w-1/2 flex items-center justify-center py-12 px-8 bg-[#ffffff]">
        <div className="w-full max-w-md">
          {/* Title */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-black">
              Log in to Lightify
            </h3>
            <p className="text-sm text-[#666] mt-1">
              Don&apos;t have an account? <br/>
              <Link
                href="/register"
                className="text-[#1ed760] hover:underline font-medium"
              >
                Sign up here
              </Link>
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black mb-2"
              >
                Email address
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-white border-[#d9d9d9] focus:border-[#1ed760] focus:ring-[#1ed760] rounded-full text-black placeholder:text-[#666]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black mb-2"
              >
                Password
              </label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-white border-[#d9d9d9] focus:border-[#1ed760] focus:ring-[#1ed760] rounded-full text-black placeholder:text-[#666]"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-[#bfbfbf] text-[#1ed760] focus:ring-[#1ed760]"
                />
                <label htmlFor="remember" className="text-sm text-[#666]">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-[#1ed760] hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#1ed760] hover:bg-[#1ed760]/90 text-black font-medium rounded-full mt-6"
            >
              Log In
            </Button>

            <div className="mt-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#d9d9d9]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#bfbfbf] text-[#666]">or</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full h-12 mt-4 bg-white border-[#d9d9d9] hover:bg-[#f5f5f5] text-black font-medium rounded-full"
              >
                Continue with Google
              </Button>
            </div>

            {/* Login Credentials Info */}
          </form>
        </div>
      </div>
    </div>
  );
}
