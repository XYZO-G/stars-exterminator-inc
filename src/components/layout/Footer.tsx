import { Phone, Star } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/5 pb-16">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 fill-amber text-amber" />
              <span className="text-white font-black tracking-tighter text-2xl uppercase">Stars Exterminator</span>
            </div>
            <p className="text-white/40 font-medium leading-relaxed mb-6">
              Whitestone's trusted pest control professional. Gil is available the same day and treats your home as honest as he does his own.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex text-amber">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-white/60 text-xs font-black uppercase tracking-widest">5.0 / 930 Google Reviews</span>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Our Services</h4>
            <ul className="space-y-4">
              {["Wasp & Hornet Removal", "Termite Treatment", "Bee Removal", "Roach Control", "Rodent Control", "Preventive Spraying"].map(item => (
                <li key={item}>
                  <a href="#services" className="text-white/40 hover:text-amber transition-colors font-semibold">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Company</h4>
            <ul className="space-y-4">
              {["About Gil", "Reviews", "Service Area", "Pricing", "Contact"].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "")}`} className="text-white/40 hover:text-amber transition-colors font-semibold">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Direct Line</h4>
            <a href="tel:+13477977976" className="text-amber font-black text-3xl block mb-6 hover:scale-105 transition-transform origin-left">
              (347) 797-7976
            </a>
            <div className="space-y-4">
              <p className="text-white/60 font-bold">160-15 Powells Cove Blvd <br /> Whitestone, NY 11357</p>
              <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Available Weekends</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
             © {currentYear} Stars Exterminator Inc. All rights reserved.
           </p>
           <div className="flex gap-8">
             <span className="text-white/20 text-xs font-bold uppercase tracking-widest cursor-default">Privacy Policy</span>
             <span className="text-white/20 text-xs font-bold uppercase tracking-widest cursor-default">Terms of Service</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
