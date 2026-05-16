import { MapPin, Phone } from "lucide-react";

export function ServiceArea() {
  const neighborhoods = [
    "Whitestone", "Flushing", "College Point", "Bayside",
    "Fresh Meadows", "Jackson Heights", "Astoria",
    "Long Island City", "Bronx", "Brooklyn", "Manhattan", "Staten Island"
  ];

  return (
    <section id="location" className="bg-offwhite py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber font-black tracking-widest text-sm uppercase block mb-4">Service Area</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">Proudly Serving Queens & All of NYC</h2>
        </div>

        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-border-light">
          <div className="grid lg:grid-cols-2">
            {/* Map Placeholder */}
            <div className="h-[400px] lg:h-auto bg-gray-100 relative min-h-[400px]">
              <iframe
                title="Service Area Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.1234!2d-73.8049104!3d40.7952373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28be5895e69e7%3A0x95c80ba8e7275d2d!2sStars%20exterminator%20inc!5e0!3m2!1sen!2sus!4v1715830000000!5m2!1sen!2sus"
              ></iframe>
              <div className="absolute top-4 left-4 bg-navy text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg">
                Whitestone Headquarters
              </div>
            </div>

            <div className="p-8 md:p-12 text-left">
               <h3 className="text-2xl font-black text-navy mb-8">We're Closer Than You Think</h3>
               <div className="flex flex-wrap gap-2 mb-10">
                 {neighborhoods.map(n => (
                   <span key={n} className="bg-offwhite text-navy font-bold px-4 py-2 rounded-lg text-sm border border-border-light">
                     {n}
                   </span>
                 ))}
               </div>

               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center text-amber shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-warm-gray uppercase tracking-widest mb-1">Our Address</p>
                      <p className="font-bold text-navy">160-15 Powells Cove Blvd, Whitestone, NY 11357</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center text-amber shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-warm-gray uppercase tracking-widest mb-1">Call gil Directly</p>
                      <a href="tel:+13477977976" className="font-black text-navy text-2xl hover:text-amber transition-colors">
                        (347) 797-7976
                      </a>
                    </div>
                  </div>
               </div>

               <div className="mt-8">
                 <a 
                   href="https://maps.app.goo.gl/gAdd7f55uJXrQD8F9" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-navy font-bold hover:text-amber transition-all"
                 >
                   <span>Open in Google Maps</span>
                   <MapPin size={16} />
                 </a>
               </div>

               <div className="mt-12 p-6 bg-cream rounded-2xl border border-amber/10 italic text-warm-gray text-sm">
                 "Not sure if we serve your area? Just call — Gil will let you know. He's traveled to every borough to handle emergencies."
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
