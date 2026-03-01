import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { AnimatedSection } from '../AnimatedSection';
import { AcornIcon } from '../AcornIcon';
import { TeamMemberCard } from '../TeamMemberCard';
import { officeTeams } from '@/app/data/teamData';
import { ArrowLeft, MapPin, Phone } from 'lucide-react';

export function OfficePage() {
  const { officeSlug } = useParams<{ officeSlug: string }>();
  
  const office = officeTeams.find(o => o.slug === officeSlug);

  if (!office) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-[#333333] mb-4">Office Not Found</h1>
          <Link 
            to="/team" 
            className="text-[#375357] hover:text-[#c3937d] transition-colors"
          >
            Return to Team Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4]">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-white via-[#f8f6f4] to-white relative overflow-hidden">
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
            {/* Back Button */}
            <Link 
              to="/team"
              className="inline-flex items-center gap-2 text-[#333333]/60 hover:text-[#375357] transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-light">Back to All Offices</span>
            </Link>

            <div className="max-w-4xl">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-[#333333]/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <AcornIcon className="w-5 h-5" />
                <span className="text-sm font-normal text-[#333333]/70 tracking-wider uppercase">
                  {office.officeName}
                </span>
              </motion.div>

              {/* Decorative line */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-[#c3937d] to-transparent mt-8"></div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-8">
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  {office.officeName}
                </span>
              </h1>

              {/* Office Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-[#333333]/70">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <p className="text-lg font-light">{office.officeAddress}</p>
                </div>
                <div className="flex items-center gap-3 text-[#333333]/70">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a 
                    href={`tel:${office.members[0]?.officePhone.replace(/\D/g, '')}`}
                    className="text-lg font-light hover:text-[#375357] transition-colors"
                  >
                    {office.members[0]?.officePhone}
                  </a>
                </div>
              </div>

              <p className="text-xl text-[#333333]/60 font-light leading-relaxed">
                Meet our dedicated team of professionals.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Members Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Conditionally render sections only for Reno Office */}
        {office.slug === 'reno-office' ? (
          <div className="space-y-16">
            {/* Corporate Support Team Section */}
            <AnimatedSection>
              <h2 className="text-2xl font-light tracking-tight mb-8 text-[#333333] uppercase" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                Corporate Support Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {office.members.slice(0, 5).map((member, index) => (
                  <TeamMemberCard key={index} member={member} index={index} />
                ))}
              </div>
            </AnimatedSection>

            {/* Escrow Officers Section */}
            <AnimatedSection>
              <h2 className="text-2xl font-light tracking-tight mb-8 text-[#333333] uppercase" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                Escrow Officers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {office.members.slice(5, 12).map((member, index) => (
                  <TeamMemberCard key={index + 5} member={member} index={index + 5} />
                ))}
              </div>
            </AnimatedSection>

            {/* Escrow Assistants Section */}
            <AnimatedSection>
              <h2 className="text-2xl font-light tracking-tight mb-8 text-[#333333] uppercase" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                Escrow Assistants
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {office.members.slice(12, 16).map((member, index) => (
                  <TeamMemberCard key={index + 12} member={member} index={index + 12} />
                ))}
              </div>
            </AnimatedSection>

            {/* Sales Section */}
            <AnimatedSection>
              <h2 className="text-2xl font-light tracking-tight mb-8 text-[#333333] uppercase" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                Sales
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {office.members.slice(16, 20).map((member, index) => (
                  <TeamMemberCard key={index + 16} member={member} index={index + 16} />
                ))}
              </div>
            </AnimatedSection>

            {/* Title Section */}
            <AnimatedSection>
              <h2 className="text-2xl font-light tracking-tight mb-8 text-[#333333] uppercase" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                Title
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {office.members.slice(20).map((member, index) => (
                  <TeamMemberCard key={index + 20} member={member} index={index + 20} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        ) : office.slug === 'carson-city-office' ? (
          <div className="space-y-16">
            {/* Escrow Officers Section */}
            <AnimatedSection>
              <h2 className="text-2xl font-light tracking-tight mb-8 text-[#333333] uppercase" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                Escrow Officers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {office.members.slice(0, 2).map((member, index) => (
                  <TeamMemberCard key={index} member={member} index={index} />
                ))}
              </div>
            </AnimatedSection>

            {/* Sales Section */}
            <AnimatedSection>
              <h2 className="text-2xl font-light tracking-tight mb-8 text-[#333333] uppercase" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                Sales
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {office.members.slice(2, 3).map((member, index) => (
                  <TeamMemberCard key={index + 2} member={member} index={index + 2} />
                ))}
              </div>
            </AnimatedSection>

            {/* Title Section */}
            <AnimatedSection>
              <h2 className="text-2xl font-light tracking-tight mb-8 text-[#333333] uppercase" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                Title
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {office.members.slice(3).map((member, index) => (
                  <TeamMemberCard key={index + 3} member={member} index={index + 3} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        ) : (
          // Default grid for all other offices
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {office.members.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        )}
      </div>

      {/* Contact CTA */}
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
                Ready to Get Started?
              </h2>
              <p className="font-light leading-relaxed mb-8 opacity-90 max-w-xl mx-auto">
                Contact our {office.officeName} team today to learn how we can help with your title and escrow needs.
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-white text-[#375357] rounded-full font-light hover:bg-[#d9ccc4] transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
