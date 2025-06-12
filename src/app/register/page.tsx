"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col">
      <header className="bg-[#d9d9d9] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="text-[#1ed760]"
          >
            <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.1" />
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
        <div className="flex items-center gap-6">
          <a href="#" className="text-black hover:text-[#666] font-medium">
            Premium
          </a>
          <a href="#" className="text-black hover:text-[#666] font-medium">
            Support
          </a>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Join millions of
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                music lovers.
              </h2>
              <p className="text-lg text-[#666] mt-4">
                Create your free account and start discovering your next
                favorite song.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#f5f5f5] rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-black">
                  Sign up for free
                </h3>
                <p className="text-sm text-[#666] mt-1">
                  Already have an account?<br/>
                  <Link
                    href="/"
                    className="text-[#1ed760] hover:underline font-medium"
                  >
                    Log in here
                  </Link>
                </p>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-black"
                  >
                    Full name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="h-12 border-[#bfbfbf] focus:border-[#1ed760] focus:ring-[#1ed760] bg-white text-black"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-black"
                  >
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    className="h-12 border-[#bfbfbf] focus:border-[#1ed760] focus:ring-[#1ed760] bg-white text-black"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-black"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    className="h-12 border-[#bfbfbf] focus:border-[#1ed760] focus:ring-[#1ed760] bg-white text-black"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-black"
                  >
                    Confirm password
                  </label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="h-12 border-[#bfbfbf] focus:border-[#1ed760] focus:ring-[#1ed760] bg-white text-black"
                  />
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="border-[#bfbfbf] mt-1"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-[#666] leading-relaxed"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-[#1ed760] hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#1ed760] hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#1ed760] hover:bg-[#1ed760]/90 text-black font-medium rounded-full mt-6"
                >
                  Sign Up
                </Button>
              </form>

              <div className="mt-6 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#bfbfbf]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-[#f5f5f5] text-[#666]">or</span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 mt-4 border-[#bfbfbf] hover:bg-[#e5e5e5] text-black font-medium rounded-full"
                >
                  Continue with Google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#d9d9d9] px-6 py-4 text-center border-t border-[#bfbfbf]">
        <div className="flex items-center justify-center gap-2 text-black text-sm">
          <span className="font-medium">Lightify</span>
        </div>
        <p className="text-[#666] text-xs mt-1">© 2025 Lightify AB</p>
      </footer>
    </div>
  );
}
