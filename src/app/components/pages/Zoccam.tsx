/**
 * ZOCCAM PAGE - Asset Documentation for Developer Handoff
 * 
 * ALL IMAGES MIGRATED TO PERMANENT LOCAL ASSETS (Feb 27, 2026)
 * 
 * Image Assets (using figma:asset scheme):
 * - zoccamMockup: figma:asset/17124dc1188da7c41e879ed8eb71e0a4c2017cc7.png
 * - zoccamFormMockup: figma:asset/8be1ad1fb1c735d59b21285e720ee4fe1583284c.png
 * - enterpriseSecurityImage: figma:asset/e2eac2c7237783f32383070cb21e5b2d733037d3.png
 *   (Professional woman with tablet - Enterprise Security card background)
 * 
 * External Dependencies: NONE
 * Status: ✅ Production Ready - Zero external URL dependencies
 * 
 * Last Updated: February 27, 2026
 */

import { Smartphone, Shield, Zap, CheckCircle2, ArrowRight, Lock, Globe, Users, FileCheck, MessageSquare, Award, Play, TrendingUp, X, Flag, Bell, ShieldCheck, Repeat, Download, Clock } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { motion, AnimatePresence } from 'motion/react';
import { AcornIcon } from '../AcornIcon';
import { animationConfig } from '@/app/utils/animations';
import { Link } from 'react-router';
import { useState } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import zoccamMockup from 'figma:asset/17124dc1188da7c41e879ed8eb71e0a4c2017cc7.png';
import zoccamFormMockup from 'figma:asset/8be1ad1fb1c735d59b21285e720ee4fe1583284c.png';
import enterpriseSecurityImage from 'figma:asset/e2eac2c7237783f32383070cb21e5b2d733037d3.png';
import { videos } from '@/app/assets/videos';

