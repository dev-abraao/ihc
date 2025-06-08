import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home, Search, Bell } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between p-4 bg-[#bfbfbf]">
      <div className="flex items-center gap-3">
        <div className="flex gap-2">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="text-[#1ed760]"
            >
              <circle cx="16" cy="16" r="14" fill="white" opacity="0.1" />
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
        <Link href={"/home"}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#1e1e1e] hover:bg-[#2c2c2c]"
          >
            <Home className="w-5 h-5 text-white" />
          </Button>
        </Link>
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
        <Link href={"/profile"}>
          <Avatar className="w-8 h-8">
            <AvatarImage src="johndoe.png" />
            <AvatarFallback className="bg-blue-500 text-white">
              JD
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}
