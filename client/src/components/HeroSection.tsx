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
    <section id="home" className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Clean water treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight" data-testid="text-hero-title">
            WATER SYSTEMS, PRODUCTS & TREATMENT IN PALM BAY, FL
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/95" data-testid="text-hero-subtitle">
            Since 1987, The Waterman has provided the highest quality water treatment systems at the best prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
              data-testid="button-free-analysis"
            >
              Get Free Water Analysis
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 backdrop-blur-sm w-full sm:w-auto"
              data-testid="button-call-now"
            >
              <a href="tel:3219511303" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
