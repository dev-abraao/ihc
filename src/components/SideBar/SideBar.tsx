import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { playlists } from "@/lib/playlists";
import { Plus, ArrowRight, Search } from "lucide-react";

export default function SideBar() {
  return (
    <div className="w-80 bg-[#d9d9d9] p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#666]"
          >
            <rect
              x="2"
              y="18"
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="3"
              y="15"
              width="16"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="4"
              y="12"
              width="14"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="5"
              y="9"
              width="12"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="6"
              y="6"
              width="10"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect x="7" y="3" width="8" height="2" rx="1" fill="currentColor" />
          </svg>
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
                <div className={`w-12 h-12 rounded ${playlist.color}`}></div>
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
  );
}
