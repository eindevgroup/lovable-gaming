import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  variant?: "primary" | "accent" | "secondary";
}

export const StatCard = ({ title, value, icon: Icon, trend, variant = "primary" }: StatCardProps) => {
  const gradients = {
    primary: "bg-gradient-primary",
    accent: "bg-gradient-accent",
    secondary: "from-secondary to-secondary/50"
  };

  const iconBg = variant === "secondary" ? "bg-gradient-to-br from-secondary to-secondary/50" : gradients[variant];

  return (
    <Card className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-primary">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <p className="text-muted-foreground text-sm uppercase tracking-wide">{title}</p>
            <p className="text-4xl font-bold text-foreground">{value}</p>
            {trend && (
              <p className="text-primary text-sm font-semibold">{trend}</p>
            )}
          </div>
          
          <div className={`p-4 rounded-xl ${iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
    </Card>
  );
};
