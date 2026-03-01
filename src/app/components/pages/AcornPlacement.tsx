export function AcornPlacement() {
  // Option 1: Bottom left (current)
  const LeftPlacement = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      {/* Strong trunk */}
      <rect x="54" y="48" width="12" height="37" rx="3" fill="#375357" />
      
      {/* Bold angular branches */}
      <line x1="60" y1="62" x2="38" y2="50" stroke="#375357" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="62" x2="82" y2="50" stroke="#375357" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="55" x2="48" y2="40" stroke="#375357" strokeWidth="4" strokeLinecap="round" />
      <line x1="60" y1="55" x2="72" y2="40" stroke="#375357" strokeWidth="4" strokeLinecap="round" />
      
      {/* Bold leaf clusters */}
      <circle cx="38" cy="48" r="7" fill="#c3937d" />
      <circle cx="82" cy="48" r="7" fill="#c3937d" />
      <circle cx="48" cy="38" r="6" fill="#e9a753" />
      <circle cx="72" cy="38" r="6" fill="#e9a753" />
      <circle cx="60" cy="30" r="7" fill="#c3937d" />
      
      {/* Acorn at base left */}
      <g transform="translate(38, 78) scale(0.22)">
        <path d="M 60 10 Q 65 15, 70 25" stroke="#375357" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 25 45 Q 25 30, 35 25 Q 50 20, 65 25 Q 75 30, 75 45 L 25 45 Z" fill="#c3937d" />
        <path d="M 25 50 L 25 80 Q 25 100, 50 105 Q 75 100, 75 80 L 75 50 Z" fill="#a67d68" />
        <path d="M 62 55 Q 68 70, 68 85" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );

  // Option 2: Bottom right (previous version)
  const RightPlacement = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      {/* Strong trunk */}
      <rect x="54" y="48" width="12" height="37" rx="3" fill="#375357" />
      
      {/* Bold angular branches */}
      <line x1="60" y1="62" x2="38" y2="50" stroke="#375357" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="62" x2="82" y2="50" stroke="#375357" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="55" x2="48" y2="40" stroke="#375357" strokeWidth="4" strokeLinecap="round" />
      <line x1="60" y1="55" x2="72" y2="40" stroke="#375357" strokeWidth="4" strokeLinecap="round" />
      
      {/* Bold leaf clusters */}
      <circle cx="38" cy="48" r="7" fill="#c3937d" />
      <circle cx="82" cy="48" r="7" fill="#c3937d" />
      <circle cx="48" cy="38" r="6" fill="#e9a753" />
      <circle cx="72" cy="38" r="6" fill="#e9a753" />
      <circle cx="60" cy="30" r="7" fill="#c3937d" />
      
      {/* Acorn at base right */}
      <g transform="translate(68, 78) scale(0.22)">
        <path d="M 60 10 Q 65 15, 70 25" stroke="#375357" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 25 45 Q 25 30, 35 25 Q 50 20, 65 25 Q 75 30, 75 45 L 25 45 Z" fill="#c3937d" />
        <path d="M 25 50 L 25 80 Q 25 100, 50 105 Q 75 100, 75 80 L 75 50 Z" fill="#a67d68" />
        <path d="M 62 55 Q 68 70, 68 85" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );

  // Option 3: Bottom center
  const CenterPlacement = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      {/* Strong trunk */}
      <rect x="54" y="48" width="12" height="37" rx="3" fill="#375357" />
      
      {/* Bold angular branches */}
      <line x1="60" y1="62" x2="38" y2="50" stroke="#375357" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="62" x2="82" y2="50" stroke="#375357" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="55" x2="48" y2="40" stroke="#375357" strokeWidth="4" strokeLinecap="round" />
      <line x1="60" y1="55" x2="72" y2="40" stroke="#375357" strokeWidth="4" strokeLinecap="round" />
      
      {/* Bold leaf clusters */}
      <circle cx="38" cy="48" r="7" fill="#c3937d" />
      <circle cx="82" cy="48" r="7" fill="#c3937d" />
      <circle cx="48" cy="38" r="6" fill="#e9a753" />
      <circle cx="72" cy="38" r="6" fill="#e9a753" />
      <circle cx="60" cy="30" r="7" fill="#c3937d" />
      
      {/* Acorn at base center */}
      <g transform="translate(53, 78) scale(0.22)">
        <path d="M 60 10 Q 65 15, 70 25" stroke="#375357" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 25 45 Q 25 30, 35 25 Q 50 20, 65 25 Q 75 30, 75 45 L 25 45 Z" fill="#c3937d" />
        <path d="M 25 50 L 25 80 Q 25 100, 50 105 Q 75 100, 75 80 L 75 50 Z" fill="#a67d68" />
        <path d="M 62 55 Q 68 70, 68 85" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );

  // Option 4: Top right (on branch)
  const TopRightPlacement = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      {/* Strong trunk */}
      <rect x="54" y="48" width="12" height="37" rx="3" fill="#375357" />
      
      {/* Bold angular branches */}
      <line x1="60" y1="62" x2="38" y2="50" stroke="#375357" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="62" x2="82" y2="50" stroke="#375357" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="55" x2="48" y2="40" stroke="#375357" strokeWidth="4" strokeLinecap="round" />
      <line x1="60" y1="55" x2="72" y2="40" stroke="#375357" strokeWidth="4" strokeLinecap="round" />
      
      {/* Bold leaf clusters */}
      <circle cx="38" cy="48" r="7" fill="#c3937d" />
      <circle cx="82" cy="48" r="7" fill="#c3937d" />
      <circle cx="48" cy="38" r="6" fill="#e9a753" />
      <circle cx="72" cy="38" r="6" fill="#e9a753" />
      <circle cx="60" cy="30" r="7" fill="#c3937d" />
      
      {/* Acorn on top right branch */}
      <g transform="translate(80, 42) scale(0.12)">
        <path d="M 60 10 Q 65 15, 70 25" stroke="#375357" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 25 45 Q 25 30, 35 25 Q 50 20, 65 25 Q 75 30, 75 45 L 25 45 Z" fill="#c3937d" />
        <path d="M 25 50 L 25 80 Q 25 100, 50 105 Q 75 100, 75 80 L 75 50 Z" fill="#a67d68" />
        <path d="M 62 55 Q 68 70, 68 85" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );

  // Option 5: Top left (on branch)
  const TopLeftPlacement = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      {/* Strong trunk */}
      <rect x="54" y="48" width="12" height="37" rx="3" fill="#375357" />
      
      {/* Bold angular branches */}
      <line x1="60" y1="62" x2="38" y2="50" stroke="#375357" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="62" x2="82" y2="50" stroke="#375357" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="55" x2="48" y2="40" stroke="#375357" strokeWidth="4" strokeLinecap="round" />
      <line x1="60" y1="55" x2="72" y2="40" stroke="#375357" strokeWidth="4" strokeLinecap="round" />
      
      {/* Bold leaf clusters */}
      <circle cx="38" cy="48" r="7" fill="#c3937d" />
      <circle cx="82" cy="48" r="7" fill="#c3937d" />
      <circle cx="48" cy="38" r="6" fill="#e9a753" />
      <circle cx="72" cy="38" r="6" fill="#e9a753" />
      <circle cx="60" cy="30" r="7" fill="#c3937d" />
      
      {/* Acorn on top left branch */}
      <g transform="translate(28, 42) scale(0.12)">
        <path d="M 60 10 Q 65 15, 70 25" stroke="#375357" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 25 45 Q 25 30, 35 25 Q 50 20, 65 25 Q 75 30, 75 45 L 25 45 Z" fill="#c3937d" />
        <path d="M 25 50 L 25 80 Q 25 100, 50 105 Q 75 100, 75 80 L 75 50 Z" fill="#a67d68" />
        <path d="M 62 55 Q 68 70, 68 85" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );

  // Option 6: No acorn
  const NoAcorn = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      {/* Strong trunk */}
      <rect x="54" y="48" width="12" height="37" rx="3" fill="#375357" />
      
      {/* Bold angular branches */}
      <line x1="60" y1="62" x2="38" y2="50" stroke="#375357" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="62" x2="82" y2="50" stroke="#375357" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="55" x2="48" y2="40" stroke="#375357" strokeWidth="4" strokeLinecap="round" />
      <line x1="60" y1="55" x2="72" y2="40" stroke="#375357" strokeWidth="4" strokeLinecap="round" />
      
      {/* Bold leaf clusters */}
      <circle cx="38" cy="48" r="7" fill="#c3937d" />
      <circle cx="82" cy="48" r="7" fill="#c3937d" />
      <circle cx="48" cy="38" r="6" fill="#e9a753" />
      <circle cx="72" cy="38" r="6" fill="#e9a753" />
      <circle cx="60" cy="30" r="7" fill="#c3937d" />
    </svg>
  );

  const options = [
    { name: 'Left of Trunk', component: LeftPlacement, description: 'Acorn on the ground, left side' },
    { name: 'Right of Trunk', component: RightPlacement, description: 'Acorn on the ground, right side (current)' },
    { name: 'Center Under Trunk', component: CenterPlacement, description: 'Perfectly centered below trunk' },
    { name: 'Top Right Branch', component: TopRightPlacement, description: 'Hanging from upper right branch' },
    { name: 'Top Left Branch', component: TopLeftPlacement, description: 'Hanging from upper left branch' },
    { name: 'No Acorn', component: NoAcorn, description: 'Clean tree without acorn detail' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f6f4] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#375357] via-[#333333] to-[#c3937d] bg-clip-text text-transparent mb-4">
            Acorn Placement Options
          </h1>
          <p className="text-xl text-[#333333]/70">
            Choose the placement that works best for your brand
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option, idx) => {
            const Component = option.component;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 border border-[#333333]/10 hover:shadow-xl transition-all duration-500 hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <Component />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">
                    {option.name}
                  </h3>
                  <p className="text-sm text-[#333333]/60 text-center">
                    {option.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scale Preview */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-8 text-center">
            Preview at Different Sizes
          </h2>
          <p className="text-center text-[#333333]/60 mb-8">
            Try each option at various scales to see which placement looks best for embroidery
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {options.slice(0, 3).map((option, idx) => {
              const Component = option.component;
              return (
                <div key={idx} className="flex flex-col items-center gap-4">
                  <p className="text-sm font-bold text-[#333333]/70">{option.name}</p>
                  <div className="flex items-end gap-3">
                    <div style={{ width: '96px', height: '96px' }} className="flex items-center justify-center">
                      <Component />
                    </div>
                    <div style={{ width: '64px', height: '64px' }} className="flex items-center justify-center">
                      <Component />
                    </div>
                    <div style={{ width: '48px', height: '48px' }} className="flex items-center justify-center">
                      <Component />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

        {/* Scale Preview */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-8 text-center">
            Preview at Different Sizes
          </h2>
          <p className="text-center text-[#333333]/60 mb-8">
            Try each option at various scales to see which placement looks best for embroidery
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {options.slice(0, 3).map((option, idx) => {
              const Component = option.component;
              return (
                <div key={idx} className="flex flex-col items-center gap-4">
                  <p className="text-sm font-bold text-[#333333]/70">{option.name}</p>
                  <div className="flex items-end gap-3">
                    <div style={{ width: '96px', height: '96px' }} className="flex items-center justify-center">
                      <Component />
                    </div>
                    <div style={{ width: '64px', height: '64px' }} className="flex items-center justify-center">
                      <Component />
                    </div>
                    <div style={{ width: '48px', height: '48px' }} className="flex items-center justify-center">
                      <Component />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
