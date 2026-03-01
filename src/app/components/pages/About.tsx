import { motion } from 'motion/react';
import { AcornIcon } from '../AcornIcon';
import { Link } from 'react-router';
import { AnimatedSection } from '../AnimatedSection';
import award2025Img from 'figma:asset/46de49c557c4620bbffc3025075e3819bcb02e60.png';
import bestOfSN2025Img from 'figma:asset/27cda00440f0026b73da6c9c2a63299d6375695d.png';
import award2024Img from 'figma:asset/e5999794e40912872ef4f298fd9582a8317eedcc.png';
import bestOfSN2024Img from 'figma:asset/e5999794e40912872ef4f298fd9582a8317eedcc.png';
import bestOfSN2023Img from 'figma:asset/e5999794e40912872ef4f298fd9582a8317eedcc.png';
import award2021Img from 'figma:asset/e5999794e40912872ef4f298fd9582a8317eedcc.png';
import { useState } from 'react';
import { Calendar, TrendingUp, CheckCircle2, Building2, Shield, Zap, Heart, MapPin, ArrowRight, Award as AwardIcon, Mail } from 'lucide-react';
import { videos } from '@/app/assets/videos';

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-[#e9a753]' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export function About() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  const stats = [
    { value: '1979', label: 'Founded', icon: Calendar },
    { value: '45+', label: 'Years of Service', icon: TrendingUp },
    { value: '30K+', label: 'Successful Closings', icon: CheckCircle2 },
    { value: '8', label: 'Office Locations', icon: Building2 },
  ];

  const whatSetUsApart = [
    {
      icon: Shield,
      title: 'Experience You Can Trust',
      description: 'Nearly five decades of navigating complex transactions, market changes, and evolving regulations.',
    },
    {
      icon: Zap,
      title: 'Innovation Mindset',
      description: 'We embrace technology and modern solutions while maintaining the personal touch that defines exceptional service.',
    },
    {
      icon: Heart,
      title: 'Client-First Approach',
      description: 'Your success is our success. We go above and beyond to ensure every transaction is smooth and stress-free.',
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Deep knowledge of Northern Nevada real estate, backed by strong community relationships.',
    },
  ];

  const awards = [
    { year: '2025', image: award2025Img, title: 'Best Title Company' },
    { year: '2025', image: bestOfSN2025Img, title: 'Best Title Company' },
    { year: '2024', image: award2024Img, title: 'Best Title Company' },
    { year: '2024', image: bestOfSN2024Img, title: 'Best Title Company' },
    { year: '2023', image: bestOfSN2023Img, title: 'Best Title Company' },
    { year: '2021', image: award2021Img, title: 'Best Title Company' },
  ];

  const reviews = [
    {
      name: 'Jena Lanini',
      role: 'Local Guide · 45 reviews · 11 photos',
      rating: 5,
      date: 'a year ago',
      text: 'Love First Centennial. It\'s hard to keep this short because I could go on and on. Between their escrow officers, marketing and sale team and directors... they are armed with the best in the business. As a Realtor it\'s imperative to a have trust worthy and knowledge escrow team and this team is just that and more. If you need anything title or escrow related, call any of their offices.. immediately!',
      avatar: 'JL',
    },
    {
      name: 'Jaymie Morris',
      role: '6 reviews · 1 photo',
      rating: 5,
      date: 'a year ago',
      text: 'Just finished the Air, Land & Avoiding Title scams presentation at the Sierra Nevada Realtors building today. Very informative and great to see some of the people behind the road and transportation boards! Fabulous information, especially the forecasts and budgetary information!',
      avatar: 'JM',
    },
    {
      name: 'Shannon Root',
      role: 'Local Guide · 8 reviews · 5 photos',
      rating: 5,
      date: 'a year ago',
      text: 'HIGHLY RECOMMENDED!!! Working with First Centennial Title Company and Sherrie Hoss and her team was an absolute delight! Their proficiency, professionalism, and friendly demeanor made the entire process feel like a breeze. I highly recommend them for a refreshing and efficient real estate experience!',
      avatar: 'SR',
    },
    {
      name: 'Wendy Merrill',
      role: 'Google User',
      rating: 5,
      date: 'a year ago',
      text: 'Rachel Quilici was unflappable as she helped us navigate a complicated purchase. Her kind, calm, gentle demeanor relieved our stress. She unfailingly responded to all our questions and offered suggestions which served to cement the purchase. Simply put, she is wonderful, trustworthy and knowledgeable!',
      avatar: 'WM',
    },
  ];

  return (
    <div className="bg-white relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <iframe 
              allow="fullscreen;autoplay" 
              allowFullScreen 
              height="100%" 
              src={videos.about.hero} 
              width="100%" 
              style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, overflow: 'hidden', objectFit: 'cover', pointerEvents: 'none' }}
            />
          </div>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#333333]/60 via-[#333333]/50 to-[#333333]/70"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <AnimatedSection>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 bg-white/10">
              <AcornIcon className="w-4 h-4 text-white" />
              <span className="text-xs font-normal text-white/90 tracking-wider uppercase">
                Est. 1979
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl font-bold tracking-[0.03em] mb-8 uppercase">
              <span className="block text-white mb-3">
                Mighty oaks from
              </span>
              <span className="block bg-gradient-to-r from-[#e9a753] via-[#c3937d] to-[#d9ccc4] bg-clip-text text-transparent">
                little acorns grow
              </span>
            </h1>

            <p className="text-xl font-light text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
              For nearly five decades, First Centennial Title of Nevada has been Northern Nevada's trusted partner in title and escrow services—protecting your most important transactions with integrity, expertise, and genuine care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#375357] rounded-full font-normal transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white rounded-full font-normal border border-white/30 transition-all duration-500 hover:border-white/60 hover:bg-white/10 hover:-translate-y-1"
              >
                Meet Our Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#f8f6f4] to-white border border-[#333333]/[0.06] text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <stat.icon className="w-7 h-7 text-[#375357]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-[#333333] mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-normal text-[#333333]/60 tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - MOVED UP for better hierarchy */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-[#f8f6f4]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs font-normal tracking-wider text-[#e9a753] mb-4 uppercase">
                Client Testimonials
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-[0.03em] text-[#333333] mb-6 uppercase">
                What Our Clients Say
              </h2>
              <p className="text-xl font-light text-[#333333]/70 max-w-2xl mx-auto">
                Real experiences from real clients who trust us with their most important transactions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="group p-8 rounded-3xl bg-white border border-[#333333]/[0.06] transition-all duration-500 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col"
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Header with Avatar and Info */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <span className="text-white font-bold text-sm">{review.avatar}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#333333] mb-1">
                        {review.name}
                      </h3>
                      <p className="text-sm font-normal text-[#333333]/60 mb-2">
                        {review.role}
                      </p>
                      <div className="flex items-center gap-2">
                        <StarRating rating={review.rating} />
                        <span className="text-xs text-[#333333]/50">{review.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-base font-light text-[#333333]/80 leading-relaxed flex-1">
                    "{review.text}"
                  </p>

                  {/* Google Logo */}
                  <div className="mt-6 pt-6 border-t border-[#333333]/[0.06]">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="text-xs font-normal text-[#333333]/60">Posted on Google</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[#f8f6f4] to-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs font-normal tracking-wider text-[#e9a753] mb-4 uppercase">
                Why Choose Us
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-[0.03em] text-[#333333] mb-6 uppercase">
                What Sets Us Apart
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {whatSetUsApart.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="group p-8 rounded-3xl bg-white border border-[#333333]/[0.06] transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <item.icon className="w-6 h-6 text-[#375357]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#333333] mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-base font-light text-[#333333]/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-[#f8f6f4]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs font-normal tracking-wider text-[#e9a753] mb-4 uppercase">
                Our Story
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-[0.03em] text-[#333333] mb-6 uppercase">
                From Humble Beginnings<br />to Industry Leader
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-lg font-light text-[#333333]/80 leading-relaxed">
                <p>
                  Founded in 1979, First Centennial Title of Nevada began with a simple but powerful mission: to provide exceptional title and escrow services rooted in integrity, expertise, and genuine care for our clients.
                </p>
                <p>
                  Over nearly five decades, we've navigated countless market cycles, adapted to industry changes, and consistently delivered the personalized service that has become our hallmark. What started as a small operation has grown into one of Northern Nevada's most trusted title companies, serving the region from eight strategic office locations.
                </p>
                <p>
                  Our growth mirrors the acorn-to-oak metaphor we embrace—steady, strong, and deeply rooted in the communities we serve. We've built our reputation one transaction at a time, earning the trust of real estate professionals, lenders, and homeowners throughout the region.
                </p>
                <p>
                  Today, we're proud to combine the wisdom of nearly 50 years of experience with cutting-edge technology and innovative solutions. We honor our heritage while continuously evolving to meet the changing needs of our clients and the real estate industry.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[#f8f6f4] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#375357] to-[#c3937d] flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <AwardIcon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </motion.div>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-[0.03em] text-[#333333] mb-6 uppercase">
                Recognized Excellence
              </h2>
              <p className="text-xl font-light text-[#333333]/70 max-w-2xl mx-auto">
                Honored year after year by our community for outstanding service and commitment to excellence.
              </p>
            </div>
          </AnimatedSection>

          {/* Scrolling Awards Container */}
          <div className="relative">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -100 * awards.length / 2],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate awards array for seamless loop */}
              {[...awards, ...awards].map((award, index) => (
                <motion.div
                  key={index}
                  className="group p-6 rounded-3xl bg-gradient-to-br from-[#f8f6f4] to-white border border-[#333333]/[0.06] transition-all duration-500 hover:shadow-lg hover:-translate-y-2 flex-shrink-0"
                  style={{ width: '180px' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="aspect-square flex items-center justify-center mb-3">
                    <img 
                      src={award.image} 
                      alt={`${award.title} ${award.year}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-[#333333]">{award.year}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-[#f8f6f4]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#375357] via-[#375357] to-[#2a3d41]"></div>
              
              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#e9a753] rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c3937d] rounded-full blur-3xl"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-12 lg:p-16 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold tracking-[0.03em] text-white mb-4 uppercase">
                  Stay Informed
                </h2>
                
                <p className="text-lg font-light text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Subscribe to our newsletter for industry insights, market updates, and the latest news from First Centennial Title of Nevada.
                </p>

                {/* Newsletter Form */}
                <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 px-6 py-4 rounded-full bg-white/95 backdrop-blur-sm text-[#333333] placeholder:text-[#333333]/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#e9a753] transition-all duration-300"
                    />
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e9a753] text-white rounded-full font-semibold transition-all duration-500 hover:bg-[#d89a4d] hover:shadow-xl hover:-translate-y-1 whitespace-nowrap"
                    >
                      Subscribe
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Success Message */}
                  {isSubscribed && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                    >
                      <p className="text-white font-normal">
                        ✓ Thank you for subscribing! Check your email for confirmation.
                      </p>
                    </motion.div>
                  )}
                </form>

                <p className="text-xs text-white/60 mt-6">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-[#375357] to-[#2a3d41] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#e9a753] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#c3937d] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <div>
              <div className="flex justify-center mb-8">
                <AcornIcon className="w-16 h-16 text-white/90" />
              </div>
              
              <h3 className="text-5xl lg:text-6xl font-bold text-white mb-8 tracking-[0.03em] uppercase leading-tight">
                Let's Work Together
              </h3>
              
              <p className="text-xl font-light text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Experience the difference of nearly 50 years of trusted service. Contact us today to start your next transaction with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#375357] rounded-full font-normal transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                >
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-white rounded-full font-normal border-2 border-white/30 transition-all duration-500 hover:border-white/60 hover:bg-white/10 hover:-translate-y-1"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
