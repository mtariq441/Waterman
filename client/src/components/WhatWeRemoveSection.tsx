import { Droplets, Flame, Wind, Stethoscope, Beaker, XCircle } from "lucide-react";

export default function WhatWeRemoveSection() {
  const contaminants = [
    { icon: Droplets, name: "Chlorine", color: "text-[#009FC2]" },
    { icon: Flame, name: "Iron Rust", color: "text-[#1E73BE]" },
    { icon: Wind, name: "Odor", color: "text-[#0B3C88]" },
    { icon: Stethoscope, name: "Stains", color: "text-[#009FC2]" },
    { icon: Beaker, name: "Tannic Acid", color: "text-[#1E73BE]" },
    { icon: XCircle, name: "Deposits", color: "text-[#0B3C88]" }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30" data-testid="section-remove">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-remove-title">
            WHAT WE <span className="text-accent">REMOVE</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Our advanced water treatment systems eliminate harmful contaminants
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {contaminants.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-4 sm:p-5 md:p-6 rounded-md bg-card border border-border hover-elevate accent-glow-hover transition-all duration-300"
                data-testid={`contaminant-${index}`}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-background flex items-center justify-center">
                  <Icon className={`h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 ${item.color}`} />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-semibold text-center text-foreground">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
