import { Award, Users, MapPin, ThumbsUp } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Award,
      number: "37+",
      label: "Years in Business",
      description: "Serving since 1987",
      gradient: "from-[#009FC2] to-[#1E73BE]"
    },
    {
      icon: Users,
      number: "500+",
      label: "Customers Served",
      description: "Trusted by hundreds",
      gradient: "from-[#1E73BE] to-[#0B3C88]"
    },
    {
      icon: MapPin,
      number: "5+",
      label: "Counties Covered",
      description: "Brevard & Indian River",
      gradient: "from-[#0B3C88] to-[#005F9E]"
    },
    {
      icon: ThumbsUp,
      number: "99%",
      label: "Satisfaction Rate",
      description: "Quality guaranteed",
      gradient: "from-[#005F9E] to-[#009FC2]"
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" data-testid="section-stats">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C88] via-[#005F9E] to-[#009FC2]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative text-center"
                data-testid={`stat-${index}`}
              >
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-10 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-2xl">
                  <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                  
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">
                    {stat.number}
                  </div>
                  
                  <div className="text-base lg:text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-white/80">
                    {stat.description}
                  </div>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
