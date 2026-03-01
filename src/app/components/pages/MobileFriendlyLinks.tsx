import { MapPin, Calculator, FileText, Smartphone, Download, ArrowRight, Zap, Search, TrendingUp, Shield, Clock, CheckCircle2, Camera, Navigation, DollarSign, Home, Map } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { motion } from 'motion/react';
import { AcornIcon } from '../AcornIcon';
import { animationConfig } from '@/app/utils/animations';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';
import { videos } from '@/app/assets/videos';

export function MobileFarmingApp() {
  const [activeFeature, setActiveFeature] = useState(0);

  const coreFeatures = [
    {
      icon: MapPin,
      title: 'Search Properties by Map, GPS, or Fields',
      description: 'Find properties using interactive map view, GPS location, or detailed search fields. Take a photo of a property to set a pinned location.',
      highlight: 'GPS Enabled',
    },
    {
      icon: Calculator,
      title: 'Quick Net Sheet and Calculator',
      description: 'Generate reports using our Quick Net Sheet and Calculator. Instant access to accurate closing cost estimates for any transaction.',
      highlight: 'Instant Results',
    },
    {
      icon: TrendingUp,
      title: 'Title and Escrow Rate Calculator',
      description: 'Calculate title insurance and escrow fees instantly. Get transparent pricing and accurate estimates for your clients.',
      highlight: 'Real-Time Rates',
    },
    {
      icon: FileText,
      title: 'Common Real Estate Documents',
      description: 'Instant access to common real estate documents and forms. Everything you need for smooth transactions at your fingertips.',
      highlight: 'Always Available',
    },
  ];

  const benefits = [
    {
      icon: Search,
      title: 'Search by Map or GPS',
      description: 'Find properties using interactive maps, GPS coordinates, or filter by specific search criteria.',
    },
    {
      icon: Zap,
      title: 'Instant Calculations',
      description: 'Get closing cost estimates and rate quotes in seconds—right from your phone or tablet.',
    },
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'Bank-grade security protects your data and client information at all times.',
    },
    {
      icon: Clock,
      title: 'Work On-The-Go',
      description: 'Access everything you need while showing properties, at open houses, or meeting with clients.',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Search Properties',
      description: 'Use GPS, map view, or field search to find properties instantly. Take a photo to set location pins.',
      icon: Map,
    },
    {
      step: '02',
      title: 'Calculate Costs',
      description: 'Generate net sheets and calculate closing costs in seconds. Get accurate estimates on the spot.',
      icon: Calculator,
    },
    {
      step: '03',
      title: 'Access Documents',
      description: 'Find and share essential real estate forms instantly. Everything you need in your pocket.',
      icon: FileText,
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
                  Mobile Farming Tools
                </span>
              </motion.div>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c3937d] to-transparent"></div>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-8">
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  FCT Mobile
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Your gateway to powerful Real Estate and Title tools. Fast and intuitive access to property search, closing cost calculators, and essential documents.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mobile Experience Section */}
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

              <h2 className="text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6 leading-tight">
                Essential Tools for Agents On-The-Go
              </h2>

              <p className="text-lg text-[#333333]/80 font-normal leading-relaxed mb-8">
                FCT Mobile provides fast and intuitive access to property search, closing cost calculators, rate calculators, and essential real estate documents—all optimized for agents on the go.
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
                    <h4 className="text-base font-normal text-[#333333] mb-1">GPS Property Search</h4>
                    <p className="text-sm text-[#333333]/60 font-normal leading-relaxed">
                      Search properties by map, GPS, or detailed fields. Take photos to pin locations.
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
                    <h4 className="text-base font-normal text-[#333333] mb-1">Quick Net Sheet & Calculators</h4>
                    <p className="text-sm text-[#333333]/60 font-normal leading-relaxed">
                      Generate instant closing cost estimates and title rate calculations in seconds.
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
                    <h4 className="text-base font-normal text-[#333333] mb-1">Essential Documents</h4>
                    <p className="text-sm text-[#333333]/60 font-normal leading-relaxed">
                      Access common real estate documents and forms anytime, anywhere.
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Right - Video Showcase */}
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

                {/* iPad Video Container */}
                <motion.div
                  className="relative w-full max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* iPad frame shadow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#375357]/20 to-[#c3937d]/20 rounded-[2.5rem] blur-2xl transform translate-y-8" />
                  
                  {/* iPad frame */}
                  <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-[2.5rem] p-4 shadow-[0_40px_80px_rgba(0,0,0,0.3)]">
                    {/* iPad camera */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a0a0a] rounded-full z-20 ring-2 ring-[#1a1a1a]" />
                    
                    {/* Screen */}
                    <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[4/3]">
                      <div className="relative w-full h-full overflow-hidden">
                        <iframe 
                          allow="fullscreen;autoplay" 
                          allowFullScreen 
                          src={videos.mobileFarmingApp.demo} 
                          className="border-none"
                          style={{ 
                            border: 'none', 
                            width: '120%', 
                            height: '120%', 
                            position: 'absolute', 
                            left: '-10%', 
                            top: '-10%', 
                            overflow: 'hidden' 
                          }}
                        />
                      </div>
                      
                      {/* Subtle gradient overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                    </div>

                    {/* iPad home indicator (bottom center) */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#333333]/30 rounded-full" />
                  </div>

                  {/* Floating notification badge - left side */}
                  <motion.div
                    className="absolute -bottom-6 -left-8 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_10px_40px_rgba(55,83,87,0.2)] border"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderColor: 'rgba(255, 255, 255, 0.5)'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 0.4 },
                      x: { duration: 0.6, delay: 0.4 },
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-[#333333]">Property Found</p>
                        <p className="text-xs text-[#333333]/60">3 matches nearby</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating trust badge - right side */}
                  <motion.div
                    className="absolute -top-6 -right-8 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_10px_40px_rgba(55,83,87,0.2)] border"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderColor: 'rgba(255, 255, 255, 0.5)'
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, 8, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 0.6 },
                      x: { duration: 0.6, delay: 0.6 },
                      y: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#375357]" strokeWidth={2} />
                      <p className="text-xs font-medium text-[#333333]">Secure & Trusted</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <motion.p 
                className="text-xs font-normal tracking-wider text-[#e9a753] mb-4 uppercase"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Platform Features
              </motion.p>
              <h2 className="text-5xl lg:text-6xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6">
                Everything You Need
              </h2>
              <p className="text-xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Powerful tools designed specifically for real estate professionals who work in the field.
              </p>
            </div>
          </AnimatedSection>

          {/* Features Grid with App Screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left - App Screenshot */}
            <AnimatedSection delay={0.1}>
              <div className="relative flex justify-center lg:justify-end">
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-gradient-to-br from-[#e9a753]/15 to-[#c3937d]/15 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                />

                <motion.div
                  className="relative max-w-xs"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.03 }}
                >
                  {/* Phone shadow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#375357]/20 to-[#c3937d]/20 rounded-[3rem] blur-2xl transform translate-y-8" />
                  
                  {/* Phone frame */}
                  <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-[3rem] p-2.5 shadow-[0_40px_80px_rgba(0,0,0,0.3)]">
                    {/* Phone notch */}
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1a1a1a] rounded-full z-20" />
                    
                    {/* Screen */}
                    <div className="relative bg-white rounded-[2.7rem] overflow-hidden">
                      <ImageWithFallback
                        src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/8f/c4/44/8fc4448f-f5a3-3f3f-e23c-143e0fc2150e/891faf2e-cf59-45bf-9500-2f8f223715cf_Simulator_Screen_Shot_-_iPhone_12_-_2021-09-13_at_14.43.02.png/460x996bb.webp"
                        alt="FCT Mobile app property search interface"
                        className="w-full h-auto"
                      />
                      
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                    </div>

                    {/* Phone buttons */}
                    <div className="absolute -right-0.5 top-28 w-0.5 h-10 bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] rounded-l-sm" />
                    <div className="absolute -right-0.5 top-40 w-0.5 h-14 bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] rounded-l-sm" />
                    <div className="absolute -left-0.5 top-28 w-0.5 h-7 bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] rounded-r-sm" />
                  </div>

                  {/* Floating feature badge */}
                  <motion.div
                    className="absolute -bottom-6 -right-6 backdrop-blur-md rounded-2xl px-5 py-4 shadow-[0_10px_40px_rgba(55,83,87,0.2)] border"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderColor: 'rgba(255, 255, 255, 0.5)'
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 0.5 },
                      scale: { duration: 0.6, delay: 0.5 },
                      y: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#333333]">Live & Ready</p>
                        <p className="text-xs text-[#333333]/60">Download Now</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Right - Feature Highlights */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <motion.div
                  className="group"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <MapPin className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-xl font-normal text-[#333333] mb-2">GPS-Powered Search</h4>
                      <p className="text-sm text-[#333333]/70 font-normal leading-relaxed">
                        Find properties instantly using map view, GPS coordinates, or detailed field search. Take photos to mark exact locations.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="group"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Calculator className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-xl font-normal text-[#333333] mb-2">Instant Cost Estimates</h4>
                      <p className="text-sm text-[#333333]/70 font-normal leading-relaxed">
                        Generate quick net sheets and calculate closing costs on the spot. Share accurate estimates with clients immediately.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="group"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <FileText className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-xl font-normal text-[#333333] mb-2">Always-On Document Access</h4>
                      <p className="text-sm text-[#333333]/70 font-normal leading-relaxed">
                        Access essential real estate documents and forms 24/7. Everything you need at your fingertips.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="group"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <TrendingUp className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-xl font-normal text-[#333333] mb-2">Rate Calculator</h4>
                      <p className="text-sm text-[#333333]/70 font-normal leading-relaxed">
                        Calculate title insurance and escrow fees in real-time with transparent, up-to-date pricing.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-gradient-to-br from-[#f8f6f4] to-white rounded-3xl p-10 border border-[#333333]/[0.06] hover:border-[#c3937d]/20 transition-all duration-800 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#375357]/[0.02] via-transparent to-[#c3937d]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                  
                  <div className="relative">
                    {/* Icon with badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xs font-normal text-[#e9a753] tracking-wider uppercase">
                        {feature.highlight}
                      </span>
                    </div>

                    <h3 className="text-2xl font-normal text-[#333333] mb-4 tracking-tight">
                      {feature.title}
                    </h3>

                    <p className="text-base text-[#333333]/70 font-normal leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r from-[#375357] via-[#c3937d] to-[#e9a753] opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Steps Section */}
      <section className="py-32 bg-gradient-to-b from-[#f8f6f4] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="flex justify-center mb-6">
                <AcornIcon className="w-16 h-16" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6">
                How It Works
              </h2>
              <p className="text-xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Three simple steps to access powerful real estate tools wherever your business takes you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-px">
              <motion.div
                className="h-full bg-gradient-to-r from-[#c3937d]/20 via-[#375357]/30 to-[#c3937d]/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>

            {workflowSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 0.2}>
                  <motion.div
                    className="relative group h-full"
                    whileHover={{ y: -12 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <div className="bg-gradient-to-br from-[#f8f6f4] to-white rounded-3xl p-10 h-full relative overflow-hidden border border-[#333333]/[0.03] group-hover:border-[#c3937d]/20 transition-all duration-700 shadow-[0_8px_30px_rgba(0,0,0,0.02)] group-hover:shadow-[0_20px_60px_rgba(55,83,87,0.08)]">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#375357]/[0.01] to-[#c3937d]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      <div className="relative space-y-6">
                        {/* Icon badge */}
                        <motion.div
                          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center mb-6 group-hover:from-[#375357]/15 group-hover:to-[#c3937d]/15 transition-all duration-700"
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-8 h-8 text-[#375357]" strokeWidth={1.5} />
                        </motion.div>
                        
                        {/* Step number badge */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl">
                          <span className="text-white font-light text-lg">{item.step}</span>
                        </div>
                        
                        {/* Large background number */}
                        <motion.div 
                          className="absolute top-8 right-8 text-8xl font-extralight opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 0.03 }}
                          transition={{ duration: 0.6, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {item.step}
                        </motion.div>
                        
                        <div>
                          <h3 className="text-2xl font-light text-[#333333] mb-3 tracking-tight">
                            {item.title}
                          </h3>
                          <p className="text-sm text-[#333333]/60 font-normal leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <motion.p 
                className="text-xs font-normal tracking-wider text-[#e9a753] mb-4 uppercase"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Why Agents Love It
              </motion.p>
              <h2 className="text-5xl lg:text-6xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6">
                Built for Real Estate Pros
              </h2>
              <p className="text-xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Powerful capabilities designed for agents who need results without complexity.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-gradient-to-br from-[#f8f6f4] to-white rounded-3xl p-8 border border-[#333333]/[0.06] hover:border-[#c3937d]/20 transition-all duration-800 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] h-full"
                  whileHover={{ y: -4 }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-normal text-[#333333] mb-3 tracking-tight">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-[#333333]/70 font-normal leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Premium hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r from-[#375357] via-[#c3937d] to-[#e9a753] opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-gradient-to-br from-[#f8f6f4] via-[#e9e4df]/40 to-[#f8f6f4] relative overflow-hidden">
        {/* Premium orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(233, 167, 83, 0.06) 0%, rgba(195, 147, 125, 0.03) 50%, transparent 100%)'
            }}
          />
        </motion.div>

        <div className="max-w-5xl mx-auto px-8 lg:px-12 text-center relative z-10">
          <AnimatedSection>
            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c3937d] to-transparent mb-8"></div>
            </motion.div>

            <h3 className="text-5xl sm:text-6xl font-light text-[#333333] mb-8 tracking-tight">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-[#333333]/50 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Join thousands of real estate professionals who trust FCT Mobile for essential tools and resources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
                href="/contact" 
                className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-[#375357] to-[#2a3d41] text-white font-normal overflow-hidden shadow-[0_8px_30px_rgba(55,83,87,0.15)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.25)] transition-all duration-500"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Contact Our Team</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
              </motion.a>
              
              <motion.a 
                href="/services" 
                className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-white/80 backdrop-blur-sm text-[#333333] font-normal border border-[#333333]/10 hover:border-[#375357]/30 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.1)] transition-all duration-500"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View All Services</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
