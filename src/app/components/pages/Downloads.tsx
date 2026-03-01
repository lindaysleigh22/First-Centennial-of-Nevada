import { Download, FileDown, Image as ImageIcon, FileType } from 'lucide-react';
import TreeLogo from '../TreeLogo';
import { jsPDF } from 'jspdf';
import { Link } from 'react-router';
import { Palette, Share2, FileText } from 'lucide-react';
import logoImage from 'figma:asset/5aa341f7053430afe982bc2119c7a875ac5f8b21.png';
import { Letterhead } from '../Letterhead';
import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import { AcornIcon } from '../AcornIcon';
import { TextLogo } from '../TextLogo';
import { CombinedLogo } from '../CombinedLogo';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from '../AnimatedSection';
import { Auth } from '../Auth';

export function Downloads() {
  const letterheadRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const acornRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const textLogoRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const combinedLogoRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const treeLogoRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [activeSection, setActiveSection] = useState<string>('all');

  const downloadImage = (format: 'png' | 'jpg' | 'pdf', filename: string) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = logoImage;
    
    img.onload = () => {
      if (format === 'pdf') {
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });
        
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 1200;
        const ctx = canvas.getContext('2d');
        
        if (ctx) {
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          
          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          const imgWidth = 150;
          const imgHeight = 150;
          const pageWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();
          const x = (pageWidth - imgWidth) / 2;
          const y = (pageHeight - imgHeight) / 2;
          
          pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
          pdf.save(filename);
        }
      } else {
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 1200;
        const ctx = canvas.getContext('2d');
        
        if (ctx) {
          if (format === 'jpg') {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          
          canvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = filename;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(url);
            }
          }, format === 'png' ? 'image/png' : 'image/jpeg', 0.95);
        }
      }
    };
  };

  const downloadLetterhead = async (officeKey: string, format: 'pdf' | 'png', filename: string) => {
    const element = letterheadRefs.current[officeKey];
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      if (format === 'pdf') {
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'letter'
        });

        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(filename);
      } else {
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
        }, 'image/png');
      }
    } catch (error) {
      console.error('Error generating letterhead:', error);
    }
  };

  const downloadTreeLogo = async (variant: string, format: 'png' | 'jpg' | 'pdf', filename: string) => {
    const element = treeLogoRefs.current[variant];
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 3,
        backgroundColor: variant === 'white' ? '#375357' : '#ffffff',
        logging: false,
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      // Convert logo colors based on variant (black or white)
      if (variant === 'black' || variant === 'white') {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          
          // Define the background colors
          const whiteThreshold = 240; // Pixels above this RGB value are considered white background
          const darkBgR = 0x37;
          const darkBgG = 0x53;
          const darkBgB = 0x57;
          const darkBgThreshold = 30;
          
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];
            
            // Skip fully transparent pixels
            if (a < 10) continue;
            
            // Check if pixel is white background
            const isWhiteBg = r > whiteThreshold && g > whiteThreshold && b > whiteThreshold;
            
            // Check if pixel is dark green background (#375357)
            const isDarkBg = 
              Math.abs(r - darkBgR) < darkBgThreshold &&
              Math.abs(g - darkBgG) < darkBgThreshold &&
              Math.abs(b - darkBgB) < darkBgThreshold;
            
            // If it's not background, convert to target color
            if (!isWhiteBg && !isDarkBg) {
              if (variant === 'black') {
                data[i] = 0;       // R
                data[i + 1] = 0;   // G
                data[i + 2] = 0;   // B
              } else if (variant === 'white') {
                data[i] = 255;     // R
                data[i + 1] = 255; // G
                data[i + 2] = 255; // B
              }
              // Keep original alpha
            }
          }
          
          ctx.putImageData(imageData, 0, 0);
        }
      }

      if (format === 'pdf') {
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });

        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 100;
        const imgHeight = 100;
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const x = (pageWidth - imgWidth) / 2;
        const y = (pageHeight - imgHeight) / 2;

        pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
        pdf.save(filename);
      } else {
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
        }, format === 'png' ? 'image/png' : 'image/jpeg', 0.95);
      }
    } catch (error) {
      console.error('Error generating tree logo download:', error);
    }
  };

  const downloadAcorn = async (variant: string, format: 'png' | 'jpg' | 'pdf', filename: string) => {
    const element = acornRefs.current[variant];
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 3,
        backgroundColor: variant === 'white' ? '#375357' : '#ffffff',
        logging: false,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      if (format === 'pdf') {
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });

        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 100;
        const imgHeight = 100;
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const x = (pageWidth - imgWidth) / 2;
        const y = (pageHeight - imgHeight) / 2;

        pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
        pdf.save(filename);
      } else {
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
        }, format === 'png' ? 'image/png' : 'image/jpeg', 0.95);
      }
    } catch (error) {
      console.error('Error generating acorn download:', error);
    }
  };

  const downloadTextLogo = async (variant: string, format: 'png' | 'jpg' | 'pdf', filename: string) => {
    const element = textLogoRefs.current[variant];
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 3,
        backgroundColor: variant === 'white' ? '#375357' : '#ffffff',
        logging: false,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      if (format === 'pdf') {
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4'
        });

        const imgData = canvas.toDataURL('image/png');
        const aspectRatio = canvas.height / canvas.width;
        const imgWidth = 250;
        const imgHeight = imgWidth * aspectRatio;
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const x = (pageWidth - imgWidth) / 2;
        const y = (pageHeight - imgHeight) / 2;

        pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
        pdf.save(filename);
      } else {
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
        }, format === 'png' ? 'image/png' : 'image/jpeg', 0.95);
      }
    } catch (error) {
      console.error('Error generating text logo download:', error);
    }
  };

  const downloadCombinedLogo = async (variant: string, format: 'png' | 'jpg' | 'pdf', filename: string) => {
    const element = combinedLogoRefs.current[variant];
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 3,
        backgroundColor: variant === 'white' ? '#375357' : '#ffffff',
        logging: false,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      if (format === 'pdf') {
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4'
        });

        const imgData = canvas.toDataURL('image/png');
        const aspectRatio = canvas.height / canvas.width;
        const imgWidth = 250;
        const imgHeight = imgWidth * aspectRatio;
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const x = (pageWidth - imgWidth) / 2;
        const y = (pageHeight - imgHeight) / 2;

        pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
        pdf.save(filename);
      } else {
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
        }, format === 'png' ? 'image/png' : 'image/jpeg', 0.95);
      }
    } catch (error) {
      console.error('Error generating combined logo download:', error);
    }
  };

  // Download Acorn Icon as SVG
  const downloadAcornSVG = (filename: string) => {
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Curved stem -->
  <path d="M 60 10 Q 65 15, 70 25" stroke="#375357" stroke-width="8" fill="none" stroke-linecap="round"/>
  
  <!-- Acorn cap with diagonal stripes -->
  <path d="M 25 45 Q 25 30, 35 25 Q 50 20, 65 25 Q 75 30, 75 45 L 25 45 Z" fill="#c3937d"/>
  
  <!-- Acorn body - rounded bottom -->
  <path d="M 25 50 L 25 80 Q 25 100, 50 105 Q 75 100, 75 80 L 75 50 Z" fill="#a67d68"/>
  
  <!-- Highlight on body -->
  <path d="M 62 55 Q 68 70, 68 85" stroke="white" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.6"/>
</svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Download Text Logo as SVG
  const downloadTextLogoSVG = (filename: string) => {
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1800" height="200" viewBox="0 0 1800 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#375357;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#c3937d;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e9a753;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="url(#textGradient)" font-family="system-ui, -apple-system, sans-serif" font-weight="300" font-size="100px" letter-spacing="0.5px">
    First Centennial Title of Nevada
  </text>
</svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Download Combined Logo as SVG (Icon + Text)
  const downloadCombinedLogoSVG = (filename: string) => {
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="2000" height="200" viewBox="0 0 2000 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="combinedTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#375357;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#c3937d;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e9a753;stop-opacity:1" />
    </linearGradient>
    
    <linearGradient id="treeGradient1" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" style="stop-color:#e9a753;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#c3937d;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Modern Oak Tree Icon -->
  <g transform="translate(50, 20)">
    <!-- Tree Canopy - Layered V-shapes -->
    <path d="M 40 80 L 80 20 L 120 80 Z" fill="url(#treeGradient1)" opacity="0.9"/>
    <path d="M 50 100 L 80 45 L 110 100 Z" fill="#c3937d" opacity="0.8"/>
    <path d="M 60 120 L 80 70 L 100 120 Z" fill="#e9a753" opacity="0.7"/>
    
    <!-- Trunk -->
    <rect x="70" y="120" width="20" height="40" fill="#375357" rx="4"/>
    
    <!-- Foundation (house outline) -->
    <path d="M 30 160 L 30 150 Q 30 145 35 145 L 125 145 Q 130 145 130 150 L 130 160 Z" 
          fill="none" stroke="#375357" stroke-width="3" opacity="0.6"/>
  </g>
  
  <!-- Company Name Text -->
  <text x="220" y="105" text-anchor="start" dominant-baseline="middle" fill="url(#combinedTextGradient)" font-family="system-ui, -apple-system, sans-serif" font-weight="300" font-size="85px" letter-spacing="0.5px">
    First Centennial Title of Nevada
  </text>
</svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Office locations data
  const offices = [
    {
      key: 'reno',
      name: 'Reno',
      address: '1450 Ridgeview Drive, #100',
      city: 'Reno, NV 89519',
      phone: '(775) 689-8510'
    },
    {
      key: 'damonte',
      name: 'Damonte Ranch',
      address: '500 Damonte Ranch Parkway, Suite 820',
      city: 'Reno, NV 89521',
      phone: '(775) 737-5090'
    },
    {
      key: 'plaza',
      name: 'Plaza',
      address: '3700 Lakeside Drive, #110',
      city: 'Reno, NV 89509',
      phone: '(775) 689-1810'
    },
    {
      key: 'fernley',
      name: 'Fernley',
      address: '1032 Inglewood Dr., #100',
      city: 'Fernley, NV 89408',
      phone: '(775) 575-5065'
    },
    {
      key: 'gardnerville',
      name: 'Gardnerville / Minden',
      address: '1352 U.S. Hwy 395 N, Suite 114',
      city: 'Gardnerville, NV 89410',
      phone: '(775) 737-5110'
    },
    {
      key: 'sparks',
      name: 'Sparks',
      address: '4870 Vista Boulevard, #110',
      city: 'Sparks, NV 89436',
      phone: '(775) 689-8551'
    },
    {
      key: 'zephyr',
      name: 'Zephyr Cove',
      address: '212 Elks Point Road, Suite 441',
      city: 'Zephyr Cove, NV 89448',
      phone: '(775) 841-6580'
    },
    {
      key: 'carson',
      name: 'Carson City',
      address: '896 W. Nye Lane, Suite 104',
      city: 'Carson City, NV 89703',
      phone: '(775) 841-6580'
    }
  ];

  // Generate all logo variations
  const assets = [
    // Full color version
    {
      name: 'Full Color Logo',
      filename: 'first-centennial-logo-color',
      description: 'Primary brand logo with full colors',
      bg: 'bg-white',
      variant: 'color' as const
    },
    // Black version
    {
      name: 'Black Logo',
      filename: 'first-centennial-logo-black',
      description: 'Black version for print',
      bg: 'bg-white',
      variant: 'black' as const
    },
    // White version
    {
      name: 'White Logo',
      filename: 'first-centennial-logo-white',
      description: 'White version for dark backgrounds',
      bg: 'bg-[#375357]',
      variant: 'white' as const
    },
  ];

  const sections = [
    { id: 'all', label: 'All Assets', icon: Download },
    { id: 'logos', label: 'Logo Variations', icon: ImageIcon },
    { id: 'letterheads', label: 'Letterheads', icon: FileText },
    { id: 'brand', label: 'Brand Resources', icon: Palette },
  ];

  return (
    <Auth requireAuth={true}>
      <div className="min-h-screen bg-gradient-to-b from-[#f8f6f4] via-white to-[#f8f6f4]">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-white via-[#f8f6f4] to-white overflow-hidden">
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
                  Brand Assets
                </span>
              </motion.div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-8">
                <span className="bg-gradient-to-r from-[#333333] via-[#375357] to-[#c3937d] bg-clip-text text-transparent">
                  Download Center
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#333333]/60 font-light leading-relaxed max-w-3xl mx-auto">
                Access logos, letterheads, and brand resources in multiple formats.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 font-light ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-[#375357] to-[#2d4246] text-white shadow-lg'
                    : 'bg-white text-[#333333]/70 hover:bg-[#f8f6f4] border border-[#333333]/10'
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Resources Section */}
        {(activeSection === 'all' || activeSection === 'brand') && (
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-4xl font-light text-[#333333] mb-2 text-center">Brand Resources</h2>
              <p className="text-center text-[#333333]/60 mb-8 font-light">Complete visual identity systems and ready-to-use templates</p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Brand Kit Card */}
                <Link 
                  to="/brand-kit"
                  className="group bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#333333]/10 hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-all duration-500"
                >
                  <div className="bg-gradient-to-br from-[#375357] to-[#2d4246] p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>
                    
                    <div className="relative z-10 text-center">
                      <Palette className="w-16 h-16 text-white/90 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                        BRAND KIT
                      </h3>
                      <p className="text-white/80 text-sm font-light">
                        Complete Visual Identity System
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-[#333333]/70 mb-4 font-light">
                      Access our complete visual identity system including logo variations, typography guidelines, color palettes, mockups, and social media banners.
                    </p>
                    <ul className="space-y-2 text-sm text-[#333333]/60 mb-6 font-light">
                      <li>✓ Professional mockups & templates</li>
                      <li>✓ Typography & color systems</li>
                      <li>✓ Social media banner designs</li>
                      <li>✓ Business card layouts</li>
                    </ul>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#375357] font-semibold group-hover:translate-x-1 transition-transform duration-300">
                        View Brand Kit →
                      </span>
                      <span className="text-[#333333]/40 font-light">Internal Resource</span>
                    </div>
                  </div>
                </Link>

                {/* Social Media Pack Card */}
                <Link 
                  to="/social-media-pack"
                  className="group bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#333333]/10 hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-all duration-500"
                >
                  <div className="bg-gradient-to-br from-[#e9a753] to-[#d89543] p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>
                    
                    <div className="relative z-10 text-center">
                      <Share2 className="w-16 h-16 text-white/90 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '0.03em' }}>
                        SOCIAL PACK
                      </h3>
                      <p className="text-white/80 text-sm font-light">
                        8 Instagram Post Templates
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-[#333333]/70 mb-4 font-light">
                      Ready-to-use Instagram post templates featuring your services and brand messaging with professional imagery and on-brand design.
                    </p>
                    <ul className="space-y-2 text-sm text-[#333333]/60 mb-6 font-light">
                      <li>✓ 8 professional post designs</li>
                      <li>✓ 1080×1080px Instagram format</li>
                      <li>✓ Service highlight templates</li>
                      <li>✓ Usage guidelines & hashtags</li>
                    </ul>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#e9a753] font-semibold group-hover:translate-x-1 transition-transform duration-300">
                        View Social Pack →
                      </span>
                      <span className="text-[#333333]/40 font-light">8 Templates</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Hidden tree logos for rendering */}
        <div style={{ position: 'fixed', left: '-9999px', top: 0 }}>
          <div ref={(el) => (treeLogoRefs.current['color'] = el)} style={{ width: '1200px', height: '1200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', position: 'relative' }}>
            <TreeLogo width={800} height={800} variant="color" />
          </div>
          <div ref={(el) => (treeLogoRefs.current['black'] = el)} style={{ width: '1200px', height: '1200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', position: 'relative' }}>
            <TreeLogo width={800} height={800} variant="black" />
          </div>
          <div ref={(el) => (treeLogoRefs.current['white'] = el)} style={{ width: '1200px', height: '1200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#375357', position: 'relative' }}>
            <TreeLogo width={800} height={800} variant="white" />
          </div>
        </div>



        {/* Modern Oak Icon Section */}
        {(activeSection === 'all' || activeSection === 'logos') && (
          <AnimatedSection>
            <div className="mb-16">
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-[#333333]/10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-6">
                  <div>
                    <h2 className="text-4xl font-light text-[#333333] mb-2">Modern Oak Icon</h2>
                    <p className="text-[#333333]/60 font-light">Elevated luxury design - layered V-shaped canopy with refined geometry</p>
                  </div>
                  <Link 
                    to="/downloads/icon-variations"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#375357] to-[#2d4246] text-white rounded-full hover:shadow-xl transition-all duration-300 font-light text-sm whitespace-nowrap"
                  >
                    View All 10 Variations →
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-8">
                  {/* Full Color */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-white border border-[#333333]/10 rounded-2xl p-6 flex items-center justify-center w-full aspect-square">
                      <TreeLogo width={64} height={64} variant="color" />
                    </div>
                    <span className="text-sm text-[#333333]/70 font-light">Full Color</span>
                  </div>

                  {/* Black Version */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-white border border-[#333333]/10 rounded-2xl p-6 flex items-center justify-center w-full aspect-square">
                      <TreeLogo width={64} height={64} variant="black" />
                    </div>
                    <span className="text-sm text-[#333333]/70 font-light">Black</span>
                  </div>

                  {/* White on Dark */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-[#375357] rounded-2xl p-6 flex items-center justify-center w-full aspect-square">
                      <TreeLogo width={64} height={64} variant="white" />
                    </div>
                    <span className="text-sm text-[#333333]/70 font-light">White (Dark BG)</span>
                  </div>

                  {/* Size Reference */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-gradient-to-br from-[#f8f6f4] to-white border border-[#333333]/10 rounded-2xl p-6 flex items-center justify-center w-full aspect-square">
                      <TreeLogo width={80} height={80} variant="color" />
                    </div>
                    <span className="text-sm text-[#333333]/70 font-light">Large Size</span>
                  </div>
                </div>

                {/* Quick Download Buttons */}
                <div className="pt-6 border-t border-[#333333]/10">
                  <p className="text-sm text-[#333333]/60 mb-3 font-light">Quick Download All Variations:</p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        assets.forEach((asset, idx) => {
                          setTimeout(() => downloadTreeLogo(asset.variant, 'png', `${asset.filename}.png`), idx * 50);
                        });
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#375357] to-[#2d4246] text-white rounded-full hover:shadow-lg transition-all duration-300 font-light text-sm"
                    >
                      <Download className="w-4 h-4" />
                      All PNG ({assets.length})
                    </button>
                    <button
                      onClick={() => {
                        assets.forEach((asset, idx) => {
                          setTimeout(() => downloadTreeLogo(asset.variant, 'jpg', `${asset.filename}.jpg`), idx * 200);
                        });
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#c3937d] to-[#a67d68] text-white rounded-full hover:shadow-lg transition-all duration-300 font-light text-sm"
                    >
                      <Download className="w-4 h-4" />
                      All JPEG ({assets.length})
                    </button>
                    <button
                      onClick={() => {
                        assets.forEach((asset, idx) => {
                          setTimeout(() => downloadTreeLogo(asset.variant, 'pdf', `${asset.filename}.pdf`), idx * 300);
                        });
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#e9a753] to-[#d89a4d] text-white rounded-full hover:shadow-lg transition-all duration-300 font-light text-sm"
                    >
                      <Download className="w-4 h-4" />
                      All PDF ({assets.length})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Logo Variations Grid */}
        {(activeSection === 'all' || activeSection === 'logos') && (
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-4xl font-light text-[#333333] mb-2 text-center">Logo Variations</h2>
              <p className="text-center text-[#333333]/60 mb-8 font-light">Download individual logo variations in multiple formats</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assets.map((asset, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#333333]/10 hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-shadow duration-500"
                  >
                    {/* Preview */}
                    <div className={`${asset.bg} p-8 flex items-center justify-center border-b border-[#333333]/10 h-48`}>
                      <TreeLogo width={100} height={100} variant={asset.variant} />
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <h3 className="text-lg font-light text-[#333333] mb-1">
                        {asset.name}
                      </h3>
                      <p className="text-xs text-[#333333]/60 mb-4 font-light">
                        {asset.description}
                      </p>
                      
                      {/* Format Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => downloadTreeLogo(asset.variant, 'png', `${asset.filename}.png`)}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-sm hover:shadow-md text-xs font-light"
                        >
                          <Download className="w-3.5 h-3.5" />
                          PNG
                        </button>
                        <button
                          onClick={() => downloadTreeLogo(asset.variant, 'jpg', `${asset.filename}.jpg`)}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#c3937d] text-white rounded-full hover:bg-[#a67d68] transition-all duration-300 shadow-sm hover:shadow-md text-xs font-light"
                        >
                          <Download className="w-3.5 h-3.5" />
                          JPG
                        </button>
                        <button
                          onClick={() => downloadTreeLogo(asset.variant, 'pdf', `${asset.filename}.pdf`)}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#e9a753] text-white rounded-full hover:bg-[#d89a4d] transition-all duration-300 shadow-sm hover:shadow-md text-xs font-light"
                        >
                          <Download className="w-3.5 h-3.5" />
                          PDF
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Office Letterheads */}
        {(activeSection === 'all' || activeSection === 'letterheads') && (
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-4xl font-light text-[#333333] mb-2 text-center">Office Letterheads</h2>
              <p className="text-center text-[#333333]/60 mb-8 font-light">Professional letterhead templates for each office location</p>
              
              {/* Hidden letterheads for rendering */}
              <div style={{ position: 'fixed', left: '-9999px', top: 0 }}>
                {offices.map((office) => (
                  <div key={office.key} ref={(el) => (letterheadRefs.current[office.key] = el)} style={{ position: 'relative' }}>
                    <Letterhead
                      officeName={office.name}
                      address={office.address}
                      city={office.city}
                      phone={office.phone}
                      variant="color"
                    />
                  </div>
                ))}
              </div>

              {/* Letterhead Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offices.map((office) => (
                  <div
                    key={office.key}
                    className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#333333]/10 hover:shadow-[0_20px_60px_rgba(55,83,87,0.12)] transition-shadow duration-500"
                  >
                    {/* Preview */}
                    <div className="bg-gradient-to-br from-[#f8f6f4] to-white p-8 border-b border-[#333333]/10 h-48 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <FileText className="w-12 h-12 text-[#375357] mx-auto mb-3" />
                        <div className="text-sm text-[#333333]/70 space-y-1 font-light">
                          <div className="font-normal">{office.name}</div>
                          <div className="text-xs">{office.city.split(',')[1]?.trim()}</div>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <h3 className="text-lg font-light text-[#333333] mb-1">
                        {office.name} Office
                      </h3>
                      <p className="text-xs text-[#333333]/60 mb-4 font-light">
                        Letterhead with office contact details
                      </p>
                      
                      {/* Format Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => downloadLetterhead(office.key, 'pdf', `letterhead-${office.key}.pdf`)}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-sm hover:shadow-md text-xs font-light"
                        >
                          <Download className="w-3.5 h-3.5" />
                          PDF
                        </button>
                        <button
                          onClick={() => downloadLetterhead(office.key, 'png', `letterhead-${office.key}.png`)}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#c3937d] text-white rounded-full hover:bg-[#a67d68] transition-all duration-300 shadow-sm hover:shadow-md text-xs font-light"
                        >
                          <Download className="w-3.5 h-3.5" />
                          PNG
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Acorn Icon Variations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#333333] mb-4 text-center">Acorn Icon</h2>
          <p className="text-center text-[#333333]/60 mb-8">Download our signature acorn icon - "Mighty oaks from little acorns grow"</p>
          
          {/* Hidden acorn icons for rendering */}
          <div style={{ position: 'fixed', left: '-9999px', top: 0 }}>
            <div ref={(el) => (acornRefs.current['color'] = el)} style={{ width: '300px', height: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', position: 'relative' }}>
              <AcornIcon variant="static" width={250} height={300} />
            </div>
            <div ref={(el) => (acornRefs.current['white'] = el)} style={{ width: '300px', height: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#375357', position: 'relative' }}>
              <AcornIcon variant="static" width={250} height={300} />
            </div>
          </div>

          {/* Acorn Icon Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#333333]/10 hover:shadow-xl transition-shadow duration-500">
              {/* Preview */}
              <div className="bg-gradient-to-br from-[#f8f6f4] to-white p-12 border-b border-[#333333]/10 h-64 flex items-center justify-center">
                <AcornIcon variant="static" width={100} height={120} />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#333333] mb-1">
                  Acorn Icon - Color
                </h3>
                <p className="text-xs text-[#333333]/60 mb-3">
                  Full color version for light backgrounds
                </p>
                
                {/* Format Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => downloadAcorn('color', 'png', `acorn-icon-color.png`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    PNG
                  </button>
                  <button
                    onClick={() => downloadAcorn('color', 'jpg', `acorn-icon-color.jpg`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#c3937d] text-white rounded-full hover:bg-[#a67d68] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    JPG
                  </button>
                  <button
                    onClick={() => downloadAcorn('color', 'pdf', `acorn-icon-color.pdf`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#e9a753] text-white rounded-full hover:bg-[#d89a4d] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    PDF
                  </button>
                  <button
                    onClick={() => downloadAcornSVG(`acorn-icon-color.svg`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    SVG
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#333333]/10 hover:shadow-xl transition-shadow duration-500">
              {/* Preview */}
              <div className="bg-[#375357] p-12 border-b border-[#333333]/10 h-64 flex items-center justify-center">
                <AcornIcon variant="static" width={100} height={120} />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#333333] mb-1">
                  Acorn Icon - Dark BG
                </h3>
                <p className="text-xs text-[#333333]/60 mb-3">
                  Same colors on dark background
                </p>
                
                {/* Format Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => downloadAcorn('white', 'png', `acorn-icon-dark-bg.png`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    PNG
                  </button>
                  <button
                    onClick={() => downloadAcorn('white', 'jpg', `acorn-icon-dark-bg.jpg`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#c3937d] text-white rounded-full hover:bg-[#a67d68] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    JPG
                  </button>
                  <button
                    onClick={() => downloadAcorn('white', 'pdf', `acorn-icon-dark-bg.pdf`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#e9a753] text-white rounded-full hover:bg-[#d89a4d] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    PDF
                  </button>
                  <button
                    onClick={() => downloadAcornSVG(`acorn-icon-dark-bg.svg`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    SVG
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Acorn Design Details */}
          <div className="mt-8 bg-white rounded-3xl shadow-lg p-6 border border-[#333333]/10 max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-[#333333] mb-3">Design Features</h3>
            <ul className="space-y-2 text-sm text-[#333333]/70">
              <li>• Curved stem with smooth transition (#375357)</li>
              <li>• Acorn cap with tan/bronze color (#c3937d)</li>
              <li>• Rounded acorn body (#a67d68)</li>
              <li>• Subtle highlight for depth and dimension</li>
              <li>• Perfect for decorative elements and brand storytelling</li>
            </ul>
          </div>
        </div>

        {/* Text Logo Variations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#333333] mb-4 text-center">Text Logo</h2>
          <p className="text-center text-[#333333]/60 mb-8">Download our signature text logo - "First Centennial Title of Nevada"</p>
          
          {/* Hidden text logos for rendering */}
          <div style={{ position: 'fixed', left: '-9999px', top: 0 }}>
            <div ref={(el) => (textLogoRefs.current['color'] = el)} style={{ width: '1800px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', padding: '40px', position: 'relative' }}>
              <TextLogo variant="static" width={1700} height={120} />
            </div>
            <div ref={(el) => (textLogoRefs.current['white'] = el)} style={{ width: '1800px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#375357', padding: '40px', position: 'relative' }}>
              <TextLogo variant="static" width={1700} height={120} />
            </div>
          </div>

          {/* Text Logo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#333333]/10 hover:shadow-xl transition-shadow duration-500">
              {/* Preview */}
              <div className="bg-gradient-to-br from-[#f8f6f4] to-white p-12 border-b border-[#333333]/10 h-64 flex items-center justify-center">
                <TextLogo variant="static" width={280} height={40} />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#333333] mb-1">
                  Text Logo - Color
                </h3>
                <p className="text-xs text-[#333333]/60 mb-3">
                  Full color version for light backgrounds
                </p>
                
                {/* Format Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => downloadTextLogo('color', 'png', `text-logo-color.png`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    PNG
                  </button>
                  <button
                    onClick={() => downloadTextLogo('color', 'jpg', `text-logo-color.jpg`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#c3937d] text-white rounded-full hover:bg-[#a67d68] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    JPG
                  </button>
                  <button
                    onClick={() => downloadTextLogo('color', 'pdf', `text-logo-color.pdf`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#e9a753] text-white rounded-full hover:bg-[#d89a4d] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    PDF
                  </button>
                  <button
                    onClick={() => downloadTextLogoSVG(`text-logo-color.svg`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    SVG
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#333333]/10 hover:shadow-xl transition-shadow duration-500">
              {/* Preview */}
              <div className="bg-[#375357] p-12 border-b border-[#333333]/10 h-64 flex items-center justify-center">
                <TextLogo variant="static" width={280} height={40} />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#333333] mb-1">
                  Text Logo - Dark BG
                </h3>
                <p className="text-xs text-[#333333]/60 mb-3">
                  Same colors on dark background
                </p>
                
                {/* Format Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => downloadTextLogo('white', 'png', `text-logo-dark-bg.png`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    PNG
                  </button>
                  <button
                    onClick={() => downloadTextLogo('white', 'jpg', `text-logo-dark-bg.jpg`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#c3937d] text-white rounded-full hover:bg-[#a67d68] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    JPG
                  </button>
                  <button
                    onClick={() => downloadTextLogo('white', 'pdf', `text-logo-dark-bg.pdf`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#e9a753] text-white rounded-full hover:bg-[#d89a4d] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    PDF
                  </button>
                  <button
                    onClick={() => downloadTextLogoSVG(`text-logo-dark-bg.svg`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    SVG
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Text Logo Design Details */}
          <div className="mt-8 bg-white rounded-3xl shadow-lg p-6 border border-[#333333]/10 max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-[#333333] mb-3">Design Features</h3>
            <ul className="space-y-2 text-sm text-[#333333]/70">
              <li>• Bold, modern font with clean lines</li>
              <li>• Balanced proportions for readability</li>
              <li>• Color options for various backgrounds</li>
              <li>• Perfect for branding and marketing materials</li>
            </ul>
          </div>
        </div>

        {/* Combined Logo Variations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#333333] mb-4 text-center">Combined Logo</h2>
          <p className="text-center text-[#333333]/60 mb-8">Download our signature combined logo - "First Centennial Title of Nevada" with acorn</p>
          
          {/* Hidden combined logos for rendering */}
          <div style={{ position: 'fixed', left: '-9999px', top: 0 }}>
            <div ref={(el) => (combinedLogoRefs.current['color'] = el)} style={{ width: '1800px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', padding: '40px', position: 'relative' }}>
              <CombinedLogo variant="color" width={1700} height={120} />
            </div>
            <div ref={(el) => (combinedLogoRefs.current['white'] = el)} style={{ width: '1800px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#375357', padding: '40px', position: 'relative' }}>
              <CombinedLogo variant="white" width={1700} height={120} />
            </div>
          </div>

          {/* Combined Logo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#333333]/10 hover:shadow-xl transition-shadow duration-500">
              {/* Preview */}
              <div className="bg-gradient-to-br from-[#f8f6f4] to-white p-12 border-b border-[#333333]/10 h-64 flex items-center justify-center">
                <CombinedLogo variant="color" width={280} height={40} />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#333333] mb-1">
                  Combined Logo - Color
                </h3>
                <p className="text-xs text-[#333333]/60 mb-3">
                  Full color version for light backgrounds
                </p>
                
                {/* Format Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => downloadCombinedLogo('color', 'png', `combined-logo-color.png`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    PNG
                  </button>
                  <button
                    onClick={() => downloadCombinedLogo('color', 'jpg', `combined-logo-color.jpg`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#c3937d] text-white rounded-full hover:bg-[#a67d68] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    JPG
                  </button>
                  <button
                    onClick={() => downloadCombinedLogo('color', 'pdf', `combined-logo-color.pdf`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#e9a753] text-white rounded-full hover:bg-[#d89a4d] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    PDF
                  </button>
                  <button
                    onClick={() => downloadCombinedLogoSVG(`combined-logo-color.svg`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    SVG
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#333333]/10 hover:shadow-xl transition-shadow duration-500">
              {/* Preview */}
              <div className="bg-[#375357] p-12 border-b border-[#333333]/10 h-64 flex items-center justify-center">
                <CombinedLogo variant="white" width={280} height={40} />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#333333] mb-1">
                  Combined Logo - Dark BG
                </h3>
                <p className="text-xs text-[#333333]/60 mb-3">
                  Same colors on dark background
                </p>
                
                {/* Format Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => downloadCombinedLogo('white', 'png', `combined-logo-dark-bg.png`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    PNG
                  </button>
                  <button
                    onClick={() => downloadCombinedLogo('white', 'jpg', `combined-logo-dark-bg.jpg`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#c3937d] text-white rounded-full hover:bg-[#a67d68] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    JPG
                  </button>
                  <button
                    onClick={() => downloadCombinedLogo('white', 'pdf', `combined-logo-dark-bg.pdf`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#e9a753] text-white rounded-full hover:bg-[#d89a4d] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    PDF
                  </button>
                  <button
                    onClick={() => downloadCombinedLogoSVG(`combined-logo-dark-bg.svg`)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#375357] text-white rounded-full hover:bg-[#2d4246] transition-all duration-300 shadow-md hover:shadow-lg text-xs font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    SVG
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Combined Logo Design Details */}
          <div className="mt-8 bg-white rounded-3xl shadow-lg p-6 border border-[#333333]/10 max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-[#333333] mb-3">Design Features</h3>
            <ul className="space-y-2 text-sm text-[#333333]/70">
              <li>• Bold, modern font with clean lines</li>
              <li>• Balanced proportions for readability</li>
              <li>• Color options for various backgrounds</li>
              <li>• Perfect for branding and marketing materials</li>
            </ul>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#333333]/10">
          <h2 className="text-2xl font-bold text-[#333333] mb-6">Usage Guidelines</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#333333] mb-2">📁 File Formats</h3>
              <p className="text-[#333333]/70">
                <strong>SVG:</strong> Best for web, scalable to any size without quality loss<br />
                <strong>JPEG:</strong> Perfect for presentations, email, and general sharing (1200x1200px, high quality)<br />
                <strong>PDF:</strong> Ideal for professional printing and documentation
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#333333] mb-2">🎨 Acorn Placement</h3>
              <p className="text-[#333333]/70">
                <strong>Left:</strong> Dynamic, asymmetric look<br />
                <strong>Right:</strong> Balanced asymmetry<br />
                <strong>Center:</strong> Classic, perfectly centered symmetry<br />
                <strong>No Acorn:</strong> Ultra-minimal, clean aesthetic
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#333333] mb-2">📱 Digital Use</h3>
              <p className="text-[#333333]/70">
                Use <strong>Full Color SVG</strong> for websites and digital materials. 
                Use <strong>JPEG</strong> for email signatures and presentations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#333333] mb-2">👕 Merchandise & Embroidery</h3>
              <p className="text-[#333333]/70">
                Use <strong>Black - Acorn Center PDF</strong> or <strong>Black - Acorn Right PDF</strong> for embroidery vendors. 
                The PDF format ensures exact colors and sizing for professional reproduction.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#333333] mb-2">🖨️ Print Materials</h3>
              <p className="text-[#333333]/70">
                <strong>Full Color PDF</strong> works great for business cards and brochures. 
                <strong>Black PDF</strong> versions are perfect for cost-effective single-color printing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#333333] mb-2">🎨 Brand Colors</h3>
              <div className="flex flex-wrap gap-3 mt-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#333333] border border-[#333333]/20"></div>
                  <span className="text-sm text-[#333333]/70">#333333</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#375357] border border-[#333333]/20"></div>
                  <span className="text-sm text-[#333333]/70">#375357</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#c3937d] border border-[#333333]/20"></div>
                  <span className="text-sm text-[#333333]/70">#c3937d</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#e9a753] border border-[#333333]/20"></div>
                  <span className="text-sm text-[#333333]/70">#e9a753</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#d9ccc4] border border-[#333333]/20"></div>
                  <span className="text-sm text-[#333333]/70">#d9ccc4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Auth>
  );
}
