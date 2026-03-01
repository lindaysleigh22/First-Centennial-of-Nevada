import { Lock, Shield, CheckCircle2, CreditCard, FileText, UserCheck, Eye, Smartphone, Users, Heart, Home, ArrowRight, Camera, Check, Zap, Award, TrendingUp, MessageSquare, Bell, Search, Send, RefreshCw, DollarSign } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { motion } from 'motion/react';
import { AcornIcon } from '../AcornIcon';
import { animationConfig } from '@/app/utils/animations';
import { AnimatedCounter } from '../AnimatedCounter';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';
import mobileHeroImage from 'figma:asset/d3c41e2e812b39e585b74d00e4760fe594af4c8b.png';
import closingLockLogo from 'figma:asset/1ac8910a27688c35997fe5b3962845d8c5aa719a.png';
import closingLockIcon from 'figma:asset/cb2285b367c4c86298e1c0a0b26f4f468088011a.png';
import fincenCompliance from 'figma:asset/659a3f86685bd01a973a88f66ff67d9fd7a86455.png';
import protectingPeopleImage from 'figma:asset/14f22dfe1f412c51f68b5902a64d63c4664c4526.png';
import fraudPreventionPhoto from 'figma:asset/d2e737f0401d4dc636d864ec1afda2508156e6e1.png';
import { professionalPortrait } from '@/assets/images/website-photos';
import workflowsImage from 'figma:asset/5db41d7fbf8e11534292588d99b0d66dcf1bafa0.png';
import communicationPlatform from 'figma:asset/39e0822eb929597272e90a0f3f816b2cb08a34d9.png';
import virtualClosingCelebration from 'figma:asset/ec6a5c23c049f6eb21416d3ef1202cf62f1fd029.png';
import { videos } from '@/app/assets/videos';

