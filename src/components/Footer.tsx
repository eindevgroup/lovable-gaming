import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-glow-primary">
              گیم<span className="text-accent">زون</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              پلتفرم برتر گیمینگ ایران. با ما بازی کنید و رقابت را فتح کنید.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold">لینک‌های سریع</h4>
            <nav aria-label="لینک‌های فوتر">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">صفحه اصلی</Link>
                </li>
                <li>
                  <a href="/#games" className="hover:text-primary transition-colors">بازی‌ها</a>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition-colors">تماس با ما</Link>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-primary transition-colors">حریم خصوصی</a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-primary transition-colors">قوانین</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-3">
            <h4 className="font-semibold">ارتباط با ما</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/in/ehsanghaffar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/30 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="لینکدین"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/ehsanghaffar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/30 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="گیت‌هاب"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:ghafari.5000@gmail.com"
                className="p-2 rounded-lg bg-muted/30 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="ایمیل"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://eindev.ir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/30 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="وب‌سایت"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              ghafari.5000@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © ۲۰۲۵ گیم‌زون هاب. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};
