import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplet, Container, Wind, Filter, Waves, Zap } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Droplet,
      title: "Water Softeners",
      description: "Remove hard water minerals for softer, cleaner water throughout your home."
    },
    {
      icon: Container,
      title: "Pressure Tanks",
      description: "Maintain consistent water pressure and protect your plumbing system."
    },
    {
      icon: Wind,
      title: "Air Induction Oxidizers",
      description: "Remove iron, sulfur, and manganese from your water naturally."
    },
    {
      icon: Filter,
      title: "Reverse Osmosis Systems",
      description: "Ultimate water purification for drinking water at your tap."
    },
    {
      icon: Waves,
      title: "Pool Supplies",
      description: "Complete selection of pool maintenance products and chemicals."
    },
    {
      icon: Zap,
      title: "Chlorine Refills",
      description: "Convenient chlorine refill service for water treatment systems."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background" data-testid="section-services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-services-title">
            OUR WATER TREATMENT <span className="text-accent">SERVICES</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Professional water treatment solutions tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-card border-l-4 border-accent hover-elevate accent-glow-hover transition-all duration-300 overflow-hidden"
                data-testid={`card-service-${index}`}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto border-accent text-accent hover:bg-accent/10"
                    data-testid={`button-learn-more-${index}`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
