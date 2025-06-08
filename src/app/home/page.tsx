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
  const [selectedFilter, setSelectedFilter] = useState("Tudo");

  // Página principal depois do login
  return (
    <div className="h-screen bg-[#bfbfbf] text-black flex flex-col">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        <div className="flex-1 bg-[#f5f5f5] overflow-auto">
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-black">
                Recomendados para você
              </h2>
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
                    <h3 className="text-4xl font-bold text-[#1ed760] mb-2">
                      Angels Cry
                    </h3>
                    <div className="text-lg text-black mb-4">ANGRA</div>
                    <div className="flex gap-3">
                      <Button className="bg-black text-white hover:bg-[#333] rounded-full px-6">
                        Play
                      </Button>
                      <Button
                        variant="outline"
                        className="border-black text-black hover:bg-black/10 rounded-full px-6"
                      >
                        Salvar playlist
                      </Button>
                      <Button
                        variant="outline"
                        className="border-black text-black hover:bg-black/10 rounded-full px-6"
                      >
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
                <Card
                  key={index}
                  className="bg-[#e0e0e0] border-none hover:bg-[#d9d9d9] cursor-pointer"
                >
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-24 h-24 rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm text-black truncate">
                          {item.title}
                        </div>
                        <div className="text-xs text-[#666] truncate">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">
                Feito para John Doe
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
