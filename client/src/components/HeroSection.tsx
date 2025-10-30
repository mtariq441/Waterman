import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_image_clean_water_dd83177a.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[450px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] xl:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Clean water treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60"></div>
      </div>

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-4xl text-white">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight" data-testid="text-hero-title">
            WATER SYSTEMS, PRODUCTS & TREATMENT IN PALM BAY, FL
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 md:mb-7 lg:mb-8 text-white/95 max-w-2xl" data-testid="text-hero-subtitle">
            Since 1987, The Waterman has provided the highest quality water treatment systems at the best prices.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-3.5 md:gap-4 max-w-xl">
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90 text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-7 lg:px-8 w-full xs:w-auto whitespace-nowrap"
              data-testid="button-free-analysis"
            >
              Get Free Water Analysis
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white/10 text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-7 lg:px-8 backdrop-blur-sm w-full xs:w-auto whitespace-nowrap"
              data-testid="button-call-now"
            >
              <a href="tel:3219511303" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Call Now</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
