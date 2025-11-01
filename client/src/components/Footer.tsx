import logoImage from "@assets/The Water Man 6-1@500x_1762018047364.png";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0B3C88] via-[#005F9E] to-[#009FC2] text-white overflow-hidden" data-testid="footer">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,159,194,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,115,190,0.2),transparent_50%)]"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="flex flex-col items-start lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 mb-6 shadow-2xl">
              <img 
                src={logoImage} 
                alt="The Waterman Logo" 
                className="h-32 w-auto object-contain"
                data-testid="logo-footer"
              />
            </div>
            <p className="text-white/90 text-base leading-relaxed mb-6">
              Serving Brevard County with quality water treatment systems since 1987.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 text-white font-semibold hover:text-[#009FC2] transition-colors"
            >
              Get Free Analysis
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-white flex items-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-[#009FC2] to-transparent rounded-full"></div>
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "Services", id: "services" },
                { label: "About", id: "about" },
                { label: "Contact", id: "contact" }
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base"
                  data-testid={`footer-link-${link.id}`}
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#009FC2] transition-all duration-300"></span>
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-white flex items-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-[#009FC2] to-transparent rounded-full"></div>
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#009FC2]" />
                </div>
                <div className="text-white/90 text-sm">
                  <p>1155 Malabar Rd. NE, Suite 20</p>
                  <p>Palm Bay, FL 32907</p>
                </div>
              </div>
              
              <a
                href="tel:3219511303"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#009FC2] transition-colors">
                  <Phone className="h-5 w-5 text-[#009FC2] group-hover:text-white" />
                </div>
                <span className="text-white font-semibold group-hover:text-[#009FC2] transition-colors">
                  (321) 951-1303
                </span>
              </a>
              
              <a
                href="mailto:thewaterman321@gmail.com"
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#009FC2] transition-colors flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#009FC2] group-hover:text-white" />
                </div>
                <span className="text-white/90 text-sm break-all group-hover:text-white transition-colors">
                  thewaterman321@gmail.com
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-white flex items-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-[#009FC2] to-transparent rounded-full"></div>
              Business Hours
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#009FC2]" />
                </div>
                <div className="text-white/90 text-sm space-y-1">
                  <p className="flex justify-between gap-4">
                    <span>Mon - Fri:</span>
                    <span className="font-semibold text-white">8AM - 5PM</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Saturday:</span>
                    <span className="font-semibold text-white">9AM - 2PM</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Sunday:</span>
                    <span className="font-semibold text-white">Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © {currentYear} The Waterman Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <button 
                className="text-white/80 hover:text-white text-sm transition-colors" 
                data-testid="footer-link-terms"
              >
                Terms of Use
              </button>
              <span className="text-white/40">•</span>
              <button 
                className="text-white/80 hover:text-white text-sm transition-colors" 
                data-testid="footer-link-privacy"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
