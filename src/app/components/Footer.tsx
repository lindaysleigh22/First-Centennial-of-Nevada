import { Link } from 'react-router';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import TreeLogo from '@/app/components/TreeLogo';
import { AcornIcon } from './AcornIcon';
import { animationConfig } from '@/app/utils/animations';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Smart Start Escrow', path: '/pre-open-advantage' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
  ];

  const resources = [
    { name: 'Underwriters', path: '/underwriters' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const locations = [
    { city: 'Reno', address: '50 W. Liberty St., Suite 600, Reno, NV 89501' },
    { city: 'Sparks', address: '1335 Baring Blvd., Sparks, NV 89434' },
    { city: 'Carson City', address: '108 E. Proctor St., Carson City, NV 89701' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#333333] to-[#375357] text-white relative overflow-hidden">
      {/* Acorn Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10">
          <TreeLogo width={100} height={100} className="opacity-20" />
        </div>
        <div className="absolute bottom-10 right-10">
          <TreeLogo width={120} height={120} className="opacity-20" />
        </div>
      </div>

      {/* Top decorative line */}
      <motion.div
        className="h-1 bg-gradient-to-r from-transparent via-[#e9a753]/30 to-transparent relative"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <TreeLogo width={40} height={40} />
              <h3 className="text-xl font-normal tracking-tight">First Centennial Title of Nevada</h3>
            </div>
            <p className="text-white/70 font-normal leading-relaxed mb-6 text-sm">
              Your preeminent provider of title and escrow services in Northern Nevada since 1979.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <motion.a
                href="https://www.instagram.com/accounts/login/?next=%2Ffctitlenv%2F&source=omni_redirect"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#e9a753]/90 flex items-center justify-center transition-all duration-500 group"
                whileHover={{ y: -1, scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-500" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/fctnv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#e9a753]/90 flex items-center justify-center transition-all duration-500 group"
                whileHover={{ y: -1, scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-500" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/first-centennial-title"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#e9a753]/90 flex items-center justify-center transition-all duration-500 group"
                whileHover={{ y: -1, scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-500" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-normal mb-6 text-white/90">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li 
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-[#e9a753] transition-colors duration-700 text-sm font-normal inline-flex items-center gap-2 group"
                  >
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-600"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <ArrowRight className="w-3 h-3" />
                    </motion.span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-normal mb-6 text-white/90">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, idx) => (
                <motion.li 
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-[#e9a753] transition-colors duration-700 text-sm font-normal inline-flex items-center gap-2 group"
                  >
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-600"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <ArrowRight className="w-3 h-3" />
                    </motion.span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-normal mb-6 text-white/90">Get in Touch</h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-3 text-white/70 text-sm relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#e9a753]" strokeWidth={1.5} />
                <span className="font-normal">1450 Ridgeview Drive, #100<br />Reno, NV 89519</span>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3 text-white/70 text-sm relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-[#e9a753]" strokeWidth={1.5} />
                <a href="tel:+17756898510" className="font-normal hover:text-[#e9a753] transition-colors">
                  (775) 689-8510
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3 text-white/70 text-sm relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-[#e9a753]" strokeWidth={1.5} />
                <a href="mailto:info@firstcentennialtitle.com" className="font-normal hover:text-[#e9a753] transition-colors break-all">
                  info@firstcentennialtitle.com
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/10 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-white/60 text-sm font-normal">
                © {currentYear} First Centennial Title of Nevada. All rights reserved.
              </p>
              <p className="text-white/40 text-xs font-light italic">
                Designed and Programmed by Lindsay Leigh Smith
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#e9a753] transition-colors font-normal">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#e9a753] transition-colors font-normal">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative corner element */}
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-5">
        <div className="absolute bottom-0 right-0 w-full h-1 bg-[#e9a753]"></div>
        <div className="absolute bottom-0 right-0 w-1 h-full bg-[#e9a753]"></div>
      </div>
    </footer>
  );
}
