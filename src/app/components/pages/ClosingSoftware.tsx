import { Monitor, Code, FileText, Clock, CheckCircle2, Zap, Database, Shield, ArrowRight, Settings, Globe, FolderOpen, Award, CircleDollarSign, Server, Users, Smartphone, Bell, MessageSquare, Lock } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { motion } from 'motion/react';
import { AcornIcon } from '../AcornIcon';
import { animationConfig } from '@/app/utils/animations';
import altaEliteAward from '@/assets/images/awards/alta-elite-award.png';
import collaborationImage from 'figma:asset/4a0a26b9dc2d0224c653c3374fcfb267f41059e4.png';
import professionalTeamImage from 'figma:asset/3e7c173911b39be658b0bc0acb26189e6331d128.png';
import secureLoginImage from 'figma:asset/caf5e0ce5fe00c540f32e5d1610531c4f5fcfd64.png';

/**
 * CLOSING SOFTWARE PAGE - ASSET INVENTORY
 * ========================================
 * 
 * EXTERNAL ASSETS (CDN/Third-Party):
 * ----------------------------------
 * 1. SoftPro Logo (SVG)
 *    - URL: https://www.softprocorp.com/getmedia/1aac7c3f-d1ed-4033-b534-2ff8f576d8b0/SoftPro_nosubtext-cropped.svg?ext=.svg
 *    - Usage: Platform Overview section, CTA section
 *    - Purpose: Official SoftPro branding
 * 
 * 2. Mobile Portal Demo Video (MP4)
 *    - URL: https://v.ftcdn.net/03/91/57/10/700_F_391571066_jm5Zp6DaaGCNL6SnXJWgul5QSGmSlw8K_NW.mp4?token=1770699178_JRBVG-mno37xadWPHdQGG1P5xbOa47fQAlATiby0db8
 *    - Usage: Client Portal & Mobile Access section
 *    - Purpose: Demonstrates mobile interface and responsiveness
 *    - Features: Autoplay, loop, muted, playsInline
 * 
 * PAGE IMAGES (All using figma:asset):
 * -----------------------------------------
 * 3. Collaboration Image (Built for Collaboration section)
 *    - Variable: collaborationImage
 *    - Import: figma:asset/4a0a26b9dc2d0224c653c3374fcfb267f41059e4.png
 *    - Usage: Section #2 - "Built for Collaboration"
 *    - Badge: "Seamless team collaboration" floating badge (top-left)
 *    - Description: Professional team collaboration meeting - three people reviewing documents with laptop
 * 
 * 4. Professional Team Image (Client Portal & Mobile Access section - with "24/7 Access" badge)
 *    - Variable: professionalTeamImage
 *    - Import: figma:asset/3e7c173911b39be658b0bc0acb26189e6331d128.png
 *    - Usage: Section #3 - "Client Portal & Mobile Access"
 *    - Badge: "24/7 Access" floating badge (bottom-right)
 *    - Description: Business professional with smartphone and documents showing multi-platform access with checkmarks and icons
 * 
 * 5. Secure Login Image (Enterprise Security section - with "Encrypted" badge)
 *    - Variable: secureLoginImage
 *    - Import: figma:asset/caf5e0ce5fe00c540f32e5d1610531c4f5fcfd64.png
 *    - Usage: Section #3 - "Enterprise Security & Protected Access"
 *    - Badge: "Encrypted" floating badge (top-right)
 *    - Description: Person using laptop with secure login interface overlay showing authentication, fingerprint, camera, and shield icons
 * 
 * 6. ALTA Elite Award (PNG)
 *    - Import: @/assets/images/awards/alta-elite-award.png
 *    - Variable: altaEliteAward
 *    - Usage: Currently imported but not actively used on page
 *    - Note: Available for future award/credential display
 * 
 * ICON LIBRARY:
 * -------------
 * - lucide-react: Monitor, Code, FileText, Clock, CheckCircle2, Zap, Database, 
 *   Shield, ArrowRight, Settings, Globe, FolderOpen, Award, CircleDollarSign, 
 *   Server, Users, Smartphone, Bell, MessageSquare, Lock
 * - Custom: AcornIcon (brand signature element)
 * 
 * DEVELOPER NOTES:
 * ----------------
 * - All three primary images imported using figma:asset scheme for reliable display
 * - External assets (logo, video) may need to be downloaded and self-hosted for production
 * - Video URL contains auth token that may expire - consider downloading video file
 */

