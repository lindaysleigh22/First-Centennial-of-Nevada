import { Shield, Clock, CheckCircle2, FileSearch, TrendingUp, Users, Home, Building2, Sparkles, AlertTriangle, Scale, Lock, Volume2 } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';
import { motion } from 'motion/react';
import { AcornIcon } from '../AcornIcon';
import { useState } from 'react';
import consultationImage from "figma:asset/31af529d119bd99e791ec050114a213a77c57bac.png";
import titleWorkImage from "figma:asset/2a1c4b46bc57e46775b66fa7de19e6d37ead7fa8.png";
import familyHomeImage from "figma:asset/c4458ab3a39cb13a57012a39671026754e994306.png";
import titleExaminerImage from "figma:asset/7830409c8bcf3286ef3e23ea6424cb1b66f44958.png";
import screenshotImage from "figma:asset/31008aedba8b3600b87ccb04193f89d8033800d4.png";
import agentProfileImage from "figma:asset/ccbfd8d43e94173b636dc8e9a7ded471ff410d83.png";

export function PreOpenAdvantage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleAudioPlay = async (cardId: string) => {
    // If clicking the same audio that's currently playing, stop it
    if (playingAudio === cardId) {
      const audio = document.getElementById(`audio-${cardId}`) as HTMLAudioElement;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      setPlayingAudio(null);
      return;
    }

    // Stop any currently playing audio and wait for it to pause
    if (playingAudio) {
      const currentAudio = document.getElementById(`audio-${playingAudio}`) as HTMLAudioElement;
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      setPlayingAudio(null);
      // Wait for the pause to fully complete
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Play the selected audio
    const audio = document.getElementById(`audio-${cardId}`) as HTMLAudioElement;
    if (audio) {
      try {
        // Reset playback position
        audio.currentTime = 0;
        
        // Attempt to play
        await audio.play();
        
        // Only update state after successful play
        setPlayingAudio(cardId);
        console.log('Audio playing:', cardId);
      } catch (error: any) {
        console.error('Audio play failed for', cardId, ':', error);
        setPlayingAudio(null);
        
        // Only show alert for non-abort errors (actual problems)
        if (error.name !== 'AbortError') {
          alert('Audio file not found. Please ensure audio files are placed in /public/audio/ folder.');
        }
      }
    } else {
      console.error('Audio element not found for:', cardId);
      setPlayingAudio(null);
    }
  };

  const benefits = [
    {
      icon: Shield,
      title: 'Early Problem Detection',
      description: 'Identify and resolve title issues before they delay your closing.',
    },
    {
      icon: Clock,
      title: 'Faster Closings',
      description: 'Pre-cleared titles mean smoother, quicker transactions for your clients.',
    },
    {
      icon: CheckCircle2,
      title: 'Increased Confidence',
      description: 'Know the status of your transaction well before closing day arrives.',
    },
    {
      icon: FileSearch,
      title: 'Thorough Research',
      description: 'Comprehensive title examination completed early in the process.',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Edge',
      description: 'Stand out by offering pre-approved, ready-to-close properties.',
    },
    {
      icon: Users,
      title: 'Client Satisfaction',
      description: 'Reduce stress and uncertainty for buyers, sellers, and agents.',
    },
  ];

  const process = [
    {
      title: 'Engage Your Title or Escrow Partner',
      description: 'Initiate collaboration with your First Centennial Title representative or escrow officer as soon as the listing becomes active. This early engagement will enable us to provide support throughout the transaction process.',
      icon: Users,
    },
    {
      title: 'Provide Comprehensive Information on the Seller and Property',
      description: 'Share all relevant details regarding the seller and the property to ensure we identify any potential gaps in the title and maintain the timeline for your closing date.',
      icon: Building2,
    },
    {
      title: 'Commence the Smart Start Escrow Process',
      description: 'Upon receiving your approval, First Centennial Title will initiate a preliminary title commitment on behalf of the seller. This process is designed to identify any issues that may affect the transaction, thereby enhancing the likelihood of a successful closing.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4]">
      {/* Hero Section - Ultra Premium */}
      <section className="py-40 bg-gradient-to-br from-white via-[#f8f6f4] to-white relative overflow-hidden">
        {/* Premium geometric elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-24 left-32 w-px h-64 bg-[#375357] rotate-12"></div>
          <div className="absolute bottom-28 right-24 w-px h-56 bg-[#c3937d] -rotate-12"></div>
        </div>
        
        {/* Floating gradient orbs - ultra slow */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#e9a753]/6 to-[#c3937d]/4 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.15, 0.3],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1]
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
                  Pre-List Protection
                </span>
              </motion.div>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c3937d] to-transparent"></div>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-8">
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Smart Start Escrow
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Resolve title issues before listing for faster, smoother closings.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Escrow Done Smart! */}
      <section className="py-32 bg-gradient-to-br from-[#e9e4df] to-[#d9ccc4] relative overflow-hidden">
        {/* Multiple floating orbs for depth */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#375357]/8 to-[#c3937d]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#e9a753]/8 to-[#c3937d]/6 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <AcornIcon className="w-12 h-12" />
                <h2 className="text-4xl sm:text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Escrow Done Smart!
                </h2>
              </div>
              <p className="text-xl text-[#333333]/70 font-normal leading-relaxed max-w-3xl mx-auto">
                A proactive approach to title services that starts before you open escrow
              </p>
            </div>
          </AnimatedSection>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
            {/* Left - Hero Card with Image - Takes 3 columns */}
            <AnimatedSection className="lg:col-span-3">
              <motion.div 
                className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(55,83,87,0.1)] h-full flex flex-col"
                whileHover={{ 
                  boxShadow: "0 30px 80px rgba(55, 83, 87, 0.15)",
                  y: -6,
                  scale: 1.01
                }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={consultationImage} 
                    alt="First Centennial team consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center">
                      <Home className="w-7 h-7 text-[#375357]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-normal text-[#333333] mb-2 tracking-tight">
                        Start Strong, Close Fast
                      </h3>
                      <p className="text-sm text-[#c3937d] font-medium uppercase tracking-wider">
                        Early Title Examination
                      </p>
                    </div>
                  </div>
                  <p className="text-base text-[#333333]/80 font-normal leading-relaxed">
                    Smart Start Escrow is our proactive approach to title services that begins the title examination process before you officially open escrow. This early start allows us to identify potential issues, research solutions, and clear title defects while you're still in the negotiation phase.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Right - Stats Grid - Takes 2 columns */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <AnimatedSection delay={0.1}>
                <motion.div 
                  className="bg-gradient-to-br from-[#375357] to-[#333333] rounded-3xl p-8 shadow-[0_10px_40px_rgba(55,83,87,0.2)] relative overflow-hidden group h-full"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#e9a753]/10 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="relative z-10">
                    <Clock className="w-8 h-8 text-[#e9a753] mb-4" strokeWidth={1.5} />
                    <div className="text-4xl font-normal text-white mb-2">45+</div>
                    <div className="text-xs text-white/70 uppercase tracking-wider leading-relaxed">
                      Years of Title Experience
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <motion.div 
                  className="bg-gradient-to-br from-[#e9a753] to-[#c3937d] rounded-3xl p-8 shadow-[0_10px_40px_rgba(233,167,83,0.3)] relative overflow-hidden group h-full"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="relative z-10">
                    <TrendingUp className="w-8 h-8 text-white mb-4" strokeWidth={1.5} />
                    <div className="text-4xl font-normal text-white mb-2">30%</div>
                    <div className="text-xs text-white/90 uppercase tracking-wider leading-relaxed">
                      Faster Time to Close
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <motion.div 
                  className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-[0_10px_40px_rgba(55,83,87,0.08)] relative overflow-hidden group border border-[#333333]/10 h-full"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#375357]/5 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="relative z-10">
                    <Shield className="w-8 h-8 text-[#375357] mb-4" strokeWidth={1.5} />
                    <div className="text-4xl font-normal text-[#333333] mb-2">100%</div>
                    <div className="text-xs text-[#333333]/60 uppercase tracking-wider leading-relaxed">
                      Pre-Cleared Properties
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <motion.div 
                  className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-[0_10px_40px_rgba(55,83,87,0.08)] relative overflow-hidden group border border-[#333333]/10 h-full"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#c3937d]/5 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="relative z-10">
                    <CheckCircle2 className="w-8 h-8 text-[#c3937d] mb-4" strokeWidth={1.5} />
                    <div className="text-4xl font-normal text-[#333333] mb-2">24/7</div>
                    <div className="text-xs text-[#333333]/60 uppercase tracking-wider leading-relaxed">
                      Real-Time Status Updates
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>

          {/* Bottom Feature Pills */}
          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div 
                className="backdrop-blur-sm rounded-full px-6 py-3 shadow-md border border-white/40"
                whileHover={{ scale: 1.05 }}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e]" strokeWidth={2.5} />
                  <span className="text-sm font-normal text-[#333333]">Early Issue Detection</span>
                </div>
              </motion.div>

              <motion.div 
                className="backdrop-blur-sm rounded-full px-6 py-3 shadow-md border border-white/40"
                whileHover={{ scale: 1.05 }}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e]" strokeWidth={2.5} />
                  <span className="text-sm font-normal text-[#333333]">Faster Closings</span>
                </div>
              </motion.div>

              <motion.div 
                className="backdrop-blur-sm rounded-full px-6 py-3 shadow-md border border-white/40"
                whileHover={{ scale: 1.05 }}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e]" strokeWidth={2.5} />
                  <span className="text-sm font-normal text-[#333333]">Complete Confidence</span>
                </div>
              </motion.div>

              <motion.div 
                className="backdrop-blur-sm rounded-full px-6 py-3 shadow-md border border-white/40"
                whileHover={{ scale: 1.05 }}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e]" strokeWidth={2.5} />
                  <span className="text-sm font-normal text-[#333333]">Competitive Edge</span>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Comprehensive Title Services - What We Review Section */}
      <section className="py-32 bg-gradient-to-br from-[#d9ccc4] to-[#e9e4df] relative overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#375357]/8 to-[#c3937d]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#e9a753]/8 to-[#c3937d]/6 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.p 
                className="text-sm font-normal tracking-wider text-[#c3937d] uppercase mb-4 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Comprehensive Title Analysis
              </motion.p>
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6">
                What We Review
              </h2>
              <p className="text-lg text-[#333333]/70 font-normal leading-relaxed max-w-3xl mx-auto">
                Our Smart Start Escrow process includes a thorough examination of every critical document and detail
              </p>
            </div>
          </AnimatedSection>

          {/* Services Grid - 2x3 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Up-Front Title Commitment */}
            <AnimatedSection delay={0.1}>
              <motion.div
                className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.15)] transition-all h-full relative group border border-white/40"
                animate={{
                  y: expandedCard === 'upfront' ? -6 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 z-10 opacity-40">
                  <div className="absolute top-4 left-4 w-8 h-0.5 bg-gradient-to-r from-[#375357] to-transparent"></div>
                  <div className="absolute top-4 left-4 w-0.5 h-8 bg-gradient-to-b from-[#375357] to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center">
                      <FileSearch className="w-7 h-7 text-[#375357]" strokeWidth={1.5} />
                    </div>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAudioPlay('upfront');
                      }}
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#e9a753]/10 to-[#c3937d]/10 flex items-center justify-center border border-[#e9a753]/20"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(233, 167, 83, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Volume2 className={`w-5 h-5 ${playingAudio === 'upfront' ? 'text-[#e9a753]' : 'text-[#375357]'}`} strokeWidth={2} />
                    </motion.button>
                  </div>

                  <h3 className="text-xl font-normal text-[#333333] mb-3 tracking-tight">
                    Up-Front Title Commitment
                  </h3>
                  
                  {/* Hidden audio element */}
                  <audio 
                    id="audio-upfront" 
                    onEnded={() => setPlayingAudio(null)}
                    onPause={() => setPlayingAudio(null)}
                  >
                    <source src="https://bsdiuqfgpvbbwfmgdght.supabase.co/storage/v1/object/public/audio-files/upfront-title.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>

                  <p className="text-sm text-[#333333]/60 font-normal leading-relaxed mb-6">
                    Identify clouds on title before buyers do
                  </p>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedCard === 'upfront' ? 'auto' : 0,
                      opacity: expandedCard === 'upfront' ? 1 : 0,
                      marginBottom: expandedCard === 'upfront' ? 24 : 0,
                    }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="pt-4 border-t border-[#333333]/10">
                      <p className="text-sm text-[#333333]/80 font-normal leading-relaxed mb-4">
                        An up-front title commitment enables us to detect potential title issues early, ensuring that the buyer, lender, or escrow timeline remains unaffected. By addressing any clouds on the title at the outset of a listing, we can prevent unexpected surprises and keep transactions running smoothly.
                      </p>
                      
                      {/* Example Box */}
                      <motion.div 
                        className="bg-gradient-to-br from-[#375357]/5 to-[#c3937d]/5 rounded-2xl p-6 border border-[#375357]/10 cursor-pointer shadow-md"
                        whileHover={{ 
                          scale: 1.08, 
                          y: -8,
                          boxShadow: "0 20px 60px rgba(55, 83, 87, 0.25)",
                          backgroundColor: "rgba(255, 255, 255, 0.95)"
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <motion.div 
                          className="flex items-start gap-3 mb-3"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#e9a753]/20 to-[#c3937d]/20 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-[#375357]" strokeWidth={2} />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-[#333333] mb-2">Example:</h4>
                            <p className="text-xs text-[#333333]/70 font-normal leading-relaxed italic">
                              If a lien or unreleased deed of trust is identified before the listing goes live, the seller has the opportunity to resolve it promptly. This proactive approach helps avoid delays during closing when a buyer is already under contract.
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.button
                    onClick={() => toggleCard('upfront')}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#375357] to-[#2d4649] text-white rounded-full px-6 py-2.5 text-sm font-normal shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(55, 83, 87, 0.25)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedCard === 'upfront' ? 'Show Less' : 'Read More'}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Easements & Access Review */}
            <AnimatedSection delay={0.15}>
              <motion.div
                className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.15)] transition-all h-full relative group border border-white/40"
                animate={{
                  y: expandedCard === 'easements' ? -6 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 z-10 opacity-40">
                  <div className="absolute top-4 left-4 w-8 h-0.5 bg-gradient-to-r from-[#375357] to-transparent"></div>
                  <div className="absolute top-4 left-4 w-0.5 h-8 bg-gradient-to-b from-[#375357] to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center">
                      <Home className="w-7 h-7 text-[#375357]" strokeWidth={1.5} />
                    </div>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAudioPlay('easements');
                      }}
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#e9a753]/10 to-[#c3937d]/10 flex items-center justify-center border border-[#e9a753]/20"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(233, 167, 83, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Volume2 className={`w-5 h-5 ${playingAudio === 'easements' ? 'text-[#e9a753]' : 'text-[#375357]'}`} strokeWidth={2} />
                    </motion.button>
                  </div>

                  <h3 className="text-xl font-normal text-[#333333] mb-3 tracking-tight">
                    Easements & Access Review
                  </h3>
                  
                  {/* Hidden audio element */}
                  <audio 
                    id="audio-easements" 
                    onEnded={() => setPlayingAudio(null)}
                    onPause={() => setPlayingAudio(null)}
                  >
                    <source src="https://bsdiuqfgpvbbwfmgdght.supabase.co/storage/v1/object/public/audio-files/easements-access.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>

                  <p className="text-sm text-[#333333]/60 font-normal leading-relaxed mb-6">
                    Know what affects use, access, and value
                  </p>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedCard === 'easements' ? 'auto' : 0,
                      opacity: expandedCard === 'easements' ? 1 : 0,
                      marginBottom: expandedCard === 'easements' ? 24 : 0,
                    }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="pt-4 border-t border-[#333333]/10">
                      <p className="text-sm text-[#333333]/80 font-normal leading-relaxed mb-4">
                        Easements and access rights play a crucial role in determining a property's use, value, and how buyers perceive it. Conducting an early review of these factors enables agents to provide clear disclosures and minimize confusion throughout the escrow process.
                      </p>
                      
                      {/* Example Box */}
                      <motion.div 
                        className="bg-gradient-to-br from-[#375357]/5 to-[#c3937d]/5 rounded-2xl p-6 border border-[#375357]/10 cursor-pointer shadow-md"
                        whileHover={{ 
                          scale: 1.08, 
                          y: -8,
                          boxShadow: "0 20px 60px rgba(55, 83, 87, 0.25)",
                          backgroundColor: "rgba(255, 255, 255, 0.95)"
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <motion.div 
                          className="flex items-start gap-3 mb-3"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#e9a753]/20 to-[#c3937d]/20 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-[#375357]" strokeWidth={2} />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-[#333333] mb-2">Example:</h4>
                            <p className="text-xs text-[#333333]/70 font-normal leading-relaxed italic">
                              Identifying a shared driveway or utility easement at the outset allows the agent to proactively explain access rights during property showings, rather than addressing buyer concerns after inspections have taken place.
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.button
                    onClick={() => toggleCard('easements')}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#375357] to-[#2d4649] text-white rounded-full px-6 py-2.5 text-sm font-normal shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(55, 83, 87, 0.25)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedCard === 'easements' ? 'Show Less' : 'Read More'}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Vesting Clarity */}
            <AnimatedSection delay={0.2}>
              <motion.div
                className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.15)] transition-all h-full relative group border border-white/40"
                animate={{
                  y: expandedCard === 'vesting' ? -6 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 z-10 opacity-40">
                  <div className="absolute top-4 left-4 w-8 h-0.5 bg-gradient-to-r from-[#375357] to-transparent"></div>
                  <div className="absolute top-4 left-4 w-0.5 h-8 bg-gradient-to-b from-[#375357] to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center">
                      <Scale className="w-7 h-7 text-[#375357]" strokeWidth={1.5} />
                    </div>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAudioPlay('vesting');
                      }}
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#e9a753]/10 to-[#c3937d]/10 flex items-center justify-center border border-[#e9a753]/20"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(233, 167, 83, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Volume2 className={`w-5 h-5 ${playingAudio === 'vesting' ? 'text-[#e9a753]' : 'text-[#375357]'}`} strokeWidth={2} />
                    </motion.button>
                  </div>

                  <h3 className="text-xl font-normal text-[#333333] mb-3 tracking-tight">
                    Vesting Clarity
                  </h3>
                  
                  {/* Hidden audio element */}
                  <audio 
                    id="audio-vesting" 
                    onEnded={() => setPlayingAudio(null)}
                    onPause={() => setPlayingAudio(null)}
                  >
                    <source src="https://bsdiuqfgpvbbwfmgdght.supabase.co/storage/v1/object/public/audio-files/vesting-clarity.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>

                  <p className="text-sm text-[#333333]/60 font-normal leading-relaxed mb-6">
                    Trusts, LLCs, estates, and entity ownership explained early
                  </p>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedCard === 'vesting' ? 'auto' : 0,
                      opacity: expandedCard === 'vesting' ? 1 : 0,
                      marginBottom: expandedCard === 'vesting' ? 24 : 0,
                    }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="pt-4 border-t border-[#333333]/10">
                      <p className="text-sm text-[#333333]/80 font-normal leading-relaxed mb-4">
                        Understanding how a property is vested is critical to a smooth closing. Clarifying ownership early helps avoid document delays and signature issues once escrow is opened.
                      </p>
                      
                      {/* Example Box */}
                      <motion.div 
                        className="bg-gradient-to-br from-[#375357]/5 to-[#c3937d]/5 rounded-2xl p-6 border border-[#375357]/10 cursor-pointer shadow-md"
                        whileHover={{ 
                          scale: 1.08, 
                          y: -8,
                          boxShadow: "0 20px 60px rgba(55, 83, 87, 0.25)",
                          backgroundColor: "rgba(255, 255, 255, 0.95)"
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <motion.div 
                          className="flex items-start gap-3 mb-3"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#e9a753]/20 to-[#c3937d]/20 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-[#375357]" strokeWidth={2} />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-[#333333] mb-2">Example:</h4>
                            <p className="text-xs text-[#333333]/70 font-normal leading-relaxed italic">
                              A home held in a family trust is identified early, allowing the correct trustee documentation to be prepared before a buyer is secured.
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.button
                    onClick={() => toggleCard('vesting')}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#375357] to-[#2d4649] text-white rounded-full px-6 py-2.5 text-sm font-normal shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(55, 83, 87, 0.25)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedCard === 'vesting' ? 'Show Less' : 'Read More'}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* CC&Rs Review */}
            <AnimatedSection delay={0.25}>
              <motion.div
                className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.15)] transition-all h-full relative group border border-white/40"
                animate={{
                  y: expandedCard === 'ccrs' ? -6 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 z-10 opacity-40">
                  <div className="absolute top-4 left-4 w-8 h-0.5 bg-gradient-to-r from-[#375357] to-transparent"></div>
                  <div className="absolute top-4 left-4 w-0.5 h-8 bg-gradient-to-b from-[#375357] to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-[#375357]" strokeWidth={1.5} />
                    </div>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAudioPlay('ccrs');
                      }}
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#e9a753]/10 to-[#c3937d]/10 flex items-center justify-center border border-[#e9a753]/20"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(233, 167, 83, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Volume2 className={`w-5 h-5 ${playingAudio === 'ccrs' ? 'text-[#e9a753]' : 'text-[#375357]'}`} strokeWidth={2} />
                    </motion.button>
                  </div>

                  <h3 className="text-xl font-normal text-[#333333] mb-3 tracking-tight">
                    CC&Rs Review
                  </h3>
                  
                  {/* Hidden audio element */}
                  <audio 
                    id="audio-ccrs" 
                    onEnded={() => setPlayingAudio(null)}
                    onPause={() => setPlayingAudio(null)}
                  >
                    <source src="https://bsdiuqfgpvbbwfmgdght.supabase.co/storage/v1/object/public/audio-files/ccrs-review.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>

                  <p className="text-sm text-[#333333]/60 font-normal leading-relaxed mb-6">
                    Disclose restrictions clearly and confidently
                  </p>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedCard === 'ccrs' ? 'auto' : 0,
                      opacity: expandedCard === 'ccrs' ? 1 : 0,
                      marginBottom: expandedCard === 'ccrs' ? 24 : 0,
                    }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="pt-4 border-t border-[#333333]/10">
                      <p className="text-sm text-[#333333]/80 font-normal leading-relaxed mb-4">
                        Covenants, Conditions, and Restrictions (CC&Rs) can significantly impact how a buyer utilizes a property. Conducting an early review of CC&Rs helps manage expectations and minimizes the risk of disputes later in the transaction.
                      </p>
                      
                      {/* Example Box */}
                      <motion.div 
                        className="bg-gradient-to-br from-[#375357]/5 to-[#c3937d]/5 rounded-2xl p-6 border border-[#375357]/10 cursor-pointer shadow-md"
                        whileHover={{ 
                          scale: 1.08, 
                          y: -8,
                          boxShadow: "0 20px 60px rgba(55, 83, 87, 0.25)",
                          backgroundColor: "rgba(255, 255, 255, 0.95)"
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <motion.div 
                          className="flex items-start gap-3 mb-3"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#e9a753]/20 to-[#c3937d]/20 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-[#375357]" strokeWidth={2} />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-[#333333] mb-2">Example:</h4>
                            <p className="text-xs text-[#333333]/70 font-normal leading-relaxed italic">
                              By disclosing short-term rental restrictions prior to writing offers, we can prevent buyers from canceling the purchase upon discovering limitations during the escrow process.
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.button
                    onClick={() => toggleCard('ccrs')}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#375357] to-[#2d4649] text-white rounded-full px-6 py-2.5 text-sm font-normal shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(55, 83, 87, 0.25)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedCard === 'ccrs' ? 'Show Less' : 'Read More'}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Fraud Prevention */}
            <AnimatedSection delay={0.3}>
              <motion.div
                className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.15)] transition-all h-full relative group border border-white/40"
                animate={{
                  y: expandedCard === 'fraud' ? -6 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 z-10 opacity-40">
                  <div className="absolute top-4 left-4 w-8 h-0.5 bg-gradient-to-r from-[#375357] to-transparent"></div>
                  <div className="absolute top-4 left-4 w-0.5 h-8 bg-gradient-to-b from-[#375357] to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center">
                      <Lock className="w-7 h-7 text-[#375357]" strokeWidth={1.5} />
                    </div>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAudioPlay('fraud');
                      }}
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#e9a753]/10 to-[#c3937d]/10 flex items-center justify-center border border-[#e9a753]/20"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(233, 167, 83, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Volume2 className={`w-5 h-5 ${playingAudio === 'fraud' ? 'text-[#e9a753]' : 'text-[#375357]'}`} strokeWidth={2} />
                    </motion.button>
                  </div>

                  <h3 className="text-xl font-normal text-[#333333] mb-3 tracking-tight">
                    Fraud Prevention
                  </h3>
                  
                  {/* Hidden audio element */}
                  <audio 
                    id="audio-fraud" 
                    onEnded={() => setPlayingAudio(null)}
                    onPause={() => setPlayingAudio(null)}
                  >
                    <source src="https://bsdiuqfgpvbbwfmgdght.supabase.co/storage/v1/object/public/audio-files/fraud-prevention.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>

                  <p className="text-sm text-[#333333]/60 font-normal leading-relaxed mb-6">
                    Reduce exposure by establishing early verification and controls
                  </p>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedCard === 'fraud' ? 'auto' : 0,
                      opacity: expandedCard === 'fraud' ? 1 : 0,
                      marginBottom: expandedCard === 'fraud' ? 24 : 0,
                    }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="pt-4 border-t border-[#333333]/10">
                      <p className="text-sm text-[#333333]/80 font-normal leading-relaxed mb-4">
                        The risk of fraud escalates once a property is publicly listed. To safeguard sellers, buyers, and all parties involved in the transaction, First Centennial Title utilizes ClosingLock—a secure communication and verification system tailored specifically for real estate transactions.
                      </p>
                      
                      {/* Feature Box */}
                      <motion.div 
                        className="bg-gradient-to-br from-[#375357]/5 to-[#c3937d]/5 rounded-2xl p-6 border border-[#375357]/10 cursor-pointer shadow-md"
                        whileHover={{ 
                          scale: 1.08, 
                          y: -8,
                          boxShadow: "0 20px 60px rgba(55, 83, 87, 0.25)",
                          backgroundColor: "rgba(255, 255, 255, 0.95)"
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <motion.div 
                          className="flex items-start gap-3"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#e9a753]/20 to-[#c3937d]/20 flex items-center justify-center">
                            <Lock className="w-4 h-4 text-[#375357]" strokeWidth={2} />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-[#333333] mb-2">ClosingLock Protection:</h4>
                            <p className="text-xs text-[#333333]/70 font-normal leading-relaxed">
                              ClosingLock ensures that sensitive information, such as wire instructions and identity verification, is managed in a secure environment, protecting it from exposure via email, phone calls, or unsecured links.
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.button
                    onClick={() => toggleCard('fraud')}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#375357] to-[#2d4649] text-white rounded-full px-6 py-2.5 text-sm font-normal shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(55, 83, 87, 0.25)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedCard === 'fraud' ? 'Show Less' : 'Read More'}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Power Quote Card - Spans full width on larger screens */}
            <AnimatedSection delay={0.35}>
              <motion.div
                className="bg-gradient-to-br from-[#375357] to-[#333333] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(55,83,87,0.25)] h-full relative group cursor-pointer border border-[#375357]/20 lg:col-span-1"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#e9a753]/10 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Decorative quote accent - larger */}
                <div className="absolute top-6 right-6 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                <div className="p-10 relative z-10 flex flex-col justify-center h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <AlertTriangle className="w-6 h-6 text-[#e9a753]" strokeWidth={1.5} />
                    <span className="text-xs font-normal tracking-wider text-[#e9a753] uppercase">
                      The Smart Start Promise
                    </span>
                  </div>

                  <blockquote className="text-2xl sm:text-3xl font-normal text-white leading-tight tracking-tight mb-8">
                    "Problems found early become solutions. Problems found late become delays."
                  </blockquote>
                  
                  {/* Attribution with profile picture */}
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                    <img 
                      src={agentProfileImage} 
                      alt="Lisa Quilici"
                      className="w-20 h-20 rounded-full object-cover ring-2 ring-[#e9a753]/30 shadow-lg"
                    />
                    <div>
                      <div className="text-sm text-white font-medium">Lisa Quilici</div>
                      <div className="text-xs text-white/60 font-normal">Chief Title Officer</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-32 bg-gradient-to-b from-[#d9ccc4] to-[#e9e4df] relative overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#375357]/8 to-[#c3937d]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#e9a753]/8 to-[#c3937d]/6 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.p 
                className="text-sm font-normal tracking-wider text-[#c3937d] uppercase mb-4 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Why Choose Smart Start
              </motion.p>
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                Key Benefits
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(55,83,87,0.15)] transition-all h-full relative overflow-hidden group cursor-pointer border border-white/40"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#375357]/[0.03] via-transparent to-[#c3937d]/[0.03]"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Icon container */}
                    <div className="relative w-16 h-16 mb-6">
                      <motion.div 
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#375357]/10 to-[#c3937d]/10 flex items-center justify-center relative z-10"
                        whileHover={{ 
                          rotate: [0, -5, 5, -5, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-[#375357]" strokeWidth={1.5} />
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-normal text-[#333333] mb-3 tracking-tight relative z-10">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-[#333333]/60 font-normal leading-relaxed text-sm relative z-10 group-hover:text-[#333333]/80 transition-colors duration-300">
                      {benefit.description}
                    </p>
                    
                    {/* Animated bottom accent bar */}
                    <motion.div
                      className="mt-6 h-1 rounded-full bg-gradient-to-r from-[#375357] via-[#c3937d] to-[#e9a753] relative"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Peace of Mind - Family Success Section */}
      <section className="py-32 bg-gradient-to-br from-[#d9ccc4] to-[#e9e4df] relative overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#e9a753]/8 to-[#c3937d]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#375357]/8 to-[#c3937d]/6 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <motion.div
                    className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-5 py-2 mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Home className="w-4 h-4 text-[#375357]" strokeWidth={2} />
                    <span className="text-xs font-normal tracking-wider text-[#375357] uppercase">
                      The Smart Start Difference
                    </span>
                  </motion.div>

                  <h2 className="text-4xl sm:text-5xl font-normal tracking-tight bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent mb-6 leading-tight">
                    From Closing Table to New Home
                  </h2>

                  <p className="text-lg text-[#333333]/70 font-normal leading-relaxed mb-8">
                    When your closing goes smoothly, families can move into their new homes on time, on budget, and with complete peace of mind. Smart Start Escrow means fewer surprises, faster closings, and happier clients celebrating their new beginning.
                  </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/40"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(55, 83, 87, 0.1)" }}
                  >
                    <div className="text-3xl font-normal text-[#375357] mb-2">On-Time</div>
                    <div className="text-sm text-[#333333]/60 font-normal">
                      Closings without delays
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/40"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(55, 83, 87, 0.1)" }}
                  >
                    <div className="text-3xl font-normal text-[#c3937d] mb-2">Stress-Free</div>
                    <div className="text-sm text-[#333333]/60 font-normal">
                      Client experience
                    </div>
                  </motion.div>
                </div>

                {/* Client quote */}
                <motion.div
                  className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-md rounded-2xl p-8 border border-white/40 relative overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Decorative quote accent */}
                  <div className="absolute top-4 right-4 w-16 h-16 opacity-5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#375357]">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>
                  
                  <p className="text-base text-[#333333]/80 font-normal leading-relaxed italic mb-4 relative z-10">
                    "Smart Start has become my secret weapon for competitive listings. Buyers know there won't be title surprises, and sellers love that their property is ready to close. My clients get their keys on time, every time."
                  </p>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#375357] to-[#c3937d]"></div>
                    <div className="text-sm text-[#333333]/60 font-normal">Nevada Real Estate Agent</div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Right - Family Image */}
            <AnimatedSection delay={0.2}>
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(55,83,87,0.15)]"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 30px 80px rgba(55, 83, 87, 0.2)"
                }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Decorative corner accent - bottom right */}
                <div className="absolute bottom-0 right-0 w-24 h-24 z-10">
                  <div className="absolute bottom-6 right-6 w-12 h-0.5 bg-gradient-to-l from-[#e9a753] to-transparent"></div>
                  <div className="absolute bottom-6 right-6 w-0.5 h-12 bg-gradient-to-t from-[#e9a753] to-transparent"></div>
                </div>
                
                <img 
                  src={familyHomeImage}
                  alt="Family moving into new home"
                  className="w-full h-auto"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#375357] to-[#333333] relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#e9a753]/8 to-[#c3937d]/5 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-normal text-white mb-6 tracking-tight leading-tight">
              Ready to Experience Smart Start Escrow?
            </h2>
            <p className="text-lg text-white/70 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
              Contact our team to learn how Smart Start Escrow can streamline your next real estate transaction and give you a competitive advantage.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#e9a753] to-[#c3937d] text-white rounded-full font-normal shadow-[0_10px_40px_rgba(233,167,83,0.3)] hover:shadow-[0_20px_60px_rgba(233,167,83,0.4)] transition-all duration-500"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              Get Started Today
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
