import { Button } from "@/components/ui/button";
import { Phone, Award, Clock, Shield } from "lucide-react";
import heroImage from "@assets/stock_images/clean_water_pouring__b6e74cda.jpg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Clean water treatment"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C88]/95 via-[#005F9E]/90 to-[#009FC2]/85"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,159,194,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <Award className="h-4 w-4 text-[#009FC2]" />
                <span className="text-white text-sm font-medium tracking-wide">
                  Trusted Since 1987 • Palm Bay, Florida
                </span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-white tracking-tight">
                  WATER SYSTEMS,
                  <br />
                  PRODUCTS &
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009FC2] to-[#1E73BE]">
                    TREATMENT
                  </span>
                </h1>
                
                <div className="h-1 w-24 bg-gradient-to-r from-[#009FC2] to-transparent rounded-full"></div>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed font-light">
                Experience unmatched quality in water treatment solutions. Serving Brevard County with excellence for over three decades.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="group bg-[#009FC2] hover:bg-[#008AB0] text-white text-base lg:text-lg px-8 lg:px-10 h-14 lg:h-16 rounded-full font-semibold shadow-2xl hover:shadow-[#009FC2]/50 transition-all duration-300 hover:scale-105"
                  data-testid="button-free-analysis"
                >
                  Get Free Water Analysis
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 text-base lg:text-lg px-8 lg:px-10 h-14 lg:h-16 rounded-full font-semibold transition-all duration-300"
                  data-testid="button-call-now"
                >
                  <a href="tel:3219511303" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>(321) 951-1303</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 grid gap-4">
              <div className="premium-glass rounded-3xl p-6 lg:p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#009FC2] to-[#1E73BE] p-3 rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                    <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg lg:text-xl mb-2">37+ Years</h3>
                    <p className="text-white/90 text-sm lg:text-base">Of trusted service in Brevard County</p>
                  </div>
                </div>
              </div>

              <div className="premium-glass rounded-3xl p-6 lg:p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#1E73BE] to-[#0B3C88] p-3 rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                    <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg lg:text-xl mb-2">Best Prices</h3>
                    <p className="text-white/90 text-sm lg:text-base">Why pay more for quality?</p>
                  </div>
                </div>
              </div>

              <div className="premium-glass rounded-3xl p-6 lg:p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#0B3C88] to-[#009FC2] p-3 rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                    <Award className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg lg:text-xl mb-2">Certified</h3>
                    <p className="text-white/90 text-sm lg:text-base">BBB Accredited since 2002</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
