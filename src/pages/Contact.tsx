import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Globe, 
  Linkedin, 
  Github, 
  Send, 
  MapPin, 
  MessageSquare,
  User,
  AtSign
} from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "نام باید حداقل ۲ حرف باشد").max(100, "نام نباید بیشتر از ۱۰۰ حرف باشد"),
  email: z.string().trim().email("ایمیل معتبر نیست").max(255, "ایمیل نباید بیشتر از ۲۵۵ حرف باشد"),
  subject: z.string().trim().min(3, "موضوع باید حداقل ۳ حرف باشد").max(200, "موضوع نباید بیشتر از ۲۰۰ حرف باشد"),
  message: z.string().trim().min(10, "پیام باید حداقل ۱۰ حرف باشد").max(2000, "پیام نباید بیشتر از ۲۰۰۰ حرف باشد"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "ایمیل",
    value: "ghafari.5000@gmail.com",
    href: "mailto:ghafari.5000@gmail.com",
  },
  {
    icon: Globe,
    label: "وب‌سایت",
    value: "eindev.ir",
    href: "https://eindev.ir",
  },
  {
    icon: Linkedin,
    label: "لینکدین",
    value: "ehsanghaffar",
    href: "https://www.linkedin.com/in/ehsanghaffar",
  },
  {
    icon: Github,
    label: "گیت‌هاب",
    value: "ehsanghaffar",
    href: "https://github.com/ehsanghaffar",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "پیام شما ارسال شد",
      description: "به زودی با شما تماس خواهیم گرفت.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      {/* Hero Section */}
      <header className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center space-y-4 animate-fade-in">
            <Badge className="text-sm px-4 py-1.5 bg-primary/20 border-primary text-primary">
              <MessageSquare className="w-3 h-3 ml-1.5 inline" />
              ارتباط با ما
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-glow-primary">
              با ما در <span className="text-accent">تماس</span> باشید
            </h1>
            <p className="text-base text-muted-foreground">
              سوالی دارید؟ پیشنهادی دارید؟ ما مشتاق شنیدن نظرات شما هستیم.
            </p>
          </div>
        </div>
      </header>

      <main className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Contact Form */}
            <Card className="p-6 bg-card border-border">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                ارسال پیام
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-1.5">
                    <User className="w-4 h-4 text-muted-foreground" />
                    نام و نام خانوادگی
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="نام شما"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center gap-1.5">
                    <AtSign className="w-4 h-4 text-muted-foreground" />
                    ایمیل
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    موضوع
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="موضوع پیام"
                    className={errors.subject ? "border-destructive" : ""}
                  />
                  {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    پیام
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="پیام خود را بنویسید..."
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary border-0 hover:shadow-glow-primary font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "در حال ارسال..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 ml-2" />
                      ارسال پیام
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  اطلاعات تماس
                </h2>
                
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-gradient-primary">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-bold mb-3">ساعات پاسخگویی</h3>
                <p className="text-muted-foreground text-sm">
                  شنبه تا پنج‌شنبه: ۹ صبح تا ۶ عصر
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  پاسخگویی ایمیل: حداکثر ۲۴ ساعت
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-4">
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
            <p className="text-muted-foreground text-sm">
              © ۲۰۲۵ گیم‌زون هاب. تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
