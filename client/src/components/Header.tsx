import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Clock, Search } from "lucide-react";
import logoImage from "@assets/Gemini_Generated_Image_w446baw446baw446_1761915990636.png";

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
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Utility Bar */}
      <div className="bg-[#0B3C88] text-white border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 sm:h-10 text-xs sm:text-sm">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <div className="hidden sm:flex items-center gap-1.5 text-white/90">
                <MapPin className="h-3.5 w-3.5" />
                <span className="hidden md:inline">Palm Bay, FL 32907</span>
                <span className="md:hidden">Palm Bay, FL</span>
              </div>
              <div className="hidden lg:flex items-center gap-1.5 text-white/90">
                <Clock className="h-3.5 w-3.5" />
                <span>Mon-Fri: 8AM-5PM</span>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <a 
                href="tel:3219511303" 
                className="flex items-center gap-1.5 hover:text-[#009FC2] transition-colors"
                data-testid="topbar-phone"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">(321) 951-1303</span>
              </a>
              <a 
                href="mailto:thewaterman321@gmail.com" 
                className="hidden md:flex items-center gap-1.5 hover:text-[#009FC2] transition-colors"
                data-testid="topbar-email"
              >
                <Mail className="h-3.5 w-3.5" />
                <span className="hidden lg:inline">thewaterman321@gmail.com</span>
              </a>
              <div className="hidden sm:flex items-center gap-2 border-l border-white/20 pl-3 md:pl-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className="text-white hover:text-[#009FC2] hover:bg-white/10 h-7 px-2 md:px-3 text-xs font-medium"
                  data-testid="topbar-quote-button"
                >
                  GET A QUOTE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <button 
                onClick={() => scrollToSection("home")}
                className="focus:outline-none focus:ring-2 focus:ring-[#009FC2] rounded-md"
                data-testid="logo-button"
              >
                <img 
                  src={logoImage} 
                  alt="The Waterman Logo" 
                  className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain hover:opacity-90 transition-opacity"
                  data-testid="logo-header"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <button
                onClick={() => scrollToSection("home")}
                className="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-gray-700 hover:text-[#009FC2] hover:bg-gray-50 rounded-md transition-all uppercase tracking-wide"
                data-testid="link-home"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-gray-700 hover:text-[#009FC2] hover:bg-gray-50 rounded-md transition-all uppercase tracking-wide"
                data-testid="link-services"
              >
                WATER TREATMENT
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-gray-700 hover:text-[#009FC2] hover:bg-gray-50 rounded-md transition-all uppercase tracking-wide"
                data-testid="link-about"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-gray-700 hover:text-[#009FC2] hover:bg-gray-50 rounded-md transition-all uppercase tracking-wide"
                data-testid="link-location"
              >
                LOCATION
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-gray-700 hover:text-[#009FC2] hover:bg-gray-50 rounded-md transition-all uppercase tracking-wide"
                data-testid="link-contact"
              >
                CONTACT
              </button>
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <button 
                className="p-2 text-gray-600 hover:text-[#009FC2] hover:bg-gray-50 rounded-md transition-colors"
                data-testid="search-button"
              >
                <Search className="h-5 w-5" />
              </button>
              <Button
                variant="default"
                size="default"
                onClick={() => scrollToSection("contact")}
                className="bg-[#009FC2] text-white hover:bg-[#008AB0] text-sm xl:text-base font-semibold px-4 xl:px-6 h-10 xl:h-11 shadow-md hover:shadow-lg transition-all"
                data-testid="button-call-cta"
              >
                FREE ANALYSIS
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button 
                className="p-2 text-gray-600 hover:text-[#009FC2] hover:bg-gray-50 rounded-md transition-colors"
                data-testid="mobile-search-button"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                className="p-2 text-gray-700 hover:text-[#009FC2] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                data-testid="button-menu-toggle"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 space-y-1 border-t border-gray-200 pt-4" data-testid="mobile-menu">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#009FC2] hover:bg-gray-50 rounded-md transition-colors uppercase tracking-wide"
                data-testid="mobile-link-home"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#009FC2] hover:bg-gray-50 rounded-md transition-colors uppercase tracking-wide"
                data-testid="mobile-link-services"
              >
                WATER TREATMENT
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#009FC2] hover:bg-gray-50 rounded-md transition-colors uppercase tracking-wide"
                data-testid="mobile-link-about"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#009FC2] hover:bg-gray-50 rounded-md transition-colors uppercase tracking-wide"
                data-testid="mobile-link-location"
              >
                LOCATION
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#009FC2] hover:bg-gray-50 rounded-md transition-colors uppercase tracking-wide"
                data-testid="mobile-link-contact"
              >
                CONTACT
              </button>
              <div className="pt-3 mt-3 border-t border-gray-200">
                <Button
                  variant="default"
                  size="default"
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-[#009FC2] text-white hover:bg-[#008AB0] font-semibold shadow-md"
                  data-testid="button-call-cta-mobile"
                >
                  GET FREE WATER ANALYSIS
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
