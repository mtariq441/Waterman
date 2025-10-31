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
    <section id="home" className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] xl:min-h-[750px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Clean water treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70"></div>
      </div>

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-5xl">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-accent text-sm sm:text-base font-semibold tracking-wider uppercase">
              Est. 1987 • Palm Bay, Florida
            </span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight text-foreground">
            WATER SYSTEMS,<br />
            PRODUCTS &<br />
            <span className="text-accent">TREATMENT</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-7 md:mb-8 lg:mb-10 text-muted-foreground max-w-3xl font-normal">
            Since 1987, The Waterman has provided the highest quality water treatment systems at the best prices. Serving Brevard County with excellence.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-4 max-w-2xl">
            <Button
              size="lg"
              variant="default"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base md:text-lg px-6 sm:px-7 md:px-8 lg:px-10 h-12 sm:h-13 md:h-14 w-full xs:w-auto whitespace-nowrap font-semibold"
              data-testid="button-free-analysis"
            >
              Get Free Water Analysis
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-accent text-accent hover:bg-accent/10 text-sm sm:text-base md:text-lg px-6 sm:px-7 md:px-8 lg:px-10 h-12 sm:h-13 md:h-14 w-full xs:w-auto whitespace-nowrap font-semibold"
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
