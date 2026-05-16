import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    number: "01",
    title: "Call or Text Gil",
    description: "Reach Gil directly at (347) 797-7976. Describe what you're seeing. He'll ask the right questions and give you an honest assessment over the phone.",
  },
  {
    number: "02",
    title: "Same-Day Inspection & Treatment",
    description: "Gil comes to your home — often within the hour. He thoroughly inspects the area and performs the treatment with minimal disruption.",
  },
  {
    number: "03",
    title: "Follow-Up & Peace of Mind",
    description: "Gil doesn't disappear after the job. He calls to check in, answers your follow-up questions, and returns if needed.",
  },
];

export function HowItWorks() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="howitworks" className="bg-cream py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber font-black tracking-widest text-sm uppercase block mb-4">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy">Pest-Free in 3 Steps</h2>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[100px] left-0 w-full h-[2px] overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="w-full h-full border-t-2 border-dashed border-amber/30 origin-left"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative text-center group"
              >
                <div className="text-8xl font-black text-amber/10 group-hover:text-amber/20 transition-colors mb-4 md:mb-0 lg:absolute lg:-top-16 lg:left-1/2 lg:-translate-x-1/2">
                  {step.number}
                </div>
                <div className="relative z-10 pt-4">
                    <div className="w-20 h-20 bg-white rounded-3xl shadow-lg border border-amber/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-amber group-hover:scale-110 transition-all duration-300">
                        <span className="text-3xl font-black text-navy group-hover:text-white">{idx + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4 h-16 flex items-center justify-center">{step.title}</h3>
                    <p className="text-warm-gray leading-relaxed max-w-sm mx-auto">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
