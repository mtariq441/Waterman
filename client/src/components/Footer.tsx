import logoImage from "@assets/Gemini_Generated_Image_w446baw446baw446_1761917000287.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#005F9E] text-white py-10 sm:py-12 md:py-14 border-t border-white/10" data-testid="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10">
          <div className="flex flex-col items-start">
            <img 
              src={logoImage} 
              alt="The Waterman Logo" 
              className="h-24 sm:h-28 md:h-32 w-auto object-contain mb-4 bg-white rounded-lg p-2"
              data-testid="logo-footer"
            />
            <p className="text-white/80 text-sm sm:text-base">
              Serving Brevard County with quality water treatment systems since 1987.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 sm:mb-5 text-base sm:text-lg text-white">Quick Links</h4>
            <nav className="space-y-2 sm:space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-white/80 hover-elevate px-2 py-1 rounded-md text-sm sm:text-base transition-colors hover:text-white"
                data-testid="footer-link-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-white/80 hover-elevate px-2 py-1 rounded-md text-sm sm:text-base transition-colors hover:text-white"
                data-testid="footer-link-services"
              >
                Water Treatment
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-white/80 hover-elevate px-2 py-1 rounded-md text-sm sm:text-base transition-colors hover:text-white"
                data-testid="footer-link-location"
              >
                Location
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-white/80 hover-elevate px-2 py-1 rounded-md text-sm sm:text-base transition-colors hover:text-white"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h4 className="font-bold mb-4 sm:mb-5 text-base sm:text-lg text-white">Contact</h4>
            <div className="space-y-2 text-sm sm:text-base text-white/80">
              <p>1155 Malabar Rd. NE, Suite 20</p>
              <p>Palm Bay, FL 32907</p>
              <p className="text-[#009FC2] font-semibold">(321) 951-1303</p>
              <p className="break-all">thewaterman321@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 sm:mb-5 text-base sm:text-lg text-white">Hours</h4>
            <div className="space-y-2 text-sm sm:text-base text-white/80">
              <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-sm text-white/80">
          <p>© {currentYear} The Waterman Inc. All rights reserved.</p>
          <div className="mt-3 flex flex-wrap justify-center items-center gap-3">
            <button className="hover-elevate px-2 py-1 rounded-md hover:text-white transition-colors" data-testid="footer-link-terms">
              Terms of Use
            </button>
            <span className="text-white/40">|</span>
            <button className="hover-elevate px-2 py-1 rounded-md hover:text-white transition-colors" data-testid="footer-link-privacy">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
