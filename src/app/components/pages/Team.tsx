import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, ChevronDown, Printer, Smartphone } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { AcornIcon } from '../AcornIcon';
import { Link } from 'react-router';
import johnDoeImg from 'figma:asset/4f4e5c866e1f66f1a79fdc40e1a5926da0d4b72f.png';
import rondaPlamondonImg from 'figma:asset/b055eed5c51b2a5e2d2c3b7d3f0a5b7f7a67b4e6.png';

export function Team() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);
  const [magnifiedPhoto, setMagnifiedPhoto] = useState<{ src: string; name: string } | null>(null);

  const toggleFlip = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
    // Auto-expand contact info when photo is flipped
    if (!flippedCards.includes(index)) {
      setExpandedMember(index);
    }
  };

  const officeTeams = [
    {
      officeName: 'Reno Office',
      officeAddress: '1450 Ridgeview Drive, #100, Reno, NV 89519',
      mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=1450+Ridgeview+Drive+100+Reno+NV+89519',
      members: [
        {
          name: 'John Doe',
          title: 'Profit Center Manager',
          initials: 'JD',
          officePhone: '(775) 689-8510',
          cell: '(775) 750-7006',
          fax: '(775) 689-8520',
          email: '[email protected]',
          image: johnDoeImg,
        },
        {
          name: 'Ronda Plamondon',
          title: 'Chief Operating Officer / Escrow Manager',
          initials: 'RP',
          officePhone: '(775) 689-8510',
          cell: '',
          fax: '(775) 689-8520',
          email: '[email protected]',
          image: rondaPlamondonImg,
        },
      ],
    },
  ];

  let memberIndex = 0;

  const toggleMember = (index: number) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4]">
      {/* Hero Section - Ultra Premium */}
      <section className="relative py-40 bg-gradient-to-br from-white via-[#f8f6f4] to-white overflow-hidden">
        {/* Premium geometric elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-32 w-px h-64 bg-[#375357] rotate-12"></div>
          <div className="absolute bottom-32 right-24 w-px h-48 bg-[#c3937d] -rotate-12"></div>
        </div>
        
        {/* Floating gradient orbs - ultra slow */}
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
              {/* Refined badge */}
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
                  Meet Our Team
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Dedicated professionals committed to making your real estate transactions seamless.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Members by Office */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {officeTeams.map((office, officeIdx) => (
          <div key={officeIdx} className="relative mb-12">
            <AnimatedSection>
              <div className="relative mb-6">
                <h2 className="text-2xl font-light text-[#375357] mb-2">{office.officeName}</h2>
                <a 
                  href={office.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-sm text-[#333333]/60 font-light hover:text-[#375357] transition-colors duration-300 group"
                >
                  <MapPin className="w-4 h-4 text-[#375357] group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:underline">{office.officeAddress}</span>
                </a>
              </div>
            </AnimatedSection>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ${office.officeName === 'Zephyr Cove Office' ? 'lg:justify-center lg:grid-cols-2' : ''}`}>
              {office.members.map((member) => {
                const currentIndex = memberIndex++;
                return (
                  <AnimatedSection key={currentIndex} delay={(currentIndex % 9) * 0.1}>
                    <motion.div 
                      className="bg-white cursor-pointer rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-all duration-500 group relative"
                      style={{ overflow: hoveredPhoto === currentIndex ? 'visible' : 'hidden' }}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      onClick={() => toggleMember(currentIndex)}
                    >
                      {/* Animated gradient background on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#375357]/[0.02] to-[#c3937d]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                        <div className="absolute top-4 right-4 w-12 h-0.5 bg-gradient-to-l from-[#c3937d]/30 to-transparent"></div>
                        <div className="absolute top-4 right-4 w-0.5 h-12 bg-gradient-to-b from-[#c3937d]/30 to-transparent"></div>
                      </div>
                      
                      <div className="p-6 relative z-10">
                        {/* Profile Icon and Info */}
                        <div className="flex items-start gap-4 mb-4">
                          {/* Flippable Icon */}
                          <div className="flex-col items-center">
                            <div 
                              className="flex-shrink-0 w-16 h-16 mb-1"
                              style={{ perspective: '1000px' }}
                              onClick={(e) => toggleFlip(currentIndex, e)}
                              onMouseEnter={() => setHoveredPhoto(currentIndex)}
                              onMouseLeave={() => setHoveredPhoto(null)}
                            >
                              <motion.div
                                className="relative w-full h-full"
                                style={{ transformStyle: 'preserve-3d' }}
                                animate={{ rotateY: flippedCards.includes(currentIndex) ? 180 : 0 }}
                                transition={{ duration: 0.6, ease: 'easeInOut' }}
                              >
                                {/* Front - Initials */}
                                <motion.div 
                                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#375357] to-[#375357]/80 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300"
                                  style={{ backfaceVisibility: 'hidden' }}
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <span className="text-white text-xl font-light">
                                    {member.initials}
                                  </span>
                                </motion.div>

                                {/* Back - Photo */}
                                <motion.div 
                                  className="absolute inset-0 rounded-full overflow-hidden shadow-md cursor-pointer"
                                  style={{ 
                                    backfaceVisibility: 'hidden',
                                    rotateY: 180
                                  }}
                                  onMouseEnter={() => {
                                    if (flippedCards.includes(currentIndex)) {
                                      setMagnifiedPhoto({ src: member.image, name: member.name });
                                    }
                                  }}
                                  onMouseLeave={() => setMagnifiedPhoto(null)}
                                >
                                  <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    style={{
                                      filter: 'grayscale(20%) sepia(15%) brightness(1.05) contrast(1.1)',
                                      objectPosition: (() => {
                                        // Custom positioning for each team member's headshot
                                        switch(member.name) {
                                          case 'Monique Masset':
                                            return 'center 25%';
                                          case 'Kristin Franco':
                                            return 'center 35%';
                                          case 'Christopher (CJ) Keenan':
                                            return 'center 30%';
                                          case 'Loryn Blair':
                                            return 'center 35%';
                                          case 'Ronda Plamondon':
                                            return 'center 35%';
                                          case 'Shon Plamondon':
                                            return 'center 30%';
                                          case 'Lisa Quilici':
                                            return 'center 35%';
                                          case 'Rachel Quilici':
                                            return 'center 30%';
                                          case 'Gerrit Schmidt':
                                            return 'center 25%';
                                          case 'Ron Schofield':
                                            return 'center 35%';
                                          case 'Suzanne Silverman':
                                            return 'center 30%';
                                          case 'John Doe':
                                            return 'center 35%';
                                          case 'Cheryl Dougherty':
                                            return 'center 30%';
                                          case 'Laura Voorhees':
                                            return 'center 25%';
                                          case 'Lynne Scott':
                                            return 'center 20%';
                                          case 'Susie Nichols':
                                            return 'center 30%';
                                          case 'Jennifer Livermore':
                                            return 'center 25%';
                                          case 'Rachelle Lunger':
                                            return 'center 30%';
                                          case 'Shelby Magana':
                                            return 'center 25%';
                                          case 'Sherry Ackerman':
                                            return 'center 30%';
                                          case 'Dena Reed':
                                            return 'center 25%';
                                          case 'Denise Clark':
                                            return 'center 30%';
                                          case 'Gina Doyle':
                                            return 'center 30%';
                                          case 'Cynthia Failor':
                                            return 'center 25%';
                                          case 'Ryan Litteral':
                                            return 'center 30%';
                                          case 'Jennifer Sammons':
                                            return 'center 30%';
                                          case 'Lisa Marvitz':
                                            return 'center 25%';
                                          case 'Amanda Chan':
                                            return 'center 20%';
                                          default:
                                            return 'center 35%'; // Good default for headshots
                                        }
                                      })(),
                                      transform: (() => {
                                        // Custom scale for each team member's headshot - reduced to show more of head
                                        switch(member.name) {
                                          case 'Monique Masset':
                                            return 'scale(1.15)';
                                          case 'Kristin Franco':
                                            return 'scale(1.1)';
                                          case 'Christopher (CJ) Keenan':
                                            return 'scale(1.1)';
                                          case 'Loryn Blair':
                                            return 'scale(1.1)';
                                          case 'Ronda Plamondon':
                                            return 'scale(1.1)';
                                          case 'Shon Plamondon':
                                            return 'scale(1.1)';
                                          case 'Lisa Quilici':
                                            return 'scale(1.1)';
                                          case 'Rachel Quilici':
                                            return 'scale(1.1)';
                                          case 'Gerrit Schmidt':
                                            return 'scale(1.1)';
                                          case 'Ron Schofield':
                                            return 'scale(1.1)';
                                          case 'Suzanne Silverman':
                                            return 'scale(1.1)';
                                          case 'John Doe':
                                            return 'scale(1.1)';
                                          case 'Cheryl Dougherty':
                                            return 'scale(1.1)';
                                          case 'Laura Voorhees':
                                            return 'scale(1.15)';
                                          case 'Lynne Scott':
                                            return 'scale(1.2)';
                                          case 'Susie Nichols':
                                            return 'scale(1.15)';
                                          case 'Jennifer Livermore':
                                            return 'scale(1.2)';
                                          case 'Rachelle Lunger':
                                            return 'scale(1.15)';
                                          case 'Shelby Magana':
                                            return 'scale(1.15)';
                                          case 'Sherry Ackerman':
                                            return 'scale(1.15)';
                                          case 'Dena Reed':
                                            return 'scale(1.15)';
                                          case 'Denise Clark':
                                            return 'scale(1.15)';
                                          case 'Gina Doyle':
                                            return 'scale(1.15)';
                                          case 'Cynthia Failor':
                                            return 'scale(1.15)';
                                          case 'Ryan Litteral':
                                            return 'scale(1.15)';
                                          case 'Jennifer Sammons':
                                            return 'scale(1.15)';
                                          case 'Logan Ortiz':
                                            return 'scale(1.1)';
                                          case 'Lisa Marvitz':
                                            return 'scale(1.15)';
                                          case 'Amanda Chan':
                                            return 'scale(1.15)';
                                          default:
                                            return 'scale(1.05)'; // Minimal zoom to show full head
                                        }
                                      })()
                                    }}
                                  />
                                </motion.div>
                              </motion.div>
                            </div>
                            <p className="text-[10px] text-[#333333]/40 text-center font-light">
                              click to see photo
                            </p>
                          </div>

                          {/* Name and Title */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-light text-[#333333] mb-1">
                              {member.name}
                            </h3>
                            <p className="text-sm text-[#375357] font-light">
                              {member.title}
                            </p>
                          </div>

                          {/* Expand Icon */}
                          <motion.div
                            animate={{ rotate: expandedMember === currentIndex ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMember(currentIndex);
                            }}
                            className="cursor-pointer"
                          >
                            <ChevronDown className="w-5 h-5 text-[#333333]/40" />
                          </motion.div>
                        </div>

                        {/* Expandable Contact Details */}
                        <AnimatePresence>
                          {expandedMember === currentIndex && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 border-t border-[#d9ccc4] space-y-3">
                                {/* Office Phone */}
                                {member.officePhone && (
                                  <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-[#375357] flex-shrink-0" />
                                    <div>
                                      <div className="text-xs text-[#333333]/60 font-light">Office</div>
                                      <a 
                                        href={`tel:${member.officePhone.replace(/\D/g, '')}`}
                                        className="text-sm text-[#333333]/80 font-light hover:text-[#375357] transition-colors"
                                      >
                                        {member.officePhone}
                                      </a>
                                    </div>
                                  </div>
                                )}

                                {/* Cell Phone */}
                                {member.cell && (
                                  <div className="flex items-center gap-3">
                                    <Smartphone className="w-4 h-4 text-[#375357] flex-shrink-0" />
                                    <div>
                                      <div className="text-xs text-[#333333]/60 font-light">Cell</div>
                                      <a 
                                        href={`tel:${member.cell.replace(/\D/g, '')}`}
                                        className="text-sm text-[#333333]/80 font-light hover:text-[#375357] transition-colors"
                                      >
                                        {member.cell}
                                      </a>
                                    </div>
                                  </div>
                                )}

                                {/* Fax */}
                                {member.fax && (
                                  <div className="flex items-center gap-3">
                                    <Printer className="w-4 h-4 text-[#375357] flex-shrink-0" />
                                    <div>
                                      <div className="text-xs text-[#333333]/60 font-light">Fax</div>
                                      <div className="text-sm text-[#333333]/80 font-light">
                                        {member.fax}
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* Email */}
                                {member.email && (
                                  <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-[#375357] flex-shrink-0" />
                                    <div>
                                      <div className="text-xs text-[#333333]/60 font-light">Email</div>
                                      <a 
                                        href={`mailto:${member.email}`}
                                        className="text-sm text-[#333333]/80 font-light hover:text-[#375357] transition-colors break-all"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        {member.email}
                                      </a>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        ))}

        {/* Magnified Photo Modal */}
        <AnimatePresence>
          {magnifiedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMagnifiedPhoto(null)}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                  <img
                    src={magnifiedPhoto.src}
                    alt={magnifiedPhoto.name}
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'grayscale(20%) sepia(15%) brightness(1.05) contrast(1.1)',
                    }}
                  />
                </div>
                <div className="absolute -bottom-16 left-0 right-0 text-center">
                  <p className="text-white font-light text-lg drop-shadow-lg">{magnifiedPhoto.name}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