/**
 * CLOSINGLOCK PAGE - ASSET INVENTORY
 * ===================================
 * 
 * PERMANENT LOCAL ASSETS (All using figma:asset - permanent):
 * -----------------------------------------------------------
 * 1. Mobile Hero Image
 *    - Import: figma:asset/d3c41e2e812b39e585b74d00e4760fe594af4c8b.png
 *    - Variable: mobileHeroImage
 *    - Usage: "Closing on the Go" section - Trusted protection for every home closing (couple with phone)
 *    - Description: Shows couple using mobile app with "Account Verified" and "Payment Completed" notifications
 *    - Status: ✅ PERMANENT - Updated Feb 18, 2026
 * 
 * 2. ClosingLock Logo
 *    - Import: figma:asset/1ac8910a27688c35997fe5b3962845d8c5aa719a.png
 *    - Variable: closingLockLogo
 *    - Usage: Hero section - brand logo display
 *    - Status: ✅ PERMANENT
 * 
 * 3. ClosingLock Icon
 *    - Import: figma:asset/cb2285b367c4c86298e1c0a0b26f4f468088011a.png
 *    - Variable: closingLockIcon
 *    - Usage: Badge/icon elements
 *    - Status: ✅ PERMANENT
 * 
 * 4. FinCEN Compliance Badge
 *    - Import: figma:asset/659a3f86685bd01a973a88f66ff67d9fd7a86455.png
 *    - Variable: fincenCompliance
 *    - Usage: Compliance section - official FinCEN badge
 *    - Status: ✅ PERMANENT
 * 
 * 5. Protecting People Image
 *    - Import: figma:asset/14f22dfe1f412c51f68b5902a64d63c4664c4526.png
 *    - Variable: protectingPeopleImage
 *    - Usage: Security/protection section
 *    - Status: ✅ PERMANENT
 * 
 * 6. Fraud Prevention Photo
 *    - Import: figma:asset/d2e737f0401d4dc636d864ec1afda2508156e6e1.png
 *    - Variable: fraudPreventionPhoto
 *    - Usage: Fraud prevention section
 *    - Status: ✅ PERMANENT
 * 
 * 7. Workflows Image
 *    - Import: figma:asset/5db41d7fbf8e11534292588d99b0d66dcf1bafa0.png
 *    - Variable: workflowsImage
 *    - Usage: Workflow automation section
 *    - Status: ✅ PERMANENT
 * 
 * 8. Communication Platform Screenshot (MIGRATED Feb 18, 2026)
 *    - Import: figma:asset/39e0822eb929597272e90a0f3f816b2cb08a34d9.png
 *    - Variable: communicationPlatform
 *    - Usage: Platform features/communications tab - shows messaging interface
 *    - Description: Communication features showing two-way messaging and automated notifications
 *    - Status: ✅ PERMANENT - Background removed, migrated from closinglock.com
 * 
 * 9. Virtual Closing Celebration Photo (MIGRATED Feb 18, 2026)
 *    - Import: figma:asset/ec6a5c23c049f6eb21416d3ef1202cf62f1fd029.png
 *    - Variable: virtualClosingCelebration
 *    - Usage: Hero/testimonial section
 *    - Description: Professional woman celebrating during successful closing meeting with handshake
 *    - Status: ✅ PERMANENT - Migrated from closinglock.com
 * 
 * LOCAL IMPORTS:
 * --------------
 * 10. Professional Portrait
 *     - Import: @/assets/images/website-photos
 *     - Variable: professionalPortrait
 *     - Usage: Team/testimonial sections
 *     - Status: ✅ PERMANENT - Local asset
 * 
 * 11. Videos
 *     - Import: @/app/assets/videos
 *     - Variable: videos
 *     - Usage: Platform demonstrations
 *     - Status: ✅ PERMANENT - Local asset
 * 
 * ICON LIBRARY:
 * -------------
 * - lucide-react: Lock, Shield, CheckCircle2, CreditCard, FileText, UserCheck, 
 *   Eye, Smartphone, Users, Heart, Home, ArrowRight, Camera, Check, Zap, Award, 
 *   TrendingUp, MessageSquare, Bell, Search, Send, RefreshCw, DollarSign
 * - Custom: AcornIcon (brand signature element)
 * 
 * DEVELOPER HANDOFF STATUS:
 * -------------------------
 * ✅ ALL ASSETS ARE PERMANENT - Ready for production deployment
 * ✅ No external URL dependencies
 * ✅ All images use permanent figma:asset scheme or local storage
 * ✅ Zero risk of broken image links
 * ✅ Communication Platform and Virtual Closing images migrated Feb 18, 2026
 */

