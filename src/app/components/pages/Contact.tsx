import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { motion } from 'motion/react';
import { AcornIcon } from '../AcornIcon';
import { animationConfig } from '@/app/utils/animations';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4]">
      {/* Hero Section - Ultra Premium */}
      <section className="py-40 bg-gradient-to-br from-white via-[#f8f6f4] to-white relative overflow-hidden">
        {/* Premium geometric elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 right-20 w-px h-64 bg-[#c3937d] -rotate-12"></div>
          <div className="absolute bottom-32 left-32 w-px h-48 bg-[#375357] rotate-12"></div>
        </div>
        
        {/* Floating gradient orbs - ultra slow */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.15, 0.3],
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(195, 147, 125, 0.06), rgba(233, 167, 83, 0.04))'
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
                  Let's Connect
                </span>
              </motion.div>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c3937d] to-transparent"></div>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-8">
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                We're here to answer your questions and help you with your real estate transaction.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-[#d9ccc4] to-[#e9e4df] relative overflow-hidden">
        {/* Ambient floating orbs */}
        <motion.div
          className="absolute top-1/3 left-10 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection delay={0.1}>
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-[0_20px_60px_rgba(55,83,87,0.08)]"
                whileHover={{ 
                  boxShadow: "0 30px 80px rgba(55, 83, 87, 0.12)",
                  y: -4 
                }}
                transition={{ 
                  duration: animationConfig.hover.duration,
                }}
              >
                <h2 className="text-3xl font-normal text-[#333333] mb-8 tracking-tight">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#333333]/80 mb-2 font-normal">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-[#333333]/10 text-[#333333] focus:outline-none focus:border-[#375357] focus:ring-2 focus:ring-[#375357]/10 transition-all duration-500 bg-white rounded-2xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#333333]/80 mb-2 font-normal">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-[#333333]/10 text-[#333333] focus:outline-none focus:border-[#375357] focus:ring-2 focus:ring-[#375357]/10 transition-all duration-500 bg-white rounded-2xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-[#333333]/80 mb-2 font-normal">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-[#333333]/10 text-[#333333] focus:outline-none focus:border-[#375357] focus:ring-2 focus:ring-[#375357]/10 transition-all duration-500 bg-white rounded-2xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-[#333333]/80 mb-2 font-normal">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 border border-[#333333]/10 text-[#333333] focus:outline-none focus:border-[#375357] focus:ring-2 focus:ring-[#375357]/10 transition-all duration-500 resize-none bg-white rounded-2xl"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#375357] text-white font-normal hover:bg-[#2d4246] transition-all duration-700 rounded-full"
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{
                      duration: animationConfig.hover.duration,
                    }}
                  >
                    Submit Message
                  </motion.button>
                </form>
              </motion.div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl font-normal text-[#333333] mb-8 tracking-tight">Get in touch</h2>
                
                {[
                  {
                    icon: MapPin,
                    title: 'Office Location',
                    content: (
                      <>
                        123 Main Street, Suite 400
                        <br />
                        Downtown, CA 90210
                      </>
                    ),
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '(555) 123-4567',
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'info@firstcentennial.com',
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    content: (
                      <>
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </>
                    ),
                  },
                ].map((item, idx) => (
                  <AnimatedSection key={idx} delay={0.3 + idx * 0.1}>
                    <motion.div
                      className="flex gap-5 p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#375357]/5 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[#375357]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[#333333] font-normal mb-1">{item.title}</p>
                        <p className="text-[#333333]/60 font-normal leading-relaxed text-sm">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="bg-[#f5f5f7] rounded-3xl p-12">
              <h3 className="text-3xl font-normal text-[#333333] mb-4 tracking-tight">
                Schedule a Consultation
              </h3>
              <p className="text-[#333333]/60 font-normal mb-8 leading-relaxed max-w-2xl mx-auto">
                Prefer to speak with us directly? Call us to schedule a consultation at your convenience.
              </p>
              <a
                href="tel:+15551234567"
                className="inline-block px-8 py-4 bg-[#375357] text-white font-normal hover:bg-[#2d4246] transition-all duration-300 rounded-full"
              >
                Call Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-normal text-[#333333]/60 mb-8 tracking-tight">Connect With Us</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.instagram.com/accounts/login/?next=%2Ffctitlenv%2F&source=omni_redirect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-[#333333]/5 hover:bg-[#375357] flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-[#333333] group-hover:text-white transition-colors" />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/fctnv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-[#333333]/5 hover:bg-[#375357] flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-[#333333] group-hover:text-white transition-colors" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/first-centennial-title"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-[#333333]/5 hover:bg-[#375357] flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-[#333333] group-hover:text-white transition-colors" />
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
