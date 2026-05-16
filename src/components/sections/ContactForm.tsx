import React, { useState } from "react";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission
    setTimeout(() => setStatus("success"), 1500);
  };

  const neighborhoods = [
    "Whitestone", "Flushing", "College Point", "Bayside", "Fresh Meadows",
    "Jackson Heights", "Astoria", "Bronx", "Brooklyn", "Manhattan", "Staten Island", "Other"
  ];

  const services = [
    "Wasp / Hornet Removal", "Termite Inspection", "Bee Removal",
    "Cockroach Control", "Rodent / Mouse Control", "Bed Bug Treatment",
    "Preventive Spraying", "Other — Not Sure"
  ];

  return (
    <section id="contact" className="bg-navy py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Panel */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Reach Gil Directly</h2>
            <div className="space-y-8">
              <a href="tel:+13477977976" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-amber rounded-2xl flex items-center justify-center text-navy shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-amber font-black text-3xl tracking-tight leading-none mb-1">(347) 797-7976</p>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Call or Text Anytime</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-white font-bold text-xl leading-snug">160-15 Powells Cove Blvd <br /> Whitestone, NY 11357</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <p className="text-white font-bold text-xl leading-none mb-1">Opens 8 AM</p>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Available evenings, weekends & holidays</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber">
                      {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                    </div>
                    <span className="text-white font-black">5.0 / 930 Reviews</span>
                 </div>
                 <p className="text-white/60 italic text-lg leading-relaxed">
                   "He responded on a Sunday, Labor Day weekend, within minutes. Honestly, best service in Queens."
                   <span className="block text-sm font-bold text-white/40 mt-2 not-italic">— DAVID G., QUEENS</span>
                 </p>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            {status === "success" && (
              <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8">
                 <div className="w-20 h-20 bg-forest/10 text-forest rounded-full flex items-center justify-center mb-6">
                   <Star size={40} fill="currentColor" />
                 </div>
                 <h3 className="text-3xl font-black text-navy mb-4">Gil Received Your Message</h3>
                 <p className="text-warm-gray font-bold max-w-sm mb-8 leading-relaxed">
                   He typically responds within the hour. Keep your phone nearby!
                 </p>
                 <button
                   onClick={() => setStatus("idle")}
                   className="text-amber font-black border-b-2 border-amber"
                 >
                   Send another request?
                 </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs font-black text-navy uppercase tracking-widest mb-2">Full Name *</label>
                   <input required type="text" placeholder="Your name" className="w-full bg-offwhite border border-border-light rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber focus:border-amber outline-none font-bold" />
                 </div>
                 <div>
                   <label className="block text-xs font-black text-navy uppercase tracking-widest mb-2">Phone Number *</label>
                   <input required type="tel" placeholder="(xxx) xxx-xxxx" className="w-full bg-offwhite border border-border-light rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber focus:border-amber outline-none font-bold" />
                 </div>
               </div>

               <div>
                 <label className="block text-xs font-black text-navy uppercase tracking-widest mb-2">Email Address *</label>
                 <input required type="email" placeholder="your@email.com" className="w-full bg-offwhite border border-border-light rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber focus:border-amber outline-none font-bold" />
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs font-black text-navy uppercase tracking-widest mb-2">Neighborhood *</label>
                   <select required className="w-full bg-offwhite border border-border-light rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber focus:border-amber outline-none font-bold appearance-none">
                     <option value="">Select your area</option>
                     {neighborhoods.map(n => <option key={n} value={n}>{n}</option>)}
                   </select>
                 </div>
                 <div>
                   <label className="block text-xs font-black text-navy uppercase tracking-widest mb-2">Service Needed *</label>
                   <select required className="w-full bg-offwhite border border-border-light rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber focus:border-amber outline-none font-bold appearance-none">
                     <option value="">What's the problem?</option>
                     {services.map(s => <option key={s} value={s}>{s}</option>)}
                   </select>
                 </div>
               </div>

               <div>
                 <label className="block text-xs font-black text-navy uppercase tracking-widest mb-2">Describe the Issue</label>
                 <textarea rows={4} placeholder="Tell Gil what you're seeing..." className="w-full bg-offwhite border border-border-light rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber focus:border-amber outline-none font-bold resize-none"></textarea>
               </div>

               <button
                 type="submit"
                 disabled={status === "submitting"}
                 className={cn(
                   "w-full py-6 rounded-2xl font-black text-xl shadow-xl shadow-amber/10 transition-all",
                   status === "submitting" ? "bg-amber/50 cursor-not-allowed" : "bg-amber hover:bg-amber-dark text-navy hover:scale-[1.02] active:scale-95"
                 )}
               >
                 {status === "submitting" ? "Sending to Gil..." : "Send My Request to Gil"}
               </button>

               <p className="text-center text-[10px] text-warm-gray font-bold uppercase tracking-tighter">
                 By sending, you agree to Gil calling or texting you about your pest problem.
               </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
