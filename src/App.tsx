import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { StatsBar } from "./components/sections/StatsBar";
import { Services } from "./components/sections/Services";
import { HowItWorks } from "./components/sections/HowItWorks";
import { TrustLogos } from "./components/sections/TrustLogos";
import { Testimonials } from "./components/sections/Testimonials";
import { Pricing } from "./components/sections/Pricing";
import { ServiceArea } from "./components/sections/ServiceArea";
import { BottomCTA } from "./components/sections/BottomCTA";
import { ContactForm } from "./components/sections/ContactForm";
import { Footer } from "./components/layout/Footer";
import { MobileFloatingCTA } from "./components/ui/MobileFloatingCTA";

export default function App() {
  return (
    <main className="relative min-h-screen bg-white selection:bg-amber selection:text-navy">
      <Navbar />
      
      <Hero />
      <StatsBar />
      <Services />
      <HowItWorks />
      <TrustLogos />
      <Testimonials />
      <Pricing />
      <ServiceArea />
      <BottomCTA />
      <ContactForm />
      
      <Footer />
      <MobileFloatingCTA />
    </main>
  );
}
