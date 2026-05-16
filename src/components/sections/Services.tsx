import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Bug, Shield, MousePointer2, Zap, LayoutDashboard, UserCheck } from "lucide-react";
import { Phone } from "lucide-react";

const services = [
  {
    title: "Wasp & Hornet Nest Removal",
    icon: <Zap size={28} />,
    badge: "MOST REQUESTED",
    description: "Discovered a nest in your siding, attic, or awning? Gil arrives the same day and removes it with minimal damage to your property.",
  },
  {
    title: "Termite Inspection & Treatment",
    icon: <Shield size={28} />,
    badge: "PROTECT YOUR HOME",
    description: "Termites are silent destroyers. Gil conducts a thorough inspection and gives you an honest assessment — never upselling services you don't need.",
  },
  {
    title: "Bee Removal",
    icon: <UserCheck size={28} />,
    badge: "SAFE & HUMANE",
    description: "Noticed bees entering through a wall or soffit? Gil locates the hive, explains your options, and safely removes the colony.",
  },
  {
    title: "Cockroach & Roach Control",
    icon: <Bug size={28} />,
    badge: "PET-SAFE OPTIONS",
    description: "One roach means more are hiding. Gil uses targeted treatments for kitchens, apartments, and commercial spaces.",
  },
  {
    title: "Rodent Control",
    icon: <MousePointer2 size={28} />,
    badge: "FULL ELIMINATION",
    description: "Mice or rats in your basement, walls, or crawlspace? Gil places strategic rodent poison and seals entry points.",
  },
  {
    title: "Preventive Pest Spraying",
    icon: <LayoutDashboard size={28} />,
    badge: "SEASONAL PLANS",
    description: "Don't wait for an infestation. Gil offers thorough preventive spraying for apartments, homes, and landlord properties.",
  },
];

export function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="bg-offwhite py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber font-black tracking-widest text-sm uppercase block mb-4">What We Handle</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">One Call. Every Pest. Solved.</h2>
          <p className="text-warm-gray text-lg italic">
            From emergency wasp nests to long-term termite protection — Gil handles it all across Queens and NYC.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-border-light hover:border-amber hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-amber scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
              <div className="inline-flex items-center justify-center p-3 bg-amber/10 text-amber rounded-xl mb-6 group-hover:bg-amber group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <div className="text-xs font-black text-amber-dark tracking-wider mb-2">{service.badge}</div>
              <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
              <p className="text-warm-gray mb-6 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-navy font-bold text-xl mb-8">Not sure what you're dealing with? Call Gil — he'll tell you honestly.</p>
            <a
              href="tel:+13477977976"
              className="inline-flex items-center gap-3 bg-amber hover:bg-amber-dark text-navy font-black px-10 py-5 rounded-2xl text-xl shadow-xl shadow-amber/10 transition-all hover:scale-105"
            >
              <Phone size={24} />
              <span>(347) 797-7976</span>
            </a>
        </div>
      </div>
    </section>
  );
}