export function ClosingLock() {
  const [activeTab, setActiveTab] = useState('digital-payments');

  const platformFeatures = [
    {
      icon: CreditCard,
      title: 'SecurePay Digital Payments',
      description: 'Process secure digital payments with confidence, protecting every transaction from fraud.',
    },
    {
      icon: FileText,
      title: 'Secure Wire Instructions',
      description: 'Deliver verified wire instructions securely, eliminating the risk of wire fraud.',
    },
    {
      icon: UserCheck,
      title: 'Identity Verification',
      description: 'Verify all parties with advanced identity verification technology for added security.',
    },
    {
      icon: Lock,
      title: 'Air-Tight Encryption',
      description: 'Bank-grade encryption protects all wire instructions and sensitive payment information.',
    },
  ];

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
            duration: 32,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              {/* Refined badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full backdrop-blur-sm border border-[#333333]/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <AcornIcon className="w-5 h-5" />
                <span className="text-sm font-normal text-[#333333]/70 tracking-wider uppercase">
                  $5M Wire Fraud Protection
                </span>
              </motion.div>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c3937d] to-transparent"></div>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-8">
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  ClosingLock
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Gives title and settlement professionals one secure place to handle and insure payments, knock out daily tasks, and keep everyone informed.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mobile Experience */}
      <section className="py-32 bg-gradient-to-br from-white to-[#f8f6f4] relative overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/3 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#e9a753]/8 to-[#c3937d]/6 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <AnimatedSection>
              <motion.p 
                className="text-xs font-normal tracking-wider text-[#e9a753] mb-4 uppercase"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Mobile Experience
              </motion.p>

              {/* ClosingLock Logo */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={closingLockLogo} 
                  alt="ClosingLock Logo"
                  className="h-8 w-auto"
                />
              </motion.div>

              <h2 className="text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6 leading-tight">
                Closing on the go? We've GOT You Covered.
              </h2>

              <p className="text-lg text-[#333333]/80 font-normal leading-relaxed mb-8">
                First Centennial of Nevada partners with Closing Lock to give our clients a seamless mobile experience from account verification to payment completion. Every step is designed for simplicity and security.
              </p>

              <div className="space-y-4">
                <motion.div 
                  className="flex items-start gap-3"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-base font-normal text-[#333333] mb-1">Instant Verification</h4>
                    <p className="text-sm text-[#333333]/60 font-normal leading-relaxed">
                      Account verification happens in seconds with secure identity checks.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-base font-normal text-[#333333] mb-1">Secure Wire Transfers</h4>
                    <p className="text-sm text-[#333333]/60 font-normal leading-relaxed">
                      Complete wire transfers with verified instructions—simple, fast, and protected.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-base font-normal text-[#333333] mb-1">Real-Time Updates</h4>
                    <p className="text-sm text-[#333333]/60 font-normal leading-relaxed">
                      Get instant notifications at every milestone in the closing process.
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Right - Phone Mockup */}
            <AnimatedSection delay={0.2}>
              <div className="relative flex justify-center items-center">
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#e9a753]/20 to-[#c3937d]/20 blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                />

                {/* Phone mockup container with shadow */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Phone frame shadow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#375357]/20 to-[#c3937d]/20 rounded-[3rem] blur-2xl transform translate-y-8" />
                  
                  {/* Phone frame */}
                  <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-[3rem] p-3 shadow-[0_40px_80px_rgba(0,0,0,0.3)]">
                    {/* Phone notch */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-full z-20" />
                    
                    {/* Screen */}
                    <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
                      {/* Image with overlay for branding */}
                      <div className="relative">
                        <img 
                          src={mobileHeroImage} 
                          alt="Closinglock mobile app experience showing account verified and payment completed"
                          className="w-full h-auto object-cover"
                        />
                        
                        {/* Subtle gradient overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Phone buttons */}
                    <div className="absolute -right-1 top-32 w-1 h-12 bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] rounded-l-sm" />
                    <div className="absolute -right-1 top-48 w-1 h-16 bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] rounded-l-sm" />
                    <div className="absolute -left-1 top-32 w-1 h-8 bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] rounded-r-sm" />
                  </div>

                  {/* Floating notification badge */}
                  <motion.div
                    className="absolute -bottom-4 -left-8 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_10px_40px_rgba(55,83,87,0.2)] border"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderColor: 'rgba(255, 255, 255, 0.5)'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-[#333333]">Payment Completed!</p>
                        <p className="text-xs text-[#333333]/60">Verified & Secured</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating trust badge */}
                  <motion.div
                    className="absolute -top-4 -right-8 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_10px_40px_rgba(55,83,87,0.2)] border"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderColor: 'rgba(255, 255, 255, 0.5)'
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, 8, 0],
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-[#375357]" />
                      <div>
                        <p className="text-xs font-medium text-[#333333]">$5M Protected</p>
                        <p className="text-xs text-[#333333]/60">Bank-Grade Security</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Protecting the People Behind Every Closing */}
      <section className="py-32 bg-gradient-to-br from-white to-[#f8f6f4] relative overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#c3937d]/6 to-[#e9a753]/4 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Main Content - Image + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left - Image */}
            <AnimatedSection>
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <img 
                  src={virtualClosingCelebration}
                  alt="Person celebrating during a virtual closing meeting"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </AnimatedSection>

            {/* Right - Text Content */}
            <AnimatedSection delay={0.2}>
              <motion.p 
                className="text-xs font-medium tracking-wider text-[#e9a753] mb-4 uppercase"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Why ClosingLock?
              </motion.p>

              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#333333] mb-6 leading-tight">
                Protecting the people behind every closing.
              </h2>

              <p className="text-base text-[#333333]/70 font-normal leading-relaxed mb-8">
                Behind every closing is someone's future—and we protect it like it's our own. That's why we've partnered with ClosingLock, a platform built on the deepest commitment to security. Together, we take ownership, act with urgency, and leverage technology that safeguards money, time, and trust, so our clients can close with complete confidence.
              </p>

              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-[#e9a753] font-medium hover:gap-3 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </AnimatedSection>
          </div>

          {/* Stats Banner */}
          <AnimatedSection delay={0.3}>
            <motion.div
              className="bg-gradient-to-r from-[#F08970] to-[#E56750] rounded-3xl p-12 shadow-[0_20px_60px_rgba(240,137,112,0.3)] relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Shimmer effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                  repeatDelay: 1,
                }}
              />
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="text-5xl font-normal text-white mb-2">
                    <AnimatedCounter end={98} duration={2.5} suffix="%" ticker={true} />
                  </div>
                  <div className="text-xs font-medium text-[#333333] uppercase tracking-wider">
                    Identity Verification<br />Pass Rate
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                  <div className="text-5xl font-normal text-white mb-2">
                    <AnimatedCounter end={97} duration={2.5} suffix="%" ticker={true} />
                  </div>
                  <div className="text-xs font-medium text-[#333333] uppercase tracking-wider">
                    Customer Support<br />Satisfaction Rating
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="text-center">
                  <div className="text-5xl font-normal text-white mb-2">
                    <AnimatedCounter end={3} duration={2.5} prefix="$" suffix="B" ticker={true} />
                  </div>
                  <div className="text-xs font-medium text-[#333333] uppercase tracking-wider">
                    Good Funds Protected<br />With SecurePay
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="text-center">
                  <div className="text-5xl font-normal text-white mb-2">
                    <AnimatedCounter end={0} duration={2.5} prefix="$" ticker={true} />
                  </div>
                  <div className="text-xs font-medium text-[#333333] uppercase tracking-wider">
                    Lost To<br />Fraud
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Built for the way title companies want to work */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#e9a753]/6 to-[#c3937d]/4 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#333333] mb-6 leading-tight">
                Built for the way<br />companies want to work.
              </h2>
              <p className="text-lg text-[#333333]/70 font-normal leading-relaxed max-w-3xl mx-auto">
                Closinglock gives title and settlement professionals <span className="font-medium text-[#333333]">one secure place</span> to handle and insure payments, knock out daily tasks, and keep everyone informed.
              </p>
            </div>
          </AnimatedSection>

          {/* Tab Navigation */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {[
                { id: 'digital-payments', label: 'Digital Payments' },
                { id: 'communication', label: 'Communication' },
                { id: 'workflows', label: 'Workflows' },
                { id: 'fraud-prevention', label: 'Fraud Prevention' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs font-normal tracking-wide transition-all duration-500 ${
                    activeTab === tab.id
                      ? 'bg-[#375357] text-white shadow-[0_8px_30px_rgba(55,83,87,0.25)]'
                      : 'bg-[#f8f6f4] text-[#333333]/70 hover:bg-[#e9e4df]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Tab Content */}
          <AnimatedSection delay={0.2}>
            {activeTab === 'fraud-prevention' ? (
              // Original grid layout for fraud prevention matching other tabs
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#375357] to-[#333333] rounded-3xl shadow-[0_30px_80px_rgba(55,83,87,0.3)] overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left - Text Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-normal text-white mb-4 tracking-tight leading-tight">
                        Disappoint fraudsters.
                      </h3>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-white/10">
                        <div>
                          <div className="text-2xl font-bold text-[#e9a753] mb-1 flex items-start">
                            <span>$</span><AnimatedCounter end={3} duration={2} suffix="B" />
                          </div>
                          <div className="text-xs text-white/60">Wire Fraud Loss/Year</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#e9a753] mb-1">
                            <AnimatedCounter end={100} duration={2} suffix="%" />
                          </div>
                          <div className="text-xs text-white/60">Transactions Protected</div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-white/80 font-normal leading-relaxed mb-6">
                        Nearly $3B is lost to real estate wire fraud every year. Protect every dollar with built-in ID verification, secure payments, and payoff protection—so fraudsters never get the chance.
                      </p>
                      
                      {/* Key Benefits */}
                      <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                            <Shield className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                          </div>
                          <div>
                            <h4 className="text-xs font-medium text-white mb-0.5">Encrypted Wire Instructions</h4>
                            <p className="text-xs text-white/60 leading-relaxed">Send and receive verified wire instructions through Closinglock's encrypted portal.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                            <FileText className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                          </div>
                          <div>
                            <h4 className="text-xs font-medium text-white mb-0.5">Wire Certificate</h4>
                            <p className="text-xs text-white/60 leading-relaxed">Download a Wire Certificate so your team has clear documentation for audits and internal reviews.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                          </div>
                          <div>
                            <h4 className="text-xs font-medium text-white mb-0.5">Plaid Account Verification</h4>
                            <p className="text-xs text-white/60 leading-relaxed">Verify account details through Plaid, which connects to thousands of financial institutions for added assurance.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                            <Lock className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                          </div>
                          <div>
                            <h4 className="text-xs font-medium text-white mb-0.5">Multi-Factor Authentication</h4>
                            <p className="text-xs text-white/60 leading-relaxed">Give clients secure access through multi-factor authentication without apps, downloads, or passwords.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                            <DollarSign className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                          </div>
                          <div>
                            <h4 className="text-xs font-medium text-white mb-0.5">$5M Insurance Coverage</h4>
                            <p className="text-xs text-white/60 leading-relaxed">Closinglock includes insurance coverage up to $5M for wire instructions verified through Closinglock.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Phone Mockup */}
                  <div className="bg-gradient-to-br from-[#4a5f63] to-[#375357] p-8 lg:p-12 relative overflow-hidden min-h-[380px] flex items-center justify-center">
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#e9a753]/5 via-transparent to-[#c3937d]/5"></div>
                    
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Background Image - Person */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={professionalPortrait}
                          alt="Professional person using identity verification"
                          className="w-full h-full object-cover rounded-xl opacity-50 blur-[1px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#375357]/10 to-[#375357]/30 rounded-xl"></div>
                      </div>
                      
                      {/* Phone Mockup with Face ID */}
                      <motion.div
                        className="relative z-10 pointer-events-none"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="relative w-64 h-auto bg-white rounded-[1.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.4)] border-[6px] border-gray-900 overflow-hidden">
                          <div className="bg-white p-6">
                            <motion.div
                              className="flex items-center gap-2 mb-5"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.3, duration: 0.5 }}
                            >
                              <Lock className="w-5 h-5 text-[#E56750]" />
                              <span className="text-sm font-semibold text-[#333333]">Closinglock</span>
                            </motion.div>
                            
                            <motion.h4
                              className="text-lg font-bold text-[#333333] mb-2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.5, duration: 0.5 }}
                            >
                              Face ID Verification
                            </motion.h4>
                            
                            <motion.p
                              className="text-xs text-[#333333]/60 mb-5"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.7, duration: 0.5 }}
                            >
                              Slowly rotate your head in a circle to complete verification
                            </motion.p>
                            
                            <motion.div
                              className="relative bg-gray-100 rounded-2xl aspect-square mb-5 flex items-center justify-center overflow-hidden"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.9, duration: 0.5 }}
                            >
                              <motion.div
                                className="absolute inset-0 flex items-center justify-center overflow-hidden"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2.3, duration: 0.8 }}
                              >
                                <img
                                  src={professionalPortrait}
                                  alt="Face ID verification"
                                  className="w-full h-full object-cover scale-[1.3]"
                                  style={{ objectPosition: '55% 45%' }}
                                />
                              </motion.div>
                              
                              <motion.svg
                                className="absolute inset-0 w-full h-full p-6"
                                viewBox="0 0 200 200"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.4 }}
                                transition={{ delay: 2.2, duration: 0.5 }}
                              >
                                <circle
                                  cx="100"
                                  cy="100"
                                  r="85"
                                  fill="none"
                                stroke="#E5E7EB"
                                strokeWidth="4"
                              />
                              
                              <motion.circle
                                cx="100"
                                cy="100"
                                r="85"
                                fill="none"
                                stroke="#E56750"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="534"
                                initial={{ strokeDashoffset: 534 }}
                                animate={{ 
                                  strokeDashoffset: [534, 0, 0],
                                  rotate: [0, 0, 360]
                                }}
                                transition={{ 
                                  delay: 2.5,
                                  duration: 4,
                                  times: [0, 0.7, 1],
                                  ease: "easeInOut"
                                }}
                                style={{ originX: '50%', originY: '50%' }}
                              />
                            </motion.svg>
                            
                            <motion.div
                              className="absolute inset-0 flex items-center justify-center bg-[#E56750]/10"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 6.5, duration: 0.5 }}
                            >
                              <div className="bg-[#E56750] rounded-full p-3">
                                <Check className="w-8 h-8 text-white" strokeWidth={3} />
                              </div>
                            </motion.div>
                          </motion.div>
                          
                          <motion.div
                            className="text-center mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.3, duration: 0.5 }}
                          >
                            <motion.p
                              className="text-xs font-semibold text-[#333333]"
                              initial={{ opacity: 1 }}
                              animate={{ opacity: [1, 1, 0] }}
                              transition={{ delay: 2.5, duration: 4, times: [0, 0.85, 1] }}
                            >
                              Scanning...
                            </motion.p>
                            <motion.p
                              className="text-xs font-semibold text-[#E56750]"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 6.5, duration: 0.5 }}
                            >
                              Identity Confirmed ✓
                            </motion.p>
                          </motion.div>
                          
                          <motion.button
                            className="w-full py-3 bg-[#E56750] text-white text-sm font-semibold rounded-xl shadow-lg"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 6.8, duration: 0.5 }}
                          >
                            Continue
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            ) : (
              // Original grid layout for other tabs
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#375357] to-[#333333] rounded-3xl shadow-[0_30px_80px_rgba(55,83,87,0.3)] overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left - Text Content */}
                  <div className="p-12 lg:p-16 flex flex-col justify-between">
                    {activeTab === 'digital-payments' && (
                    <>
                      <div>
                        <h3 className="text-3xl sm:text-4xl font-normal text-white mb-6 tracking-tight leading-tight">
                          Secure every payment, from earnest money deposits to cash to close.
                        </h3>
                        <p className="text-base text-white/80 font-normal leading-relaxed mb-8">
                          Secure the money coming in and out of escrow. Provide buyers and sellers a more convenient way to pay their earnest money deposit and cash to close.
                        </p>
                        
                        {/* Key Benefits */}
                        <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                              <Send className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-white mb-0.5">Secure Payment Requests</h4>
                              <p className="text-xs text-white/60 leading-relaxed">Send secure payment requests directly from Closinglock.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                              <Smartphone className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-white mb-0.5">Fast Online Payments</h4>
                              <p className="text-xs text-white/60 leading-relaxed">Buyers pay online in minutes with no apps or bank visits.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                              <CheckCircle2 className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-white mb-0.5">Bank Verification</h4>
                              <p className="text-xs text-white/60 leading-relaxed">Plaid verifies bank details before funds move.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                              <RefreshCw className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-white mb-0.5">Real-Time Updates</h4>
                              <p className="text-xs text-white/60 leading-relaxed">Receive real-time updates as payments are sent and received.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === 'communication' && (
                    <>
                      <div>
                        <h3 className="text-3xl sm:text-4xl font-normal text-white mb-6 tracking-tight leading-tight">
                          Visibility for all parties at every step of the closing process.
                        </h3>
                        <p className="text-base text-white/80 font-normal leading-relaxed mb-8">
                          That phone call you're dreading? Forget about it. Use our communication suite to keep everyone on the same page with automated updates, real-time progress tracking, and two-way texting.
                        </p>
                        
                        {/* Key Benefits */}
                        <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                              <MessageSquare className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-white mb-0.5">Secure Conversations</h4>
                              <p className="text-xs text-white/60 leading-relaxed">Centralize and protect all your client messages in Closinglock's secure conversation tab, which lives inside each client's file.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                              <Bell className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-white mb-0.5">Real-Time Alerts</h4>
                              <p className="text-xs text-white/60 leading-relaxed">On-screen notifications let you respond quickly and keep closings on track.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                              <FileText className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-white mb-0.5">Dedicated Info Panel</h4>
                              <p className="text-xs text-white/60 leading-relaxed">Access related information via a dedicated panel for associated files, key participants, property info, and closing dates.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                              <Search className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-white mb-0.5">Quick Search</h4>
                              <p className="text-xs text-white/60 leading-relaxed">Quickly search conversations by phone number, property address, or file number.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === 'workflows' && (
                    <>
                      <div>
                        <h3 className="text-3xl sm:text-4xl font-normal text-white mb-6 tracking-tight leading-tight">
                          eSignature solutions built for title and escrow.
                        </h3>
                        
                        <p className="text-base text-white/80 font-normal leading-relaxed mb-8">
                          Closinglock unifies document sharing, eSigning, and fraud prevention into one secure platform, so you don't need multiple vendors or extra logins. Learn more about Closinglock's Communication & Workflow tools that help streamline every step of the closing.
                        </p>
                        
                        {/* Key Benefits */}
                        <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                              <Smartphone className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-white mb-0.5">Sign From Any Device</h4>
                              <p className="text-xs text-white/60 leading-relaxed">Offer clients an easy way to sign closing documents from any device, no login required.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                              <FileText className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-white mb-0.5">Secure Document Management</h4>
                              <p className="text-xs text-white/60 leading-relaxed">Store, share, and verify documents from inside Closinglock's secure escrow management platform.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                              <Shield className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-white mb-0.5">Enterprise-Grade Security</h4>
                              <p className="text-xs text-white/60 leading-relaxed">Safeguard each signature with tamper-evident seals, 256-bit AES encryption, and ESIGN Act-compliant audit trails.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#e9a753]/20 flex items-center justify-center">
                              <Zap className="w-3 h-3 text-[#e9a753]" strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-white mb-0.5">83% Faster Turnaround</h4>
                              <p className="text-xs text-white/60 leading-relaxed">Accelerate turnaround time by up to 83%, so you can close on time while maintaining a professional, compliant workflow.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Right - Image Placeholder */}
                <div className="relative bg-gradient-to-br from-[#4a5f63] to-[#375357] p-12 lg:p-16 flex items-center justify-center">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e9a753]/5 via-transparent to-[#c3937d]/5"></div>
                  
                  {activeTab === 'communication' ? (
                    // Single image for Communication tab
                    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
                      <img
                        src={communicationPlatform}
                        alt="Communication features showing two-way messaging and automated notifications"
                        className="w-full h-full object-contain scale-110"
                      />
                      
                      {/* Animated Dashed Half Square Outline */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        style={{ padding: '10%' }}
                      >
                        {/* Top line - animates left to right */}
                        <motion.line
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                          stroke="#e9a753"
                          strokeWidth="3"
                          strokeDasharray="8 8"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                          strokeLinecap="round"
                        />
                        
                        {/* Right line - animates top to bottom, stops at 50% */}
                        <motion.line
                          x1="100%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                          stroke="#e9a753"
                          strokeWidth="3"
                          strokeDasharray="8 8"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 0.5 }}
                          transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  ) : activeTab === 'workflows' ? (
                    // Image for Workflows tab
                    <div className="relative w-full h-full min-h-[400px] flex items-end justify-center overflow-hidden bg-gradient-to-br from-[#4a5f63] to-[#375357] p-8 lg:p-12">
                      {/* Background Image - Professional with laptop */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={workflowsImage}
                          alt="Professional working on laptop with digital workflows"
                          className="w-full h-full object-cover rounded-xl opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#375357]/5 to-[#375357]/15 rounded-xl"></div>
                      </div>

                      <div className="w-auto h-auto relative z-10 mb-8">
                        {/* Animated Signature Overlay - DocuSign Style */}
                        <motion.div
                          className="relative pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5, duration: 0.8 }}
                        >
                          {/* Signature container with frosted background */}
                          <div className="relative backdrop-blur-sm bg-white/90 rounded-lg px-6 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-white/50">
                            {/* "Sign Here" label */}
                            <motion.div
                              className="text-xs text-[#333333]/50 mb-1 font-normal tracking-wide"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.5, duration: 0.5 }}
                            >
                              Signature
                            </motion.div>
                            
                            {/* Animated signature SVG */}
                            <svg 
                              width="220" 
                              height="65" 
                              viewBox="0 0 220 65" 
                              fill="none" 
                              xmlns="http://www.w3.org/2000/svg"
                              className="relative"
                            >
                              {/* Main signature path - matching the reference image */}
                              <motion.path
                                d="M 20 45 Q 30 28, 45 22 Q 55 18, 60 25 Q 65 35, 58 42 Q 52 48, 45 48 Q 38 48, 35 42 Q 32 38, 38 35 Q 45 32, 52 35 L 58 38 Q 62 32, 65 22 Q 67 18, 69 22 Q 71 28, 69 32 Q 67 36, 65 32 Q 63 26, 66 22 Q 68 20, 70 24 Q 72 30, 70 35 L 68 42 Q 70 42, 85 40 Q 115 38, 145 37 Q 175 36, 205 35"
                                stroke="#1a1a1a"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{
                                  pathLength: { delay: 2, duration: 2.8, ease: [0.16, 1, 0.3, 1] },
                                  opacity: { delay: 2, duration: 0.3 }
                                }}
                                style={{
                                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                                }}
                              />
                            </svg>
                            
                            {/* Timestamp - DocuSign style */}
                            <motion.div
                              className="text-[10px] text-[#333333]/40 mt-2 font-normal"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 4.5, duration: 0.5 }}
                            >
                              Signed: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </motion.div>
                            
                            {/* Checkmark indicator */}
                            <motion.div
                              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center shadow-lg"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 4.8, duration: 0.4, type: "spring", stiffness: 200 }}
                            >
                              <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    // Video for other tabs
                    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
                      {/* Frosted shadow layer */}
                      <div className="absolute inset-0 backdrop-blur-xl bg-white/10 rounded-md shadow-[0_30px_80px_rgba(0,0,0,0.4)] translate-y-2"></div>
                      
                      {/* Video - Different for Digital Payments */}
                      <div className="relative z-10 w-full h-full rounded-md overflow-hidden" style={{ paddingBottom: '56.286%', position: 'relative' }}>
                        <iframe 
                          allow="fullscreen;autoplay" 
                          allowFullScreen 
                          src={videos.closingLock.demo} 
                          style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, overflow: 'hidden' }}
                          className="rounded-md"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
