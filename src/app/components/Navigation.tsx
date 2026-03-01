import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { animationConfig } from '@/app/utils/animations';
import TreeLogo from '@/app/components/TreeLogo';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { 
      label: 'Services',
      dropdown: [
        { path: '/pre-open-advantage', label: 'Smart Start Escrow' },
        { path: '/closing-lock', label: 'Closing Lock' },
        { path: '/closing-software', label: 'SoftPro' },
        { path: '/corefact', label: 'Corefact Marketing' },
        { path: '/services/mobile-app', label: 'FCT ONE APP' },
        { path: '/services/mobile-farming-app', label: 'Mobile Farming App' },
        { path: '/services/zoccam', label: 'Zoccam' }
      ]
    },
    { path: '/about', label: 'About' },
    { path: '/team', label: 'Teams' },
    { path: '/underwriters', label: 'Underwriters' },
    { path: '/locations', label: 'Locations' },
    { path: '/downloads', label: 'Downloads' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-[#375357]/10 via-[#c3937d]/10 to-[#e9a753]/10 backdrop-blur-xl sticky top-0 z-50 border-b border-[#333333]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <TreeLogo width={48} height={48} className="transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_0_8px_rgba(195,147,125,0.4)]" />
            <h1 className="text-xl font-light tracking-tight">
              <span className="bg-gradient-to-r from-[#375357] via-[#c3937d] to-[#e9a753] bg-clip-text text-transparent">
                First Centennial Title of Nevada
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div 
                key={link.path || link.label} 
                className="relative group"
              >
                {link.dropdown ? (
                  <div className="text-sm font-normal transition-all duration-300 flex items-center gap-1 text-[#333333]/60 hover:text-[#333333] cursor-pointer">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                ) : (
                  <Link
                    to={link.path!}
                    className={`text-sm font-normal transition-all duration-300 flex items-center gap-1 ${ 
                      isActive(link.path!)
                        ? 'text-[#333333]'
                        : 'text-[#333333]/60 hover:text-[#333333]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-[#333333]/5 py-3 overflow-hidden">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-5 py-3 text-sm font-normal transition-all duration-200 ${
                            isActive(item.path)
                              ? 'text-[#333333] bg-[#375357]/5'
                              : 'text-[#333333]/60 hover:text-[#333333] hover:bg-[#333333]/5'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#333333]/60 hover:text-[#333333] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-1 border-t border-[#333333]/5">
            {navLinks.map((link) => (
              <div key={link.path || link.label}>
                {link.dropdown ? (
                  <div className="block py-3 text-sm font-normal text-[#333333]/60">
                    {link.label}
                  </div>
                ) : (
                  <Link
                    to={link.path!}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 text-sm font-normal transition-colors ${
                      isActive(link.path!)
                        ? 'text-[#333333]'
                        : 'text-[#333333]/60 hover:text-[#333333]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                {/* Mobile Dropdown */}
                {link.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-2 text-sm font-normal transition-colors ${
                          isActive(item.path)
                            ? 'text-[#333333]'
                            : 'text-[#333333]/60 hover:text-[#333333]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
