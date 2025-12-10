import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gamepad2, Trophy, Users, Crown, Menu, X, Mail } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border" role="navigation" aria-label="منوی اصلی">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2" aria-label="صفحه اصلی گیم‌زون">
            <div className="relative">
              <Gamepad2 className="w-8 h-8 text-primary animate-glow-pulse" aria-hidden="true" />
              <Crown className="w-4 h-4 text-accent absolute -top-1.5 -left-1.5" aria-hidden="true" />
            </div>
            <span className="text-2xl font-bold text-glow-primary">
              گیم<span className="text-accent">زون</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6" role="menubar">
            <li role="none">
              <a href="/#games" role="menuitem" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
                بازی‌ها
              </a>
            </li>
            <li role="none">
              <a href="#rankings" role="menuitem" className="text-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1.5">
                <Trophy className="w-4 h-4" aria-hidden="true" />
                رتبه‌بندی
              </a>
            </li>
            <li role="none">
              <a href="#community" role="menuitem" className="text-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1.5">
                <Users className="w-4 h-4" aria-hidden="true" />
                انجمن
              </a>
            </li>
            <li role="none">
              <Link to="/contact" role="menuitem" className="text-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1.5">
                <Mail className="w-4 h-4" aria-hidden="true" />
                تماس با ما
              </Link>
            </li>
          </ul>

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
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-border animate-fade-in" role="menu">
            <ul className="flex flex-col gap-3">
              <li role="none">
                <a 
                  href="/#games" 
                  role="menuitem"
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm py-2 block"
                  onClick={() => setIsOpen(false)}
                >
                  بازی‌ها
                </a>
              </li>
              <li role="none">
                <a 
                  href="#rankings" 
                  role="menuitem"
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm py-2 flex items-center gap-1.5"
                  onClick={() => setIsOpen(false)}
                >
                  <Trophy className="w-4 h-4" aria-hidden="true" />
                  رتبه‌بندی
                </a>
              </li>
              <li role="none">
                <a 
                  href="#community" 
                  role="menuitem"
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm py-2 flex items-center gap-1.5"
                  onClick={() => setIsOpen(false)}
                >
                  <Users className="w-4 h-4" aria-hidden="true" />
                  انجمن
                </a>
              </li>
              <li role="none">
                <Link 
                  to="/contact" 
                  role="menuitem"
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm py-2 flex items-center gap-1.5"
                  onClick={() => setIsOpen(false)}
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  تماس با ما
                </Link>
              </li>
              <li className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  ورود
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-accent border-0 hover:shadow-glow-accent font-medium">
                  عضویت
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
