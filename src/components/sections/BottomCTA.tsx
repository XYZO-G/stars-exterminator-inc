import { motion } from "motion/react";
import { Phone, Star } from "lucide-react";

export function BottomCTA() {
  return (
    <section className="bg-amber py-24 px-4 overflow-hidden relative">
      {/* Background stars/pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none grid grid-cols-6 grid-rows-4 gap-4 rotate-12 scale-150">
        {Array.from({ length: 24 }).map((_, i) => (
          <Star key={i} className="w-12 h-12 fill-navy text-navy" />
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-navy mb-8 tracking-tighter">
            Got Wasps in the Wall? <br />
            Termites Under the Floor?
          </h2>
          <p className="text-navy font-bold text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-70 italic text-pretty leading-relaxed">
            Gil's answered calls on Labor Day, on holidays, even at 5:30 AM. Don't wait for the problem to get worse.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <motion.a
                href="tel:+13477977976"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-navy hover:bg-black text-white font-black px-12 py-6 rounded-2xl text-xl shadow-2xl transition-all hover:scale-105"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
             >
               <Phone size={24} />
               <span>Call Now: (347) 797-7976</span>
             </motion.a>
             <a
               href="#contact"
               className="w-full sm:w-auto flex items-center justify-center bg-white hover:bg-offwhite border-2 border-navy text-navy font-black px-12 py-6 rounded-2xl text-xl transition-all shadow-lg"
             >
               Get a Free Estimate
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
