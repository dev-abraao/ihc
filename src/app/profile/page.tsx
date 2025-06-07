"use client";

import TopBar from "@/components/Header/TopBar";
import SideBar from "@/components/SideBar/SideBar";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { tracks } from "@/lib/mostplayed";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, MoreHorizontal, Play } from "lucide-react";

export default function Profile() {
  const artists = [
    { name: "Radiohead", image: "pablohoney.png" },
    { name: "Linkin park", image: "linkinpark.png" },
    { name: "Metallica", image: "metallica.png" },
    { name: "Luiz Gonzaga", image: "forro.png" },
    { name: "Helloween", image: "helloween.png" },
    { name: "Kendrick Lamar", image: "gnx.png" },
    { name: "Steely Dan", image: "steelydan.png" },
  ];

  return (
    <div className="h-screen bg-[#bfbfbf] text-black flex flex-col">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        <div className="flex-1 bg-[#f5f5f5] overflow-auto">
          <div className="p-6">
            <div className="flex justify-between">
              <div className="flex items-center gap-6 mb-8">
                <Avatar className="w-48 h-48">
                  <AvatarImage src="johndoe.png" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-400 to-yellow-400 text-2xl text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-5xl font-bold mb-2 text-black">
                    John Doe
                  </h1>
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

              <div className="grid grid-cols-2 gap-6 mb-8 text-center">
                <div>
                  <h2 className="text-xl font-bold mb-4 text-black">
                    Playlist em destaque
                  </h2>
                  <Card className="bg-white border border-[#e0e0e0] shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src="forro.png"
                          alt="Forró"
                          className="w-20 h-20 rounded"
                        />
                        <div>
                          <h3 className="font-bold text-lg text-black">
                            Forró
                          </h3>
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
                          src="metallica.png"
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
              <div></div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-black">
                Artistas mais tocados este mês
              </h2>
              <div className="grid grid-cols-7 gap-4">
                {artists.map((artist, index) => (
                  <div key={index} className="text-center">
                    <div className="relative group cursor-pointer">
                      <img
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        className="w-full aspect-square rounded-full object-cover mb-3"
                      />
                      <Button
                        size="icon"
                        className="absolute bottom-2 right-2 rounded-full bg-[#1ed760] hover:bg-[#1ed760]/80 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Play className="w-4 h-4 text-black fill-black" />
                      </Button>
                    </div>
                    <p className="font-medium text-sm text-black">
                      {artist.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">
                Músicas mais tocadas este mês
              </h2>
              <div className="space-y-2">
                {tracks.map((track, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-2 rounded hover:bg-[#e0e0e0] group cursor-pointer"
                  >
                    <div className="w-10 h-10 relative">
                      <img
                        src={track.image || "/placeholder.svg"}
                        alt={track.title}
                        className="w-full h-full rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate text-black">
                        {track.title}
                      </div>
                      <div className="text-xs text-[#666] truncate">
                        {track.artist}
                      </div>
                    </div>
                    <div className="text-xs text-[#666] hidden md:block">
                      {track.album}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 opacity-0 group-hover:opacity-100 text-black"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <span className="text-xs text-[#666] w-12 text-right">
                        {track.duration}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 opacity-0 group-hover:opacity-100 text-black"
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
      <Footer />
    </div>
  );
}
