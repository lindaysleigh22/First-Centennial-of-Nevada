import { MapPin, Phone, Navigation } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { motion } from 'motion/react';
import { AcornIcon } from '../AcornIcon';
import { animationConfig } from '@/app/utils/animations';

export function Locations() {
  const locations = [
    {
      name: 'Reno',
      subtitle: 'Headquarters',
      address: '1450 Ridgeview Drive, #100',
      city: 'Reno, NV 89519',
      phones: ['(775) 689-8510'],
      mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=1450+Ridgeview+Drive+100+Reno+NV+89519',
    },
    {
      name: 'Damonte Ranch',
      subtitle: 'Reno',
      address: '500 Damonte Ranch Parkway, Suite 820',
      city: 'Reno, NV 89521',
      phones: ['775-737-5090', '775-571-1441'],
      mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=500+Damonte+Ranch+Parkway+Suite+820+Reno+NV+89521',
    },
    {
      name: 'Plaza',
      subtitle: 'Reno',
      address: '3700 Lakeside Drive, #110',
      city: 'Reno, NV 89509',
      phones: ['(775) 689-1810', '(775) 800-5701'],
      mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=3700+Lakeside+Drive+110+Reno+NV+89509',
    },
    {
      name: 'Carson City',
      subtitle: '',
      address: '896 W. Nye Lane, Suite 104',
      city: 'Carson City, NV 89703',
      phones: ['(775) 841-6580', '(775) 507-3995'],
      mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=896+W+Nye+Lane+Suite+104+Carson+City+NV+89703',
    },
    {
      name: 'Gardnerville / Minden',
      subtitle: '',
      address: '1352 U.S. Hwy 395 N, Suite 114',
      city: 'Gardnerville, NV 89410',
      phones: ['(775) 737-5110', '(775) 737-5109'],
      mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=1352+US+Hwy+395+N+Suite+114+Gardnerville+NV+89410',
    },
    {
      name: 'Fernley',
      subtitle: '',
      address: '1032 Inglewood Dr., #100',
      city: 'Fernley, NV 89408',
      phones: ['(775) 575-5065'],
      mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=1032+Inglewood+Dr+100+Fernley+NV+89408',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4]">
      {/* Hero Section - Ultra Premium */}
      <section className="py-40 bg-gradient-to-br from-white via-[#f8f6f4] to-white relative overflow-hidden">
        {/* Premium geometric elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-32 left-24 w-px h-56 bg-[#375357] rotate-12"></div>
          <div className="absolute bottom-24 right-32 w-px h-64 bg-[#c3937d] -rotate-12"></div>
        </div>
        
        {/* Floating gradient orbs - ultra slow */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.15, 0.3],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: animationConfig.ease.premium
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(233, 167, 83, 0.06), rgba(195, 147, 125, 0.04))'
            }}
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              {/* Refined badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-[#333333]/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <AcornIcon className="w-5 h-5" />
                <span className="text-sm font-normal text-[#333333]/70 tracking-wider uppercase">
                  Serving Northern Nevada
                </span>
              </motion.div>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c3937d] to-transparent"></div>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-8">
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Our Locations
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Six convenient offices throughout Northern Nevada to serve you better.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-gradient-to-br from-[#d9ccc4] to-[#e9e4df] relative overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: animationConfig.ease.premium
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(233, 167, 83, 0.08), rgba(195, 147, 125, 0.05))'
            }}
          />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: animationConfig.ease.premium
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(55, 83, 87, 0.06), rgba(195, 147, 125, 0.04))'
            }}
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-all duration-500 h-full flex flex-col relative overflow-hidden group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Animated gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#375357]/[0.02] to-[#c3937d]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-12 h-0.5 bg-gradient-to-l from-[#c3937d]/30 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-0.5 h-12 bg-gradient-to-b from-[#c3937d]/30 to-transparent"></div>
                  </div>
                  
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div 
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#375357]/5 to-[#c3937d]/5 flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <MapPin className="w-8 h-8 text-[#375357]" strokeWidth={1.5} />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-normal text-[#333333] tracking-tight">
                          {location.name}
                        </h3>
                        {location.subtitle && (
                          <p className="text-sm text-[#333333]/60 font-normal">{location.subtitle}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-[#333333]/60 font-normal text-sm leading-relaxed">
                          {location.address}
                          <br />
                          {location.city}
                        </p>
                      </div>

                      <div className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-[#375357] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                        <div className="text-[#333333]/60 font-normal text-sm">
                          {location.phones.map((phone, idx) => (
                            <div key={idx}>
                              <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="hover:text-[#375357] transition-colors duration-300">
                                {phone}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#375357] text-white text-sm font-normal hover:bg-[#2d4246] transition-all duration-500 rounded-full relative z-10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Navigation className="w-4 h-4" strokeWidth={1.5} />
                    Get Directions
                  </motion.a>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-gradient-to-br from-[#c3937d]/20 via-[#d9ccc4] to-[#e9a753]/30 relative overflow-hidden">
        {/* Decorative corner element */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#375357]"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-[#375357]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <AcornIcon className="w-16 h-16" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-normal mb-6 tracking-tight bg-gradient-to-r from-[#375357] via-[#333333] to-[#c3937d] bg-clip-text text-transparent">
                Can't find a location near you?
              </h2>
              <p className="text-lg text-[#333333]/70 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
                Contact us and we'll work with you to arrange the most convenient service options for your transaction.
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-8 py-4 bg-[#375357] text-white text-sm font-normal hover:bg-[#2d4246] transition-all duration-700 rounded-full shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ 
                  duration: animationConfig.hover.duration,
                  ease: animationConfig.ease.premium 
                }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

