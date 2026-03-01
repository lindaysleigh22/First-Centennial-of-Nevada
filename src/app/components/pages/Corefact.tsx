import { AnimatedSection } from '../AnimatedSection';
import { motion } from 'motion/react';
import { AcornIcon } from '../AcornIcon';
import { animationConfig } from '@/app/utils/animations';
import { FileText, Mail, Globe, Target, Palette, Printer, DollarSign, Monitor, Star, Check } from 'lucide-react';
import { useState } from 'react';
import socialMediaMockup from 'figma:asset/a41691622d907433b9247b2827108b08f3a82839.png';
import emailMarketingMockup from 'figma:asset/5350aeeef235949a18f3acec18c25209a0911d30.png';
import performanceTrackingMockup from 'figma:asset/b5e43cae87ad2e239252b705229dc9fe934c4c5a.png';
import directMailImage from 'figma:asset/1de2c812345daece620a498e5cda570e793b863a.png';
import marketingMaterialsImage from 'figma:asset/1af192e4bc7ded62a6b6f62741488f8b07cd0c92.png';
import digitalAssetsImage from 'figma:asset/4ef78584fa99c4643c604343a0f9d4127d877ba8.png';
import targetedListsImage from 'figma:asset/3cd179d8fb420b2efb32d2ef74ec662ebec2c54f.png';
import farmingServicesImage from 'figma:asset/101aab7508a660e3d88a63735206525ecd02ba41.png';

