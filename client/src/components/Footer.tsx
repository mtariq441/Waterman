export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[hsl(204,100%,31%)] text-white py-8 sm:py-12" data-testid="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">The Waterman</h3>
            <p className="text-white/90 text-sm">
              Serving Brevard County with quality water treatment systems since 1987.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-base">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-white/90 hover-elevate px-2 py-1 rounded-md text-sm transition-colors"
                data-testid="footer-link-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-white/90 hover-elevate px-2 py-1 rounded-md text-sm transition-colors"
                data-testid="footer-link-services"
              >
                Water Treatment
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-white/90 hover-elevate px-2 py-1 rounded-md text-sm transition-colors"
                data-testid="footer-link-location"
              >
                Location
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-white/90 hover-elevate px-2 py-1 rounded-md text-sm transition-colors"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-base">Contact</h4>
            <div className="space-y-1 sm:space-y-2 text-sm text-white/90">
              <p>1155 Malabar Rd. NE, Suite 20</p>
              <p>Palm Bay, FL 32907</p>
              <p>Phone: (321) 951-1303</p>
              <p className="break-all">Email: thewaterman321@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-base">Hours</h4>
            <div className="space-y-1 text-sm text-white/90">
              <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-sm text-white/80">
          <p>© {currentYear} The Waterman Inc. All rights reserved.</p>
          <div className="mt-2 flex flex-wrap justify-center items-center gap-2">
            <button className="hover-elevate px-2 py-1 rounded-md" data-testid="footer-link-terms">
              Terms of Use
            </button>
            <span>|</span>
            <button className="hover-elevate px-2 py-1 rounded-md" data-testid="footer-link-privacy">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
