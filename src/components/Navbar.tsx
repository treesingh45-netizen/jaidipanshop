import React, { useState } from 'react';
import { JaidiLogo } from './JaidiLogo';
import { Menu, X, Search, ShoppingBag, ArrowRight, ChevronDown, Sparkles, MapPin, Phone } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, categoryFilter?: string) => void;
  cartCount?: number;
  onOpenCart?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount = 0,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [recipesDropdownOpen, setRecipesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavClick = (pageId: string, categoryFilter?: string) => {
    onNavigate(pageId, categoryFilter);
    setMobileMenuOpen(false);
    setMenuDropdownOpen(false);
    setRecipesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleNavClick('menu');
      setSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#EAE6DF] transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Left: Brand Logo (Official round emblem icon + Jaidi) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            aria-label="Jaidi Homepage"
          >
            <JaidiLogo size="md" showText={true} />
          </button>

          {/* 2. Center: Clean Navigation Links with Dropdowns (Matching Reference) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#27272A]">
            
            {/* Shop All / Menu with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMenuDropdownOpen(true)}
              onMouseLeave={() => setMenuDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('menu')}
                className={`flex items-center gap-1.5 py-2 transition-colors ${
                  currentPage === 'menu' ? 'text-[#18181B] font-bold' : 'text-[#3F3F46] hover:text-[#18181B]'
                }`}
              >
                <span>Shop All</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${menuDropdownOpen ? 'rotate-180 text-[#E31B23]' : 'text-[#71717A]'}`} />
              </button>

              {menuDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-[#E7E2DA] p-3 flex flex-col gap-1 animate-in fade-in-50 slide-in-from-top-2 duration-150 z-50">
                  <button
                    onClick={() => handleNavClick('menu', 'all')}
                    className="text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#18181B] hover:bg-[#FAF8F5] hover:text-[#E31B23] transition-colors"
                  >
                    All 60+ Items
                  </button>
                  <button
                    onClick={() => handleNavClick('menu', 'fresh-juices')}
                    className="text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#18181B] hover:bg-[#FAF8F5] hover:text-[#E31B23] transition-colors flex items-center justify-between"
                  >
                    <span>Cold-Pressed Fresh Juices</span>
                    <span className="text-[10px] bg-[#FAF8F5] text-[#71717A] px-2 py-0.5 rounded-full">100% Pure</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('menu', 'jaidi-shakes')}
                    className="text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#18181B] hover:bg-[#FAF8F5] hover:text-[#E31B23] transition-colors"
                  >
                    Dry-Fruit & Dessert Shakes
                  </button>
                  <button
                    onClick={() => handleNavClick('menu', 'gola-falooda')}
                    className="text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#18181B] hover:bg-[#FAF8F5] hover:text-[#E31B23] transition-colors"
                  >
                    Royal Falooda & Kulfi
                  </button>
                  <button
                    onClick={() => handleNavClick('menu', 'savories')}
                    className="text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#18181B] hover:bg-[#FAF8F5] hover:text-[#E31B23] transition-colors"
                  >
                    Crispy Gol Gappay & Chaat
                  </button>
                  <button
                    onClick={() => handleNavClick('menu', 'paan-specials')}
                    className="text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#18181B] hover:bg-[#FAF8F5] hover:text-[#E31B23] transition-colors"
                  >
                    Shahi Meetha & Silver Paan
                  </button>
                </div>
              )}
            </div>

            {/* Flavours (direct to menu with popular filter) */}
            <button
              onClick={() => handleNavClick('menu')}
              className={`transition-colors py-2 ${
                currentPage === 'menu' ? 'text-[#18181B] font-bold' : 'text-[#3F3F46] hover:text-[#18181B]'
              }`}
            >
              Flavours
            </button>

            {/* About Us / Story */}
            <button
              onClick={() => handleNavClick('story')}
              className={`transition-colors py-2 ${
                currentPage === 'story' ? 'text-[#18181B] font-bold' : 'text-[#3F3F46] hover:text-[#18181B]'
              }`}
            >
              About Us
            </button>

            {/* Experience / Recipes dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setRecipesDropdownOpen(true)}
              onMouseLeave={() => setRecipesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('experience')}
                className={`flex items-center gap-1.5 py-2 transition-colors ${
                  currentPage === 'experience' ? 'text-[#18181B] font-bold' : 'text-[#3F3F46] hover:text-[#18181B]'
                }`}
              >
                <span>Experience</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${recipesDropdownOpen ? 'rotate-180 text-[#E31B23]' : 'text-[#71717A]'}`} />
              </button>

              {recipesDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border border-[#E7E2DA] p-3 flex flex-col gap-1 animate-in fade-in-50 slide-in-from-top-2 duration-150 z-50">
                  <button
                    onClick={() => handleNavClick('experience')}
                    className="text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#18181B] hover:bg-[#FAF8F5] hover:text-[#E31B23] transition-colors"
                  >
                    The Lahori Night Ritual
                  </button>
                  <button
                    onClick={() => handleNavClick('gallery')}
                    className="text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#18181B] hover:bg-[#FAF8F5] hover:text-[#E31B23] transition-colors"
                  >
                    Visual Photo Gallery
                  </button>
                  <button
                    onClick={() => handleNavClick('visit')}
                    className="text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-[#18181B] hover:bg-[#FAF8F5] hover:text-[#E31B23] transition-colors"
                  >
                    Car-Hop & DHA Directions
                  </button>
                </div>
              )}
            </div>

            {/* Our Mission */}
            <button
              onClick={() => handleNavClick('story')}
              className={`transition-colors py-2 ${
                currentPage === 'story' ? 'text-[#18181B] font-bold' : 'text-[#3F3F46] hover:text-[#18181B]'
              }`}
            >
              Our Mission
            </button>
          </nav>

          {/* 3. Right: Icons (Search, Bag with badge) and "Juice Up →" Pill Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-full text-[#18181B] hover:bg-[#FAF8F5] hover:text-[#E31B23] transition-colors focus:outline-none"
              aria-label="Search drinks & desserts"
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Bag / Cart with Badge */}
            <button
              onClick={onOpenCart || (() => handleNavClick('menu'))}
              className="p-2.5 rounded-full text-[#18181B] hover:bg-[#FAF8F5] hover:text-[#E31B23] transition-colors relative focus:outline-none"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2]" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#E31B23] text-white text-[10px] font-bold flex items-center justify-center font-mono">
                {cartCount > 0 ? cartCount : '0'}
              </span>
            </button>

            {/* Signature Pill Button "Juice Up →" (Vivid Red & White Brand Color) */}
            <button
              onClick={() => handleNavClick('menu')}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight bg-[#E31B23] text-white hover:bg-[#C8102E] hover:shadow-md transition-all active:scale-95 cursor-pointer shadow-xs whitespace-nowrap"
            >
              <span>Juice Up</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#18181B] hover:bg-[#FAF8F5] transition-colors lg:hidden focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Expandable Search Input Bar */}
        {searchOpen && (
          <form onSubmit={handleSearchSubmit} className="py-3 border-t border-[#EAE6DF] flex items-center gap-3 animate-in fade-in duration-200">
            <Search className="w-4 h-4 text-[#71717A]" />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search wild falsa, pomegranate, royal falooda, mango shake..."
              className="flex-1 text-sm bg-transparent outline-none text-[#18181B] placeholder-[#A1A1AA]"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-xs font-semibold text-[#71717A] hover:text-[#18181B]"
            >
              Cancel
            </button>
          </form>
        )}
      </div>

      {/* Mobile Animated Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-white border-b border-[#EAE6DF] shadow-2xl px-6 py-8 flex flex-col gap-5 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2.5 text-base font-semibold text-[#18181B] border-b border-[#FAF8F5]"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('menu')}
              className="text-left py-2.5 text-base font-semibold text-[#18181B] border-b border-[#FAF8F5]"
            >
              Shop All Flavours
            </button>
            <button
              onClick={() => handleNavClick('story')}
              className="text-left py-2.5 text-base font-semibold text-[#18181B] border-b border-[#FAF8F5]"
            >
              About Us & Mission
            </button>
            <button
              onClick={() => handleNavClick('experience')}
              className="text-left py-2.5 text-base font-semibold text-[#18181B] border-b border-[#FAF8F5]"
            >
              The Lahori Night Experience
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="text-left py-2.5 text-base font-semibold text-[#18181B] border-b border-[#FAF8F5]"
            >
              Visual Gallery
            </button>
            <button
              onClick={() => handleNavClick('visit')}
              className="text-left py-2.5 text-base font-semibold text-[#18181B] border-b border-[#FAF8F5]"
            >
              Visit & Car-Hop (DHA 4)
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2.5 text-base font-semibold text-[#18181B] border-b border-[#FAF8F5]"
            >
              Contact & Catering
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('menu')}
              className="w-full py-3.5 rounded-full text-center text-sm font-bold bg-[#FEE75C] text-[#18181B] shadow-sm flex items-center justify-center gap-2"
            >
              <span>Juice Up Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-between text-xs text-[#71717A] pt-2 px-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E31B23]" />
                Sector CCA, DHA Phase 4
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#E31B23]" />
                0301 4002475
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

