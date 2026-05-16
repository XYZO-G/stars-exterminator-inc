import { motion } from "motion/react";
import { Phone, Star, Shield, Zap, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] bg-navy pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-amber/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-forest/20 text-white rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase">Available for Same-Day Service</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Queens' Most Trusted <br />
              <span className="text-amber">Pest Exterminator</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 leading-relaxed">
              5.0 stars across 930 reviews. Gil arrives the same day, solves the problem, and tells you the truth about what you need. Serving Whitestone, Queens, and all of NYC.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.a
                href="tel:+13477977976"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-amber hover:bg-amber-dark text-navy font-black px-8 py-5 rounded-2xl text-lg shadow-xl shadow-amber/10 transition-all hover:scale-105"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Phone size={24} />
                <span>Call Gil: (347) 797-7976</span>
              </motion.a>
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-5 rounded-2xl transition-all"
              >
                Get a Free Estimate
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
               <div className="flex -space-x-2">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-navy bg-amber flex items-center justify-center">
                     <Star size={16} fill="#0D1B2A" />
                   </div>
                 ))}
               </div>
               <div>
                  <div className="flex items-center gap-1 text-amber">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-white/60 text-sm font-medium">930+ Five-Star Reviews</p>
               </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10"
            >
              <div className="rounded-[40px] overflow-hidden border-8 border-white/5 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=1000"
                  alt="Professional exterminator in white hazmat suit spraying a treatment"
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>

              {/* Floating Info Cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl floating z-20"
                style={{ animationDelay: '0s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-amber/20 p-2 rounded-xl text-amber">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Response</p>
                    <p className="text-sm font-black text-navy leading-none">Same-Day</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-12 bg-white p-4 rounded-2xl shadow-xl floating lg:block hidden z-20"
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-forest/20 p-2 rounded-xl text-forest">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Protection</p>
                    <p className="text-sm font-black text-navy leading-none">Safe & Honest</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-12 bg-white p-4 rounded-2xl shadow-xl floating z-20"
                style={{ animationDelay: '2s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Availability</p>
                    <p className="text-sm font-black text-navy leading-none">24/7 Emergencies</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
