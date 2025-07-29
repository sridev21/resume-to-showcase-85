import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github, Phone, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "mailto:sivarajr2904@gmail.com", icon: Mail, label: "Email" },
    { href: "https://linkedin.com/in/sivaraj-r29", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/R-SIVARAJ/", icon: Github, label: "GitHub" },
    { href: "tel:+918838707115", icon: Phone, label: "Phone" },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
              Sivaraj R
            </h3>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Passionate Frontend Developer focused on creating clean, responsive, and user-centric web applications. 
              Let's build something amazing together!
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Button
                  key={href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:bg-background/10 text-background hover:text-primary-glow transition-smooth"
                >
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-primary-glow transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-background/80">
                <span className="font-medium">Email:</span><br />
                <a href="mailto:sivarajr2904@gmail.com" className="hover:text-primary-glow transition-smooth">
                  sivarajr2904@gmail.com
                </a>
              </p>
              <p className="text-background/80">
                <span className="font-medium">Phone:</span><br />
                <a href="tel:+918838707115" className="hover:text-primary-glow transition-smooth">
                  +91 88387 07115
                </a>
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-background/80">
            <span>© {currentYear} Sivaraj R. Made with</span>
           
            <span>and modern web technologies</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-background/10 text-background hover:text-primary-glow transition-smooth"
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Back to Top
          </Button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-background rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-background rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-background rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
