"use client"

import TopBar from "@/components/Header/TopBar"
import SideBar from "@/components/SideBar/SideBar"
import Footer from "@/components/Footer/Footer"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { tracks } from "@/lib/mostplayed"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, MoreHorizontal, Play } from "lucide-react"

export default function Profile() {
  const artists = [
    { name: "Radiohead", image: "pablohoney.png" },
    { name: "Linkin park", image: "linkinpark.png" },
    { name: "Metallica", image: "metallica.png" },
    { name: "Luiz Gonzaga", image: "forro.png" },
    { name: "Helloween", image: "helloween.png" },
    { name: "Kendrick Lamar", image: "gnx.png" },
    { name: "Steely Dan", image: "steelydan.png" },
  ]

  return (
    <div className="h-screen bg-[#bfbfbf] text-black flex flex-col">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        <div className="flex-1 bg-[#f5f5f5] overflow-auto">
          <div className="p-3 sm:p-4 md:p-6">
            {/* Profile Header */}
            <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mb-6 md:mb-8">
              {/* User Info Section */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <Avatar className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0">
                  <AvatarImage src="johndoe.png" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-400 to-yellow-400 text-xl sm:text-2xl text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-black">John Doe</h1>
                  <p className="text-[#666] mb-4 text-sm sm:text-base">42 seguidores 17 seguindo</p>
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    <Button className="bg-black text-white rounded-full px-4 sm:px-6 hover:bg-[#333] w-full sm:w-auto">
                      <Plus className="w-4 h-4 mr-2" />
                      Seguir
                    </Button>
                    <Button variant="ghost" size="icon" className="text-black hover:bg-[#e0e0e0] w-10 h-10">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Featured Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:max-w-md">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black text-center sm:text-left">
                    Playlist em destaque
                  </h2>
                  <Card className="bg-white border border-[#e0e0e0] shadow-sm">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img src="forro.png" alt="Forró" className="w-16 h-16 sm:w-20 sm:h-20 rounded flex-shrink-0" />
                        <div className="min-w-0">
                          <h3 className="font-bold text-base sm:text-lg text-black truncate">Forró</h3>
                          <p className="text-[#666] text-sm truncate">De John Doe</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black text-center sm:text-left">
                    Álbum em destaque
                  </h2>
                  <Card className="bg-white border border-[#e0e0e0] shadow-sm">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img
                          src="metallica.png"
                          alt="Ride the lightning"
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <h3 className="font-bold text-base sm:text-lg text-black truncate">Ride the lightning</h3>
                          <p className="text-[#666] text-sm truncate">De Metallica</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Top Artists Section */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black">Artistas mais tocados este mês</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4">
                {artists.map((artist, index) => (
                  <div key={index} className="text-center">
                    <div className="relative group cursor-pointer">
                      <img
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        className="w-full aspect-square rounded-full object-cover mb-2 sm:mb-3"
                      />
                      <Button
                        size="icon"
                        className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 rounded-full bg-[#1ed760] hover:bg-[#1ed760]/80 opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 sm:w-10 sm:h-10"
                      >
                        <Play className="w-3 h-3 sm:w-4 sm:h-4 text-black fill-black" />
                      </Button>
                    </div>
                    <p className="font-medium text-xs sm:text-sm text-black truncate px-1">{artist.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Tracks Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black">Músicas mais tocadas este mês</h2>
              <div className="space-y-1 sm:space-y-2">
                {tracks.map((track, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded hover:bg-[#e0e0e0] group cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0">
                      <img
                        src={track.image || "/placeholder.svg"}
                        alt={track.title}
                        className="w-full h-full rounded object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm sm:text-base truncate text-black">{track.title}</div>
                      <div className="text-xs sm:text-sm text-[#666] truncate">{track.artist}</div>
                    </div>
                    <div className="text-xs sm:text-sm text-[#666] hidden lg:block max-w-32 truncate">
                      {track.album}
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-7 h-7 sm:w-8 sm:h-8 opacity-0 group-hover:opacity-100 text-black hidden sm:flex"
                      >
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <span className="text-xs sm:text-sm text-[#666] w-10 sm:w-12 text-right">{track.duration}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-7 h-7 sm:w-8 sm:h-8 opacity-0 group-hover:opacity-100 text-black"
                      >
                        <MoreHorizontal className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
