export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[hsl(220,40%,3%)] text-foreground py-10 sm:py-12 md:py-14 border-t border-accent/20" data-testid="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
              The <span className="text-accent">Waterman</span>
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Serving Brevard County with quality water treatment systems since 1987.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 sm:mb-5 text-base sm:text-lg text-foreground">Quick Links</h4>
            <nav className="space-y-2 sm:space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-muted-foreground hover-elevate px-2 py-1 rounded-md text-sm sm:text-base transition-colors hover:text-foreground"
                data-testid="footer-link-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-muted-foreground hover-elevate px-2 py-1 rounded-md text-sm sm:text-base transition-colors hover:text-foreground"
                data-testid="footer-link-services"
              >
                Water Treatment
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-muted-foreground hover-elevate px-2 py-1 rounded-md text-sm sm:text-base transition-colors hover:text-foreground"
                data-testid="footer-link-location"
              >
                Location
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-muted-foreground hover-elevate px-2 py-1 rounded-md text-sm sm:text-base transition-colors hover:text-foreground"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h4 className="font-bold mb-4 sm:mb-5 text-base sm:text-lg text-foreground">Contact</h4>
            <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <p>1155 Malabar Rd. NE, Suite 20</p>
              <p>Palm Bay, FL 32907</p>
              <p className="text-accent font-semibold">(321) 951-1303</p>
              <p className="break-all">thewaterman321@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 sm:mb-5 text-base sm:text-lg text-foreground">Hours</h4>
            <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-6 sm:pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} The Waterman Inc. All rights reserved.</p>
          <div className="mt-3 flex flex-wrap justify-center items-center gap-3">
            <button className="hover-elevate px-2 py-1 rounded-md hover:text-foreground transition-colors" data-testid="footer-link-terms">
              Terms of Use
            </button>
            <span className="text-border">|</span>
            <button className="hover-elevate px-2 py-1 rounded-md hover:text-foreground transition-colors" data-testid="footer-link-privacy">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
