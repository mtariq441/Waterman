import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplet, Gauge, Wind, Filter, Waves, Sparkles } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Droplet,
      title: "Water Softeners",
      description: "Remove hard water minerals for softer, cleaner water throughout your home."
    },
    {
      icon: Gauge,
      title: "Pressure Tanks",
      description: "Maintain consistent water pressure and protect your plumbing system."
    },
    {
      icon: Wind,
      title: "Air Induction Oxidizers",
      description: "Eliminate iron, sulfur, and manganese from your water supply."
    },
    {
      icon: Filter,
      title: "Reverse Osmosis Systems",
      description: "Ultra-pure drinking water by removing up to 99% of contaminants."
    },
    {
      icon: Waves,
      title: "Pool Supplies",
      description: "Complete range of chemicals and equipment for pool maintenance."
    },
    {
      icon: Sparkles,
      title: "Chlorine Refills",
      description: "Convenient and affordable chlorine refill services for your system."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-background" data-testid="section-services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-services-title">
            Our Water Treatment Services Include
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Professional water treatment solutions tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-all"
                data-testid={`card-service-${index}`}
              >
                <CardHeader className="pb-3 sm:pb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-primary/10 flex items-center justify-center mb-2 sm:mb-3">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto"
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
