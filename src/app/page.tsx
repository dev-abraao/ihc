"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Home,
  Plus,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
  List,
  Monitor,
  Bell,
  Maximize2,
} from "lucide-react";

export default function Component() {
  const [selectedFilter, setSelectedFilter] = useState("Tudo");

  const libraryItems = [
    {
      title: "Chill",
      artist: "John Doe",
      type: "Playlist",
      color: "bg-gradient-to-br from-pink-400 to-orange-300",
    },
    {
      title: "Pablo Honey",
      artist: "Radiohead",
      type: "Álbum",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "Over Each Other",
      artist: "Linkin Park",
      type: "Álbum",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "GNX",
      artist: "Kendrick Lamar",
      type: "Álbum",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "Master of The Rings",
      artist: "Helloween",
      type: "Álbum",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "Can't Buy a Thrill",
      artist: "Steely Dan",
      type: "Álbum",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "In Rainbows",
      artist: "Radiohead",
      type: "Álbum",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "Flower Boy",
      artist: "Tyler The Creator",
      type: "Álbum",
      image: "/placeholder.svg?height=48&width=48",
    },
  ];

  const recommendedItems = [
    {
      title: "Perfect Gentleman",
      subtitle: "Música • Helloween",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      title: "Jigsaw Falling into Place",
      subtitle: "Música • Radiohead",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      title: "Only a Fool Would Say That",
      subtitle: "Música • Steely Dan",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      title: "Flow Podcast",
      subtitle: "Podcasts • Flow Studios",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      title: "Over Each Other",
      subtitle: "Música • Linkin Park",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      title: "Frost Bite",
      subtitle: "Música • Men I Trust",
      image: "/placeholder.svg?height=64&width=64",
    },
  ];

  const madeForYouItems = [
    "/placeholder.svg?height=180&width=180",
    "/placeholder.svg?height=180&width=180",
    "/placeholder.svg?height=180&width=180",
    "/placeholder.svg?height=180&width=180",
    "/placeholder.svg?height=180&width=180",
    "/placeholder.svg?height=180&width=180",
  ];

  return (
    <div className="h-screen bg-[#bfbfbf] text-black flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 bg-[#bfbfbf]">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff605c]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd44]"></div>
            <div className="w-3 h-3 rounded-full bg-[#00ca4e]"></div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-black hover:bg-[#d9d9d9]"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-black hover:bg-[#d9d9d9]"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-1 max-w-md mx-8">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#1e1e1e] hover:bg-[#2c2c2c]"
          >
            <Home className="w-5 h-5 text-white" />
          </Button>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666]" />
            <Input
              placeholder="O que você quer ouvir?"
              className="pl-10 bg-white text-black border border-[#d9d9d9] rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-black hover:bg-[#d9d9d9]"
          >
            <Bell className="w-5 h-5" />
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback className="bg-blue-500 text-white">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 bg-[#d9d9d9] p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#666] rounded"></div>
              <span className="font-semibold text-black">Sua Biblioteca</span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-black hover:bg-[#bfbfbf]"
              >
                <Plus className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-black hover:bg-[#bfbfbf]"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666]" />
            <Input
              placeholder="Buscar na Biblioteca"
              className="pl-10 bg-white border border-[#bfbfbf] text-sm text-black"
            />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-black hover:bg-[#bfbfbf]"
            >
              Recentes
            </Button>
          </div>

          <ScrollArea className="flex-1">
            <div className="space-y-2">
              {libraryItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 rounded hover:bg-[#bfbfbf] cursor-pointer"
                >
                  {item.color ? (
                    <div className={`w-12 h-12 rounded ${item.color}`}></div>
                  ) : (
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-12 h-12 rounded"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm truncate text-black">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#666] truncate">
                      {item.type} • {item.artist}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-[#f5f5f5] overflow-auto">
          <div className="p-6">
            {/* Recommended Section */}
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
                    src="/placeholder.svg?height=160&width=160"
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

            {/* Filter Buttons */}
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

            {/* Recommended Items Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {recommendedItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-[#e0e0e0] border-none hover:bg-[#d9d9d9] cursor-pointer"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-16 h-16 rounded"
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

            {/* Made for You Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">
                Feito para John Doe
              </h2>
              <div className="grid grid-cols-6 gap-4">
                {madeForYouItems.map((image, index) => (
                  <div key={index} className="aspect-square relative group">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Made for you ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                    <Button
                      size="icon"
                      className="absolute bottom-2 right-2 rounded-full bg-[#1ed760] hover:bg-[#1ed760]/80 opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8"
                    >
                      <Play className="w-4 h-4 text-black fill-black" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Player */}
      <div className="bg-[#d9d9d9] border-t border-[#bfbfbf] p-4">
        <div className="flex items-center justify-between">
          {/* Currently Playing */}
          <div className="flex items-center gap-3 w-1/4">
            <img
              src="/placeholder.svg?height=56&width=56"
              alt="Creep"
              className="w-14 h-14 rounded"
            />
            <div>
              <div className="font-medium text-sm text-black">Creep</div>
              <div className="text-xs text-[#666]">Radiohead</div>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center gap-2 w-1/2">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-black hover:bg-[#bfbfbf]"
              >
                <Shuffle className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-black hover:bg-[#bfbfbf]"
              >
                <SkipBack className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                className="w-10 h-10 rounded-full bg-black hover:bg-[#333]"
              >
                <Play className="w-5 h-5 text-white fill-white" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-black hover:bg-[#bfbfbf]"
              >
                <SkipForward className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-black hover:bg-[#bfbfbf]"
              >
                <Repeat className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 w-full max-w-md">
              <span className="text-xs text-[#666]">1:59</span>
              <div className="flex-1 bg-[#bfbfbf] rounded-full h-1">
                <div className="bg-black rounded-full h-1 w-1/3"></div>
              </div>
              <span className="text-xs text-[#666]">3:00</span>
            </div>
          </div>

          {/* Volume and Options */}
          <div className="flex items-center gap-2 w-1/4 justify-end">
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-black hover:bg-[#bfbfbf]"
            >
              <List className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-black hover:bg-[#bfbfbf]"
            >
              <Monitor className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-black hover:bg-[#bfbfbf]"
            >
              <Volume2 className="w-4 h-4" />
            </Button>
            <div className="w-20 bg-[#bfbfbf] rounded-full h-1">
              <div className="bg-black rounded-full h-1 w-3/4"></div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-black hover:bg-[#bfbfbf]"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
