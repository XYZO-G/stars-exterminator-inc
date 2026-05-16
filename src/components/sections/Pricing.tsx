import { Check, X, Phone } from "lucide-react";
import { cn } from "@/src/lib/utils";

const tiers = [
  {
    name: "Single Nest or Bug Inspection",
    price: "$150",
    bestFor: "One-time pest removal or inspection",
    features: [
      { text: "Same-day service", included: true },
      { text: "On-site inspection", included: true },
      { text: "Single treatment", included: true },
      { text: "Follow-up advice", included: true },
      { text: "Multi-treatment plan", included: false },
      { text: "Preventive spraying", included: false },
    ],
    isPopular: false,
    cta: "Call for Exact Pricing",
    href: "tel:+13477977976"
  },
  {
    name: "Full Treatment Plan",
    price: "$225",
    bestFor: "Roaches, rodents, termites — infestations needing 2+ visits",
    features: [
      { text: "Same-day response", included: true },
      { text: "Thorough inspection", included: true },
      { text: "Multi-visit treatment", included: true },
      { text: "Pet-safe spray options", included: true },
      { text: "Follow-up call & return if needed", included: true },
      { text: "Honest written assessment", included: true },
    ],
    isPopular: true,
    badge: "MOST POPULAR",
    cta: "Book This Plan",
    href: "#contact"
  },
  {
    name: "Landlord / Property Package",
    price: "Custom",
    bestFor: "Landlords, multi-unit buildings, recurring maintenance",
    features: [
      { text: "All Full Treatment features", included: true },
      { text: "Flexible scheduling around tenants", included: true },
      { text: "Preventive seasonal spraying", included: true },
      { text: "Priority same-day response", included: true },
      { text: "Long-term relationship pricing", included: true },
    ],
    isPopular: false,
    cta: "Request a Custom Quote",
    href: "#contact"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber font-black tracking-widest text-sm uppercase block mb-4">Transparent Pricing</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">Fair Prices. No Surprises.</h2>
          <p className="text-warm-gray text-lg italic">
            Gil believes in honest pricing. He'll never recommend services you don't need.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch pt-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={cn(
                "relative bg-white p-8 rounded-[2rem] shadow-sm border flex flex-col transition-all duration-300",
                tier.isPopular ? "border-amber shadow-xl scale-105 z-10 lg:-translate-y-6" : "border-border-light hover:-translate-y-2"
              )}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber text-navy font-black text-xs px-4 py-1.5 rounded-full tracking-widest">
                  {tier.badge}
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-black text-navy mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-warm-gray mb-1">Starting at</span>
                  <span className="text-4xl font-extrabold text-navy">{tier.price}</span>
                </div>
                <p className="text-xs text-warm-gray mt-4 font-semibold uppercase tracking-wider h-10 flex items-center">{tier.bestFor}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {f.included ? (
                      <Check className="text-forest mt-0.5" size={18} />
                    ) : (
                      <X className="text-gray-300 mt-0.5" size={18} />
                    )}
                    <span className={cn("text-sm", f.included ? "text-navy font-medium" : "text-gray-400")}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={tier.href}
                className={cn(
                  "w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2",
                  tier.isPopular
                    ? "bg-amber hover:bg-amber-dark text-navy"
                    : "bg-navy hover:bg-black text-white"
                )}
              >
                {tier.href.startsWith("tel") && <Phone size={18} />}
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
