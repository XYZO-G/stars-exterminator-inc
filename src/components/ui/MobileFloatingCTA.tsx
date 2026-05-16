import { Phone, Calendar } from "lucide-react";

export function MobileFloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden">
      <div className="flex h-20 shadow-[0_-8px_24px_rgba(0,0,0,0.1)]">
        <a
          href="tel:+13477977976"
          className="flex-1 bg-amber flex items-center justify-center gap-3 text-navy font-black text-lg active:bg-amber-dark transition-colors"
        >
          <Phone size={24} />
          <span>Call Gil</span>
        </a>
        <a
          href="#contact"
          className="flex-1 bg-navy flex items-center justify-center gap-3 text-white font-black text-lg active:bg-black transition-colors"
        >
          <Calendar size={24} />
          <span>Get Estimate</span>
        </a>
      </div>
      {/* Safe Area Inset for mobile browsers */}
      <div className="bg-navy h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
