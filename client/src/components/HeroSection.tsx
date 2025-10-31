import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@assets/stock_images/clean_water_pouring__b6e74cda.jpg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] xl:min-h-[750px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Clean water treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60"></div>
      </div>

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto lg:mx-0">
          <div className="inline-block mb-3 sm:mb-4 md:mb-5">
            <span className="text-accent text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase">
              Est. 1987 • Palm Bay, Florida
            </span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-[#0B3C88]">
            WATER SYSTEMS,<br />
            PRODUCTS &<br />
            <span className="text-accent">TREATMENT</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-5 sm:mb-6 md:mb-7 lg:mb-8 text-[#333333] max-w-2xl lg:max-w-3xl font-normal leading-relaxed">
            Since 1987, The Waterman has provided the highest quality water treatment systems at the best prices. Serving Brevard County with excellence.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 max-w-full sm:max-w-2xl">
            <Button
              size="lg"
              variant="default"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 h-10 sm:h-11 md:h-12 lg:h-14 w-full xs:w-auto whitespace-nowrap font-semibold shadow-lg hover:shadow-xl transition-all"
              data-testid="button-free-analysis"
            >
              Get Free Water Analysis
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-accent text-accent hover:bg-accent/10 text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 h-10 sm:h-11 md:h-12 lg:h-14 w-full xs:w-auto whitespace-nowrap font-semibold shadow-lg hover:shadow-xl transition-all"
              data-testid="button-call-now"
            >
              <a href="tel:3219511303" className="flex items-center justify-center gap-2">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span>Call Now</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
