import { XCircle, Droplets, Waves, Zap, AlertCircle, Layers } from "lucide-react";

export default function WhatWeRemoveSection() {
  const contaminants = [
    { icon: Droplets, name: "Chlorine", color: "text-green-600" },
    { icon: Zap, name: "Iron Rust", color: "text-orange-600" },
    { icon: Waves, name: "Odor", color: "text-blue-600" },
    { icon: AlertCircle, name: "Stains", color: "text-yellow-600" },
    { icon: Layers, name: "Tannic Acid", color: "text-amber-600" },
    { icon: XCircle, name: "Deposits", color: "text-red-600" }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted" data-testid="section-remove">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-remove-title">
            We Remove
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our advanced water treatment systems eliminate harmful contaminants
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {contaminants.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 rounded-md bg-card hover-elevate transition-all"
                data-testid={`contaminant-${index}`}
              >
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
                  <Icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <span className="text-sm font-medium text-center text-card-foreground">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
