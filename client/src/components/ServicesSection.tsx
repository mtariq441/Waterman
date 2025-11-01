import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplet, Container, Wind, Filter, Waves, Zap, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Droplet,
      title: "Water Softeners",
      description: "Remove hard water minerals for softer, cleaner water throughout your home.",
      gradient: "from-[#009FC2] to-[#1E73BE]"
    },
    {
      icon: Container,
      title: "Pressure Tanks",
      description: "Maintain consistent water pressure and protect your plumbing system.",
      gradient: "from-[#1E73BE] to-[#0B3C88]"
    },
    {
      icon: Wind,
      title: "Air Induction Oxidizers",
      description: "Remove iron, sulfur, and manganese from your water naturally.",
      gradient: "from-[#009FC2] to-[#005F9E]"
    },
    {
      icon: Filter,
      title: "Reverse Osmosis Systems",
      description: "Ultimate water purification for drinking water at your tap.",
      gradient: "from-[#1E73BE] to-[#009FC2]"
    },
    {
      icon: Waves,
      title: "Pool Supplies",
      description: "Complete selection of pool maintenance products and chemicals.",
      gradient: "from-[#0B3C88] to-[#1E73BE]"
    },
    {
      icon: Zap,
      title: "Chlorine Refills",
      description: "Convenient chlorine refill service for water treatment systems.",
      gradient: "from-[#005F9E] to-[#009FC2]"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden premium-section-bg" data-testid="section-services">
      <div className="absolute inset-0 watermark-pattern"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#009FC2]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1E73BE]/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#009FC2]/10 px-4 py-2 rounded-full mb-6">
            <span className="text-[#009FC2] text-sm font-semibold tracking-wide uppercase">
              Premium Solutions
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0B3C88] mb-6 tracking-tight" data-testid="text-services-title">
            OUR WATER TREATMENT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009FC2] to-[#1E73BE]">
              SERVICES
            </span>
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-[#009FC2] to-transparent rounded-full mx-auto mb-6"></div>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional water treatment solutions tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative premium-card border-0 hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl hover:scale-105"
                data-testid={`card-service-${index}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative pb-4 pt-8">
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#0B3C88] group-hover:text-[#009FC2] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-6">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button
                    variant="ghost"
                    onClick={scrollToContact}
                    className="group/btn w-full justify-between text-[#009FC2] hover:text-[#008AB0] hover:bg-[#009FC2]/5 font-semibold p-0 h-auto"
                    data-testid={`button-learn-more-${index}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-[#009FC2] hover:bg-[#008AB0] text-white text-lg px-10 h-14 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Get Your Free Water Analysis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
