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
  MoreHorizontal,
  Play,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
  List,
  Monitor,
  Bell,
} from "lucide-react";

export default function Component() {
  const [currentTrack, setCurrentTrack] = useState("Creep");

  const playlists = [
    {
      name: "Chill",
      author: "John Doe",
      color: "bg-gradient-to-br from-pink-400 to-orange-300",
    },
    {
      name: "Pablo Honey",
      author: "Radiohead",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Over Each Other",
      author: "Linkin Park",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "GNX",
      author: "Kendrick Lamar",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Master of The Rings",
      author: "Helloween",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Can't Buy a Thrill",
      author: "Steely Dan",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "In Rainbows",
      author: "Radiohead",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Flower Boy",
      author: "Tyler The Creator",
      image: "/placeholder.svg?height=48&width=48",
    },
  ];

  const artists = [
    { name: "Radiohead", image: "/placeholder.svg?height=160&width=160" },
    { name: "Linkin park", image: "/placeholder.svg?height=160&width=160" },
    { name: "Metallica", image: "/placeholder.svg?height=160&width=160" },
    { name: "Luiz Gonzaga", image: "/placeholder.svg?height=160&width=160" },
    { name: "Helloween", image: "/placeholder.svg?height=160&width=160" },
    { name: "Kendrick Lamar", image: "/placeholder.svg?height=160&width=160" },
    { name: "Steely Dan", image: "/placeholder.svg?height=160&width=160" },
  ];

  const tracks = [
    {
      title: "Creep",
      artist: "Radiohead",
      album: "Pablo Honey",
      duration: "3:58",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      title: "Heavy is the Crown",
      artist: "Linkin Park",
      album: "Over Each Other",
      duration: "2:47",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      title: "In the Middle of a Heartbeat",
      artist: "Helloween",
      album: "Master of The Rings",
      duration: "4:30",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      title: "You",
      artist: "Radiohead",
      album: "Pablo Honey",
      duration: "3:28",
      image: "/placeholder.svg?height=40&width=40",
    },
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
            className="text-black hover:bg-[#d9d9d9]"
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
              {playlists.map((playlist, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 rounded hover:bg-[#bfbfbf] cursor-pointer"
                >
                  {playlist.image ? (
                    <img
                      src={playlist.image || "/placeholder.svg"}
                      alt={playlist.name}
                      className="w-12 h-12 rounded"
                    />
                  ) : (
                    <div
                      className={`w-12 h-12 rounded ${playlist.color}`}
                    ></div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm truncate text-black">
                      {playlist.name}
                    </div>
                    <div className="text-xs text-[#666] truncate">
                      {playlist.author.includes("Radiohead") ||
                      playlist.author.includes("Linkin Park") ||
                      playlist.author.includes("Kendrick") ||
                      playlist.author.includes("Helloween") ||
                      playlist.author.includes("Steely") ||
                      playlist.author.includes("Tyler")
                        ? "Álbum"
                        : "Playlist"}{" "}
                      • {playlist.author}
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
            {/* Profile Section */}
            <div className="flex items-center gap-6 mb-8">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                <AvatarFallback className="bg-gradient-to-br from-blue-400 to-yellow-400 text-2xl text-white">
                  JD
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-5xl font-bold mb-2 text-black">John Doe</h1>
                <p className="text-[#666] mb-4">42 seguidores 17 seguindo</p>
                <div className="flex items-center gap-4">
                  <Button className="bg-black text-white rounded-full px-6 hover:bg-[#333]">
                    <Plus className="w-4 h-4 mr-2" />
                    Seguir
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-black hover:bg-[#e0e0e0]"
                  >
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Featured Content */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h2 className="text-xl font-bold mb-4 text-black">
                  Playlist em destaque
                </h2>
                <Card className="bg-white border border-[#e0e0e0] shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg?height=80&width=80"
                        alt="Forró"
                        className="w-20 h-20 rounded"
                      />
                      <div>
                        <h3 className="font-bold text-lg text-black">Forró</h3>
                        <p className="text-[#666]">De John Doe</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4 text-black">
                  Álbum em destaque
                </h2>
                <Card className="bg-white border border-[#e0e0e0] shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg?height=80&width=80"
                        alt="Ride the lightning"
                        className="w-20 h-20 rounded"
                      />
                      <div>
                        <h3 className="font-bold text-lg text-black">
                          Ride the lightning
                        </h3>
                        <p className="text-[#666]">De Metallica</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Artists Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-black">
                Artistas mais tocados este mês
              </h2>
              <div className="grid grid-cols- 7 gap-4">
                {artists.map((artist, index)  => (
                  <div key={index} className= "text-center">
                    <div className="relative  group cursor-pointer">
                      <img  
                        src={artist.image ||  "/placeholder.svg"}
                        alt={artist.name} 
                        className="w-full asp ect-square rounded-full object-cover mb-3"
                      />  
                      <Button 
                        size="icon" 
                        className="absolute b ottom-2 right-2 rounded-full bg-[#1ed760] hover:bg-[#1ed760]/80 opacity-0 group-hover:opacity-100 transition-opacity"
                      > 
                        <Play className="w-4  h-4 text-black fill-black" />
                      </Button> 
                    </div>  
                    <p className="font-medium  text-sm text-black">
                      {artist.name} 
                    </p>  
                  </div>  
                ))} 
              </div>  
            </div>  
                
            {/* Tracks Section */}  
            <div> 
              <h2 className="text-2xl font-bo ld mb-6 text-black">
                Músicas mais tocadas este mês 
              </h2> 
              <div className="space-y-2"> 
                {tracks.map((track, index) =>  (
                  <div  
                    key={index} 
                    className="flex items-cen ter gap-4 p-2 rounded hover:bg-[#e0e0e0] group cursor-pointer"
                  > 
                    <div className="w-10 h-10  relative">
                      <img  
                        src={track.image || " /placeholder.svg"}
                        alt={track.title} 
                        className="w-full h-f ull rounded"
                      />  
                    </div>  
                    <div className="flex-1 mi n-w-0">
                      <div className="font-me dium text-sm truncate text-black">
                        {track.title} 
                      </div>  
                      <div className="text-xs  text-[#666] truncate">
                        {track.artist}  
                      </div>  
                    </div>  
                    <div className="text-xs   text-[#666] hidden md:block">
                      {track.album} 
                    </div>  
                    <div className="flex item s-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="w-8 h-8 op acity-0 group-hover:opacity-100 text-black"
                      > 
                        <Plus className="w-4  h-4" />
                      </Button> 
                      <span className="text-x s text-[#666] w-12 text-right">
                        {track.duration}  
                      </span> 
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="w-8 h-8 op acity-0 group-hover:opacity-100 text-black"
                      > 
                        <MoreHorizontal className="w-4 h-4" />
                      </Button> 
                    </div>  
                  </div>  
                ))} 
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
                
      {/* Bottom Player */} 
      <div className="bg-[#d9d9d9] border-t   border-[#bfbfbf] p-4">
        <div className="flex items-center jus tify-between">
          {/* Current Track */} 
          <div className="flex items-center g ap-3 w-1/4">
            <img  
              src="/placeholder.svg?height=56 &width=56"
              alt="Creep" 
              className="w-14 h-14 rounded" 
            />  
            <div> 
              <div className="font-medium tex t-sm text-black">Creep</div>
              <div className="text-xs text-[  #666]">Radiohead</div>
            </div>  
          </div>  
                
          {/* Player Controls */} 
          <div className="flex flex-col items -center gap-2 w-1/2">
            <div className="flex items-center  gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-8 h-8 text-black  hover:bg-[#bfbfbf]"
              > 
                <Shuffle className="w-4 h-4"  />
              </Button> 
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-8 h-8 text-black  hover:bg-[#bfbfbf]"
              > 
                <SkipBack className="w-4 h-4"  />
              </Button> 
              <Button 
                size="icon" 
                className="w-10 h-10 rounded- full bg-black hover:bg-[#333]"
              > 
                <Play className="w-5 h-5 text -white fill-white" />
              </Button> 
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-8 h-8 text-black  hover:bg-[#bfbfbf]"
              > 
                <SkipForward className="w-4 h -4" />
              </Button> 
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-8 h-8 text-black  hover:bg-[#bfbfbf]"
              > 
                <Repeat className="w-4 h-4" / >
              </Button> 
            </div>  
            <div className="flex items-center  gap-2 w-full max-w-md">
              <span className="text-xs text-  [#666]">1:59</span>
              <div className="flex-1 bg-[#bf  bfbf] rounded-full h-1">
                <div className="bg-black roun ded-full h-1 w-1/3"></div>
              </div>  
              <span className="text-xs text-  [#666]">3:58</span>
            </div>  
          </div>  
                
          {/* Volume and Options */}  
          <div className="flex items-center g ap-2 w-1/4 justify-end">
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-8 h-8 text-black   hover:bg-[#bfbfbf]"
            > 
              <List className="w-4 h-4" />  
            </Button> 
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-8 h-8 text-black   hover:bg-[#bfbfbf]"
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
          </div>
        </div>
      </div>
    </div>
  );
}
