import { Star } from "lucide-react";

export function TrustLogos() {
  return (
    <section className="bg-navy py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <span className="text-white/40 font-black tracking-[0.2em] text-xs uppercase">Trusted & Verified On</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
           {/* Placeholder for platform logos */}
           <div className="text-white font-black text-xl md:text-2xl hover:text-amber hover:opacity-100 transition-all cursor-default">Google</div>
           <div className="text-white font-black text-xl md:text-2xl hover:text-amber hover:opacity-100 transition-all cursor-default">Yelp</div>
           <div className="text-white font-black text-xl md:text-2xl hover:text-amber hover:opacity-100 transition-all cursor-default">BBB</div>
           <div className="text-white font-black text-xl md:text-2xl hover:text-amber hover:opacity-100 transition-all cursor-default">Thumbtack</div>
           <div className="text-white font-black text-xl md:text-2xl hover:text-amber hover:opacity-100 transition-all cursor-default">HomeAdvisor</div>
        </div>
        <div className="mt-12 text-center">
            <a
              href="https://www.google.com/maps/place/Stars+exterminator+inc/@40.7949949,-73.8025047"
              className="inline-flex items-center gap-2 text-amber text-sm font-bold border-b border-amber/30 pb-1"
            >
              <Star size={14} fill="currentColor" />
              <span>5.0 stars across 930 verified Google reviews — See all reviews</span>
            </a>
        </div>
      </div>
    </section>
  );
}
