"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TopBar from "@/components/Header/TopBar";
import SideBar from "@/components/SideBar/SideBar";
import Footer from "@/components/Footer/Footer";
import { recommendedItems } from "@/lib/recommended";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Tudo");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "user@teste.com" && password === "123456") {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-400 flex flex-col">
        {/* Header */}
        <header className="bg-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-black rounded-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                </div>
              </div>
            </div>
            <span className="text-xl font-bold text-black">Spotify</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-black hover:text-gray-600 font-medium">
              Premium
            </a>
            <a href="#" className="text-black hover:text-gray-600 font-medium">
              Support
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero */}
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="relative">
                <div className="w-80 h-80 bg-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="w-48 h-80 bg-green-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 border border-white rounded-full"></div>
                        </div>
                        <span className="text-black font-bold text-sm">Spotify</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">Millions of songs.</h1>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">Free on Spotify.</h2>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@email.com"
                      className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="border-gray-300" />

                    <label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>

                  <Button type="submit" className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full">
                    Log In
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white px-6 py-4 text-center border-t">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <span className="font-medium">Spotify</span>
          </div>
          <p className="text-gray-400 text-xs mt-1">© 2024 Spotify AB</p>
        </footer>
      </div>
    );
  }

  // Página principal depois do login
  return (
    <div className="h-screen bg-[#bfbfbf] text-black flex flex-col">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        <div className="flex-1 bg-[#f5f5f5] overflow-auto">
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-black">Recomendados para você</h2>
              <div className="relative bg-[#adadad] rounded-lg p-6 mb-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full hover:bg-black/70 w-10 h-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full hover:bg-black/70 w-10 h-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>

                <div className="flex items-center gap-6">
                  <img
                    src="angra.png"
                    alt="Angels Cry"
                    className="w-40 h-40 rounded"
                  />
                  <div>
                    <div className="text-sm text-black mb-1">Álbum</div>
                    <h3 className="text-4xl font-bold text-[#1ed760] mb-2">Angels Cry</h3>
                    <div className="text-lg text-black mb-4">ANGRA</div>
                    <div className="flex gap-3">
                      <Button className="bg-black text-white hover:bg-[#333] rounded-full px-6">Play</Button>
                      <Button variant="outline" className="border-black text-black hover:bg-black/10 rounded-full px-6">
                        Salvar playlist
                      </Button>
                      <Button variant="outline" className="border-black text-black hover:bg-black/10 rounded-full px-6">
                        Baixar Playlist
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              {["Tudo", "Podcasts", "Músicas"].map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "default" : "secondary"}
                  className={`rounded-full px-4 ${
                    selectedFilter === filter
                      ? "bg-[#1ed760] text-black hover:bg-[#1ed760]/90"
                      : "bg-[#2c2c2c] text-white hover:bg-[#2c2c2c]/80"
                  }`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {recommendedItems.map((item, index) => (
                <Card key={index} className="bg-[#e0e0e0] border-none hover:bg-[#d9d9d9] cursor-pointer">
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-24 h-24 rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm text-black truncate">{item.title}</div>
                        <div className="text-xs text-[#666] truncate">{item.subtitle}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Feito para John Doe</h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
