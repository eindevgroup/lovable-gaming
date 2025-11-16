import { Button } from "@/components/ui/button";
import { Gamepad2, Trophy, Users, Crown } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Gamepad2 className="w-10 h-10 text-primary animate-glow-pulse" />
              <Crown className="w-5 h-5 text-accent absolute -top-2 -right-2" />
            </div>
            <h1 className="text-3xl font-bold text-glow-primary">
              Game<span className="text-accent">Zone</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#games" className="text-foreground hover:text-primary transition-colors font-semibold">
              Games
            </a>
            <a href="#rankings" className="text-foreground hover:text-primary transition-colors font-semibold flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Rankings
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors font-semibold flex items-center gap-2">
              <Users className="w-4 h-4" />
              Community
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-gradient-accent border-0 hover:shadow-glow-accent font-semibold">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
