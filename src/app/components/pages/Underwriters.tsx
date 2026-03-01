import { Shield, CheckCircle, Award, FileText } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { motion } from 'motion/react';
import { AcornIcon } from '../AcornIcon';
import { animationConfig } from '@/app/utils/animations';
import stewartLogo from 'figma:asset/cf781d40dd8c83af586d1c0c09843f0684605234.png';
import oldRepublicLogo from 'figma:asset/f6e2a2569ab16946176ca6aacbdc97786a3a8c86.png';
import westcorLogo from 'figma:asset/278a83db74f6eff8e002f5321f09afcabec57c65.png';
import firstAmericanLogo from 'figma:asset/0466b2c920fe84ea6cf3950cdb272c2598983fff.png';

export function Underwriters() {
  const underwriters = [
    {
      name: 'First American Title Insurance Company',
      shortName: 'First American',
      logo: firstAmericanLogo,
      description: 'One of the largest title insurance companies in the nation, providing comprehensive coverage and financial stability.',
      features: [
        'National presence and recognition',
        'Strong financial ratings',
        'Comprehensive title products',
        'Advanced technology solutions',
      ],
    },
    {
      name: 'Westcor Land Title Insurance Company',
      shortName: 'Westcor',
      logo: westcorLogo,
      description: 'A regional title insurance underwriter known for personalized service and deep expertise in local markets.',
      features: [
        'Regional market expertise',
        'Personalized underwriting approach',
        'Flexible policy solutions',
        'Dedicated support services',
      ],
    },
    {
      name: 'Stewart Title Insurance Company',
      shortName: 'Stewart Title',
      logo: stewartLogo,
      description: 'A global title insurance company with a strong commitment to customer service and innovative solutions.',
      features: [
        'Global resources and reach',
        'Customer-focused solutions',
        'Commercial transaction expertise',
        'Proven claims handling',
      ],
    },
    {
      name: 'Old Republic National Title Insurance Company',
      shortName: 'Old Republic',
      logo: oldRepublicLogo,
      description: 'A well-established title insurer with a reputation for financial strength and reliable underwriting standards.',
      features: [
        'Superior financial stability',
        'Conservative underwriting practices',
        'Experienced claims management',
        'Long-standing industry presence',
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Financial Security',
      description: 'Our underwriters maintain the highest financial strength ratings, ensuring your investment is protected.',
    },
    {
      icon: Award,
      title: 'Industry Leadership',
      description: 'Partner with nationally recognized leaders who set the standard for title insurance excellence.',
    },
    {
      icon: CheckCircle,
      title: 'Claims Support',
      description: 'Access to robust claims departments with proven track records of swift, fair resolutions.',
    },
    {
      icon: FileText,
      title: 'Comprehensive Coverage',
      description: 'Wide range of policy options tailored to meet residential, commercial, and specialized needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4]">
      {/* Hero Section - Ultra Premium */}
      <section className="py-40 bg-gradient-to-br from-white via-[#f8f6f4] to-white relative overflow-hidden">
        {/* Premium geometric elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-24 left-20 w-px h-64 bg-[#375357] rotate-12"></div>
          <div className="absolute bottom-32 right-28 w-px h-48 bg-[#c3937d] -rotate-12"></div>
        </div>
        
        {/* Floating gradient orbs - ultra slow */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.15, 0.3],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
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
                  Backed by the Best
                </span>
              </motion.div>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c3937d] to-transparent"></div>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-8">
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Our Underwriters
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Partnering with industry-leading underwriters to protect your investment.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Our Underwriters Matter */}
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
            ease: "easeInOut"
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
            ease: "easeInOut"
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
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-normal mb-4 tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                Why Our Underwriters Matter
              </h2>
              <p className="text-lg text-[#333333]/60 font-normal leading-relaxed max-w-3xl">
                The strength and reputation of our title insurance underwriters directly impact the security of your real estate transaction. We've carefully selected partnerships with industry leaders who provide unmatched financial stability, comprehensive coverage, and exceptional service.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-all duration-500 relative overflow-hidden group"
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
                    
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#375357]/5 to-[#c3937d]/5 flex items-center justify-center mb-6 relative z-10"
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <benefit.icon className="w-8 h-8 text-[#375357]" strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-lg font-normal text-[#333333] mb-3 tracking-tight relative z-10">
                      {benefit.title}
                    </h3>
                    <p className="text-[#333333]/60 font-normal text-sm leading-relaxed relative z-10">
                      {benefit.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Underwriters List */}
      <section className="py-32 bg-gradient-to-br from-[#e9e4df] via-[#d9ccc4] to-[#e9a753]/15 relative overflow-hidden">
        {/* Floating gradient orb */}
        <motion.div
          className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
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
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                Our Underwriting Partners
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {underwriters.map((underwriter, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-all duration-500 relative overflow-hidden group"
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
                  
                  <div className="flex flex-col sm:flex-row items-start gap-8 relative z-10">
                    {/* Logo */}
                    <div className="flex-shrink-0 w-32 h-32 rounded-2xl bg-white overflow-hidden flex items-center justify-center p-4 border border-[#333333]/10 shadow-sm">
                      {underwriter.logo ? (
                        <img 
                          src={underwriter.logo} 
                          alt={`${underwriter.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-center">
                          <div className="text-xl font-normal text-[#375357] leading-tight">
                            {underwriter.shortName}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-normal text-[#333333] mb-3 tracking-tight">
                        {underwriter.name}
                      </h3>
                      <p className="text-[#333333]/60 font-normal leading-relaxed mb-6">
                        {underwriter.description}
                      </p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {underwriter.features.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <motion.span
                              className="flex-shrink-0 w-1.5 h-1.5 bg-[#375357] rounded-full mt-2"
                              whileHover={{ scale: 2 }}
                              transition={{ duration: 0.2 }}
                            ></motion.span>
                            <span className="text-[#333333]/60 font-normal text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-[#375357] relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e9a753]/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        
        <motion.div
          className="absolute top-10 right-20 w-80 h-80 rounded-full bg-[#e9a753]/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: animationConfig.duration.ambient,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
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
                <AcornIcon className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-4xl font-normal text-white mb-6 tracking-tight">
                Questions About Title Insurance?
              </h2>
              <p className="text-lg text-white/80 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
                Our experienced team is here to explain how our underwriting partnerships protect your investment and provide peace of mind throughout your real estate transaction.
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-[#375357] text-sm font-normal hover:bg-white/90 transition-all duration-700 rounded-full shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ 
                  duration: animationConfig.hover.duration,
                  ease: "easeInOut"
                }}
              >
                Contact Us Today
              </motion.a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
