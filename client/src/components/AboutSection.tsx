import { Award, Clock, MapPin } from "lucide-react";

export default function AboutSection() {
  const features = [
    { 
      icon: Award, 
      title: "37+ Years Experience", 
      description: "Family-owned and operated since 1987" 
    },
    { 
      icon: Clock, 
      title: "Best Prices", 
      description: "Highest quality at competitive rates" 
    },
    { 
      icon: MapPin, 
      title: "Local Service", 
      description: "Serving Brevard & Indian River County" 
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background" data-testid="section-about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6" data-testid="text-about-title">
              WHY PAY <span className="text-accent">MORE?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8" data-testid="text-about-description">
              The Waterman is a family-owned business that has been serving Brevard County, Indian River County, Palm Bay, Melbourne, and nearby areas since 1987. We pride ourselves on providing the highest quality water treatment systems at competitive prices, backed by expert service and local support.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-accent font-semibold">
              Call Us Today for All Your Water Needs!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 sm:p-8 rounded-md bg-card border border-border hover-elevate accent-glow-hover transition-all duration-300"
                  data-testid={`feature-${index}`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-accent/10 mb-4 sm:mb-5">
                    <Icon className="h-8 w-8 sm:h-9 sm:w-9 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
