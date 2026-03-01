import { ModernOakIcon } from '../ModernOakIcon';

export function IconPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6f4] to-white flex items-center justify-center p-12">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-light text-[#333333] mb-12 text-center">
          Modern Oak Icon Preview
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Light background */}
          <div className="bg-white rounded-3xl p-12 shadow-lg flex flex-col items-center gap-6">
            <h2 className="text-lg text-[#333333]/60 mb-4">On Light Background</h2>
            <ModernOakIcon size={200} />
            <div className="flex gap-6 mt-8">
              <ModernOakIcon size={80} />
              <ModernOakIcon size={60} />
              <ModernOakIcon size={40} />
            </div>
          </div>
          
          {/* Dark background */}
          <div className="bg-[#375357] rounded-3xl p-12 shadow-lg flex flex-col items-center gap-6">
            <h2 className="text-lg text-white/60 mb-4">On Dark Background</h2>
            <ModernOakIcon size={200} />
            <div className="flex gap-6 mt-8">
              <ModernOakIcon size={80} />
              <ModernOakIcon size={60} />
              <ModernOakIcon size={40} />
            </div>
          </div>
          
          {/* Neutral background */}
          <div className="bg-[#d9ccc4] rounded-3xl p-12 shadow-lg flex flex-col items-center gap-6">
            <h2 className="text-lg text-[#333333]/60 mb-4">On Brand Color</h2>
            <ModernOakIcon size={200} />
            <div className="flex gap-6 mt-8">
              <ModernOakIcon size={80} />
              <ModernOakIcon size={60} />
              <ModernOakIcon size={40} />
            </div>
          </div>
          
          {/* Navigation simulation */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-lg flex flex-col items-center gap-6 border border-[#333333]/5">
            <h2 className="text-lg text-[#333333]/60 mb-4">Navigation Size (40px)</h2>
            <div className="scale-[3]">
              <ModernOakIcon size={40} />
            </div>
            <p className="text-sm text-[#333333]/60 mt-8">Actual size in nav:</p>
            <ModernOakIcon size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
