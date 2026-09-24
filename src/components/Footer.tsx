import React from 'react';
import { JaidiLogo } from './JaidiLogo';
import { Phone, MapPin, Clock, Instagram, Facebook, ArrowUpRight, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'menu', label: 'Signature Menu' },
    { id: 'experience', label: 'Jaidi Experience' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'visit', label: 'Visit Us' },
    { id: 'contact', label: 'Contact & Inquiries' },
  ];

  const menuHighlights = [
    { label: 'Fresh Falsa & Seasonal Juices', category: 'fresh-juices' },
    { label: 'Lahori Royal Falooda', category: 'gola-falooda' },
    { label: 'Thick Mango & Dry Fruit Shakes', category: 'milkshakes' },
    { label: 'Crispy Gol Gappay & Chaat', category: 'savories' },
    { label: 'Meetha Shahi Pan & Gulkand', category: 'paan-specials' },
  ];

  return (
    <footer className="bg-[#141416] text-[#E4E4E7] pt-16 pb-12 border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-[#27272A]">
          
          {/* Brand Info (2 Columns on large screens) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <JaidiLogo size="lg" showText={true} className="[&_span]:text-white [&_span.text-xs]:text-[#A1A1AA]" />
            <p className="text-sm leading-relaxed text-[#A1A1AA] max-w-sm">
              Jaidi Pan Shop is Lahore’s premier evening destination for fresh cold-pressed juices, rich traditional milkshakes, decadent falooda, savory street classics, and authentic royal paan.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#27272A] hover:bg-[#E31B23] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#27272A] hover:bg-[#E31B23] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#A1A1AA]">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors hover:translate-x-1 duration-150 inline-block text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Highlights
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#A1A1AA]">
              {menuHighlights.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onNavigate('menu');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit & Timings */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Visit Jaidi
            </h4>
            <div className="flex flex-col gap-3.5 text-sm text-[#A1A1AA]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
                <span>Sector CCA, DHA Phase 4, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E31B23] shrink-0" />
                <a href="tel:03014002475" className="hover:text-white transition-colors font-mono">
                  0301 4002475
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
                <span>Open Daily: 12:00 PM – 02:30 AM</span>
              </div>
              <button
                onClick={() => {
                  onNavigate('visit');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#E31B23] hover:text-[#FF4A52] transition-colors"
              >
                <span>View On Map & Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717A] gap-4">
          <p>© {new Date().getFullYear()} Jaidi Pan Shop. All rights reserved. DHA Phase 4, Lahore.</p>
          <div className="flex items-center gap-1 text-[#71717A]">
            <span>Crafted with passion for authentic Lahori refreshments</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
