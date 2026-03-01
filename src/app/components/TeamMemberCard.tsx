import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, ChevronDown, Smartphone, Printer } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  initials: string;
  officePhone: string;
  cell: string;
  fax: string;
  email: string;
  image: any;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setIsExpanded(true);
    }
  };

  return (
    <motion.div 
      className="bg-white cursor-pointer overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-all duration-500 group relative"
      whileHover={{ y: -8 }}
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        y: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
      }}
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
              onClick={toggleFlip}
            >
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
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
                  className="absolute inset-0 rounded-full overflow-hidden shadow-md"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    rotateY: 180
                  }}
                >
                  <img 
                    src={member.image?.default || member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'grayscale(20%) sepia(15%) brightness(1.05) contrast(1.1)',
                      objectPosition: (() => {
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
                          case 'Andy Tourin':
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
                          default:
                            return 'center 35%';
                        }
                      })(),
                      transform: (() => {
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
                          case 'Andy Tourin':
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
                          default:
                            return 'scale(1.05)';
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
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="cursor-pointer"
          >
            <ChevronDown className="w-5 h-5 text-[#333333]/40" />
          </motion.div>
        </div>

        {/* Expandable Contact Details */}
        <AnimatePresence>
          {isExpanded && (
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
  );
}
