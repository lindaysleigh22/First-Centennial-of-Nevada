import { motion } from 'motion/react';
import { AnimatedSection } from '../AnimatedSection';
import { AcornIcon } from '../AcornIcon';
import { Link } from 'react-router';
import { Building2, MapPin, Users, ArrowRight } from 'lucide-react';

export function TeamDirectory() {
  const offices = [
    {
      name: 'Reno Office',
      slug: 'reno-office',
      address: '1450 Ridgeview Drive, #100, Reno, NV 89519',
      teamCount: 31,
      description: 'Our flagship office featuring our executive team and commercial division.',
    },
    {
      name: 'Plaza Office',
      slug: 'plaza-office',
      address: '3700 Lakeside Drive, Suite 110, Reno, NV 89509',
      teamCount: 6,
      description: 'Full-service escrow team specializing in residential transactions.',
    },
    {
      name: 'Damonte Office',
      slug: 'damonte-office',
      address: '500 Damonte Ranch Pkwy, Suite 820, Reno, NV 89521',
      teamCount: 7,
      description: 'Serving South Reno with dedicated escrow professionals.',
    },
    {
      name: 'Fernley Office',
      slug: 'fernley-office',
      address: '1032 Inglewood Dr., #100, Fernley, NV 89408',
      teamCount: 5,
      description: 'Complete title and escrow services for the Fernley community.',
    },
    {
      name: 'Gardnerville / Minden Office',
      slug: 'gardnerville-minden-office',
      address: '1352 U.S. Hwy 395 N, Suite 114, Gardnerville, NV 89410',
      teamCount: 3,
      description: 'Serving Carson Valley with expert escrow services.',
    },
    {
      name: 'Sparks Office',
      slug: 'sparks-office',
      address: '4870 Vista Boulevard, #110, Sparks, NV 89436',
      teamCount: 4,
      description: 'Full-service office serving the greater Sparks area.',
    },
    {
      name: 'Zephyr Cove Office',
      slug: 'zephyr-cove-office',
      address: '212 Elks Point Road, Suite 441, Zephyr Cove, NV 89448',
      teamCount: 2,
      description: 'Premium service for Lake Tahoe real estate transactions.',
    },
    {
      name: 'Carson City Office',
      slug: 'carson-city-office',
      address: '896 W. Nye Lane, Suite 104, Carson City, NV 89703',
      teamCount: 9,
      description: 'Serving Nevada\'s capital with experienced professionals.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4]">
      {/* Hero Section */}
      <section className="py-40 bg-gradient-to-br from-white via-[#f8f6f4] to-white relative overflow-hidden">
        {/* Premium geometric elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-32 w-px h-64 bg-[#375357] rotate-12"></div>
          <div className="absolute bottom-32 right-24 w-px h-48 bg-[#c3937d] -rotate-12"></div>
        </div>
        
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.15, 0.3],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1]
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
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-[#333333]/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <AcornIcon className="w-5 h-5" />
                <span className="text-sm font-normal text-[#333333]/70 tracking-wider uppercase">
                  Our People
                </span>
              </motion.div>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c3937d] to-transparent"></div>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-8">
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Our Offices
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                With locations throughout Northern Nevada, we're here to serve you wherever you are.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Office Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <AnimatedSection key={office.slug} delay={index * 0.1}>
              <Link to={`/team/${office.slug}`}>
                <motion.div
                  className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-all duration-500 overflow-hidden group cursor-pointer h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Gradient accent bar */}
                  <div className="h-2 bg-gradient-to-r from-[#375357] via-[#c3937d] to-[#e9a753]"></div>
                  
                  <div className="p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#375357] to-[#375357]/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>

                    {/* Office Name */}
                    <h2 className="text-2xl font-light text-[#333333] mb-4 group-hover:text-[#375357] transition-colors duration-300">
                      {office.name}
                    </h2>

                    {/* Address */}
                    <div className="flex items-start gap-2 mb-4 text-sm text-[#333333]/60">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p className="font-light">{office.address}</p>
                    </div>

                    {/* Team Count */}
                    <div className="flex items-center gap-2 mb-4 text-sm text-[#333333]/60">
                      <Users className="w-4 h-4" />
                      <p className="font-light">{office.teamCount} Team Members</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#333333]/70 font-light leading-relaxed mb-6">
                      {office.description}
                    </p>

                    {/* View Team Link */}
                    <div className="flex items-center gap-2 text-[#375357] group-hover:gap-4 transition-all duration-300">
                      <span className="text-sm font-light">View Team</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Join Team CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#375357] to-[#375357]/90 p-12 rounded-3xl text-white relative overflow-hidden text-center">
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-light mb-4">
                Join Our Team
              </h2>
              <p className="font-light leading-relaxed mb-8 opacity-90 max-w-xl mx-auto">
                We're always looking for talented professionals who share our commitment to excellence in title and escrow services. If you're passionate about real estate and client service, we'd love to hear from you.
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-white text-[#375357] rounded-full font-light hover:bg-[#d9ccc4] transition-all duration-300 hover:scale-105"
              >
                View Opportunities
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
