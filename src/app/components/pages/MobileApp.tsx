import { Calculator, Smartphone, Bell, Lock, Download, Clock, FileText, MapPin, Users, Shield, Zap, CheckCircle2, ArrowRight, Globe, MessageSquare, Star, DollarSign, PieChart, TrendingUp, PlayCircle, X } from 'lucide-react';
import { FaApple, FaAndroid } from 'react-icons/fa';
import { AnimatedSection } from '../AnimatedSection';
import { motion, AnimatePresence } from 'motion/react';
import { AcornIcon } from '../AcornIcon';
import { animationConfig } from '@/app/utils/animations';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';

// Hero collage images
import heroImage1 from 'figma:asset/ef7bc901a3d6dbd5cb2a7e0c4477b4d46fe2bca1.png';
import heroImage2 from 'figma:asset/b401d586fd683e24542a18c42e079d20da0f3422.png';
import heroImage3 from 'figma:asset/0fc5dc4a1308652be55e9d9abb22cc509676283e.png';
import heroImage4 from 'figma:asset/9e952893602b018d82818c0e0fb914cab9bc86fa.png';

// Testimonial section image
import buyerDashboard from 'figma:asset/cd56f2532a127d4a4bc85a2f0fdc6b506fe79dbf.png';

// Tom Ferry profile picture
import tomFerryProfile from 'figma:asset/5a91544f6f49c0cd17847e16a079d9662540c716.png';

/**
 * FCT ONE APP PAGE - ASSET INVENTORY
 * ==================================
 * 
 * FIGMA IMPORTED IMAGES:
 * ----------------------
 * HERO COLLAGE IMAGES:
 * 1. Real Estate's #1 Net Sheet App
 *    - Asset: ef7bc901a3d6dbd5cb2a7e0c4477b4d46fe2bca1.png
 *    - Shows: Two phone mockups with payment details and home estimate
 *    - Text: "Real Estate's #1 Net Sheet and Closing Cost App"
 * 
 * 2. Buyer Estimates & Seller Net Sheets
 *    - Asset: b401d586fd683e24542a18c42e079d20da0f3422.png
 *    - Shows: Multiple device mockups with net sheet and payment details
 *    - Text: "Buyer Estimates & Seller Net Sheets - Best in class"
 * 
 * 3. Dynamic Content
 *    - Asset: 0fc5dc4a1308652be55e9d9abb22cc509676283e.png
 *    - Shows: Phone mockup with HOME REPORT showing property details
 *    - Text: "Dynamic Content - Share dynamic infographics specific to your market"
 * 
 * 4. Build Your Brand
 *    - Asset: 9e952893602b018d82818c0e0fb914cab9bc86fa.png
 *    - Shows: Phone mockup with "Just Listed" template and branding options
 *    - Text: "Build Your Brand - Market listings, promote open houses"
 * 
 * TESTIMONIAL SECTION:
 * 5. Buyer Dashboard Laptop Mockup
 *    - Asset: cd56f2532a127d4a4bc85a2f0fdc6b506fe79dbf.png
 *    - Usage: Testimonial section device mockup
 *    - Description: Laptop showing buyer view with loan details, monthly payment pie chart ($4,379), and bring to close pie chart ($71,225) with detailed cost breakdowns
 * 
 * VIDEOS:
 * -------
 * 1. FIS Product Demo
 *    - Source: https://d2zcxiawc2t6cx.cloudfront.net/dashboard_videos/Animation/Compressed/FIS.mp4
 *    - Usage: Video modal activated by "Watch Video" button
 *    - Description: Product demonstration video
 * 
 * ICON LIBRARY:
 * -------------
 * - lucide-react: Calculator, Smartphone, DollarSign, PieChart, TrendingUp,
 *   PlayCircle, FileText, Users, Shield, Zap, CheckCircle2, ArrowRight, 
 *   Globe, Clock, Download, X
 * - Custom: AcornIcon (brand signature element)
 * - react-icons: FaApple, FaAndroid
 * 
 * DEVELOPER NOTES:
 * ----------------
 * - All Figma images loaded via figma:asset import scheme
 * - FCT ONE APP focuses on closing cost calculations and net sheets
 * - Content based on FCTnet app capabilities
 * - Testimonial from Tom Ferry included
 * - Video modal with auto-play functionality
 * - Hero section features animated collage of app screenshots
 */

