import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  TrendingUp, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin 
} from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router';
import { AnimatedSection } from '../AnimatedSection';
import { AcornIcon } from '../AcornIcon';
import { animationConfig } from '@/app/utils/animations';
import { videos } from '@/app/assets/videos';
import { homeImages } from '@/assets/images/home';
import { awardImages } from '@/assets/images/awards';

export function Home() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Video container transforms on scroll
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.88]);
  const videoY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const videoBorderRadius = useTransform(scrollYProgress, [0, 0.5], [0, 32]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const stats = [
    { number: '45+', label: 'Years of Excellence', sublabel: 'Since 1979' },
    { number: '50K+', label: 'Transactions Closed', sublabel: 'And counting' },
    { number: '8', label: 'Office Locations', sublabel: 'Across Nevada' },
  ];

  const services = [
    {
      title: 'Title Insurance',
      description: 'Comprehensive protection for your most valuable asset',
      image: homeImages.services.titleInsurance,
      icon: Shield,
      link: '/services',
      features: ['Thorough title searches', 'Owners & lenders insurance', 'Defect resolution']
    },
    {
      title: 'Residential Escrow',
      description: 'White-glove service for home buyers and sellers',
      image: homeImages.services.residentialEscrow,
      icon: ArrowRight,
      link: '/services',
      features: ['Purchase transactions', 'Refinance closings', 'Home equity lines']
    },
    {
      title: 'Document Services',
      description: 'Precision preparation and professional recording',
      image: homeImages.services.documentServices,
      icon: CheckCircle2,
      link: '/services',
      features: ['Deed preparation', 'Notary services', 'Mobile signings']
    },
  ];

  const values = [
    {
      title: 'Community',
      description: 'Deeply rooted in Northern Nevada, building lasting relationships and giving back.',
      icon: Users,
      image: homeImages.values.community,
      gradient: 'from-[#375357] via-[#375357]/80 to-[#333333]'
    },
    {
      title: 'Collaboration',
      description: 'Working together with clients and partners to achieve seamless outcomes.',
      icon: Shield,
      image: homeImages.values.collaboration,
      gradient: 'from-[#c3937d] via-[#e9a753] to-[#c3937d]'
    },
    {
      title: 'Consistency',
      description: 'Delivering reliable, high-quality service every single time.',
      icon: Award,
      image: homeImages.values.consistency,
      gradient: 'from-[#e9a753] via-[#c3937d] to-[#d9ccc4]'
    },
  ];

  const team = [
    {
      name: 'Ronda Plamondon',
      role: 'Chief Operating Officer',
      bio: 'Serves as Chief Operating Officer and Escrow Manager of First Centennial Title of Nevada.',
      image: 'https://as1.ftcdn.net/jpg/16/30/14/70/480_F_1630147062_9dM4PIOwk4S0MDbePsa23M0RRK662iZg.jpg?token=1770015014_stDpagerm2QDCgMNZlUW5SWysG0cDrtrp-nhmVVGMPA',
    },
    {
      name: 'John Doe',
      role: 'Profit Center Manager',
      bio: 'Leads profit center operations and strategic business development initiatives.',
      image: 'https://as1.ftcdn.net/jpg/16/30/14/70/480_F_1630147062_9dM4PIOwk4S0MDbePsa23M0RRK662iZg.jpg?token=1770015014_stDpagerm2QDCgMNZlUW5SWysG0cDrtrp-nhmVVGMPA',
    },
    {
      name: 'Loryn Blair',
      role: 'Regional Sales Manager',
      bio: 'Manages regional sales operations and key client accounts.',
      image: 'https://as1.ftcdn.net/jpg/16/30/14/70/480_F_1630147062_9dM4PIOwk4S0MDbePsa23M0RRK662iZg.jpg?token=1770015014_stDpagerm2QDCgMNZlUW5SWysG0cDrtrp-nhmVVGMPA',
    },
    {
      name: 'Lisa Quilici',
      role: 'Chief Title Officer',
      bio: 'Serves as Chief Title Officer.',
      image: 'https://as1.ftcdn.net/jpg/16/30/14/70/480_F_1630147062_9dM4PIOwk4S0MDbePsa23M0RRK662iZg.jpg?token=1770015014_stDpagerm2QDCgMNZlUW5SWysG0cDrtrp-nhmVVGMPA',
    },
  ];

  const awards = [
    { year: '2025', image: awardImages.bestInBusiness2025, title: 'Best Title Company', source: 'Best in Business' },
    { year: '2025', image: awardImages.bestSierraNevada2025, title: 'Best Title Company', source: 'Best of Sierra Nevada' },
    { year: '2024', image: awardImages.bestInBusiness2024, title: 'Best Title Company', source: 'Best in Business' },
    { year: '2024', image: awardImages.bestSierraNevada2024, title: 'Best Title Company', source: 'Best of Sierra Nevada' },
    { year: '2023', image: awardImages.bestSierraNevada2023, title: 'Best Title Company', source: 'Best of Sierra Nevada' },
    { year: '2021', image: awardImages.bestInBusiness2021, title: 'Best Title Company', source: 'Best in Business' },
  ];

  return (
    <div className="bg-white relative">
      {/* Hero Video Section with Scroll Transform */}
      <section ref={heroRef} className="relative h-[140vh] bg-white">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center px-4 lg:px-8 py-8 relative">
          <motion.div
            ref={videoContainerRef}
            className="relative w-full h-full overflow-hidden bg-[#333333]"
            style={{
              scale: videoScale,
              y: videoY,
              borderRadius: videoBorderRadius,
            }}
          >
            {/* Video Background */}
            <div className="absolute inset-0 scale-110">
              <iframe
                src={videos.home.hero}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77777778vh] min-w-full min-h-full h-[56.25vw]"
                style={{ 
                  border: 'none', 
                  pointerEvents: 'none',
                  filter: 'grayscale(100%) contrast(1.4) brightness(0.65)'
                }}
              />
            </div>

            {/* Gradient Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#375357]/50 via-[#333333]/40 to-[#c3937d]/40"
              style={{ opacity: overlayOpacity }}
            />

            {/* Hero Content */}
            <motion.div 
              className="relative z-10 h-full flex items-center justify-center px-6 lg:px-12"
              style={{ opacity: overlayOpacity }}
            >
              <div className="max-w-6xl mx-auto text-center">
                {/* Main Headline */}
                <motion.h1 
                  className="text-6xl sm:text-7xl lg:text-9xl font-light mb-10 tracking-tight leading-none"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <span className="block bg-gradient-to-r from-white via-[#d9ccc4] to-white bg-clip-text text-transparent mb-2">
                    Rooted in
                  </span>
                  <span className="block bg-gradient-to-r from-white via-[#d9ccc4] to-white bg-clip-text text-transparent mb-2">
                    Experience.
                  </span>
                  <span className="block bg-gradient-to-r from-[#e9a753] via-[#c3937d] to-[#e9a753] bg-clip-text text-transparent">
                    Built For What's Next.
                  </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p 
                  className="text-xl sm:text-2xl text-white/70 font-light max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Northern Nevada's Premier Title & Escrow Partner
                </motion.p>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/20 hover:border-white/30 rounded-full transition-all duration-500"
                  >
                    <span className="text-white font-light tracking-wide">Begin Your Journey</span>
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-500" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-48 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <motion.div
              className="max-w-5xl mx-auto relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-[#333333] mb-12">
                For over 45 years, we've protected{' '}
                <span className="bg-gradient-to-r from-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  what matters most
                </span>
                {' '}to families and businesses across Northern Nevada.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-lg text-[#375357] hover:text-[#c3937d] transition-colors duration-500 group"
              >
                <span>Discover our story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-b from-[#f8f6f4] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {stats.map((stat, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="text-7xl lg:text-8xl font-light bg-gradient-to-br from-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-4">
                    {stat.number}
                  </div>
                  <div className="text-xl text-[#333333] font-light mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-[#333333]/50 font-light">
                    {stat.sublabel}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-24">
              <h2 className="text-6xl lg:text-7xl font-light mb-6 tracking-tight text-[#333333]">
                Comprehensive Solutions
              </h2>
              <p className="text-xl text-[#333333]/60 font-light max-w-2xl mx-auto">
                Every service designed to protect your investment
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-32">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <AnimatedSection key={idx} delay={0.2}>
                  <Link to={service.link}>
                    <motion.div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''} relative`}
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      {/* Image */}
                      <motion.div
                        className={`relative rounded-3xl overflow-hidden group ${!isEven ? 'lg:order-2' : ''}`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="aspect-[3/2] relative max-w-lg mx-auto lg:mx-0">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        
                        {/* Icon Badge */}
                        <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl">
                          <Icon className="w-7 h-7 text-[#375357]" strokeWidth={1.5} />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className={!isEven ? 'lg:order-1' : ''}>
                        <motion.div
                          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <h3 className="text-4xl lg:text-5xl font-light mb-6 text-[#333333]">
                            {service.title}
                          </h3>
                          <p className="text-xl text-[#333333]/70 font-light mb-8 leading-relaxed">
                            {service.description}
                          </p>
                          
                          {/* Features */}
                          <ul className="space-y-4 mb-10">
                            {service.features.map((feature, featureIdx) => (
                              <motion.li
                                key={featureIdx}
                                className="flex items-center gap-3 text-[#333333]/60 relative"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + featureIdx * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <CheckCircle2 className="w-5 h-5 text-[#e9a753] flex-shrink-0" strokeWidth={1.5} />
                                <span className="font-light">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>

                          <motion.div
                            className="inline-flex items-center gap-3 text-[#375357] group/link"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="text-lg font-light">Explore service</span>
                            <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards Ticker */}
      <section className="py-32 bg-gradient-to-b from-[#f8f6f4] to-white overflow-hidden">
        <div className="mb-20 text-center px-6">
          <AnimatedSection>
            <motion.div
              className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-[#e9a753]/10 border border-[#e9a753]/20 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Award className="w-5 h-5 text-[#e9a753]" />
              <span className="text-sm text-[#333333] uppercase tracking-wider font-light">
                Award-Winning Excellence
              </span>
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-light mb-4 tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
              Recognized Year After Year
            </h2>
            <p className="text-lg text-[#333333]/60 font-light max-w-2xl mx-auto">
              Our commitment to excellence has been honored by the communities we serve
            </p>
          </AnimatedSection>
        </div>

        {/* Infinite Scroll Awards */}
        <div className="relative">
          <motion.div 
            className="flex gap-12"
            animate={{
              x: [0, -1800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Double the awards array for seamless loop */}
            {[...awards, ...awards, ...awards, ...awards].map((award, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 w-[400px] bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#333333]/[0.04]"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-8">
                  <div className="w-32 h-32 flex-shrink-0 bg-[#f8f6f4] rounded-2xl p-4 flex items-center justify-center">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-5xl font-light text-[#c3937d] mb-2">
                      {award.year}
                    </div>
                    <div className="text-lg text-[#333333] font-light mb-1">
                      {award.title}
                    </div>
                    <div className="text-sm text-[#333333]/50 font-light">
                      {award.source}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Three C's */}
      <section className="py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-24">
              <h2 className="text-6xl lg:text-7xl font-light mb-6 tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                The Three C's
              </h2>
              <p className="text-xl text-[#333333]/60 max-w-2xl mx-auto font-light">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              
              return (
                <AnimatedSection key={idx} delay={idx * 0.15}>
                  <motion.div
                    className="relative h-[500px] rounded-3xl overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.15)] transition-all duration-800"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <img 
                        src={value.image} 
                        alt={value.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        style={{
                          objectPosition: idx === 1 ? 'center 35%' : 'center'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/90 via-[#333333]/50 to-[#333333]/20"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full p-10 flex flex-col justify-between">
                      <div>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6">
                            <Icon className="w-8 h-8 text-[#e9a753]" strokeWidth={1.5} />
                          </div>
                        </motion.div>

                        <h3 className="text-4xl font-light mb-4 text-white">
                          {value.title}
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                          {value.description}
                        </p>
                      </div>

                      <div>
                        <div className={`h-1 w-full bg-gradient-to-r ${value.gradient} rounded-full`} />
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team - KEEPING EXACTLY AS IS */}
      <section className="py-48 bg-gradient-to-b from-[#f8f6f4] to-white relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.15, 0.2],
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
              background: 'radial-gradient(circle, rgba(55, 83, 87, 0.06), rgba(233, 167, 83, 0.04))'
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-5xl lg:text-7xl font-light mb-6 tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                Meet Our Leadership
              </h2>
              <p className="text-xl text-[#333333]/60 max-w-3xl font-light">
                Experienced professionals dedicated to your success
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => {
              const isFlipped = flippedCards.includes(idx);
              
              return (
                <AnimatedSection key={idx} delay={idx * 0.08}>
                  <div 
                    className="relative cursor-pointer h-full group"
                    style={{ perspective: '1000px' }}
                    onClick={() => toggleFlip(idx)}
                  >
                    <motion.div
                      className="relative w-full"
                      style={{ transformStyle: 'preserve-3d', minHeight: '420px' }}
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ 
                        duration: 0.8, 
                        ease: "easeInOut" 
                      }}
                      whileHover={{ y: -6 }}
                    >
                      {/* Front of card - Bio with shimmer initials */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-white to-[#e9e4df] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.15)] transition-all duration-800 flex items-center justify-center p-6"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        {/* Click to view hint */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="flex items-center gap-1.5 text-xs text-[#375357]/60 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#375357]/10">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span className="font-normal">View photo</span>
                          </div>
                        </div>

                        <div className="text-center space-y-4">
                          {/* Initials circle with shimmer */}
                          <div className="relative inline-block">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center mx-auto shadow-lg relative overflow-hidden">
                              {/* Shimmer effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                animate={{
                                  x: ['-200%', '200%'],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: 'linear',
                                  repeatDelay: 2,
                                }}
                                style={{
                                  transform: 'skewX(-20deg)',
                                }}
                              />
                              
                              <span className="text-white text-3xl font-normal relative z-10">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-normal text-[#333333] mb-1.5 tracking-tight">
                              {member.name}
                            </h3>
                            <p className="text-xs text-[#333333]/60 font-normal mb-3 leading-relaxed">
                              {member.role}
                            </p>
                            <p className="text-sm text-[#333333]/70 font-normal leading-relaxed">
                              {member.bio}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Back of card - Circular Photo */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#e9e4df] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(55,83,87,0.15)] transition-all duration-800 flex items-center justify-center p-8"
                        style={{ 
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <div className="text-center space-y-6">
                          {/* Circular photo frame */}
                          <div className="relative inline-block">
                            {/* Outer gradient ring */}
                            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#375357] via-[#c3937d] to-[#e9a753] blur-sm opacity-50"></div>
                            
                            {/* Photo circle */}
                            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                              <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-full h-full object-cover object-center"
                                style={{
                                  filter: member.name === 'Ronda Plamondon' 
                                    ? 'grayscale(20%) sepia(8%) brightness(1.15) contrast(0.98)'
                                    : 'grayscale(20%) sepia(8%) brightness(1.05) contrast(1.02)',
                                }}
                              />
                            </div>
                          </div>
                          
                          {/* Info */}
                          <div>
                            <h3 className="text-xl font-normal text-[#333333] mb-2 tracking-tight">
                              {member.name}
                            </h3>
                            <p className="text-sm text-[#333333]/60 font-normal leading-relaxed">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 bg-gradient-to-br from-[#f8f6f4] via-white to-[#e9e4df] relative overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
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

        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <AcornIcon className="w-24 h-24 mx-auto text-[#e9a753]" />
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-light mb-8 tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                Ready to Begin?
              </h2>
              
              <p className="text-2xl text-[#333333]/70 font-light mb-16 max-w-3xl mx-auto leading-relaxed">
                Let us guide you through your next real estate transaction with confidence and care.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -4 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[#375357] to-[#2d4246] hover:from-[#2d4246] hover:to-[#375357] rounded-full text-white font-light text-lg shadow-[0_8px_30px_rgba(55,83,87,0.3)] hover:shadow-[0_12px_40px_rgba(55,83,87,0.4)] transition-all duration-500"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05, y: -4 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/locations"
                    className="inline-flex items-center gap-3 px-12 py-6 bg-white/60 hover:bg-white backdrop-blur-sm border border-[#333333]/10 hover:border-[#375357]/20 rounded-full text-[#333333] font-light text-lg shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-500"
                  >
                    <span>Find a Location</span>
                    <MapPin className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-12 border-t border-[#333333]/10">
                <p className="text-sm text-[#333333]/40 uppercase tracking-wider mb-8 font-light">Connect With Us</p>
                <div className="flex items-center justify-center gap-6">
                  {[
                    { icon: Instagram, href: 'https://www.instagram.com/accounts/login/?next=%2Ffctitlenv%2F&source=omni_redirect', label: 'Instagram' },
                    { icon: Facebook, href: 'https://www.facebook.com/fctnv/', label: 'Facebook' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/company/first-centennial-title', label: 'LinkedIn' },
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full bg-white/60 hover:bg-white backdrop-blur-sm border border-[#333333]/10 hover:border-[#375357]/30 flex items-center justify-center transition-all duration-500 group shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(55,83,87,0.15)]"
                        whileHover={{ y: -8, scale: 1.1 }}
                        aria-label={social.label}
                      >
                        <Icon className="w-7 h-7 text-[#375357] group-hover:text-[#c3937d] transition-colors duration-500" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