export function Zoccam() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'features' | 'benefits' | 'security'>('security');

  const coreFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile-First Platform',
      description: 'Complete transaction management from any device. Access critical closing information, documents, and communication tools wherever your business takes you.',
      highlight: 'iOS & Android',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, multi-factor authentication, and ALTA Best Practices compliance protect every transaction with absolute confidence.',
      highlight: 'ALTA Compliant',
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Real-time updates and automated workflows eliminate delays. Keep all parties synchronized with live status tracking and instant notifications.',
      highlight: 'Real-Time Sync',
    },
    {
      icon: Users,
      title: 'Complete Collaboration',
      description: 'Connect lenders, agents, clients, and attorneys in one secure platform. Share documents, communicate instantly, and track progress together.',
      highlight: 'All Stakeholders',
    },
  ];

  const keyBenefits = [
    {
      icon: Flag,
      title: 'Value Reinforcement & Brand Awareness',
      description: 'Title Companies and Lenders benefit from logo and exposure displayed on the platform and email notifications, reinforcing your brand throughout the transaction.',
    },
    {
      icon: Repeat,
      title: 'Faster Sales Cycles',
      description: 'ZOCCAM may be used at any time, allowing orders to be opened when contracts are executed. Available 24/7, contracts and funds can be deposited anytime, anywhere.',
    },
    {
      icon: Bell,
      title: 'Consumer Empowerment & Transparency',
      description: 'The notification system allows parties to receive real-time information about the closing process and confirms delivery of contracts and deposits.',
    },
    {
      icon: ShieldCheck,
      title: 'Decreased Liability (Pillar 3 Compliance)',
      description: 'Prevents checks from being handled by multiple people, protects consumer NPI, and eliminates manual deposits—reducing security breach risks for everyone.',
    },
  ];

  const securityFeatures = [
    { icon: Shield, title: 'ALTA Best Practices', description: 'Full compliance with industry standards' },
    { icon: Lock, title: '256-bit Encryption', description: 'Bank-level data protection' },
    { icon: FileCheck, title: 'Complete Audit Trails', description: 'Full transparency and accountability' },
    { icon: Globe, title: '99.9% Uptime SLA', description: 'Enterprise-grade infrastructure' },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Upload & Organize',
      description: 'Securely upload closing documents with intelligent organization and automated filing.',
      icon: FileCheck,
    },
    {
      step: '02',
      title: 'Collaborate & Track',
      description: 'Share with all parties, get real-time updates, and monitor progress through every stage.',
      icon: Users,
    },
    {
      step: '03',
      title: 'Close with Confidence',
      description: 'Complete transactions faster with full audit trails and comprehensive reporting.',
      icon: CheckCircle2,
    },
  ];

  const platformStats = [
    { metric: '99.9%', label: 'Uptime Guarantee' },
    { metric: '50%', label: 'Faster Closings' },
    { metric: '10K+', label: 'Transactions Monthly' },
    { metric: '24/7', label: 'Expert Support' },
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4]">
      {/* Hero Section */}
      <section className="py-28 bg-gradient-to-br from-white via-[#f8f6f4] to-white relative overflow-hidden">
        {/* Premium geometric elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-28 w-px h-64 bg-[#375357] rotate-12"></div>
          <div className="absolute bottom-32 right-32 w-px h-56 bg-[#c3937d] -rotate-12"></div>
        </div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#e9a753]/6 to-[#c3937d]/4 blur-3xl opacity-50" />
        <div className="absolute bottom-40 right-20 w-[32rem] h-[32rem] rounded-full bg-gradient-to-bl from-[#375357]/5 to-[#d9ccc4]/6 blur-3xl opacity-50" />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <AnimatedSection className="text-center">
            {/* Zoccam Logo */}
            <motion.div 
              className="flex justify-center mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageWithFallback
                src="https://www.zoccam.com/wp-content/uploads/2016/09/darklogo.png"
                alt="Zoccam Logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-['Antonio'] font-bold uppercase tracking-[0.03em] mb-6 leading-[0.95] relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                Your Virtual Courier,<br />The Modern Way to Close Real Estate
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-[#333333]/70 font-['Work_Sans'] max-w-2xl mx-auto mb-10 leading-relaxed relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Mobile-first platform that streamlines loan closings with secure document management, 
              real-time collaboration, and enterprise-grade security.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >

              <button 
                className="group px-10 py-5 bg-white/80 backdrop-blur-md text-[#375357] rounded-full font-['Work_Sans'] font-semibold text-base border-2 border-[#d9ccc4] hover:border-[#c3937d] hover:bg-white transition-all duration-800 hover:scale-[1.02] inline-flex items-center justify-center gap-3" 
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="w-5 h-5" />
                Watch Overview
              </button>
            </motion.div>

            {/* Platform Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {platformStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-['Antonio'] font-bold bg-gradient-to-r from-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-1">
                    {stat.metric}
                  </div>
                  <div className="text-xs md:text-sm text-[#333333]/60 font-['Work_Sans'] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Combined: What is Zoccam + Mobile App Download */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: What is Zoccam */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#e9a753]/10 rounded-full mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Zap className="w-4 h-4 text-[#e9a753]" />
                  <span className="text-xs font-['Work_Sans'] font-semibold text-[#333333] uppercase tracking-wider">
                    What is Zoccam?
                  </span>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-['Antonio'] font-bold uppercase tracking-[0.03em] mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                    Your Complete Closing<br />Management Platform
                  </span>
                </h2>

                <p className="text-lg text-[#333333]/70 font-['Work_Sans'] mb-8 leading-relaxed">
                  Zoccam is the technology bridge between title companies, lenders, real estate agents, and clients. 
                  It transforms complex, paper-heavy closings into streamlined digital experiences that save time, 
                  reduce errors, and deliver exceptional service at every step.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Centralized document hub accessible 24/7',
                    'Automated status updates for all parties',
                    'Secure messaging and file sharing',
                    'Mobile access for on-the-go professionals',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-[#e9a753] to-[#c3937d] rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-['Work_Sans'] text-[#333333]/80">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 px-5 py-3 bg-[#e9a753]/5 rounded-2xl border border-[#e9a753]/20">
                  <TrendingUp className="w-5 h-5 text-[#e9a753]" />
                  <span className="text-sm font-['Work_Sans'] font-semibold text-[#333333]">
                    Closings happen <span className="text-[#e9a753]">50% faster</span> with dramatically fewer errors
                  </span>
                </div>
              </motion.div>

              {/* Right: Mobile App Download */}
              <motion.div
                className="bg-gradient-to-br from-[#375357] to-[#333333] rounded-[2rem] p-10 border border-[#c3937d]/20 shadow-2xl relative overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Decorative gradient orbs */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#e9a753]/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#c3937d]/20 to-transparent rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <motion.div
                    className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <Download className="w-4 h-4 text-[#e9a753]" />
                    <span className="text-xs font-['Work_Sans'] font-semibold text-white uppercase tracking-wider">
                      Get the Mobile App
                    </span>
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-['Antonio'] font-bold uppercase tracking-[0.03em] text-white mb-3 leading-tight">
                    Zoccam On The Go
                  </h3>
                  
                  <p className="text-base text-white/80 font-['Work_Sans'] mb-8 leading-relaxed">
                    Download the Zoccam app and manage your real estate transactions from anywhere.
                  </p>

                  {/* App Store Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    {/* Apple App Store */}
                    <motion.a
                      href="https://apps.apple.com/us/app/zoccam/id911878116"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex-1"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/20 hover:border-white/30 rounded-xl px-6 py-3 transition-all duration-800 flex items-center gap-3">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                        <div className="text-left">
                          <div className="text-[10px] text-white/70 font-['Work_Sans']">Download on the</div>
                          <div className="text-base font-['Antonio'] font-bold text-white uppercase tracking-wider">App Store</div>
                        </div>
                      </div>
                    </motion.a>

                    {/* Google Play Store */}
                    <motion.a
                      href="https://play.google.com/store/apps/details?id=com.ZOCCAM.tech.com&hl=en_US&gl=US"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex-1"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/20 hover:border-white/30 rounded-xl px-6 py-3 transition-all duration-800 flex items-center gap-3">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                        <div className="text-left">
                          <div className="text-[10px] text-white/70 font-['Work_Sans']">Get it on</div>
                          <div className="text-base font-['Antonio'] font-bold text-white uppercase tracking-wider">Google Play</div>
                        </div>
                      </div>
                    </motion.a>
                  </div>

                  {/* QR Code Section */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center gap-6">
                      <motion.div 
                        className="relative flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#e9a753]/30 to-[#c3937d]/30 blur-lg rounded-2xl" />
                        <div className="relative bg-white rounded-xl p-3 shadow-xl w-28 h-28 flex items-center justify-center">
                          <ImageWithFallback
                            src="https://www.zoccam.com/wp-content/uploads/2022/04/QR-Code-Small-ZOCCAM.png"
                            alt="Scan QR Code to Download Zoccam App"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </motion.div>

                      <div>
                        <h4 className="text-base font-['Antonio'] font-bold text-white mb-1 uppercase tracking-wider">
                          Quick Start Guide
                        </h4>
                        <p className="text-sm text-white/70 font-['Work_Sans']">
                          Scan to download the Zoccam app
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Premium Phone Mockup Showcase */}
      <section className="py-28 bg-gradient-to-b from-white to-[#f8f6f4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div 
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#375357]/10 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Smartphone className="w-4 h-4 text-[#375357]" />
                <span className="text-xs font-['Work_Sans'] font-semibold text-[#333333] uppercase tracking-wider">
                  Mobile Experience
                </span>
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-['Antonio'] font-bold uppercase tracking-[0.03em] mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Your Entire Closing<br />In The Palm of Your Hand
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-[#333333]/70 font-['Work_Sans'] max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Seamlessly manage transactions, communicate with all parties, and track progress from anywhere.
              </motion.p>
            </div>

            {/* Three Phone Mockups */}
            <div className="relative flex justify-center items-center gap-6 md:gap-8 lg:gap-12">
              {/* Phone Frame 1 */}
              <motion.div
                className="relative w-[240px] md:w-[280px] lg:w-[320px]"
                initial={{ opacity: 0, y: 60, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-3 shadow-2xl">
                  {/* Phone bezel */}
                  <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                    <ImageWithFallback
                      src="https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/d9/01/16/d9011630-db72-e2dd-f8a9-c34317d817d2/mzl.lositopx.png/460x996bb.webp"
                      alt="Zoccam App Screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl"></div>
                </div>
                
                {/* Floating Notification Popup */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-[#e9a753] to-[#c3937d] text-white px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-sm z-20"
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.5 }}
                  animate={{ 
                    y: [0, -8],
                  }}
                  style={{
                    transition: "y 1.5s ease-in-out infinite alternate"
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <FileCheck className="w-5 h-5" />
                    <span className="text-sm font-['Work_Sans'] font-semibold whitespace-nowrap">Contract Uploaded</span>
                  </div>
                </motion.div>

                {/* Status Badge */}
                <motion.div
                  className="absolute -left-6 top-1/3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-[#375357]/20 z-20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#375357]" />
                    <span className="text-xs font-['Work_Sans'] font-bold text-[#375357] uppercase tracking-wider">ALTA Certified</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Phone Frame 2 - Center (Larger & Featured) */}
              <motion.div
                className="relative w-[280px] md:w-[320px] lg:w-[360px] z-10"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-3 shadow-2xl ring-4 ring-[#c3937d]/20">
                  {/* Phone bezel */}
                  <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                    <ImageWithFallback
                      src="https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/42/85/59/42855930-ef4b-44d9-5dcb-528b0084da50/mzl.oqugvhzi.png/460x996bb.webp"
                      alt="Zoccam App Featured Screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl"></div>
                </div>
                
                {/* Chat Bubble Popup */}
                <motion.div
                  className="absolute -top-8 -left-8 bg-white rounded-3xl shadow-2xl p-5 max-w-[220px] z-20"
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 1.1, type: "spring", bounce: 0.4 }}
                  animate={{ 
                    y: [0, -6],
                  }}
                  style={{
                    transition: "y 2s ease-in-out infinite alternate"
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#375357] to-[#333333] rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-['Work_Sans'] text-[#333333] font-semibold mb-1">Lender Message</p>
                      <p className="text-[11px] font-['Work_Sans'] text-[#333333]/70 leading-relaxed">Funds deposited for 123 Oak Street closing</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white rotate-45"></div>
                </motion.div>

                {/* Featured badge */}
                <motion.div 
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#375357] to-[#333333] text-white rounded-full shadow-xl whitespace-nowrap"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <span className="text-xs font-['Work_Sans'] font-bold uppercase tracking-wider">
                    Real-Time Updates
                  </span>
                </motion.div>

                {/* Progress Indicator */}
                <motion.div
                  className="absolute -right-10 top-1/4 bg-gradient-to-br from-[#c3937d] to-[#e9a753] text-white px-5 py-4 rounded-2xl shadow-2xl z-20"
                  initial={{ opacity: 0, x: 20, rotate: 10 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-['Antonio'] font-bold">Title Search</div>
                    <div className="text-[11px] font-['Work_Sans'] uppercase tracking-wider opacity-90 mt-1">In Progress</div>
                    <div className="w-full bg-white/30 rounded-full h-1.5 mt-2.5">
                      <div className="bg-white rounded-full h-1.5 w-3/4"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Phone Frame 3 */}
              <motion.div
                className="relative w-[240px] md:w-[280px] lg:w-[320px]"
                initial={{ opacity: 0, y: 60, rotateY: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-3 shadow-2xl">
                  {/* Phone bezel */}
                  <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                    <ImageWithFallback
                      src="https://play-lh.googleusercontent.com/fqWF7QzwMqnvizJ-jcjj3G1qCz283B-0gjaV4zicnfEdGpPQYhdMlwHpJFzzAy_AesE=w5120-h2880-rw"
                      alt="Zoccam App Screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl"></div>
                </div>
                
                {/* Notification Badge */}
                <motion.div
                  className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-[#e9a753] to-[#c3937d] rounded-full flex items-center justify-center shadow-2xl z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.9, type: "spring", bounce: 0.6 }}
                  animate={{ 
                    scale: [1, 1.1],
                  }}
                  style={{
                    transition: "scale 1s ease-in-out infinite alternate"
                  }}
                >
                  <div className="text-center">
                    <Bell className="w-5 h-5 text-white mx-auto mb-1" />
                    <span className="text-white text-[11px] font-['Work_Sans'] font-bold">New</span>
                  </div>
                </motion.div>

                {/* Info Chip */}
                <motion.div
                  className="absolute -right-6 bottom-1/3 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xl border border-[#d9ccc4] z-20"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  animate={{ 
                    y: [0, -5],
                  }}
                  style={{
                    transition: "y 1.75s ease-in-out infinite alternate"
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#375357]" />
                    <span className="text-xs font-['Work_Sans'] font-semibold text-[#333333] whitespace-nowrap">Inspection Complete</span>
                  </div>
                </motion.div>
                
                {/* Dollar Amount Chip */}
                <motion.div
                  className="absolute -left-8 top-1/2 bg-gradient-to-br from-[#375357] to-[#333333] text-white px-3 py-2 rounded-xl shadow-2xl z-20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 1.4 }}
                >
                  <div className="text-center">
                    <div className="text-[8px] font-['Work_Sans'] uppercase tracking-wider opacity-80">Deposit</div>
                    <div className="text-sm font-['Antonio'] font-bold">$15,000</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Feature Pills Below Phones */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { icon: Shield, label: 'Bank-Level Security' },
                { icon: Zap, label: 'Instant Notifications' },
                { icon: Users, label: 'Multi-Party Collaboration' },
                { icon: FileCheck, label: 'Digital Document Hub' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-[#d9ccc4]/40 shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  >
                    <Icon className="w-4 h-4 text-[#c3937d]" />
                    <span className="text-sm font-['Work_Sans'] font-semibold text-[#333333]">
                      {feature.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* New Animated Mockup Section 2: Focus on What Matters */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f8f6f4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <AnimatedSection>
            {/* Header */}
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-['Antonio'] font-bold uppercase tracking-[0.03em] mb-12 leading-tight text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                Have a Little Piece of Your Life Back.<br />Focus on What Matters Most.
              </span>
            </motion.h2>

            {/* Bento Box Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Video Card - Left */}
              <motion.div
                className="bg-gradient-to-br from-[#375357] to-[#333333] backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-[#d9ccc4]/20 h-[300px] md:h-[400px] flex items-center justify-center relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.286%' }}>
                  <iframe 
                    allow="fullscreen;autoplay" 
                    allowFullScreen 
                    height="100%" 
                    src={videos.zoccam.demo} 
                    width="100%" 
                    style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, overflow: 'hidden' }}
                  />
                </div>
              </motion.div>

              {/* Text Card - Right */}
              <motion.div
                className="bg-gradient-to-br from-[#375357] to-[#333333] backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg relative flex items-center h-[300px] md:h-[400px]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="absolute top-6 right-6">
                  <Clock className="w-8 h-8 text-[#e9a753]" />
                </div>
                <p className="text-base md:text-lg text-white font-['Work_Sans'] leading-relaxed">
                  Manual fund delivery is consistently ranked as the most time-consuming part of closing by real estate professionals. 
                  With ZOCCAM, that frustration becomes a thing of the past. Deliver the seamless, secure closing experience your 
                  realtors and clients deserve—from anywhere, at any time. No more traffic. No more delays. Just efficiency at your 
                  fingertips, whether you're at the office or working from home.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* EMD Mockups Section - Earnest Money Deposit Flow */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.div 
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#c3937d]/10 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <FileCheck className="w-4 h-4 text-[#c3937d]" />
                <span className="text-xs font-['Work_Sans'] font-semibold text-[#333333] uppercase tracking-wider">
                  Earnest Money Made Simple
                </span>
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-['Antonio'] font-bold uppercase tracking-[0.03em] mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Secure Earnest Money<br />Deposits, Instantly
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-[#333333]/70 font-['Work_Sans'] max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Streamline earnest money deposits with secure, trackable transfers that keep everyone informed 
                and compliant every step of the way.
              </motion.p>
            </div>

            {/* Benefits Grid */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                {
                  icon: Shield,
                  title: 'Secure Transfers',
                  description: 'Bank-level encryption protects every transaction',
                },
                {
                  icon: Bell,
                  title: 'Real-Time Alerts',
                  description: 'Instant notifications keep all parties informed',
                },
                {
                  icon: FileCheck,
                  title: 'Complete Audit Trail',
                  description: 'Full documentation for compliance and peace of mind',
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-xl rounded-xl p-6 border border-[#d9ccc4]/30 hover:border-[#c3937d]/40 transition-all duration-800 hover:shadow-lg text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#e9a753]/10 to-[#c3937d]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[#c3937d]" />
                    </div>
                    <h3 className="text-lg font-['Antonio'] font-bold uppercase tracking-[0.03em] text-[#333333] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[#333333]/70 font-['Work_Sans'] leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tabbed Features, Benefits & Security */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#f8f6f4] to-white">
        <div className="max-w-7xl mx-auto px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-['Antonio'] font-bold uppercase tracking-[0.03em] mb-4">
                <span className="bg-gradient-to-r from-[#333333] to-[#375357] bg-clip-text text-transparent">
                  Why Choose Zoccam?
                </span>
              </h2>
              <p className="text-lg text-[#333333]/70 font-['Work_Sans'] max-w-2xl mx-auto leading-relaxed">
                Explore the powerful capabilities, benefits, and security features that set Zoccam apart.
              </p>
              <p className="text-sm text-[#c3937d] font-['Work_Sans'] font-semibold mt-3">
                Click the tabs below to explore each category
              </p>
            </div>

            {/* Tabs */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <button
                onClick={() => setActiveTab('security')}
                className={`relative px-8 py-4 rounded-full font-['Work_Sans'] font-semibold text-sm uppercase tracking-wider transition-all duration-800 overflow-hidden cursor-pointer ${
                  activeTab === 'security'
                    ? 'bg-gradient-to-r from-[#375357] to-[#333333] text-white shadow-xl shadow-[#375357]/20'
                    : 'bg-white/60 backdrop-blur-xl text-[#333333]/70 border border-[#d9ccc4]/40 hover:border-[#c3937d]/60 hover:scale-105 hover:shadow-lg'
                }`}
              >
                {/* Animated shiny green gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e9a753]/60 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: 'linear',
                  }}
                  style={{ width: '50%' }}
                />
                <span className="relative z-10">
                  <Lock className="w-4 h-4 inline-block mr-2" />
                  Security
                </span>
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`relative px-8 py-4 rounded-full font-['Work_Sans'] font-semibold text-sm uppercase tracking-wider transition-all duration-800 overflow-hidden cursor-pointer ${
                  activeTab === 'benefits'
                    ? 'bg-gradient-to-r from-[#375357] to-[#333333] text-white shadow-xl shadow-[#375357]/20'
                    : 'bg-white/60 backdrop-blur-xl text-[#333333]/70 border border-[#d9ccc4]/40 hover:border-[#c3937d]/60 hover:scale-105 hover:shadow-lg'
                }`}
              >
                {/* Animated shiny green gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e9a753]/60 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: 'linear',
                    delay: 2,
                  }}
                  style={{ width: '50%' }}
                />
                <span className="relative z-10">
                  <Award className="w-4 h-4 inline-block mr-2" />
                  Key Benefits
                </span>
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`relative px-8 py-4 rounded-full font-['Work_Sans'] font-semibold text-sm uppercase tracking-wider transition-all duration-800 overflow-hidden cursor-pointer ${
                  activeTab === 'features'
                    ? 'bg-gradient-to-r from-[#375357] to-[#333333] text-white shadow-xl shadow-[#375357]/20'
                    : 'bg-white/60 backdrop-blur-xl text-[#333333]/70 border border-[#d9ccc4]/40 hover:border-[#c3937d]/60 hover:scale-105 hover:shadow-lg'
                }`}
              >
                {/* Animated shiny green gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e9a753]/60 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: 'linear',
                    delay: 4,
                  }}
                  style={{ width: '50%' }}
                />
                <span className="relative z-10">
                  <Shield className="w-4 h-4 inline-block mr-2" />
                  Core Features
                </span>
              </button>
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'features' && (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {coreFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        className="group bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-[#d9ccc4]/30 hover:border-[#c3937d]/40 transition-all duration-800 hover:shadow-xl hover:-translate-y-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#e9a753]/10 to-[#c3937d]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-800">
                            <Icon className="w-7 h-7 text-[#c3937d]" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-[#e9a753]/10 rounded-full mb-2">
                              <span className="text-xs font-['Work_Sans'] font-bold text-[#c3937d] uppercase tracking-wider">
                                {feature.highlight}
                              </span>
                            </div>
                            <h3 className="text-2xl font-['Antonio'] font-bold uppercase tracking-[0.03em] text-[#333333] mb-3">
                              {feature.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-base text-[#333333]/70 font-['Work_Sans'] leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {activeTab === 'benefits' && (
                <motion.div
                  key="benefits"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {keyBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <motion.div
                        key={index}
                        className="group bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-[#d9ccc4]/30 hover:border-[#c3937d]/40 transition-all duration-800 hover:shadow-xl hover:-translate-y-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#e9a753]/10 to-[#c3937d]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-800">
                            <Icon className="w-7 h-7 text-[#c3937d]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-['Antonio'] font-bold uppercase tracking-[0.03em] text-[#333333] mb-3">
                              {benefit.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-base text-[#333333]/70 font-['Work_Sans'] leading-relaxed">
                          {benefit.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {activeTab === 'security' && (
                <motion.div
                  key="security"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Security Visual */}
                    <motion.div 
                      className="relative h-96 overflow-hidden rounded-3xl bg-gradient-to-br from-[#375357] via-[#333333] to-[#375357]"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Professional Image Background - PERMANENT LOCAL ASSET */}
                      <img
                        src={enterpriseSecurityImage}
                        alt="Professional using secure technology"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Dark Overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#375357]/40 via-[#333333]/40 to-[#375357]/40" />

                      {/* Animated security pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]" />
                      </div>
                      
                      {/* Enterprise Security Badge */}
                      <div className="absolute top-4 left-6 inline-flex items-center gap-3 px-6 py-4 bg-white/20 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30">
                        <Lock className="w-6 h-6 text-white drop-shadow-lg" />
                        <span className="text-sm font-['Work_Sans'] font-bold text-white uppercase tracking-wider drop-shadow-lg">
                          Enterprise Security
                        </span>
                      </div>
                    </motion.div>

                    {/* Security Features Grid */}
                    <div className="space-y-4">
                      {securityFeatures.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={index}
                            className="group bg-white/80 backdrop-blur-xl rounded-xl p-6 border border-[#d9ccc4]/30 hover:border-[#c3937d]/40 transition-all duration-800 hover:shadow-lg"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#e9a753]/10 to-[#c3937d]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-800">
                                <Icon className="w-6 h-6 text-[#c3937d]" />
                              </div>
                              <div>
                                <h4 className="text-lg font-['Antonio'] font-bold uppercase tracking-[0.03em] text-[#333333] mb-1">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-[#333333]/70 font-['Work_Sans'] leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.div 
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#c3937d]/10 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <TrendingUp className="w-4 h-4 text-[#c3937d]" />
                <span className="text-xs font-['Work_Sans'] font-semibold text-[#333333] uppercase tracking-wider">
                  How It Works
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-['Antonio'] font-bold uppercase tracking-[0.03em] mb-4">
                <span className="bg-gradient-to-r from-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Three Steps to Faster Closings
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Connection lines */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c3937d]/20 to-transparent" />

              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                  >
                    <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-[#d9ccc4]/30 hover:border-[#c3937d]/40 transition-all duration-800 hover:shadow-xl hover:-translate-y-2 h-full">
                      {/* Step number */}
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#375357] to-[#333333] rounded-full flex items-center justify-center shadow-lg z-10">
                        <span className="text-lg font-['Antonio'] font-bold text-white">
                          {step.step}
                        </span>
                      </div>

                      <div className="mt-6 text-center">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#e9a753]/10 to-[#c3937d]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-800">
                          <Icon className="w-7 h-7 text-[#c3937d]" />
                        </div>

                        <h3 className="text-xl font-['Antonio'] font-bold uppercase tracking-[0.03em] text-[#333333] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[#333333]/70 font-['Work_Sans'] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#f8f6f4] to-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#375357]/5 via-[#c3937d]/5 to-[#e9a753]/5 opacity-50" />

        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <AnimatedSection>
            <motion.div
              className="text-center bg-white/60 backdrop-blur-xl rounded-[2rem] p-12 md:p-14 border border-[#d9ccc4]/40 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <AcornIcon className="w-14 h-14 text-[#c3937d] mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-['Antonio'] font-bold uppercase tracking-[0.03em] mb-4 leading-tight">
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Ready to Transform Your Closings?
                </span>
              </h2>

              <p className="text-base md:text-lg text-[#333333]/70 font-['Work_Sans'] mb-8 max-w-xl mx-auto leading-relaxed">
                Join thousands of real estate professionals who trust Zoccam to close deals faster, 
                safer, and with complete confidence.
              </p>

              <div className="flex justify-center">
                <Link
                  to="/contact"
                  className="group px-10 py-4 bg-gradient-to-r from-[#375357] to-[#333333] text-white rounded-full font-['Work_Sans'] font-semibold text-base hover:shadow-2xl hover:shadow-[#375357]/20 transition-all duration-800 hover:scale-[1.02] inline-flex items-center justify-center gap-3"
                >
                  Contact Us
                  <MessageSquare className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute -top-12 right-0 text-white hover:text-[#c3937d] transition-colors duration-300 flex items-center gap-2 font-['Work_Sans'] text-sm uppercase tracking-wider"
                onClick={() => setIsVideoOpen(false)}
              >
                <span>Close</span>
                <X className="w-6 h-6" />
              </button>

              {/* Video iframe */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c3937d]/20">
                <iframe
                  className="w-full h-full"
                  src="https://player.vimeo.com/video/864522195?h=7fa2e0cc61&autoplay=1"
                  title="Zoccam Overview"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
