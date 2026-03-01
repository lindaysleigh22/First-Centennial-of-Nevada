import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { Services } from './components/pages/Services';
import { About } from './components/pages/About';
import { TeamDirectory } from './components/pages/TeamDirectory';
import { OfficePage } from './components/pages/OfficePage';
import { Underwriters } from './components/pages/Underwriters';
import { Locations } from './components/pages/Locations';
import { Contact } from './components/pages/Contact';
import { PreOpenAdvantage } from './components/pages/PreOpenAdvantage';
import { ClosingLock } from './components/pages/ClosingLock-new';
import { ClosingSoftware } from './components/pages/ClosingSoftware';
import { Corefact } from './components/pages/Corefact';
import { MobileApp } from './components/pages/MobileApp';
import { MobileFarmingApp } from './components/pages/MobileFarmingApp';
import { Zoccam } from './components/pages/Zoccam';
import { Downloads } from './components/pages/Downloads';
import { AcornPlacement } from './components/pages/AcornPlacement';
import { BrandKit } from './components/pages/BrandKit';
import { SocialMediaPack } from './components/pages/SocialMediaPack';
import { IconPreview } from './components/pages/IconPreview';
import { IconVariations } from './components/pages/IconVariations';
import { AdminPanel } from './components/pages/AdminPanel';
import { useEffect } from 'react';

export default function App() {
  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600;700&family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap';
    document.head.appendChild(link);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/mobile-app" element={<MobileApp />} />
          <Route path="/services/mobile-farming-app" element={<MobileFarmingApp />} />
          <Route path="/services/zoccam" element={<Zoccam />} />
          <Route path="/pre-open-advantage" element={<PreOpenAdvantage />} />
          <Route path="/closing-lock" element={<ClosingLock />} />
          <Route path="/closing-software" element={<ClosingSoftware />} />
          <Route path="/corefact" element={<Corefact />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<TeamDirectory />} />
          <Route path="/team/:officeSlug" element={<OfficePage />} />
          <Route path="/underwriters" element={<Underwriters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/downloads/icon-preview" element={<IconPreview />} />
          <Route path="/downloads/icon-variations" element={<IconVariations />} />
          <Route path="/acorn-placement" element={<AcornPlacement />} />
          <Route path="/brand-kit" element={<BrandKit />} />
          <Route path="/social-media-pack" element={<SocialMediaPack />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
