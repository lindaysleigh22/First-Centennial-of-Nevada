import { FileText, Home, Briefcase, FileCheck, ArrowRight, Shield, Clock, Award, Users } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { motion } from 'motion/react';
import { AcornIcon } from '../AcornIcon';
import { animationConfig } from '@/app/utils/animations';
import documentServicesImage from 'figma:asset/0a94f66329be2ecae422753a2f04b0f9befa1eb7.png';
import titleInsuranceImage from 'figma:asset/d65d1fab480a50eae79e0772fdaef7469aac9790.png';
import commercialServicesImage from 'figma:asset/434f662b0aa6ff73ddae81b2d9d8eaeb005cd7c9.png';
import residentialEscrowImage from 'figma:asset/a6e5f5d5a96f2fce623f8bdbfd3ce4f2eeb0751d.png';

export function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Title Insurance',
      description:
        'Comprehensive title examination and insurance policies protecting your property rights against defects and claims.',
      features: [
        'Thorough title searches',
        'Owners title insurance',
        'Lenders title insurance',
        'Title defect resolution',
      ],
      detail: 'Safeguarding your most valuable asset with meticulous attention to every detail.',
      image: titleInsuranceImage,
    },
    {
      icon: Home,
      title: 'Residential Escrow',
      description:
        'Full-service escrow management for residential property transactions, ensuring smooth closings from contract to keys.',
      features: [
        'Purchase transactions',
        'Refinance closings',
        'Home equity lines',
        'Short sale processing',
      ],
      detail: 'White-glove service for your home purchase or refinance journey.',
      image: residentialEscrowImage,
    },
    {
      icon: Briefcase,
      title: 'Commercial Services',
      description:
        'Specialized handling of complex commercial real estate transactions with attention to unique business requirements.',
      features: [
        'Commercial purchases',
        'Multi-unit properties',
        '1031 exchanges',
        'Construction loans',
      ],
      detail: 'Sophisticated solutions for complex commercial transactions.',
      image: commercialServicesImage,
    },
    {
      icon: FileCheck,
      title: 'Document Services',
      description:
        'Professional preparation and recording of all necessary legal documents for your real estate transaction.',
      features: [
        'Deed preparation',
        'Document recording',
        'Notary services',
        'Mobile signings',
      ],
      detail: 'Precision document handling with executive-level service.',
      image: documentServicesImage,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4]">
      {/* Hero Section - Ultra Premium */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6f4] via-white to-[#e9e4df]/30">
        {/* Premium geometric background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-20 w-px h-96 bg-[#375357] rotate-12"></div>
          <div className="absolute top-40 right-32 w-px h-80 bg-[#c3937d] -rotate-12"></div>
          <div className="absolute bottom-20 left-1/3 w-px h-64 bg-[#375357] rotate-6"></div>
        </div>

        {/* Ultra-subtle floating orbs */}
        <motion.div
          className="absolute top-32 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(233, 167, 83, 0.04) 0%, rgba(195, 147, 125, 0.02) 50%, transparent 100%)'
            }}
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(55, 83, 87, 0.04) 0%, rgba(195, 147, 125, 0.02) 50%, transparent 100%)'
            }}
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-40 pb-32 relative z-10">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto text-center">
              {/* Refined subheading */}
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-[#333333]/5 shadow-[0_2px_20px_rgba(55,83,87,0.04)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <AcornIcon className="w-5 h-5" />
                <span className="text-sm font-normal text-[#333333]/70 tracking-wider uppercase">
                  Since 1979
                </span>
              </motion.div>

              {/* Hero headline */}
              <motion.h1 
                className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="block bg-gradient-to-r from-[#333333] via-[#375357] to-[#333333] bg-clip-text text-transparent">
                  Premium Title &
                </span>
                <span className="block bg-gradient-to-r from-[#c3937d] via-[#e9a753] to-[#c3937d] bg-clip-text text-transparent">
                  Escrow Services
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl text-[#333333]/50 font-light leading-relaxed max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Exceptional service meets unparalleled expertise in every transaction
              </motion.p>

              {/* Elegant divider */}
              <motion.div
                className="flex items-center justify-center gap-4 mb-16"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
              >
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c3937d]/30 to-[#c3937d]/30"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#c3937d]/40"></div>
                <div className="h-px w-20 bg-gradient-to-l from-transparent via-[#c3937d]/30 to-[#c3937d]/30"></div>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {[
                  { icon: Shield, label: 'Fully Insured' },
                  { icon: Clock, label: '45+ Years' },
                  { icon: Award, label: 'Award Winning' },
                  { icon: Users, label: '50K+ Clients' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="flex flex-col items-center gap-3 group"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#375357]/5 to-[#c3937d]/5 flex items-center justify-center group-hover:from-[#375357]/10 group-hover:to-[#c3937d]/10 transition-all duration-500">
                        <Icon className="w-6 h-6 text-[#375357]" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-normal text-[#333333]/60">{item.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Grid - Luxury Layout */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#333333]/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-24">
              <motion.div
                className="inline-block mb-6 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c3937d] to-transparent mb-8"></div>
              </motion.div>
              <h2 className="text-5xl sm:text-6xl font-light tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6">
                Our Expertise
              </h2>
              <p className="text-xl text-[#333333]/50 font-light max-w-2xl mx-auto">
                Bespoke solutions crafted for discerning clients
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <motion.div
                    className="group relative bg-gradient-to-br from-[#f8f6f4] to-white rounded-[2rem] overflow-hidden"
                    whileHover={{ y: -12 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {/* Hover gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#375357]/[0.02] via-transparent to-[#c3937d]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    
                    {/* Premium border effect */}
                    <div className="absolute inset-0 rounded-[2rem] border border-[#333333]/[0.03] group-hover:border-[#c3937d]/20 transition-colors duration-700"></div>
                    
                    {/* Subtle corner accents */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-8 right-8 w-16 h-px bg-gradient-to-l from-[#c3937d]/20 to-transparent"></div>
                      <div className="absolute top-8 right-8 w-px h-16 bg-gradient-to-b from-[#c3937d]/20 to-transparent"></div>
                    </div>
                    
                    <div className="relative p-12">
                      {/* Icon with sophisticated styling OR Image for Document Services */}
                      {service.image ? (
                        <motion.div 
                          className="mb-8 relative inline-block"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="relative w-24 h-24 overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_60px_rgba(55,83,87,0.15)] transition-all duration-700">
                            <img 
                              src={service.image} 
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="mb-8 relative inline-block"
                          whileHover={{ rotate: [0, -8, 8, 0] }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#375357] to-[#c3937d] rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                          <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center group-hover:from-[#375357]/15 group-hover:to-[#c3937d]/15 transition-all duration-700">
                            <Icon className="w-12 h-12 text-[#375357]" strokeWidth={1.5} />
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Content */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl font-light text-[#333333] mb-3 tracking-tight">
                            {service.title}
                          </h3>
                          <p className="text-[#333333]/40 font-light text-sm tracking-wide mb-4">
                            {service.detail}
                          </p>
                        </div>
                        
                        <p className="text-[#333333]/60 font-normal leading-relaxed text-base">
                          {service.description}
                        </p>
                        
                        {/* Features with refined styling */}
                        <div className="pt-6 space-y-4">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-4 group/item"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <motion.div 
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center group-hover/item:from-[#375357]/20 group-hover/item:to-[#c3937d]/20 transition-all duration-500"
                              >
                                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#375357] to-[#c3937d]"></div>
                              </motion.div>
                              <span className="text-[#333333]/70 font-normal text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Elegant CTA */}
                        <motion.div
                          className="pt-8 flex items-center gap-3 text-[#375357] opacity-0 group-hover:opacity-100 transition-all duration-700"
                          whileHover={{ x: 8 }}
                        >
                          <span className="text-sm font-normal tracking-wide">Learn More</span>
                          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                        </motion.div>
                      </div>

                      {/* Bottom accent line */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c3937d]/0 to-transparent group-hover:via-[#c3937d]/30 transition-all duration-700"
                      ></motion.div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Ultra Premium */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Refined background decoration */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 border border-[#c3937d] rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-[#375357] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-32">
              <motion.div
                className="inline-block mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c3937d] to-transparent mb-8"></div>
              </motion.div>
              <h2 className="text-5xl sm:text-6xl font-light tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6">
                Our Process
              </h2>
              <p className="text-xl text-[#333333]/50 font-light leading-relaxed max-w-2xl mx-auto">
                A refined journey from opening to closing, orchestrated with precision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Elegant connection line - desktop only */}
              <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-px">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#c3937d]/20 via-[#375357]/30 to-[#c3937d]/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              
              {[
                { 
                  step: '01', 
                  title: 'Order Placement', 
                  desc: 'Seamless initiation through our secure online portal or personalized consultation with your dedicated account manager.',
                  icon: FileText
                },
                { 
                  step: '02', 
                  title: 'Title Search', 
                  desc: 'Comprehensive examination conducted by our veteran title officers, uncovering every detail with forensic precision.',
                  icon: Shield
                },
                { 
                  step: '03', 
                  title: 'Documentation', 
                  desc: 'Meticulous preparation of all documents, coordinated flawlessly across every party and timeline.',
                  icon: FileCheck
                },
                { 
                  step: '04', 
                  title: 'Closing', 
                  desc: 'Execute your transaction with complete confidence in our elegant, private closing suites.',
                  icon: Award
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={idx} delay={idx * 0.2}>
                    <motion.div
                      className="relative group h-full"
                      whileHover={{ y: -12 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {/* Floating card */}
                      <div className="bg-gradient-to-br from-[#f8f6f4] to-white rounded-[2rem] p-10 h-full relative overflow-hidden border border-[#333333]/[0.03] group-hover:border-[#c3937d]/20 transition-all duration-700 shadow-[0_8px_30px_rgba(0,0,0,0.02)] group-hover:shadow-[0_20px_60px_rgba(55,83,87,0.08)]">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#375357]/[0.01] to-[#c3937d]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Content */}
                        <div className="relative space-y-6">
                          {/* Icon badge */}
                          <motion.div
                            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center mb-6 group-hover:from-[#375357]/15 group-hover:to-[#c3937d]/15 transition-all duration-700"
                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="w-8 h-8 text-[#375357]" strokeWidth={1.5} />
                          </motion.div>
                          
                          {/* Step number */}
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
                          
                          {/* Progress bar */}
                          <motion.div
                            className="mt-8 h-1 bg-gradient-to-r from-transparent via-[#375357]/20 to-transparent rounded-full overflow-hidden"
                          >
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#375357] to-[#c3937d] rounded-full"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 1, delay: idx * 0.2 + 0.5 }}
                              viewport={{ once: true }}
                              style={{ transformOrigin: "left" }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bottom CTA - Luxurious */}
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
              Begin Your Journey
            </h3>
            <p className="text-xl text-[#333333]/50 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Our team of distinguished professionals awaits to provide you with an experience that transcends expectation
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
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
              
              <motion.a 
                href="/locations" 
                className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-white/80 backdrop-blur-sm text-[#375357] font-normal border border-[#333333]/10 hover:border-[#c3937d]/30 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.08)] transition-all duration-500"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Find a Location
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
