import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gamepad2, Trophy, Users, Crown, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Gamepad2 className="w-8 h-8 text-primary animate-glow-pulse" />
              <Crown className="w-4 h-4 text-accent absolute -top-1.5 -left-1.5" />
            </div>
            <h1 className="text-2xl font-bold text-glow-primary">
              گیم<span className="text-accent">زون</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#games" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              بازی‌ها
            </a>
            <a href="#rankings" className="text-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1.5">
              <Trophy className="w-4 h-4" />
              رتبه‌بندی
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              انجمن
            </a>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm">
              ورود
            </Button>
            <Button size="sm" className="bg-gradient-accent border-0 hover:shadow-glow-accent font-medium">
              عضویت
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              <a 
                href="#games" 
                className="text-foreground hover:text-primary transition-colors font-medium text-sm py-2"
                onClick={() => setIsOpen(false)}
              >
                بازی‌ها
              </a>
              <a 
                href="#rankings" 
                className="text-foreground hover:text-primary transition-colors font-medium text-sm py-2 flex items-center gap-1.5"
                onClick={() => setIsOpen(false)}
              >
                <Trophy className="w-4 h-4" />
                رتبه‌بندی
              </a>
              <a 
                href="#community" 
                className="text-foreground hover:text-primary transition-colors font-medium text-sm py-2 flex items-center gap-1.5"
                onClick={() => setIsOpen(false)}
              >
                <Users className="w-4 h-4" />
                انجمن
              </a>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  ورود
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-accent border-0 hover:shadow-glow-accent font-medium">
                  عضویت
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
