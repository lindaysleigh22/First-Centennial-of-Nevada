import TreeLogo from '../TreeLogo';
import { ModernOakIcon } from '../ModernOakIcon';
import { AcornIcon } from '../AcornIcon';
import { Download, CheckCircle2, XCircle } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';

export function BrandKit() {
  return (
    <div className="min-h-screen bg-white">
      {/* Cover Page */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#375357] via-[#2d4246] to-[#375357] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(195,147,125,0.15)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(233,167,83,0.1)_0%,_transparent_40%)]"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
            <ModernOakIcon size={200} className="text-white drop-shadow-2xl" />
          </div>
          
          <h1 className="text-8xl font-bold text-white mb-6 drop-shadow-xl" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
            BRAND<br />GUIDELINES
          </h1>
          
          <div className="h-1 w-32 bg-gradient-to-r from-[#c3937d] to-[#e9a753] mx-auto mb-8"></div>
          
          <p className="text-3xl text-white/90 font-light mb-4" style={{ fontFamily: 'Work Sans, sans-serif' }}>
            First Centennial Title of Nevada
          </p>
          
          <p className="text-lg text-white/70 font-light" style={{ fontFamily: 'Work Sans, sans-serif' }}>
            Visual Identity System • Est. 1979
          </p>
          
          <div className="mt-16 text-sm text-white/50 font-light">
            <p>Version 1.0 • February 2026</p>
            <p className="mt-2">Internal Use Only</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Introduction */}
        <AnimatedSection>
          <section className="py-24">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-[#333333] mb-8" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                INTRODUCTION
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#375357] to-[#c3937d] mb-8"></div>
              
              <p className="text-xl text-[#333333]/80 font-light leading-relaxed mb-6" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Our brand is rooted in trust, experience, and a commitment to excellence. These guidelines ensure consistent visual communication across all touchpoints.
              </p>
              
              <p className="text-lg text-[#333333]/70 font-light leading-relaxed" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                The First Centennial Title of Nevada brand represents over 40 years of dedicated service to our community. Our visual identity reflects the strength of our foundation and the growth we inspire—captured in our tagline: <em>"Mighty oaks from little acorns grow."</em>
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Logo Section */}
        <AnimatedSection>
          <section className="py-24 bg-gradient-to-b from-white to-[#f8f6f4] -mx-6 lg:-mx-8 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                PRIMARY LOGO
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#375357] to-[#c3937d] mb-12"></div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Full Color */}
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#333333]/10">
                  <div className="bg-white p-12 flex items-center justify-center h-64 border-b border-[#333333]/10">
                    <TreeLogo width={120} height={120} variant="color" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#333333] mb-2">Full Color</h3>
                    <p className="text-sm text-[#333333]/60 font-light mb-4">Primary logo for light backgrounds</p>
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full text-xs font-light">
                        <Download className="w-3.5 h-3.5" />
                        PNG
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#c3937d] text-white rounded-full text-xs font-light">
                        <Download className="w-3.5 h-3.5" />
                        SVG
                      </button>
                    </div>
                  </div>
                </div>

                {/* Black */}
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#333333]/10">
                  <div className="bg-white p-12 flex items-center justify-center h-64 border-b border-[#333333]/10">
                    <TreeLogo width={120} height={120} variant="black" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#333333] mb-2">Black</h3>
                    <p className="text-sm text-[#333333]/60 font-light mb-4">For print and one-color applications</p>
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full text-xs font-light">
                        <Download className="w-3.5 h-3.5" />
                        PNG
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#c3937d] text-white rounded-full text-xs font-light">
                        <Download className="w-3.5 h-3.5" />
                        SVG
                      </button>
                    </div>
                  </div>
                </div>

                {/* White */}
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#333333]/10">
                  <div className="bg-[#375357] p-12 flex items-center justify-center h-64 border-b border-[#333333]/10">
                    <TreeLogo width={120} height={120} variant="white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#333333] mb-2">White</h3>
                    <p className="text-sm text-[#333333]/60 font-light mb-4">For dark backgrounds only</p>
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full text-xs font-light">
                        <Download className="w-3.5 h-3.5" />
                        PNG
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#c3937d] text-white rounded-full text-xs font-light">
                        <Download className="w-3.5 h-3.5" />
                        SVG
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logo Usage Guidelines */}
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-[#333333]/10">
                <h3 className="text-2xl font-bold text-[#333333] mb-6">Logo Usage</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Clear Space */}
                  <div>
                    <h4 className="text-lg font-bold text-[#375357] mb-4">Clear Space</h4>
                    <div className="bg-[#f8f6f4] rounded-2xl p-8 mb-4 flex items-center justify-center">
                      <div className="relative">
                        <TreeLogo width={100} height={100} variant="color" />
                        <div className="absolute -top-6 -left-6 -right-6 -bottom-6 border-2 border-dashed border-[#375357]/30"></div>
                      </div>
                    </div>
                    <p className="text-sm text-[#333333]/70 font-light">
                      Maintain clear space equal to the height of the tree canopy around all sides of the logo
                    </p>
                  </div>

                  {/* Minimum Size */}
                  <div>
                    <h4 className="text-lg font-bold text-[#375357] mb-4">Minimum Size</h4>
                    <div className="bg-[#f8f6f4] rounded-2xl p-8 mb-4 flex items-center justify-center">
                      <TreeLogo width={60} height={60} variant="color" />
                    </div>
                    <p className="text-sm text-[#333333]/70 font-light">
                      <strong>Digital:</strong> 48px minimum<br />
                      <strong>Print:</strong> 0.5 inches minimum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Secondary Logo - Acorn */}
        <AnimatedSection>
          <section className="py-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                SECONDARY ICON
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#375357] to-[#c3937d] mb-8"></div>
              <p className="text-lg text-[#333333]/70 font-light mb-12" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Our acorn icon represents growth and potential—"Mighty oaks from little acorns grow"
              </p>

              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-12 border border-[#333333]/10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="bg-gradient-to-br from-[#f8f6f4] to-white rounded-2xl p-16 flex items-center justify-center">
                    <AcornIcon width={150} height={180} variant="static" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#333333] mb-4">Acorn Icon Usage</h3>
                    <ul className="space-y-3 text-[#333333]/70 font-light">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#375357] mt-0.5 flex-shrink-0" />
                        <span>Use as decorative element on marketing materials</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#375357] mt-0.5 flex-shrink-0" />
                        <span>Ideal for social media posts and badges</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#375357] mt-0.5 flex-shrink-0" />
                        <span>Can be used to emphasize growth messaging</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#375357] mt-0.5 flex-shrink-0" />
                        <span>Always pair with tagline when possible</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Color Palette */}
        <AnimatedSection>
          <section className="py-24 bg-gradient-to-b from-white to-[#f8f6f4] -mx-6 lg:-mx-8 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                COLOR PALETTE
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#375357] to-[#c3937d] mb-12"></div>

              {/* Primary Colors */}
              <h3 className="text-2xl font-bold text-[#333333] mb-6">Primary Colors</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#333333]/10">
                  <div className="bg-[#375357] h-48"></div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#333333] mb-2">Deep Green</h4>
                    <div className="space-y-2 text-sm font-light text-[#333333]/70">
                      <p><strong>HEX:</strong> #375357</p>
                      <p><strong>RGB:</strong> 55, 83, 87</p>
                      <p><strong>CMYK:</strong> 37, 5, 0, 66</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#333333]/10">
                  <div className="bg-[#c3937d] h-48"></div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#333333] mb-2">Warm Bronze</h4>
                    <div className="space-y-2 text-sm font-light text-[#333333]/70">
                      <p><strong>HEX:</strong> #c3937d</p>
                      <p><strong>RGB:</strong> 195, 147, 125</p>
                      <p><strong>CMYK:</strong> 0, 25, 36, 24</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#333333]/10">
                  <div className="bg-[#e9a753] h-48"></div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#333333] mb-2">Golden Accent</h4>
                    <div className="space-y-2 text-sm font-light text-[#333333]/70">
                      <p><strong>HEX:</strong> #e9a753</p>
                      <p><strong>RGB:</strong> 233, 167, 83</p>
                      <p><strong>CMYK:</strong> 0, 28, 64, 9</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Colors */}
              <h3 className="text-2xl font-bold text-[#333333] mb-6">Secondary Colors</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#333333]/10">
                  <div className="bg-[#333333] h-48"></div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#333333] mb-2">Charcoal</h4>
                    <div className="space-y-2 text-sm font-light text-[#333333]/70">
                      <p><strong>HEX:</strong> #333333</p>
                      <p><strong>RGB:</strong> 51, 51, 51</p>
                      <p><strong>CMYK:</strong> 0, 0, 0, 80</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#333333]/10">
                  <div className="bg-[#d9ccc4] h-48"></div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#333333] mb-2">Soft Taupe</h4>
                    <div className="space-y-2 text-sm font-light text-[#333333]/70">
                      <p><strong>HEX:</strong> #d9ccc4</p>
                      <p><strong>RGB:</strong> 217, 204, 196</p>
                      <p><strong>CMYK:</strong> 0, 6, 10, 15</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#333333]/10">
                  <div className="bg-[#f8f6f4] h-48 border-b border-[#333333]/10"></div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#333333] mb-2">Off White</h4>
                    <div className="space-y-2 text-sm font-light text-[#333333]/70">
                      <p><strong>HEX:</strong> #f8f6f4</p>
                      <p><strong>RGB:</strong> 248, 246, 244</p>
                      <p><strong>CMYK:</strong> 0, 1, 2, 3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Typography */}
        <AnimatedSection>
          <section className="py-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                TYPOGRAPHY
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#375357] to-[#c3937d] mb-12"></div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Antonio */}
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-[#333333]/10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#375357] mb-2">Antonio</h3>
                    <p className="text-sm text-[#333333]/60 font-light">Primary Headline Font</p>
                    <a 
                      href="https://fonts.google.com/specimen/Antonio" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-[#375357] hover:underline inline-block mt-1"
                    >
                      Google Fonts →
                    </a>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-[#333333]/50 mb-2">Bold (700) - Primary</p>
                      <p className="text-4xl" style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700, letterSpacing: '0.03em' }}>
                        FIRST CENTENNIAL
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#333333]/50 mb-2">Medium (500)</p>
                      <p className="text-3xl" style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 500 }}>
                        First Centennial
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-[#f8f6f4] rounded-xl">
                    <p className="text-xs text-[#333333]/70 font-light"><strong>Usage:</strong> Headlines, hero text, page titles</p>
                    <p className="text-xs text-[#333333]/70 font-light mt-1"><strong>Settings:</strong> Bold (700), Uppercase, Letter-spacing: 0.03em</p>
                  </div>
                </div>

                {/* Work Sans */}
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-[#333333]/10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#375357] mb-2">Work Sans</h3>
                    <p className="text-sm text-[#333333]/60 font-light">Primary Body Font</p>
                    <a 
                      href="https://fonts.google.com/specimen/Work+Sans" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-[#375357] hover:underline inline-block mt-1"
                    >
                      Google Fonts →
                    </a>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-[#333333]/50 mb-2">Light (300)</p>
                      <p className="text-2xl" style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 300 }}>
                        The quick brown fox jumps
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#333333]/50 mb-2">Regular (400) - Primary</p>
                      <p className="text-2xl" style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 400 }}>
                        The quick brown fox jumps
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#333333]/50 mb-2">SemiBold (600)</p>
                      <p className="text-2xl" style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 600 }}>
                        The quick brown fox jumps
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-[#f8f6f4] rounded-xl">
                    <p className="text-xs text-[#333333]/70 font-light"><strong>Usage:</strong> Body text, captions, UI elements</p>
                    <p className="text-xs text-[#333333]/70 font-light mt-1"><strong>Settings:</strong> Regular (400), Light (300) for large text</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Do's and Don'ts */}
        <AnimatedSection>
          <section className="py-24 bg-gradient-to-b from-white to-[#f8f6f4] -mx-6 lg:-mx-8 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                DO'S AND DON'TS
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#375357] to-[#c3937d] mb-12"></div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* DO's */}
                <div>
                  <h3 className="text-2xl font-bold text-[#375357] mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6" />
                    DO
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 border border-[#375357]/20">
                      <div className="bg-white rounded-xl p-8 mb-4 flex items-center justify-center border border-[#333333]/10">
                        <TreeLogo width={80} height={80} variant="color" />
                      </div>
                      <p className="text-sm text-[#333333]/70 font-light">Use the full-color logo on light backgrounds</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 border border-[#375357]/20">
                      <div className="bg-white rounded-xl p-8 mb-4 flex items-center justify-center border border-[#333333]/10">
                        <div className="relative">
                          <TreeLogo width={80} height={80} variant="color" />
                          <div className="absolute -inset-4 border-2 border-dashed border-[#375357]/30 rounded"></div>
                        </div>
                      </div>
                      <p className="text-sm text-[#333333]/70 font-light">Maintain adequate clear space around the logo</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 border border-[#375357]/20">
                      <div className="bg-[#375357] rounded-xl p-8 mb-4 flex items-center justify-center">
                        <TreeLogo width={80} height={80} variant="white" />
                      </div>
                      <p className="text-sm text-[#333333]/70 font-light">Use the white logo on dark backgrounds</p>
                    </div>
                  </div>
                </div>

                {/* DON'Ts */}
                <div>
                  <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
                    <XCircle className="w-6 h-6" />
                    DON'T
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 border border-red-600/20">
                      <div className="bg-white rounded-xl p-8 mb-4 flex items-center justify-center border border-[#333333]/10">
                        <div style={{ transform: 'scaleX(1.5)' }}>
                          <TreeLogo width={80} height={80} variant="color" />
                        </div>
                      </div>
                      <p className="text-sm text-[#333333]/70 font-light">Don't stretch or distort the logo</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 border border-red-600/20">
                      <div className="bg-white rounded-xl p-8 mb-4 flex items-center justify-center border border-[#333333]/10">
                        <div style={{ transform: 'rotate(15deg)' }}>
                          <TreeLogo width={80} height={80} variant="color" />
                        </div>
                      </div>
                      <p className="text-sm text-[#333333]/70 font-light">Don't rotate the logo at angles</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 border border-red-600/20">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 mb-4 flex items-center justify-center">
                        <TreeLogo width={80} height={80} variant="white" />
                      </div>
                      <p className="text-sm text-[#333333]/70 font-light">Don't place on busy or off-brand backgrounds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Brand Applications */}
        <AnimatedSection>
          <section className="py-24 pb-32">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                APPLICATIONS
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#375357] to-[#c3937d] mb-12"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Business Card */}
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 border border-[#333333]/10">
                  <div className="bg-gradient-to-br from-[#375357] to-[#2d4246] rounded-2xl p-6 aspect-[3.5/2] flex flex-col justify-between text-white shadow-xl mb-4">
                    <div className="flex items-start justify-between">
                      <ModernOakIcon size={50} className="text-white" />
                      <div className="text-xs font-light opacity-90">EST. 1979</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight mb-1">First Centennial</h3>
                      <p className="text-xs font-light opacity-90">of Nevada</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#333333]/70 font-light text-center">Business Card</p>
                </div>

                {/* Letterhead */}
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 border border-[#333333]/10">
                  <div className="bg-white border-2 border-[#333333]/20 rounded-2xl p-6 aspect-[8.5/11] shadow-xl mb-4">
                    <div className="flex items-center gap-3 pb-3 border-b-2 border-[#375357]">
                      <ModernOakIcon size={30} />
                      <div>
                        <h3 className="text-sm font-bold text-[#375357]">First Centennial</h3>
                        <p className="text-xs text-[#333333]/70">of Nevada</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-1.5 bg-[#f8f6f4] rounded w-3/4"></div>
                      <div className="h-1.5 bg-[#f8f6f4] rounded w-full"></div>
                      <div className="h-1.5 bg-[#f8f6f4] rounded w-5/6"></div>
                    </div>
                  </div>
                  <p className="text-sm text-[#333333]/70 font-light text-center">Letterhead</p>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 border border-[#333333]/10">
                  <div className="bg-gradient-to-br from-[#d9ccc4] via-[#f8f6f4] to-[#c3937d] rounded-2xl aspect-square flex items-center justify-center shadow-xl mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-[#375357]/20"></div>
                    <div className="text-center z-10">
                      <ModernOakIcon size={80} className="mx-auto mb-3" />
                      <h3 className="text-lg font-bold tracking-tight bg-gradient-to-r from-[#375357] to-[#333333] bg-clip-text text-transparent" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                        FIRST CENTENNIAL
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[#333333]/70 font-light text-center">Social Media Post</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#375357] to-[#2d4246] py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ModernOakIcon size={60} className="mx-auto mb-6 text-white/90" />
          <p className="text-white/70 font-light text-sm" style={{ fontFamily: 'Work Sans, sans-serif' }}>
            First Centennial Title of Nevada Brand Guidelines
          </p>
          <p className="text-white/50 font-light text-xs mt-2" style={{ fontFamily: 'Work Sans, sans-serif' }}>
            For questions or guidance, contact marketing@firstcentennialtitle.com
          </p>
        </div>
      </footer>
    </div>
  );
}
