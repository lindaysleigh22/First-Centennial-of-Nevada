import TreeLogo from '../TreeLogo';
import { Home, Building2, RefreshCw, Award, Clock, Users, MapPin, FileText } from 'lucide-react';

export function SocialMediaPack() {
  // Instagram post designs
  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4NjgwOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      headline: 'EXPERTISE,',
      subtext: 'BY DESIGN',
      description: 'Decades of title & escrow knowledge refined into seamless, stress-free closings.',
      gradient: 'from-[#333333]/80 via-[#375357]/70 to-transparent',
      icon: Award,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1690199827627-5e94816c6165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg2MTI3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      headline: 'HOME,',
      subtext: 'NOT JUST HOUSE',
      description: 'We understand that every residential transaction is crafted to offer more trust, confidence, and peace of mind.',
      gradient: 'from-[#d9ccc4]/90 via-[#c3937d]/80 to-transparent',
      icon: Home,
      cta: 'Learn More',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1677324574457-645566fea332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzY4NjUyOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      headline: 'COMMERCIAL',
      subtext: 'EXCELLENCE',
      description: 'Complex transactions handled with precision. From multi-million dollar deals to small business purchases.',
      gradient: 'from-[#375357]/85 via-[#e9a753]/75 to-transparent',
      icon: Building2,
      cta: 'Our Services',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBidXNpbmVzcyUyMGRlYWx8ZW58MXx8fHwxNzY4NjcwODM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      headline: 'TRUE',
      subtext: 'PARTNERSHIP',
      description: 'A reliable title & escrow partner that prioritizes your success and timeline.',
      gradient: 'from-[#333333]/80 via-black/60 to-transparent',
      icon: Users,
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1723110994499-df46435aa4b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY4Njk3MTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      headline: 'REFINANCE,',
      subtext: 'SIMPLIFIED',
      description: 'Streamline your refinance with our expert team. Fast closings, competitive rates, exceptional service.',
      gradient: 'from-[#375357]/80 via-[#c3937d]/70 to-transparent',
      icon: RefreshCw,
      cta: 'Get Started',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODcwNzM2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      headline: 'READY TO',
      subtext: 'CLOSE FASTER?',
      description: 'Our streamlined process ensures your transaction moves quickly without sacrificing attention to detail.',
      gradient: 'from-[#d9ccc4]/85 via-white/70 to-transparent',
      icon: Clock,
      cta: 'Contact Us',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1646884559241-f0f843fe60a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXMlMjB2ZWdhcyUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3Njg3MDczNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      headline: 'NEVADA',
      subtext: 'EXPERTISE',
      description: 'Local knowledge meets decades of experience. Trusted by Nevada homeowners since 1979.',
      gradient: 'from-[#e9a753]/75 via-[#375357]/80 to-black/60',
      icon: MapPin,
      cta: 'About Us',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2ODcwNzM2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      headline: 'ROOTED IN',
      subtext: 'EXPERIENCE',
      description: "Since 1979, we've been building lasting relationships through integrity, expertise, and exceptional service.",
      gradient: 'from-[#333333]/85 via-[#375357]/75 to-transparent',
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f6f4] via-white to-[#e5dcd3] py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 mb-16">
          
          {/* Left - Title */}
          <div>
            <div className="inline-block mb-6">
              <h1 className="text-6xl lg:text-8xl font-bold text-[#333333] mb-3" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                SOCIAL MEDIA
              </h1>
              <h1 className="text-6xl lg:text-8xl font-bold text-[#375357]" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                PACK
              </h1>
              <div className="h-2 bg-gradient-to-r from-[#375357] via-[#c3937d] to-[#e9a753] rounded-full mt-4"></div>
            </div>
            <p className="text-xl text-[#333333]/80 max-w-2xl mb-4" style={{ fontFamily: 'Work Sans, sans-serif' }}>
              Ready-to-use Instagram post templates for First Centennial Title of Nevada
            </p>
            <p className="text-sm text-[#333333]/50" style={{ fontFamily: 'Work Sans, sans-serif' }}>
              8 Designs • Square Format (1080 × 1080px) • Instagram Optimized
            </p>
          </div>

          {/* Right - Info Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-[#333333]/10">
            <TreeLogo width={80} height={80} className="mb-6" />
            <h3 className="text-2xl font-bold text-[#375357] mb-2" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
              FIRST CENTENNIAL
            </h3>
            <p className="text-lg text-[#333333]/70 mb-4" style={{ fontFamily: 'Work Sans, sans-serif' }}>
              of Nevada
            </p>
            <div className="h-px bg-[#333333]/10 my-6"></div>
            <p className="text-sm text-[#333333]/60 mb-3" style={{ fontFamily: 'Work Sans, sans-serif' }}>
              <strong>Template Specs:</strong>
            </p>
            <ul className="text-xs text-[#333333]/60 space-y-2" style={{ fontFamily: 'Work Sans, sans-serif' }}>
              <li>• 1080 × 1080px (Instagram Square)</li>
              <li>• Brand colors & typography</li>
              <li>• Gradient overlays</li>
              <li>• Geometric accents</li>
              <li>• Professional imagery</li>
              <li>• Call-to-action buttons</li>
            </ul>
            <div className="mt-6 p-4 bg-gradient-to-r from-[#375357] to-[#2d4246] rounded-2xl">
              <p className="text-xs text-white/90 text-center" style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 300 }}>
                Rooted in Experience.<br />Built For What's Next
              </p>
            </div>
          </div>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post) => {
            const IconComponent = post.icon;
            return (
              <div key={post.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#333333]/10 hover:shadow-[0_20px_50px_rgba(55,83,87,0.3)] transition-all duration-800">
                {/* Instagram Header */}
                <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-[#333333]/5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#375357] to-[#2d4246] flex items-center justify-center">
                    <TreeLogo width={20} height={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#333333]" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                      firstcentennial_nevada
                    </p>
                  </div>
                </div>

                {/* Post Image with Overlay */}
                <div className="relative aspect-square overflow-hidden">
                  {/* Background Image */}
                  <img 
                    src={post.image} 
                    alt={post.headline}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`}></div>
                  
                  {/* Geometric Element - Circle */}
                  <div className="absolute top-8 right-8 w-48 h-48 border-2 border-white/30 rounded-full"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    {/* Top - Icon */}
                    <div className="flex justify-between items-start">
                      <IconComponent className="w-10 h-10 text-white/90 drop-shadow-lg" />
                      <div className="text-white/60 text-[10px]" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                        @fcnevada
                      </div>
                    </div>

                    {/* Bottom - Text */}
                    <div>
                      <h3 
                        className="text-4xl font-bold text-white mb-1 drop-shadow-xl leading-tight" 
                        style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}
                      >
                        {post.headline}
                      </h3>
                      <h4 
                        className="text-2xl font-bold text-white/95 mb-4 drop-shadow-lg" 
                        style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}
                      >
                        {post.subtext}
                      </h4>
                      <p 
                        className="text-xs text-white/90 mb-4 leading-relaxed drop-shadow-md max-w-[280px]" 
                        style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 300 }}
                      >
                        {post.description}
                      </p>
                      
                      {/* CTA Button */}
                      {post.cta && (
                        <button 
                          className="bg-white/90 hover:bg-white text-[#375357] px-6 py-2 rounded-full text-xs font-bold shadow-xl backdrop-blur-sm transition-all duration-300"
                          style={{ fontFamily: 'Work Sans, sans-serif' }}
                        >
                          {post.cta}
                        </button>
                      )}
                      
                      {/* Branding */}
                      <div className="mt-4 flex items-center gap-2">
                        <TreeLogo width={16} height={16} className="text-white/80" />
                        <p className="text-[10px] text-white/70" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                          First Centennial
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instagram Engagement Icons */}
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-[#333333]/5">
                  <div className="flex items-center gap-4">
                    {/* Heart */}
                    <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {/* Comment */}
                    <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {/* Share */}
                    <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  {/* Bookmark */}
                  <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Usage Guidelines */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-12 border border-[#333333]/10">
          <h2 className="text-3xl font-bold text-[#333333] mb-8" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
            USAGE GUIDELINES
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="bg-gradient-to-br from-[#375357] to-[#2d4246] rounded-2xl p-1 mb-4 w-12 h-12 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#375357] mb-2" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Content Strategy
              </h3>
              <p className="text-sm text-[#333333]/70" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Post 3-4 times per week. Mix educational content with service highlights and testimonials.
              </p>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#c3937d] to-[#b38167] rounded-2xl p-1 mb-4 w-12 h-12 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#375357] mb-2" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Brand Consistency
              </h3>
              <p className="text-sm text-[#333333]/70" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Always use brand colors, fonts, and the company icon. Maintain the premium, professional aesthetic.
              </p>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#e9a753] to-[#d89543] rounded-2xl p-1 mb-4 w-12 h-12 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#375357] mb-2" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Engagement
              </h3>
              <p className="text-sm text-[#333333]/70" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Include clear calls-to-action. Respond to comments within 24 hours. Use relevant hashtags.
              </p>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#375357] to-[#2d4246] rounded-2xl p-1 mb-4 w-12 h-12 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#375357] mb-2" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Local Focus
              </h3>
              <p className="text-sm text-[#333333]/70" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Tag Nevada locations, use local hashtags (#VegasRealEstate, #NevadaHomes), highlight community involvement.
              </p>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#c3937d] to-[#b38167] rounded-2xl p-1 mb-4 w-12 h-12 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#375357] mb-2" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Optimal Timing
              </h3>
              <p className="text-sm text-[#333333]/70" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Post Monday-Friday 9am-11am or 1pm-3pm PST for maximum engagement with real estate professionals.
              </p>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#e9a753] to-[#d89543] rounded-2xl p-1 mb-4 w-12 h-12 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#375357] mb-2" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Professional Imagery
              </h3>
              <p className="text-sm text-[#333333]/70" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Use high-quality photos. Avoid stock images that feel generic. Showcase real Nevada properties when possible.
              </p>
            </div>
          </div>

          {/* Suggested Hashtags */}
          <div className="mt-12 p-6 bg-gradient-to-br from-[#f8f6f4] to-white rounded-2xl border border-[#333333]/5">
            <h3 className="text-lg font-bold text-[#375357] mb-4" style={{ fontFamily: 'Work Sans, sans-serif' }}>
              Suggested Hashtags
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                '#FirstCentennialNV',
                '#NevadaTitleCompany',
                '#VegasRealEstate',
                '#TitleAndEscrow',
                '#NevadaHomes',
                '#LasvegasRealtor',
                '#CommercialRealEstate',
                '#RefinanceExperts',
                '#NevadaProperty',
                '#TrustedSince1979',
                '#RealEstateClosing',
                '#EscrowServices'
              ].map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-white rounded-full text-xs text-[#375357] border border-[#375357]/20 shadow-sm"
                  style={{ fontFamily: 'Work Sans, sans-serif' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
