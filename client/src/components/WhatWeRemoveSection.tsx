import { Droplets, Flame, Wind, Stethoscope, Beaker, XCircle } from "lucide-react";

export default function WhatWeRemoveSection() {
  const contaminants = [
    { 
      icon: Droplets, 
      name: "Chlorine", 
      gradient: "from-[#009FC2] to-[#1E73BE]",
      bgColor: "bg-[#009FC2]/10"
    },
    { 
      icon: Flame, 
      name: "Iron Rust", 
      gradient: "from-[#1E73BE] to-[#0B3C88]",
      bgColor: "bg-[#1E73BE]/10"
    },
    { 
      icon: Wind, 
      name: "Odor", 
      gradient: "from-[#0B3C88] to-[#005F9E]",
      bgColor: "bg-[#0B3C88]/10"
    },
    { 
      icon: Stethoscope, 
      name: "Stains", 
      gradient: "from-[#009FC2] to-[#008AB0]",
      bgColor: "bg-[#009FC2]/10"
    },
    { 
      icon: Beaker, 
      name: "Tannic Acid", 
      gradient: "from-[#1E73BE] to-[#009FC2]",
      bgColor: "bg-[#1E73BE]/10"
    },
    { 
      icon: XCircle, 
      name: "Deposits", 
      gradient: "from-[#0B3C88] to-[#1E73BE]",
      bgColor: "bg-[#0B3C88]/10"
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" data-testid="section-remove">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C88]/[0.02] via-white to-[#009FC2]/[0.02]"></div>
      <div className="absolute inset-0 watermark-pattern"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#009FC2]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1E73BE]/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#009FC2]/10 px-4 py-2 rounded-full mb-6">
            <span className="text-[#009FC2] text-sm font-semibold tracking-wide uppercase">
              Water Purification
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0B3C88] mb-6 tracking-tight" data-testid="text-remove-title">
            WHAT WE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009FC2] to-[#1E73BE]">
              REMOVE
            </span>
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-[#009FC2] to-transparent rounded-full mx-auto mb-6"></div>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our advanced water treatment systems eliminate harmful contaminants
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {contaminants.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative"
                data-testid={`contaminant-${index}`}
              >
                <div className="relative flex flex-col items-center gap-4 p-6 lg:p-8 rounded-3xl premium-card hover:border-[#009FC2]/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                  <span className="text-sm lg:text-base font-bold text-center text-[#0B3C88] group-hover:text-[#009FC2] transition-colors">
                    {item.name}
                  </span>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#009FC2]/5 via-transparent to-[#1E73BE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
