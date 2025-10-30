import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-md">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">The Waterman</div>
          </div>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="hover-elevate px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
              data-testid="link-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover-elevate px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
              data-testid="link-services"
            >
              Water Treatment
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover-elevate px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
              data-testid="link-location"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover-elevate px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-shrink-0">
            <div className="hidden xl:flex items-center gap-3 text-sm">
              <a href="tel:3219511303" className="flex items-center gap-1.5 hover-elevate px-2 py-1 rounded-md whitespace-nowrap" data-testid="link-phone">
                <Phone className="h-3.5 w-3.5" />
                <span>(321) 951-1303</span>
              </a>
              <a href="mailto:thewaterman321@gmail.com" className="flex items-center gap-1.5 hover-elevate px-2 py-1 rounded-md whitespace-nowrap" data-testid="link-email">
                <Mail className="h-3.5 w-3.5" />
                <span>thewaterman321@gmail.com</span>
              </a>
            </div>
            <Button
              variant="secondary"
              onClick={() => scrollToSection("contact")}
              className="bg-white text-primary hover:bg-white/90 text-sm whitespace-nowrap"
              data-testid="button-call-cta"
            >
              Call Us Today!
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a href="tel:3219511303" className="hidden sm:flex items-center hover-elevate p-2 rounded-md" data-testid="link-phone-mobile">
              <Phone className="h-5 w-5" />
            </a>
            <button
              className="p-2 hover-elevate rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2" data-testid="mobile-menu">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover-elevate"
              data-testid="mobile-link-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover-elevate"
              data-testid="mobile-link-services"
            >
              Water Treatment
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover-elevate"
              data-testid="mobile-link-location"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover-elevate"
              data-testid="mobile-link-contact"
            >
              Contact
            </button>
            <div className="pt-2 space-y-2 border-t border-primary-foreground/20">
              <a href="tel:3219511303" className="flex items-center gap-2 px-3 py-2 text-sm hover-elevate rounded-md" data-testid="mobile-link-phone">
                <Phone className="h-4 w-4" />
                <span>(321) 951-1303</span>
              </a>
              <a href="mailto:thewaterman321@gmail.com" className="flex items-center gap-2 px-3 py-2 text-sm hover-elevate rounded-md break-all" data-testid="mobile-link-email">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>thewaterman321@gmail.com</span>
              </a>
              <Button
                variant="secondary"
                onClick={() => scrollToSection("contact")}
                className="w-full bg-white text-primary hover:bg-white/90"
                data-testid="button-call-cta-mobile"
              >
                Call Us Today!
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
