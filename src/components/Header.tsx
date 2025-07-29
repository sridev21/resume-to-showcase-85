import { Button } from "@/components/ui/button";
import { Menu, Download, Github, Linkedin, Mail, Phone, Globe } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "mailto:sivarajr2904@gmail.com", icon: Mail, label: "Email" },
    { href: "https://linkedin.com/in/sivaraj-r29", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/R-SIVARAJ/", icon: Github, label: "GitHub" },
    { href: "tel:+918838707115", icon: Phone, label: "Phone" },
  ];

  return (
    <header className="fixed top-0 w-full bg-card/80 backdrop-blur-lg border-b border-border z-50 transition-smooth">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Sivaraj R
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Button
                  key={href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:bg-primary/10"
                >
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
            <Button size="sm" className="bg-gradient-hero hover:shadow-elegant">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <Button
                    key={href}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:bg-primary/10"
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <Button size="sm" className="bg-gradient-hero hover:shadow-elegant">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;