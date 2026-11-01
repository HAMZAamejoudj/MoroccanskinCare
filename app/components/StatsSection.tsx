import { Award, Users, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    delay: "0.1s"
  },
  {
    icon: Users,
    value: "500+",
    label: "Brand Partners",
    delay: "0.2s"
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Pure Origin",
    delay: "0.3s"
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-primary">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: stat.delay }}
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <stat.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>

              <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
                {stat.value}
              </div>

              <div className="text-white/80 font-semibold uppercase tracking-[0.2em] text-xs">
                {stat.label}
              </div>

              {/* Subtle underline effect on hover */}
              <div className="mt-4 h-1 w-0 bg-white/40 rounded-full group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
