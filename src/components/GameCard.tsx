import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Trophy } from "lucide-react";

interface GameCardProps {
  title: string;
  image: string;
  category: string;
  players: string;
  rank?: number;
  variant?: "primary" | "accent" | "secondary";
}

export const GameCard = ({ title, image, category, players, rank, variant = "primary" }: GameCardProps) => {
  const borderColors = {
    primary: "border-primary/30 hover:border-primary",
    accent: "border-accent/30 hover:border-accent",
    secondary: "border-secondary/30 hover:border-secondary"
  };

  const glowColors = {
    primary: "hover:shadow-glow-primary",
    accent: "hover:shadow-glow-accent",
    secondary: "hover:shadow-[0_0_40px_hsl(271_76%_53%/0.5)]"
  };

  return (
    <Card className={`group relative overflow-hidden bg-card border-2 ${borderColors[variant]} ${glowColors[variant]} transition-all duration-500 hover:-translate-y-2 cursor-pointer`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        {rank && (
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="text-lg font-bold bg-gradient-accent border-0">
              #{rank}
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <Badge variant="outline" className="shrink-0">{category}</Badge>
        </div>
        
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span className="text-sm">{players}</span>
          </div>
          {rank && (
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-accent" />
              <span className="text-sm">برتر</span>
            </div>
          )}
        </div>

        <Button className="w-full bg-gradient-primary border-0 hover:shadow-glow-primary font-semibold text-lg">
          بازی کن
        </Button>
      </div>
    </Card>
  );
};