export function ClosingSoftware() {
  const coreFeatures = [
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Customized SoftPro configurations tailored to match your exact closing workflows, from web order forms to fillable PDFs.',
    },
    {
      icon: FileText,
      title: 'Single Data Entry',
      description: 'Enter data once—SoftPro automatically propagates information throughout the entire transaction lifecycle to eliminate errors and accelerate closings.',
    },
    {
      icon: Globe,
      title: 'Seamless Integrations',
      description: 'Connect your CRM, accounting systems, underwriters, legacy platforms, and third-party vendors for faster, more accurate closings.',
    },
    {
      icon: Monitor,
      title: 'Client Portal Access',
      description: 'Web order forms and ClosingsLIVE portal enable clients and partners to submit orders, track transaction status, and exchange documents securely online.',
    },
  ];

  const advancedCapabilities = [
    {
      title: 'Intelligent Automation',
      description: 'Automate routine tasks, document templates, and reporting workflows so your team can focus on exceptions rather than data entry.',
      icon: Zap,
    },
    {
      title: 'Advanced Document Management',
      description: 'Leverage fillable PDFs, hyperlinked policies and commitments, and policy jacket management systems for more efficient closings.',
      icon: FolderOpen,
    },
    {
      title: 'Financial Processing Tools',
      description: 'Streamline payment workflows and reconciliation with batch invoice payment processing and wire-in utility integrations.',
      icon: CircleDollarSign,
    },
    {
      title: 'Hosted & Scalable Infrastructure',
      description: 'Cloud-hosted solutions minimize IT overhead while seamlessly scaling alongside your business growth.',
      icon: Server,
    },
    {
      title: 'Regulatory Compliance',
      description: 'Annual maintenance includes software updates and compliance documentation to ensure your operations remain current with evolving regulations.',
      icon: Shield,
    },
    {
      title: 'Award-Winning Support',
      description: 'Access comprehensive SoftPro support, professional consulting, reconciliation services, and custom reporting solutions designed for your business.',
      icon: Award,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4]">
      {/* Hero Section - Ultra Premium */}
      <section className="py-40 bg-gradient-to-br from-white via-[#f8f6f4] to-white relative overflow-hidden">
        {/* Premium geometric elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-28 w-px h-64 bg-[#375357] rotate-12"></div>
          <div className="absolute bottom-32 right-32 w-px h-56 bg-[#c3937d] -rotate-12"></div>
        </div>
        
        {/* Floating gradient orbs - ultra slow */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#e9a753]/6 to-[#c3937d]/4 blur-3xl"
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.3, 0.15, 0.3],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
        
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
                  Advanced Technology Solutions
                </span>
              </motion.div>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c3937d] to-transparent"></div>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-8">
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  SoftPro
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                SoftPro is the industry leader in providing real estate closing and title insurance software solutions. With more than 14,000 customer sites and over 60,000 users nationwide, our software has been recognized by the American Business Awards every year since 2007 for winning awards in Superior Customer Service, Support and Product Development.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Built for Collaboration Section - MOVED TO #2 POSITION */}
      <section className="py-32 bg-gradient-to-br from-[#d9ccc4]/30 via-white to-[#e9a753]/20 relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#c3937d]/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <AnimatedSection>
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img 
                  src={collaborationImage}
                  alt="Professional using SoftPro for real-time collaboration"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#375357]/20 to-transparent"></div>
                
                {/* Floating badge on image */}
                <motion.div
                  className="absolute top-6 left-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/95 backdrop-blur-md border border-[#c3937d]/30 shadow-xl"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <AcornIcon className="w-4 h-4" />
                  <span className="text-sm font-medium text-[#333333] tracking-wider uppercase">
                    Seamless team collaboration
                  </span>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Content Side */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#c3937d]/20">
                  <AcornIcon className="w-4 h-4" />
                  <span className="text-sm font-normal text-[#333333]/70 tracking-wider uppercase">
                    Team Collaboration
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Built for Collaboration
                </h2>
                
                <p className="text-xl text-[#333333]/70 font-normal leading-relaxed">
                  SoftPro brings teams together with intuitive workflows and real-time collaboration tools. Whether your team is in the office or working remotely, this powerful platform keeps everyone connected and transactions moving forward seamlessly.
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    { icon: Monitor, text: 'Real-time transaction tracking and updates' },
                    { icon: Users, text: 'Seamless team collaboration across locations' },
                    { icon: Shield, text: 'Enterprise-grade security and compliance' },
                    { icon: Zap, text: 'Lightning-fast processing and automation' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#375357]" strokeWidth={2} />
                      </div>
                      <span className="text-[#333333]/80 font-normal">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Client Portal Access - Combined Section */}
      <section className="py-32 bg-gradient-to-br from-white via-[#f8f6f4] to-white relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#375357]/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-[#333333]/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <AcornIcon className="w-5 h-5" />
                <span className="text-sm font-normal text-[#333333]/70 tracking-wider uppercase">
                  ClosingsLIVE Portal
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-4">
                Client Portal & Mobile Access
              </h2>
              <p className="text-xl text-[#333333]/70 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
                Secure, responsive access for clients and partners across all devices
              </p>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-[#333333]/80 font-normal leading-relaxed">
                  ClosingsLIVE is SoftPro's secure communication portal providing all authorized parties with 24/7 access to documents and real-time order updates from any device. Communicate directly with buyers, sellers, agents, attorneys, and lenders through a custom-branded portal and mobile app. Automate tasks, customize notifications, and share documents instantly—keeping everyone connected and informed throughout the closing process.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Mobile & Portal Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Content Side */}
            <AnimatedSection>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#c3937d]/20">
                  <Smartphone className="w-4 h-4 text-[#375357]" />
                  <span className="text-sm font-normal text-[#333333]/70 tracking-wider uppercase">
                    Multi-Platform Access
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Mobile App & Responsive Web Portal
                </h3>
                
                <p className="text-lg text-[#333333]/70 font-normal leading-relaxed">
                  Access your transactions from any device with our native mobile apps (iOS & Android) and responsive web portal. Stay connected to your closings wherever you go with push notifications for order updates, milestones, and document changes.
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    { icon: Smartphone, text: 'Native iOS & Android mobile apps' },
                    { icon: Globe, text: 'Responsive web portal for any device' },
                    { icon: Bell, text: 'Push notifications for order/milestone/document updates' },
                    { icon: Clock, text: 'Real-time status updates on all transactions' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#375357]" strokeWidth={2} />
                      </div>
                      <span className="text-[#333333]/80 font-normal">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Image Side */}
            <AnimatedSection delay={0.2}>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Decorative gradient border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#375357] via-[#c3937d] to-[#e9a753] rounded-3xl opacity-20 blur-xl"></div>
                
                {/* Image embed */}
                <motion.div
                  className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <img 
                    src={professionalTeamImage}
                    alt="SoftPro mobile and web portal access"
                    className="w-full h-auto"
                  />
                  
                  {/* Floating badge on image - bottom right */}
                  <motion.div
                    className="absolute bottom-6 right-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/95 backdrop-blur-md border border-[#e9a753]/30 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Users className="w-4 h-4 text-[#375357]" />
                    <span className="text-sm font-medium text-[#333333] tracking-wider uppercase">
                      24/7 Access
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Security & Communication Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <AnimatedSection>
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img 
                  src={secureLoginImage}
                  alt="Secure login interface with multi-factor authentication"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#375357]/10 to-transparent"></div>
                
                {/* Floating badge on image - top right */}
                <motion.div
                  className="absolute top-6 right-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/95 backdrop-blur-md border border-[#375357]/30 shadow-xl"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Shield className="w-4 h-4 text-[#375357]" />
                  <span className="text-sm font-medium text-[#333333] tracking-wider uppercase">
                    Encrypted
                  </span>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Content Side */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#c3937d]/20">
                  <Lock className="w-4 h-4 text-[#375357]" />
                  <span className="text-sm font-normal text-[#333333]/70 tracking-wider uppercase">
                    Bank-Level Security
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Enterprise Security & Protected Access
                </h3>
                
                <p className="text-lg text-[#333333]/70 font-normal leading-relaxed">
                  SoftPro implements bank-level security protocols to safeguard sensitive transaction information. With multi-factor authentication, role-based access control, and comprehensive data encryption, your closing documents remain secure during transmission and storage.
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    { icon: Lock, text: 'Multi-factor authentication (MFA) required for login' },
                    { icon: Shield, text: 'Role-based access - users only see information pertinent to their role' },
                    { icon: Database, text: 'Data encryption during transmission and storage' },
                    { icon: FileText, text: 'Secure document posting and access through the portal' },
                    { icon: CheckCircle2, text: 'Bank-level security protocols for all transactions' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#375357]" strokeWidth={2} />
                      </div>
                      <span className="text-[#333333]/80 font-normal">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="pt-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#375357] to-[#2d4246] text-white font-normal rounded-full shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    Learn About Security
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-32 bg-gradient-to-br from-[#e9e4df] to-[#d9ccc4] relative overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#375357]/8 to-[#c3937d]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <img 
                  src="https://www.softprocorp.com/getmedia/1aac7c3f-d1ed-4033-b534-2ff8f576d8b0/SoftPro_nosubtext-cropped.svg?ext=.svg" 
                  alt="SoftPro" 
                  className="h-28 w-auto"
                />
              </div>
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-4">
                Comprehensive Closing Platform
              </h2>
              <p className="text-xl text-[#333333]/70 font-normal leading-relaxed max-w-3xl mx-auto mt-4">
                Advanced software suite handles every aspect of your real estate closing with precision and efficiency
              </p>
            </div>
          </AnimatedSection>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div
                  className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-[0_8px_30px_rgba(55,83,87,0.08)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.15)] transition-all duration-500 h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-[#375357]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#333333]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-[#333333]/70 font-normal leading-relaxed max-w-3xl mx-auto">
                Powerful features that streamline operations and enhance productivity
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedCapabilities.map((benefit, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient outline - green focused */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#375357] via-[#4a6a6f] to-[#375357] rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
                  
                  <div className="relative bg-gradient-to-br from-[#f8f6f4] to-white rounded-3xl p-8 border border-[#333333]/10 hover:border-[#375357]/30 shadow-lg hover:shadow-xl transition-all duration-500 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#375357] to-[#2d4246] flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#333333] mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-[#333333]/70 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-32 bg-gradient-to-br from-[#375357] to-[#2d4246] relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#c3937d]/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white mb-4">
                Enterprise-Grade Technology
              </h2>
              <p className="text-xl text-white/80 font-normal leading-relaxed max-w-3xl mx-auto">
                Built on reliable, scalable infrastructure designed for the demands of modern real estate
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <Code className="w-12 h-12 text-[#e9a753] mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Cloud-Based
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Access your transactions anytime, anywhere with our secure cloud infrastructure.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <Database className="w-12 h-12 text-[#c3937d] mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Automated
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Intelligent automation reduces manual tasks and eliminates human error.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <Shield className="w-12 h-12 text-[#d9ccc4] mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Protected
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Multi-layered security protocols safeguard your sensitive transaction data.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#f8f6f4] to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <img 
                  src="https://www.softprocorp.com/getmedia/1aac7c3f-d1ed-4033-b534-2ff8f576d8b0/SoftPro_nosubtext-cropped.svg?ext=.svg" 
                  alt="SoftPro" 
                  className="h-32 w-auto"
                />
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-normal mb-6 tracking-tight bg-gradient-to-r from-[#375357] via-[#333333] to-[#c3937d] bg-clip-text text-transparent">
                Experience the Future of Closing
              </h2>
              <p className="text-lg text-[#333333]/70 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
                Cutting-edge software platform streamlines every step of the closing process, delivering speed, accuracy, and peace of mind.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
