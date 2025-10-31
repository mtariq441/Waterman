import { Award, Users, MapPin, ThumbsUp } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Award,
      number: "37+",
      label: "Years in Business",
      description: "Serving since 1987"
    },
    {
      icon: Users,
      number: "500+",
      label: "Customers Served",
      description: "Trusted by hundreds"
    },
    {
      icon: MapPin,
      number: "5+",
      label: "Counties Covered",
      description: "Brevard & Indian River"
    },
    {
      icon: ThumbsUp,
      number: "99%",
      label: "Satisfaction Rate",
      description: "Quality guaranteed"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30" data-testid="section-stats">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-accent/10 mb-3 sm:mb-4">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-accent" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