export function MobileApp() {
  const coreFeatures = [
    {
      icon: Calculator,
      title: 'Instant Net Sheets',
      description: 'Generate accurate buyer and seller net sheets in seconds. Calculate closing costs, commissions, and prorations with precision.',
    },
    {
      icon: DollarSign,
      title: 'Closing Cost Breakdowns',
      description: 'Detailed cost analysis for every transaction. Show clients exactly where their money goes with transparent, itemized breakdowns.',
    },
    {
      icon: PieChart,
      title: 'Visual Payment Charts',
      description: 'Interactive pie charts display monthly payments and bring-to-close amounts. Make complex numbers easy to understand.',
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Updates',
      description: 'Costs update automatically as you adjust variables. Instantly see how changes affect the bottom line.',
    },
  ];

  const pricingTools = [
    {
      icon: TrendingUp,
      title: 'Sell or Rent',
      description: 'Compare the benefits of listing vs. leasing with side-by-side analysis that helps clients make informed decisions.',
    },
    {
      icon: Clock,
      title: 'Holding Cost',
      description: 'Show the true cost of waiting to sell. Calculate mortgage, taxes, insurance, and opportunity costs over time.',
    },
    {
      icon: PieChart,
      title: 'TruValue Analysis',
      description: 'Compare pricing strategies side-by-side and visualize net proceeds. Help sellers understand the real impact of different list prices.',
    },
    {
      icon: Calculator,
      title: 'Buydown Calculator',
      description: 'Revamped and simplified to clearly communicate the numbers to your clients. Make complex financing options easy to understand.',
    },
  ];

  const advancedCapabilities = [
    {
      title: 'Multi-Device Sync',
      description: 'Start on your phone, finish on your tablet or desktop. Your data syncs seamlessly across all devices.',
      icon: Smartphone,
    },
    {
      title: 'Buyer & Seller Views',
      description: 'Switch between buyer and seller perspectives instantly. Show both sides of the transaction with one tool.',
      icon: Users,
    },
    {
      title: 'Custom Calculations',
      description: 'Adjust fees, commissions, and costs to match your local market. Save custom presets for faster quotes.',
      icon: Zap,
    },
    {
      title: 'Share & Export',
      description: 'Email net sheets directly to clients or export as PDF. Professional reports ready to share instantly.',
      icon: FileText,
    },
    {
      title: 'Secure Data Storage',
      description: 'Bank-grade encryption protects all transaction data. Your clients\' financial information stays safe.',
      icon: Shield,
    },
    {
      title: 'Offline Access',
      description: 'Calculate costs even without internet. Perfect for showings, open houses, and client meetings.',
      icon: Download,
    },
  ];

  const platforms = [
    {
      name: 'iOS',
      description: 'Available on iPhone and iPad',
      version: 'iOS 14.0 or later',
      icon: Smartphone,
      downloadUrl: 'https://apps.apple.com/us/app/fctnet-one/id6753702726',
    },
    {
      name: 'Android',
      description: 'Available on Android devices',
      version: 'Android 8.0 or later',
      icon: Smartphone,
      downloadUrl: 'https://play.google.com/store/apps/details?id=com.firstcentennialagent.com',
    },
    {
      name: 'Web',
      description: 'Access from any browser',
      version: 'Desktop & Mobile Web',
      icon: Globe,
      downloadUrl: 'https://fctnetapp.com',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Carousel state for fade transitions
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    { src: heroImage1, alt: "Real Estate's #1 Net Sheet and Closing Cost App" },
    { src: heroImage2, alt: "Buyer Estimates & Seller Net Sheets" },
    { src: heroImage3, alt: "Dynamic Content - Market Reports" },
    { src: heroImage4, alt: "Build Your Brand" },
  ];

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6f4] via-white to-[#e9e4df]/30 py-32">
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
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(233, 167, 83, 0.04) 0%, rgba(195, 147, 125, 0.02) 50%, transparent 100%)'
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-[#333333]/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Calculator className="w-5 h-5 text-[#375357]" />
                <span className="text-sm font-normal text-[#333333]/70 tracking-wider uppercase">
                  FCT ONE APP
                </span>
              </motion.div>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c3937d] to-transparent"></div>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-6">
                <span className="text-[#333333]">Closing Costs,</span>
                <br />
                <span className="bg-gradient-to-r from-[#375357] to-[#5a8a8f] bg-clip-text text-transparent">
                  Made Simple.
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                Real Estate's #1 Net Sheet and Closing Cost App
              </p>

              {/* Hero Video */}
              <AnimatedSection delay={0.3}>
                <div className="max-w-6xl mx-auto relative">
                  <motion.div
                    className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(55,83,87,0.2)] border border-[#333333]/[0.06]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Video Player */}
                    <video
                      src="https://d2zcxiawc2t6cx.cloudfront.net/dashboard_videos/Animation/Compressed/FIS.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover bg-black"
                      poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23375357' width='1920' height='1080'/%3E%3C/svg%3E"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>
                </div>
              </AnimatedSection>

              {/* CTA Buttons */}
              <AnimatedSection delay={0.5}>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
                  <motion.a
                    href="#download"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#375357] to-[#c3937d] text-white font-normal shadow-lg hover:shadow-xl transition-all duration-800"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Create Free Account</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>

                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm text-[#333333] font-normal border border-[#333333]/10 hover:border-[#375357]/30 shadow-lg hover:shadow-xl transition-all duration-800"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <PlayCircle className="w-5 h-5" />
                    <span>Watch Video</span>
                  </motion.button>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All-in-One Resource Section */}
      <section className="py-32 bg-white/80 backdrop-blur-sm relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6">
                An All-in-One Resource
              </h2>
              <p className="text-xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Everything real estate professionals need to calculate closing costs, generate net sheets, and win more business—all in one powerful app.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-10 border border-[#333333]/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-all duration-800"
                  whileHover={{ y: -4 }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-normal text-[#333333] mb-4 tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-base text-[#333333]/70 font-normal leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r from-[#375357] to-[#c3937d] opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pricing Tools Section */}
      <section className="py-32 bg-gradient-to-b from-[#f8f6f4] to-white relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/4 right-20 w-px h-96 bg-[#c3937d] rotate-12"></div>
          <div className="absolute bottom-1/4 left-32 w-px h-80 bg-[#375357] -rotate-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-[#333333]/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                  <DollarSign className="w-5 h-5 text-[#375357]" />
                  <span className="text-sm font-normal text-[#333333]/70 tracking-wider uppercase">
                    Strategic Pricing Tools
                  </span>
                </div>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6">
                Spark Better Conversations
              </h2>
              
              <p className="text-xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                These tools are built to spark better pricing conversations—and they're available in your app now.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {pricingTools.map((tool, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-10 border border-[#333333]/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-all duration-800 h-full"
                  whileHover={{ y: -4 }}
                >
                  {/* Icon with gradient background */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-normal text-[#333333] mb-4 tracking-tight">
                    {tool.title}
                  </h3>

                  <p className="text-base text-[#333333]/70 font-normal leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Premium hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r from-[#375357] via-[#c3937d] to-[#e9a753] opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 bg-gradient-to-b from-[#f8f6f4] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Screenshot Carousel */}
            <AnimatedSection>
              <div className="relative h-[700px]">
                {/* Carousel Container */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, x: -100, rotate: -3, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 200, rotate: 5, scale: 0.9 }}
                      transition={{
                        duration: 1.2,
                      }}
                    >
                      <img
                        src={heroImages[currentSlide].src}
                        alt={heroImages[currentSlide].alt}
                        className="max-w-full max-h-full object-contain rounded-3xl shadow-[0_20px_60px_rgba(55,83,87,0.15)]"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center justify-center gap-3 mt-8">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-800 rounded-full ${
                        index === currentSlide
                          ? 'w-8 h-1.5 bg-gradient-to-r from-[#375357] to-[#c3937d] shadow-[0_2px_8px_rgba(55,83,87,0.3)]'
                          : 'w-1.5 h-1.5 bg-[#333333]/20 hover:bg-[#333333]/40 hover:scale-125'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Testimonial Content */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#333333] leading-tight">
                  "This App is Real Estate's Secret Weapon!"
                </blockquote>

                {/* Tom Ferry Profile */}
                <div className="flex items-center gap-4">
                  {/* Profile Picture */}
                  <motion.div
                    className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-[#c3937d]/20 ring-offset-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={tomFerryProfile}
                      alt="Tom Ferry"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Name and Title */}
                  <div className="space-y-1">
                    <p className="text-lg font-normal text-[#333333]">
                      Tom Ferry
                    </p>
                    <p className="text-base text-[#333333]/60 font-normal">
                      The #1 Educator in Real Estate and Best-Selling Author
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <motion.a
                    href="#download"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#375357] to-[#c3937d] text-white font-normal shadow-lg hover:shadow-xl transition-all duration-800"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Get Started Free</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-32 bg-white/80 backdrop-blur-sm relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="flex justify-center mb-6">
                <AcornIcon className="w-16 h-16" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Professional tools designed to help you close more deals and serve clients better.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedCapabilities.map((capability, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <motion.div
                  className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#333333]/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-all duration-800 h-full"
                  whileHover={{ y: -4 }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-normal text-[#333333] mb-3 tracking-tight">
                    {capability.title}
                  </h3>

                  <p className="text-sm text-[#333333]/70 font-normal leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Hover gradient border effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-800 pointer-events-none">
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#375357] via-[#c3937d] to-[#e9a753] bg-clip-border" style={{ WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Availability */}
      <section className="py-32 bg-gradient-to-b from-white to-[#f8f6f4] relative overflow-hidden" id="download">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6">
                Available On All Platforms
              </h2>
              <p className="text-xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Download our mobile app or access from your web browser—your choice, your convenience.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-10 border border-[#333333]/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-all duration-800 text-center"
                  whileHover={{ y: -6 }}
                >
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                    {platform.name === 'iOS' ? (
                      <FaApple className="w-10 h-10 text-white" />
                    ) : platform.name === 'Android' ? (
                      <FaAndroid className="w-10 h-10 text-white" />
                    ) : (
                      <platform.icon className="w-10 h-10 text-white" />
                    )}
                  </div>

                  <h3 className="text-2xl font-normal text-[#333333] mb-3 tracking-tight">
                    {platform.name}
                  </h3>

                  <p className="text-base text-[#333333]/70 font-normal mb-2">
                    {platform.description}
                  </p>

                  <p className="text-sm text-[#333333]/50 font-normal mb-6">
                    {platform.version}
                  </p>

                  {/* Download button */}
                  <motion.a
                    href={platform.downloadUrl}
                    target={platform.downloadUrl.startsWith('http') ? '_blank' : undefined}
                    rel={platform.downloadUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#375357] to-[#c3937d] text-white font-normal shadow-lg hover:shadow-xl transition-all duration-800"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </motion.a>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#375357] via-[#375357] to-[#c3937d] relative overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(233, 167, 83, 0.4), transparent)'
            }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <AcornIcon className="w-20 h-20 text-white/90" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
              Ready to Calculate Smarter?
            </h2>

            <p className="text-xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              Join thousands of real estate professionals using FCT ONE APP to close more deals and delight their clients.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="#download"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#333333] font-normal shadow-lg hover:shadow-xl transition-all duration-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Create Free Account</span>
              </motion.a>

              <Link to="/contact">
                <motion.button
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-normal border border-white/20 hover:bg-white/20 transition-all duration-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <video
              src="https://d2zcxiawc2t6cx.cloudfront.net/dashboard_videos/Animation/Compressed/FIS.mp4"
              controls
              autoPlay
              className="w-full h-full object-contain bg-black"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
