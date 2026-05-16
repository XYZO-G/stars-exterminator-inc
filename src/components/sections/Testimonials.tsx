import { Star } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Luis R.",
    location: "Whitestone, Queens, NY",
    text: "Gil was dependable, approachable, clear, and transparent about the tasks and his plan. We faced wasps in our front door awning — unexpectedly, five wasp nests were just above our front door. Gil completed the work with minimal damage to the exterior.",
    initial: "LR"
  },
  {
    name: "Mariam B.",
    location: "Queens, NY",
    text: "Gil was extremely helpful. I called him for a wasp's nest and he was available right away. He carefully removed the siding to ensure no damage was done and stayed as long as he needed to make sure the wasps were all gone.",
    initial: "MB"
  },
  {
    name: "Rachael T.",
    location: "Queens, NY",
    text: "Gil was very professional removing the wasp nest from our home. He was also very informative on how to prevent the issue from happening again. Top quality service, fair pricing, and great communication throughout.",
    initial: "RT"
  }
];

export function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="testimonials" className="bg-offwhite py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber font-black tracking-widest text-sm uppercase block mb-4">Real Customers. Real Results.</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">930 Reasons Queens Trusts Gil</h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border-t-4 border-amber relative"
            >
              <div className="flex items-center gap-1 mb-6">
                {[1,2,3,4,5].map(i => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="text-amber"
                  >
                    <Star size={18} fill="currentColor" />
                  </motion.div>
                ))}
              </div>
              <p className="text-navy text-lg italic leading-relaxed mb-8 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber flex items-center justify-center font-black text-navy border-2 border-amber/10">
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-navy">{t.name}</div>
                  <div className="text-xs text-warm-gray font-semibold uppercase">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/maps/place/Stars+exterminator+inc/@40.7949949,-73.8025047"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy font-bold flex items-center justify-center gap-2 hover:text-amber transition-colors"
          >
            <span>Read all 930 reviews on Google</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
