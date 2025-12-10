import { Navbar } from "@/components/Navbar";
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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="میدان بازی" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="text-lg px-6 py-2 bg-primary/20 border-primary text-primary hover:bg-primary/30">
              <Sparkles className="w-4 h-4 ml-2 inline" />
              به میدان خوش آمدید
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-black text-glow-primary leading-tight">
              میدان نبرد را
              <span className="block text-transparent bg-clip-text bg-gradient-primary mt-2">
                فتح کن
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
              به میلیون‌ها بازیکن در سراسر جهان بپیوندید. در نبردهای حماسی رقابت کنید، رتبه‌ها را فتح کنید و به افسانه تبدیل شوید.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="text-xl px-10 py-7 bg-gradient-primary border-0 hover:shadow-glow-primary font-bold">
                <Zap className="w-6 h-6 ml-2" />
                شروع بازی
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-10 py-7 font-semibold border-2">
                تماشای تریلر
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/30 backdrop-blur-sm">
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
      <section id="games" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="text-base px-4 py-2 bg-accent/20 border-accent text-accent">
              بازی‌های برگزیده
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black text-glow-primary">
              میدان‌های <span className="text-accent">برتر</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              میدان خود را انتخاب کنید و مهارت‌هایتان را نشان دهید
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <GameCard
              title="حمله سایبری"
              image={gameCard1}
              category="تیراندازی"
              players="۴۵۰ هزار آنلاین"
              rank={1}
              variant="primary"
            />
            <GameCard
              title="بتل رویال ایکس"
              image={gameCard2}
              category="بتل رویال"
              players="۱.۲ میلیون آنلاین"
              rank={2}
              variant="accent"
            />
            <GameCard
              title="جنگ‌های فانتزی"
              image={gameCard3}
              category="موبا"
              players="۸۲۰ هزار آنلاین"
              rank={3}
              variant="secondary"
            />
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 font-semibold">
              مشاهده همه بازی‌ها
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Sword className="w-20 h-20 mx-auto text-primary animate-float" />
            <h2 className="text-5xl md:text-6xl font-black text-glow-primary">
              آماده <span className="text-accent">رقابت</span> هستید؟
            </h2>
            <p className="text-xl text-muted-foreground">
              به انجمن نخبگان گیمینگ بپیوندید و امروز سفر خود به سوی افتخار را آغاز کنید
            </p>
            <Button size="lg" className="text-xl px-12 py-7 bg-gradient-accent border-0 hover:shadow-glow-accent font-bold">
              ساخت حساب رایگان
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              © ۲۰۲۵ گیم‌زون هاب. رقابت را فتح کنید.
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">حریم خصوصی</a>
              <a href="#" className="hover:text-primary transition-colors">قوانین</a>
              <a href="#" className="hover:text-primary transition-colors">پشتیبانی</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
