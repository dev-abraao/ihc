"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import TopBar from "@/components/Header/TopBar"
import SideBar from "@/components/SideBar/SideBar"
import Footer from "@/components/Footer/Footer"
import { recommendedItems } from "@/lib/recommended"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Plus, Download } from "lucide-react"

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("Tudo")

  return (
    <div className="h-screen bg-[#bfbfbf] text-black flex flex-col">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        <div className="flex-1 bg-[#f5f5f5] overflow-auto">
          <div className="p-3 sm:p-4 md:p-6">
            {/* Hero Section */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-black">Recomendados para você</h2>
              <div className="relative bg-[#adadad] rounded-lg p-4 sm:p-6 mb-4 md:mb-6">
                {/* Navigation Arrows - Hidden on mobile */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full hover:bg-black/70 w-8 h-8 sm:w-10 sm:h-10 hidden md:flex"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full hover:bg-black/70 w-8 h-8 sm:w-10 sm:h-10 hidden md:flex"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>

                {/* Hero Content */}
                <div className="flex flex-col md:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8">
                  <img
                    src="angra.png"
                    alt="Angels Cry"
                    className="w-32 h-32 sm:w-40 md:   sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded flex-shrink-0 object-cover"
                  />
                  <div className="text-center sm:text-left flex-1 w-full sm:w-auto">
                    <div className="text-xs sm:text-sm md:text-base text-black mb-1 opacity-80">Álbum</div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1ed760] mb-2 break-words">Angels Cry</h3>
                    <div className="text-base sm:text-lg md:text-xl text-black mb-4 font-medium">ANGRA</div>

                    {/* Action Buttons */}
                    <div className="flex flex-row sm:justify-start justify-center gap-2 sm:gap-3 items-center sm:items-start">
                      <Button className="bg-black text-white hover:bg-[#333] rounded-full px-6 sm:px-8 h-10 sm:h-12 font-medium text-sm sm:text-base min-w-0 flex-shrink-0">
                        Play
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-black text-black hover:bg-black/10 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                        title="Salvar playlist"
                      >
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-black text-black hover:bg-black/10 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                        title="Baixar playlist"
                      >
                        <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              {["Tudo", "Podcasts", "Músicas"].map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "default" : "secondary"}
                  className={`rounded-full px-3 sm:px-4 h-8 sm:h-10 text-sm ${
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

            {/* Recommended Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 md:mb-8">
              {recommendedItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-[#e0e0e0] border-none hover:bg-[#d9d9d9] cursor-pointer transition-colors"
                >
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm sm:text-base text-black truncate">{item.title}</div>
                        <div className="text-xs sm:text-sm text-[#666] truncate">{item.subtitle}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Made For Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-black">Feito para John Doe</h2>
              {/* Add more content here as needed */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}