export function Corefact() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const productOfferings = [
    {
      icon: Mail,
      title: 'Direct Mail Campaigns',
      description: 'Premium postcards, brochures, and flyers designed to capture attention and drive responses.',
      image: directMailImage,
      link: 'https://www.corefact.com/catalog/3569-eddm/3570-eddm-build-your-brand',
    },
    {
      icon: FileText,
      title: 'Marketing Materials',
      description: 'Business cards, door hangers, notepads, and custom branded materials for every touchpoint.',
      image: marketingMaterialsImage,
      link: 'https://www.corefact.com/catalog/1543-business-cards/1544-landscape',
    },
    {
      icon: Globe,
      title: 'Digital Assets',
      description: 'Social media graphics, email templates, and digital ads that extend your brand online.',
      image: digitalAssetsImage,
      link: 'https://www.corefact.com/social/signup',
    },
    {
      icon: Target,
      title: 'Targeted Lists',
      description: 'Access to curated mailing lists and demographic targeting tools for precise outreach.',
      image: targetedListsImage,
      link: 'https://www.corefact.com/elite',
    },
  ];

  const personalizationFeatures = [
    {
      title: 'Custom Branding',
      description: 'Add your logo, colors, and contact information to every piece of marketing material.',
    },
    {
      title: 'Dynamic Content',
      description: 'Personalize messages with recipient names, property details, and custom messaging.',
    },
    {
      title: 'Photo Integration',
      description: 'Feature your professional headshots and property photos seamlessly in your campaigns.',
    },
    {
      title: 'Template Library',
      description: 'Choose from thousands of professional templates designed specifically for real estate.',
    },
  ];

  const designOptions = [
    {
      icon: Palette,
      title: 'Professional Design',
      description: 'Eye-catching layouts created by expert designers who understand real estate marketing.',
      features: ['Modern templates', 'Custom layouts', 'Brand consistency'],
    },
    {
      icon: Printer,
      title: 'Premium Printing',
      description: 'High-quality printing on premium paper stocks with multiple finish options.',
      features: ['Glossy or matte finishes', 'Thick premium card stock', 'Vibrant color reproduction'],
    },
  ];

  const pricingTiers = [
    {
      title: 'Starter',
      description: 'Perfect for new agents getting established',
      features: [
        'Access to template library',
        'Basic personalization',
        'Standard printing options',
        'Email support',
      ],
    },
    {
      title: 'Professional',
      description: 'Ideal for active agents building their brand',
      features: [
        'Everything in Starter',
        'Advanced customization',
        'Premium paper stocks',
        'Targeted mailing lists',
        'Priority support',
      ],
      featured: true,
    },
    {
      title: 'Enterprise',
      description: 'For top producers and teams',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom design services',
        'Volume discounts',
        'Analytics dashboard',
      ],
    },
  ];

  const digitalIntegration = [
    {
      icon: Monitor,
      title: 'Social Media Tools',
      description: 'Create on-brand social posts that complement your direct mail campaigns.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Coordinate email campaigns that reinforce your direct mail messaging.',
    },
    {
      icon: Target,
      title: 'Performance Tracking',
      description: 'Monitor campaign results with detailed analytics and ROI tracking.',
    },
  ];

  const testimonials = [
    {
      name: 'Jeff Jones',
      title: 'Friendly Faces, Henderson, NV',
      quote: 'Marketing consultant gives the extra mile to help educate and empower Corefact clients. They have been very responsive even calling me after hours to go over inner workings of the Corefact lead capture system and mailing list properties. I\'ve had real estate coaches that were less helpful and concerned about my results. The Corefact mailers look great and I am looking forward to a long term and prosperous partnership.',
      rating: 5,
    },
    {
      name: 'Katy Lonowski',
      title: 'RE/MAX of Orange Beach, Orange Beach, AL',
      quote: 'I just received a copy of my first postcard with the Elite system and I am so happy with the quality, crispness, and overall presentation of it. I\'ve already received positive feedback on it from a client/recipient. I am so pleased with the result! Here\'s to a great year of beautiful postcards!',
      rating: 5,
    },
    {
      name: 'Jennifer Hughes',
      title: 'Coldwell Banker Dufour Realty, Chico, CA',
      quote: 'I just wanted to drop a quick note to you to tell you how much I appreciate your product and staff. I am SO HAPPY! I found you! I was pressed to place an order this morning and your staff was so helpful. You deliver a great looking professional product and a fair price and it\'s easy for a busy agent like me to create on your website.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4]">
      {/* Hero Section - Ultra Premium */}
      <section className="py-40 bg-gradient-to-br from-white via-[#f8f6f4] to-white relative overflow-hidden">
        {/* Premium geometric elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-28 w-px h-72 bg-[#375357] rotate-12"></div>
          <div className="absolute bottom-28 right-20 w-px h-56 bg-[#c3937d] -rotate-12"></div>
        </div>
        
        {/* Floating gradient orbs - ultra slow */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#e9a753]/6 to-[#c3937d]/4 blur-3xl"
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.3, 0.15, 0.3],
            x: [0, -20, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut"
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
                  Elite Marketing Solutions
                </span>
              </motion.div>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c3937d] to-transparent"></div>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-8">
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Corefact
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Professional marketing solutions designed to elevate your real estate brand.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Offerings Section */}
      <section id="product-offerings" className="py-24 relative overflow-hidden">
        {/* Ambient background orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.15, 0.2],
            y: [0, 30, 0],
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
              background: 'linear-gradient(to bottom right, rgba(55, 83, 87, 0.06), rgba(233, 167, 83, 0.04))'
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="flex justify-center mb-6">
                <div
                  className="rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-[#333333]/5 flex items-center justify-center p-6"
                  style={{ width: 'fit-content' }}
                >
                  <img 
                    src="https://cf4m.s3.us-west-1.amazonaws.com/corefact/images/logos/cf-logo.svg"
                    alt="Corefact Icon" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>
              <h2 className="text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-4">
                Product Offerings
              </h2>
              <p className="text-xl text-[#333333]/60 font-normal">
                Comprehensive marketing solutions for every real estate need
              </p>
            </div>
          </AnimatedSection>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {productOfferings.map((product, index) => {
              const Icon = product.icon;
              const isFlipped = flippedCards.includes(index);
              
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div 
                    className="relative h-[400px] cursor-pointer"
                    style={{ perspective: '1000px' }}
                    onClick={() => toggleFlip(index)}
                  >
                    <motion.div
                      className="relative w-full h-full"
                      style={{ transformStyle: 'preserve-3d' }}
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      {/* Front of Card */}
                      <motion.div
                        className="absolute inset-0 group bg-gradient-to-br from-white/90 to-[#e9e4df]/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(55,83,87,0.08)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.18)] transition-all duration-800"
                        style={{ backfaceVisibility: 'hidden' }}
                        whileHover={{ 
                          y: -8,
                          scale: 1.02,
                        }}
                        transition={{ 
                          duration: 0.6,
                          ease: "easeInOut"
                        }}
                      >
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-4 right-4 w-12 h-0.5 bg-gradient-to-l from-[#c3937d]/40 to-transparent"></div>
                          <div className="absolute top-4 right-4 w-0.5 h-12 bg-gradient-to-b from-[#c3937d]/40 to-transparent"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-8 h-full flex flex-col items-center text-center space-y-6">
                          {/* Icon */}
                          <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          
                          {/* Product info */}
                          <div className="space-y-3 flex-1">
                            <h3 className="text-xl font-normal text-[#333333] tracking-tight">
                              {product.title}
                            </h3>
                            <p className="text-sm text-[#333333]/70 font-normal leading-relaxed">
                              {product.description}
                            </p>
                          </div>
                          
                          {/* Click to view text */}
                          <div className="text-xs text-[#375357] font-normal">
                            Click to view example
                          </div>
                          
                          {/* Accent line */}
                          <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-[#375357] to-[#c3937d] opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-800"></div>
                        </div>
                      </motion.div>

                      {/* Back of Card */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/90 to-[#e9e4df]/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(55,83,87,0.08)]"
                        style={{ 
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <div className="p-4 h-full flex flex-col">
                          {/* Image */}
                          <div className="flex-1 flex items-center justify-center overflow-hidden rounded-2xl">
                            <img 
                              src={product.image} 
                              alt={`${product.title} Example`}
                              className="w-full h-full object-cover"
                              style={
                                product.title === 'Digital Assets' 
                                  ? { objectPosition: 'center 30%', transform: 'scale(1.3)' }
                                  : {}
                              }
                            />
                          </div>
                          
                          {/* Title and CTA on back */}
                          <div className="pt-4 text-center space-y-3">
                            <h4 className="text-sm font-normal text-[#333333] tracking-tight">
                              {product.title}
                            </h4>
                            
                            {/* Visit Corefact Button */}
                            <motion.a
                              href={product.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#375357] to-[#c3937d] text-white text-xs font-normal shadow-md hover:shadow-lg transition-all duration-500"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              Visit Corefact
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personalization Features Section */}
      <section className="py-24 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6">
                Start Farming with Elite
              </h2>
              <p className="text-xl text-[#333333]/60 font-normal">
                Comprehensive farming solutions to build lasting relationships in your target areas
              </p>
            </div>
          </AnimatedSection>

          {/* Farming Services Image */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="relative bg-gradient-to-br from-white/90 to-[#e9e4df]/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(55,83,87,0.08)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.18)] transition-all duration-800 p-8 md:p-12"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-12 h-0.5 bg-gradient-to-l from-[#c3937d]/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-0.5 h-12 bg-gradient-to-b from-[#c3937d]/40 to-transparent"></div>
                </div>

                {/* Corefact Logo */}
                <div className="flex justify-center mb-8">
                  <img 
                    src="https://cf4m.s3.us-west-1.amazonaws.com/corefact/images/logos/cf-logo.svg"
                    alt="Corefact" 
                    className="h-12 w-auto object-contain"
                  />
                </div>

                {/* Image */}
                <div className="relative">
                  <img 
                    src={farmingServicesImage} 
                    alt="Start Farming With Our Elite Service or Campaign Manager - Elite Automated Campaigns, Campaign Manager, and Custom Design Services" 
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>

                {/* Visit Corefact Button */}
                <div className="flex justify-center mt-8">
                  <motion.a
                    href="https://www.corefact.com/elite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#375357] to-[#c3937d] text-white font-normal shadow-md hover:shadow-lg transition-all duration-500 text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit Corefact
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Design & Print Options Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.2, 0.15],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'linear-gradient(to bottom right, rgba(195, 147, 125, 0.06), rgba(233, 167, 83, 0.04))'
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-4">
                Design & Print Options
              </h2>
              <p className="text-xl text-[#333333]/60 font-normal">
                Professional quality that makes a lasting impression
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {designOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <motion.div
                    className="group relative bg-gradient-to-br from-white/90 to-[#e9e4df]/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(55,83,87,0.08)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.18)] transition-all duration-800"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-4 right-4 w-12 h-0.5 bg-gradient-to-l from-[#c3937d]/40 to-transparent"></div>
                      <div className="absolute top-4 right-4 w-0.5 h-12 bg-gradient-to-b from-[#c3937d]/40 to-transparent"></div>
                    </div>

                    <div className="p-10 space-y-6">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-normal text-[#333333] tracking-tight">
                          {option.title}
                        </h3>
                        <p className="text-[#333333]/70 font-normal leading-relaxed">
                          {option.description}
                        </p>

                        {/* Features list */}
                        <ul className="space-y-2 pt-4">
                          {option.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-sm text-[#333333]/70">
                              <Check className="w-5 h-5 text-[#375357]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Accent line */}
                      <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-[#375357] to-[#c3937d] opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-800"></div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Marketing Integration Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.15, 0.2],
            y: [0, 30, 0],
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
              background: 'linear-gradient(to bottom right, rgba(55, 83, 87, 0.06), rgba(233, 167, 83, 0.04))'
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-4">
                Digital Marketing Integration
              </h2>
              <p className="text-xl text-[#333333]/60 font-normal">
                Seamlessly connect your offline and online presence
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Social Media Mockup */}
            <AnimatedSection delay={0}>
              <div className="space-y-6">
                <motion.div
                  className="group relative bg-gradient-to-br from-white/90 to-[#e9e4df]/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(55,83,87,0.08)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.18)] transition-all duration-800 p-6"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Social Media Creative Mockup Image */}
                  <div className="relative mx-auto">
                    <img 
                      src={socialMediaMockup} 
                      alt="Social Media Marketing Mockup" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </motion.div>

                {/* Title & Description */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Monitor className="w-5 h-5 text-[#375357]" />
                    <h3 className="text-xl font-normal text-[#333333] tracking-tight">
                      Social Media Tools
                    </h3>
                  </div>
                  <p className="text-sm text-[#333333]/70 font-normal leading-relaxed">
                    Create on-brand social posts that complement your direct mail campaigns
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Performance Tracking Mockup */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <motion.div
                  className="group relative bg-gradient-to-br from-white/90 to-[#e9e4df]/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(55,83,87,0.08)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.18)] transition-all duration-800 p-6"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Performance Tracking Creative Mockup Image */}
                  <div className="relative mx-auto">
                    <img 
                      src={performanceTrackingMockup} 
                      alt="Performance Tracking Mockup" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </motion.div>

                {/* Title & Description */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Target className="w-5 h-5 text-[#375357]" />
                    <h3 className="text-xl font-normal text-[#333333] tracking-tight">
                      Performance Tracking
                    </h3>
                  </div>
                  <p className="text-sm text-[#333333]/70 font-normal leading-relaxed">
                    Monitor campaign results with detailed analytics and ROI tracking
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Email Marketing Mockup */}
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <motion.div
                  className="group relative bg-gradient-to-br from-white/90 to-[#e9e4df]/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(55,83,87,0.08)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.18)] transition-all duration-800 p-6"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Email Marketing Creative Mockup Image */}
                  <div className="relative mx-auto">
                    <img 
                      src={emailMarketingMockup} 
                      alt="Email Marketing Mockup" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </motion.div>

                {/* Title & Description */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5 text-[#375357]" />
                    <h3 className="text-xl font-normal text-[#333333] tracking-tight">
                      Email Marketing
                    </h3>
                  </div>
                  <p className="text-sm text-[#333333]/70 font-normal leading-relaxed">
                    Coordinate email campaigns that reinforce your direct mail messaging
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-white/80 via-[#e9e4df]/60 to-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-4">
                Testimonials
              </h2>
              <p className="text-xl text-[#333333]/60 font-normal">
                Trusted by real estate professionals across the nation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-gradient-to-br from-white/90 to-[#e9e4df]/70 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgba(55,83,87,0.08)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.18)] transition-all duration-800"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-12 h-0.5 bg-gradient-to-l from-[#c3937d]/40 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-0.5 h-12 bg-gradient-to-b from-[#c3937d]/40 to-transparent"></div>
                  </div>

                  {/* Star rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#e9a753] text-[#e9a753]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[#333333]/70 font-normal leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-[#333333]/10">
                    <p className="text-[#333333] font-normal">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#333333]/60">
                      {testimonial.title}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#e9e4df]/80 via-[#d9ccc4]/60 to-[#e9a753]/10 relative overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: 'linear-gradient(to bottom right, rgba(233, 167, 83, 0.08), rgba(195, 147, 125, 0.05))'
          }}
          animate={{
            scale: animationConfig.float.scale,
            opacity: animationConfig.float.opacity,
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: animationConfig.float.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6">
                Ready to Elevate Your Marketing?
              </h2>
              <p className="text-xl text-[#333333]/70 font-normal leading-relaxed mb-12">
                Discover how Corefact can transform your real estate marketing strategy and help you build stronger client relationships.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-[#375357] to-[#c3937d] text-white font-normal shadow-lg hover:shadow-xl transition-all duration-500 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us Today
                </motion.a>
                <motion.a
                  href="/services"
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white/80 backdrop-blur-sm text-[#333333] font-normal shadow-lg hover:shadow-xl transition-all duration-500 border border-[#333333]/10 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View All Services
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
