import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GameCard } from "@/components/GameCard";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, Trophy, Target, Sword, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";
import gameCard1 from "@/assets/game-card-1.jpg";
import gameCard2 from "@/assets/game-card-2.jpg";
import gameCard3 from "@/assets/game-card-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="میدان بازی گیم‌زون - پلتفرم گیمینگ آنلاین" 
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="text-sm px-4 py-1.5 bg-primary/20 border-primary text-primary hover:bg-primary/30">
              <Sparkles className="w-3 h-3 ml-1.5 inline" />
              به میدان خوش آمدید
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow-primary leading-tight">
              میدان نبرد را
              <span className="block text-transparent bg-clip-text bg-gradient-primary mt-1">
                فتح کن
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              به میلیون‌ها بازیکن در سراسر جهان بپیوندید. در نبردهای حماسی رقابت کنید و به افسانه تبدیل شوید.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
              <Button size="default" className="text-base px-6 py-5 bg-gradient-primary border-0 hover:shadow-glow-primary font-semibold">
                <Zap className="w-5 h-5 ml-2" />
                شروع بازی
              </Button>
              <Button size="default" variant="outline" className="text-base px-6 py-5 font-medium border">
                تماشای تریلر
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/30 backdrop-blur-sm" aria-label="آمار پلتفرم">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              title="بازیکنان فعال"
              value="+۲.۵ میلیون"
              icon={Users}
              trend="+۱۵٪ این ماه"
              variant="primary"
            />
            <StatCard
              title="مسابقات روزانه"
              value="+۱۰ میلیون"
              icon={Target}
              trend="+۲۵٪ این هفته"
              variant="accent"
            />
            <StatCard
              title="جایزه کل"
              value="+۵ میلیون دلار"
              icon={Trophy}
              trend="در حال افزایش"
              variant="secondary"
            />
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <main id="games" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge className="text-sm px-3 py-1 bg-accent/20 border-accent text-accent">
              بازی‌های برگزیده
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-glow-primary">
              میدان‌های <span className="text-accent">برتر</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-lg mx-auto">
              میدان خود را انتخاب کنید و مهارت‌هایتان را نشان دهید
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <article>
              <GameCard
                title="حمله سایبری"
                image={gameCard1}
                category="تیراندازی"
                players="۴۵۰ هزار آنلاین"
                rank={1}
                variant="primary"
              />
            </article>
            <article>
              <GameCard
                title="بتل رویال ایکس"
                image={gameCard2}
                category="بتل رویال"
                players="۱.۲ میلیون آنلاین"
                rank={2}
                variant="accent"
              />
            </article>
            <article>
              <GameCard
                title="جنگ‌های فانتزی"
                image={gameCard3}
                category="موبا"
                players="۸۲۰ هزار آنلاین"
                rank={3}
                variant="secondary"
              />
            </article>
          </div>

          <div className="text-center">
            <Button size="default" variant="outline" className="text-base px-6 py-5 border font-medium">
              مشاهده همه بازی‌ها
            </Button>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden" aria-label="عضویت در پلتفرم">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <Sword className="w-14 h-14 mx-auto text-primary animate-float" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-bold text-glow-primary">
              آماده <span className="text-accent">رقابت</span> هستید؟
            </h2>
            <p className="text-base text-muted-foreground">
              به انجمن نخبگان گیمینگ بپیوندید و امروز سفر خود به سوی افتخار را آغاز کنید
            </p>
            <Button size="default" className="text-base px-8 py-5 bg-gradient-accent border-0 hover:shadow-glow-accent font-semibold">
              ساخت حساب رایگان
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
