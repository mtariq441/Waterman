import { Droplets, Award, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Droplets,
      title: "Quality Systems",
      description: "Top-tier water treatment equipment"
    },
    {
      icon: Award,
      title: "Since 1987",
      description: "Over 35 years of trusted service"
    },
    {
      icon: Users,
      title: "Family Owned",
      description: "Local business you can trust"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted" data-testid="section-about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-about-title">
            Why Pay More? Call Us Today for All Your Water Needs!
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-description">
            The Waterman is a family-owned business that has been serving Brevard County, Indian River County, Palm Bay, Melbourne, and nearby areas since 1987. We pride ourselves on providing the highest quality water treatment systems at competitive prices, backed by expert service and local support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6"
                data-testid={`feature-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
