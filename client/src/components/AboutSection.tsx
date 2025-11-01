import { Award, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const features = [
    { 
      icon: Award, 
      title: "37+ Years Experience", 
      description: "Family-owned and operated since 1987",
      gradient: "from-[#009FC2] to-[#1E73BE]"
    },
    { 
      icon: Clock, 
      title: "Best Prices", 
      description: "Highest quality at competitive rates",
      gradient: "from-[#1E73BE] to-[#0B3C88]"
    },
    { 
      icon: MapPin, 
      title: "Local Service", 
      description: "Serving Brevard & Indian River County",
      gradient: "from-[#0B3C88] to-[#009FC2]"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" data-testid="section-about">
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,159,194,0.05),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(11,60,136,0.05),transparent_50%)]"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#009FC2]/10 px-4 py-2 rounded-full mb-6">
              <span className="text-[#009FC2] text-sm font-semibold tracking-wide uppercase">
                About Us
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0B3C88] mb-6 tracking-tight" data-testid="text-about-title">
              WHY PAY
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009FC2] to-[#1E73BE]">
                MORE?
              </span>
            </h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-[#009FC2] to-transparent rounded-full mx-auto mb-8"></div>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8" data-testid="text-about-description">
              The Waterman is a family-owned business that has been serving Brevard County, Indian River County, Palm Bay, Melbourne, and nearby areas since 1987. We pride ourselves on providing the highest quality water treatment systems at competitive prices, backed by expert service and local support.
            </p>
            
            <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#009FC2] to-[#1E73BE]">
              Call Us Today for All Your Water Needs!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative text-center p-8 lg:p-10 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#009FC2]/30 transition-all duration-300 hover:scale-105 premium-shadow hover:shadow-2xl"
                  data-testid={`feature-${index}`}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-[#0B3C88] group-hover:text-[#009FC2] transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base text-gray-600">
                    {feature.description}
                  </p>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#009FC2]/0 via-transparent to-[#1E73BE]/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#009FC2] to-[#1E73BE] hover:from-[#008AB0] hover:to-[#0B3C88] text-white text-lg px-10 h-14 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
