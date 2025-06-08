import { Button } from "@/components/ui/button";
import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  List,
  Monitor,
  Volume2,
  Maximize2,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#d9d9d9] border-t border-[#bfbfbf] p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 w-1/4">
          <img src="pablohoney.png" alt="Creep" className="w-14 h-14 rounded" />
          <div>
            <div className="font-medium text-sm text-black">Creep</div>
            <div className="text-xs text-[#666]">Radiohead</div>
          </div>
        </div>

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
            <span className="text-xs text-[#666]">3:58</span>
          </div>
        </div>

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
  );
}
