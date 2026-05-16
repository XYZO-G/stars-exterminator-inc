import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const stats = [
  { value: 5.0, label: "Google Rating", sub: "Out of 930 Reviews", suffix: "" },
  { value: 95, label: "Same-Day Calls", sub: "Responded Same Day", suffix: "%+" },
  { value: 7, label: "Years Serving NYC", sub: "In the Community", suffix: "+" },
  { value: 1000, label: "Pests Eliminated", sub: "Nests & Infestations", suffix: "+" },
];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <span ref={ref} className="tabular-nums">
      {count % 1 === 0 ? count : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="bg-navy border-t border-amber py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center transition-all duration-500 delay-100">
              <div className="text-3xl md:text-4xl font-extrabold text-amber mb-1 flex items-center justify-center gap-1">
                <CountUp end={stat.value} suffix={stat.suffix} />
                {stat.label === "Google Rating" && <Star className="w-8 h-8 fill-amber" />}
              </div>
              <div className="text-white font-bold text-sm md:text-base">{stat.label}</div>
              <div className="text-white/50 text-xs mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
