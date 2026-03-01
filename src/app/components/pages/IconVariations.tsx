import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import TreeLogo from '../TreeLogo';

export function IconVariations() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f6f4] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/downloads" 
            className="inline-flex items-center gap-2 text-[#375357] hover:text-[#2d4246] transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-semibold">Back to Downloads</span>
          </Link>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#375357] via-[#333333] to-[#c3937d] bg-clip-text text-transparent mb-4">
            Official Logo
          </h1>
          <p className="text-xl text-[#333333]/70 max-w-3xl">
            Your beautiful tree logo with flowing organic leaves in dark teal and gold - perfectly representing "Rooted in Experience. Built For What's Next."
          </p>
        </div>

        {/* Main Logo Display */}
        <div className="bg-white rounded-3xl shadow-lg p-16 border border-[#333333]/10 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <TreeLogo width={300} height={300} variant="color" className="mx-auto" />
            </div>
            
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              First Centennial Tree Logo
            </h2>
            <p className="text-lg text-[#333333]/70 mb-8">
              An elegant symbol of heritage, growth, and stability with organic flowing leaves that blend Nevada's natural landscape with modern sophistication.
            </p>
          </div>
        </div>

        {/* Size Variations */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#333333]/10 mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-6">Logo Sizes</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gradient-to-br from-[#f8f6f4] to-white rounded-2xl p-4 border border-[#333333]/10 flex items-center justify-center">
                <TreeLogo width={48} height={48} variant="color" />
              </div>
              <span className="text-sm text-[#333333]/70 font-medium">48px (Small)</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="bg-gradient-to-br from-[#f8f6f4] to-white rounded-2xl p-6 border border-[#333333]/10 flex items-center justify-center">
                <TreeLogo width={80} height={80} variant="color" />
              </div>
              <span className="text-sm text-[#333333]/70 font-medium">80px (Medium)</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="bg-gradient-to-br from-[#f8f6f4] to-white rounded-2xl p-8 border border-[#333333]/10 flex items-center justify-center">
                <TreeLogo width={120} height={120} variant="color" />
              </div>
              <span className="text-sm text-[#333333]/70 font-medium">120px (Large)</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="bg-gradient-to-br from-[#375357] to-[#2d4246] rounded-2xl p-8 flex items-center justify-center">
                <TreeLogo width={120} height={120} variant="white" />
              </div>
              <span className="text-sm text-[#333333]/70 font-medium">On Dark BG</span>
            </div>
          </div>
        </div>

        {/* Context Examples */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#333333]/10">
          <h2 className="text-2xl font-bold text-[#333333] mb-6">Logo in Context</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* With Company Name */}
            <div className="bg-gradient-to-br from-[#f8f6f4] to-white rounded-2xl p-8 border border-[#333333]/10">
              <div className="flex items-center gap-4 mb-4">
                <TreeLogo width={64} height={64} variant="color" />
                <div>
                  <h3 className="text-xl font-bold text-[#375357]">First Centennial</h3>
                  <p className="text-sm text-[#333333]/70">of Nevada</p>
                </div>
              </div>
              <p className="text-xs text-[#333333]/50">With Company Name</p>
            </div>

            {/* Hero Usage */}
            <div className="bg-gradient-to-br from-[#375357] to-[#2d4246] rounded-2xl p-8 text-center">
              <TreeLogo width={100} height={100} variant="white" className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">FIRST CENTENNIAL</h3>
              <p className="text-sm text-white/90">of Nevada</p>
              <p className="text-xs text-white/70 mt-3">Hero Section</p>
            </div>

            {/* Social Profile */}
            <div className="bg-white rounded-2xl border-2 border-[#333333]/10 overflow-hidden">
              <div className="h-20 bg-gradient-to-r from-[#375357] to-[#c3937d] relative">
                <div className="absolute -bottom-8 left-6">
                  <div className="w-16 h-16 bg-white rounded-full p-2 shadow-xl border-4 border-white flex items-center justify-center">
                    <TreeLogo width={40} height={40} variant="color" />
                  </div>
                </div>
              </div>
              <div className="pt-12 px-6 pb-4">
                <h3 className="text-base font-bold text-[#333333]">First Centennial of Nevada</h3>
                <p className="text-xs text-[#333333]/60">@FirstCentennialNV</p>
              </div>
              <p className="text-xs text-[#333333]/50 px-6 pb-4">Social Media Profile</p>
            </div>

            {/* Business Card */}
            <div className="bg-gradient-to-br from-[#375357] to-[#2d4246] rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <TreeLogo width={50} height={50} variant="white" />
                <span className="text-xs text-white/70">EST. 1979</span>
              </div>
              <h3 className="text-xl font-bold text-white">First Centennial</h3>
              <p className="text-sm text-white/90">of Nevada</p>
              <p className="text-xs text-white/70 mt-4">Business Card Front</p>
            </div>
          </div>
        </div>

        {/* Design Notes */}
        <div className="mt-12 bg-gradient-to-br from-[#375357] to-[#2d4246] rounded-3xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Logo Design Elements</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">🌳 Tree Symbolism</h3>
              <p className="text-white/90 text-sm">
                The strong trunk represents your foundation since 1979, while flowing branches symbolize growth and reaching forward.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">🎨 Color Story</h3>
              <p className="text-white/90 text-sm">
                Dark teal/navy leaves (#375357) for trust and stability, golden leaves (#c3937d, #e9a753) for warmth and Nevada sunshine.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">✨ Organic Flow</h3>
              <p className="text-white/90 text-sm">
                Flowing, natural curves create an approachable yet sophisticated aesthetic - balancing heritage with modern elegance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
