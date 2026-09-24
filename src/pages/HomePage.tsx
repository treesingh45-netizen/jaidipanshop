import React, { useState } from 'react';
import { IMAGES } from '../data/assets';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/menuData';
import { ItemModal } from '../components/ItemModal';
import { CravingQuiz } from '../components/CravingQuiz';
import { CateringEstimator } from '../components/CateringEstimator';
import { FaqSection } from '../components/FaqSection';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock,
  Phone,
  Sparkles,
  Navigation as NavigationIcon,
  ChevronRight,
  CheckCircle2,
  Citrus,
  ShieldCheck,
  Award,
  Star,
  Flame,
  Users,
  Car,
  Heart,
  Plus,
  ShoppingBag,
  Droplets,
  Leaf,
  Check,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, categoryFilter?: string) => void;
  onAddToCart?: (item: MenuItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onAddToCart }) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeFlavor, setActiveFlavor] = useState<'citrus' | 'mango' | 'falsa' | 'pomegranate'>('citrus');
  const [selectedRangeFilter, setSelectedRangeFilter] = useState<string>('best-seller');
  const [addedToast, setAddedToast] = useState<string | null>(null);

  const flavorPresets = {
    citrus: {
      name: 'Yuzu Mint Cooler (Zesty Citrus)',
      statPercent: '100%',
      statLabel: 'Natural cold-pressed citrus & garden mint',
      accentColor: 'from-[#A3EB77] via-[#C8F369] to-[#FDE858]',
      badgeText: 'Crisp & Zesty',
      bgCard: 'bg-[#F2FBE8]',
      image: IMAGES.yuzuMint,
    },
    mango: {
      name: 'Multani Chaunsa Mango Thick Velvet Shake',
      statPercent: '98%',
      statLabel: 'Sun-ripened Chaunsa pulp with royal dairy',
      accentColor: 'from-[#FFDA66] via-[#FFCA3A] to-[#FF9248]',
      badgeText: 'Seasonal King',
      bgCard: 'bg-[#FFF9EC]',
      image: IMAGES.chaunsaMango,
    },
    falsa: {
      name: 'Wild Mountain Falsa Berry Elixir',
      statPercent: '100%',
      statLabel: 'Handpicked Potohar berries, black salt touch',
      accentColor: 'from-[#D884E8] via-[#B858D6] to-[#7B2CBF]',
      badgeText: 'Cult Classic',
      bgCard: 'bg-[#FAF0FF]',
      image: IMAGES.wildFalsa,
    },
    pomegranate: {
      name: 'Ruby Kandahar Anar Nectar',
      statPercent: '100%',
      statLabel: 'Pure polyphenol aril press, zero water added',
      accentColor: 'from-[#FF758F] via-[#FF4D6D] to-[#C9184A]',
      badgeText: 'Pure Antioxidant',
      bgCard: 'bg-[#FFF0F3]',
      image: IMAGES.kandaharAnar,
    },
  };

  const handleAddItem = (item: MenuItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(item);
      setAddedToast(`Added ${item.name} to bag`);
      setTimeout(() => setAddedToast(null), 2500);
    } else {
      setSelectedItem(item);
    }
  };

  // Filtered showcase items for the "Discover our range —" section
  const rangeItems = React.useMemo(() => {
    if (selectedRangeFilter === 'best-seller') {
      return MENU_ITEMS.filter((item) => item.isPopular).slice(0, 6);
    }
    if (selectedRangeFilter === 'juices') {
      return MENU_ITEMS.filter((item) => item.category === 'fresh-juices').slice(0, 6);
    }
    if (selectedRangeFilter === 'shakes') {
      return MENU_ITEMS.filter((item) => item.category === 'jaidi-shakes' || item.category === 'gola-falooda').slice(0, 6);
    }
    if (selectedRangeFilter === 'paan') {
      return MENU_ITEMS.filter((item) => item.category === 'paan-specials' || item.category === 'savories').slice(0, 6);
    }
    if (selectedRangeFilter === 'family') {
      return MENU_ITEMS.slice(0, 6);
    }
    return MENU_ITEMS.slice(0, 6);
  }, [selectedRangeFilter]);

  return (
    <div className="flex flex-col w-full bg-[#FAF8F5] min-h-screen">
      
      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#18181B] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200 border border-white/20">
          <Check className="w-4 h-4 text-[#E31B23]" />
          <span className="text-sm font-medium">{addedToast}</span>
        </div>
      )}

      {/* ============================================================ */}
      {/* 1. HERO CARD CONTAINER (RED & WHITE BRAND TONE) */}
      {/* ============================================================ */}
      <section className="px-3 sm:px-6 lg:px-10 pt-3 pb-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#E31B23] via-[#DC2626] to-[#991B1B] p-6 sm:p-10 lg:p-14 shadow-2xl border border-red-500/30 transition-all duration-700">
            
            {/* Ambient Background Glows & Subtle White Reflections */}
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-black/25 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
              
              {/* Left Column: Big Headline & CTA in Crisp White */}
              <div className="lg:col-span-5 flex flex-col items-start justify-center gap-6">
                
                {/* Micro Brand Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>DHA Phase 4 · Sector CCA Fresh Bar</span>
                </div>

                {/* Big Headline with Serif Italics (Crisp White Tone) */}
                <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-sans font-black text-white tracking-tight leading-[1.05] text-balance">
                  Savour{' '}
                  <span className="font-serif italic font-normal text-white">the Juicy</span>{' '}
                  <br className="hidden sm:inline" />
                  <span className="font-serif italic font-normal text-white">essence</span> of fruit in every sip.
                </h1>

                {/* Subtext with bold highlights in crisp white */}
                <p className="text-base sm:text-lg text-white/90 font-normal max-w-md leading-relaxed">
                  Taste nature’s best in every <strong className="font-bold text-white">drop</strong> with <strong className="font-bold text-white">real fruit</strong> and vibrant <strong className="font-bold text-white">flavour</strong>.
                </p>

                {/* Action Row: Pure White Pill Button with Red Text & Glass Secondary */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onNavigate('menu')}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-[#FAF8F5] text-[#E31B23] font-bold text-sm tracking-tight shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer border border-white"
                  >
                    <span>Sip Fresh</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <button
                    onClick={() => onNavigate('visit')}
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm tracking-tight transition-all border border-white/25 backdrop-blur-sm"
                  >
                    <Car className="w-4 h-4" />
                    <span>Car-Hop Service</span>
                  </button>
                </div>

                {/* Flavor Switcher Selector Pills */}
                <div className="pt-4 border-t border-white/20 w-full">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/80 block mb-2.5">
                    Select Fresh Profile:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'citrus', label: 'Yuzu Mint', icon: Citrus },
                      { id: 'mango', label: 'Chaunsa Mango', icon: Sparkles },
                      { id: 'falsa', label: 'Wild Falsa', icon: Droplets },
                      { id: 'pomegranate', label: 'Kandahar Anar', icon: Leaf },
                    ].map((f) => {
                      const Icon = f.icon;
                      return (
                        <button
                          key={f.id}
                          onClick={() => setActiveFlavor(f.id as any)}
                          className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                            activeFlavor === f.id
                              ? 'bg-white text-[#E31B23] shadow-md'
                              : 'bg-white/20 text-white hover:bg-white/30 border border-white/20'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{f.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Center Column: High-Res Beverage Splash Product Visual */}
              <div className="lg:col-span-4 flex items-center justify-center relative py-4">
                
                {/* Hero Splash Image Frame */}
                <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 group bg-white">
                  <img
                    src={flavorPresets[activeFlavor].image}
                    alt={flavorPresets[activeFlavor].name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10 pointer-events-none" />

                  {/* Dynamic Active Flavor Tag in Clean White */}
                  <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E31B23]">
                          {flavorPresets[activeFlavor].badgeText}
                        </span>
                        <h4 className="font-serif font-bold text-sm text-[#18181B] truncate">
                          {flavorPresets[activeFlavor].name}
                        </h4>
                      </div>
                      <button
                        onClick={() => onNavigate('menu')}
                        className="p-2 rounded-full bg-[#E31B23] text-white hover:bg-[#C8102E] transition-colors shadow-sm"
                        title="Explore this drink"
                      >
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Circular Badge & Big Stat Number (Crisp White Cards) */}
              <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between gap-8 h-full">
                
                {/* Top Right: Circular Badge "Powered by nature / jaidi." in Pure White */}
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-3xl border border-white shadow-xl">
                  <div className="w-12 h-12 rounded-2xl bg-[#E31B23] flex items-center justify-center text-white shrink-0 shadow-md">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col text-left pr-2">
                    <span className="font-serif font-black text-base text-[#18181B]">
                      jaidi<span className="text-[#E31B23]">.</span>
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#E31B23]">
                      100% Real Fruit
                    </span>
                    <span className="text-[9px] text-[#71717A]">
                      No Added Syrup · Cold-Pressed
                    </span>
                  </div>
                </div>

                {/* Bottom Right: Big Stat Callout in Pure White with Bold Red Number */}
                <div className="bg-white p-6 rounded-3xl border border-white shadow-2xl text-left w-full sm:w-auto max-w-xs">
                  <div className="text-5xl sm:text-6xl font-black font-sans text-[#E31B23] tracking-tight leading-none mb-2">
                    {flavorPresets[activeFlavor].statPercent}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#27272A] leading-snug">
                    {flavorPresets[activeFlavor].statLabel}
                  </p>
                  <div className="mt-3 pt-3 border-t border-[#EFECE6] flex items-center justify-between text-[11px] text-[#52525B]">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-[#E31B23]" />
                      Open till 2:30 AM
                    </span>
                    <span className="font-bold text-[#E31B23]">DHA Phase 4</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. SUB-HERO: "Discover our range —" WITH FILTER PILLS */}
      {/* ============================================================ */}
      <section className="py-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Header Row: Editorial Title and Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
            
            {/* Title: "Discover our range —" (Italic Serif + Modern Sans) */}
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#18181B] tracking-tight">
              <span className="font-serif italic font-normal text-[#E31B23]">Discover</span> our range —
            </h2>

            {/* Filter Pills in Red and White */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'best-seller', label: 'Best Seller' },
                { id: 'juices', label: 'Fresh Juices' },
                { id: 'shakes', label: 'Shakes & Desserts' },
                { id: 'paan', label: 'Chaat & Shahi Paan' },
                { id: 'family', label: 'All Popular' },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setSelectedRangeFilter(pill.id)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all cursor-pointer ${
                    selectedRangeFilter === pill.id
                      ? 'bg-[#E31B23] text-white border-[#E31B23] shadow-sm'
                      : 'bg-white text-[#52525B] border-[#E5E0D8] hover:border-[#E31B23] hover:text-[#E31B23]'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

          </div>

          {/* Product Grid: 6 Premium Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rangeItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group bg-white rounded-3xl p-4 sm:p-5 border border-[#EAE6DF] hover:border-[#D4CEC5] transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#FAF8F5] mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-white/95 text-[#18181B] rounded-full shadow-xs backdrop-blur-xs">
                      {item.category.replace('-', ' ')}
                    </span>
                  </div>

                  {item.isPopular && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold tracking-wide px-2.5 py-1 bg-[#E31B23] text-white rounded-full shadow-xs flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-white" />
                        <span>Popular</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Info & Meta */}
                <div className="flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-[#18181B] group-hover:text-[#E31B23] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-mono font-bold text-base sm:text-lg text-[#18181B] shrink-0">
                        Rs. {item.price}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#52525B] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Sourcing & Action */}
                  <div className="pt-3 border-t border-[#F4F1EC] flex items-center justify-between">
                    <span className="text-[11px] text-[#71717A] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23]" />
                      <span>{item.origin || 'Orchard Fresh'}</span>
                    </span>

                    <button
                      onClick={(e) => handleAddItem(item, e)}
                      className="px-4 py-2 rounded-full bg-[#FAF8F5] hover:bg-[#FEE75C] text-[#18181B] font-bold text-xs transition-colors flex items-center gap-1.5 border border-[#EAE6DF]"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Explore Full Menu Action */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>Explore All 60+ Fresh Menu Items</span>
              <ArrowRight className="w-4 h-4 text-[#FEE75C]" />
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ESSENCE & LAHORE CAR-HOP EXPERIENCE */}
      {/* ============================================================ */}
      <section className="py-20 bg-white border-y border-[#EAE6DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Frame with Lahore Atmosphere */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-[#EAE6DF] relative group">
                <img
                  src={IMAGES.atmosphere}
                  alt="Jaidi DHA Phase 4 outdoor evening ambience"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FEE75C] font-bold">
                    Sector CCA, DHA Phase 4
                  </span>
                  <h3 className="font-serif font-bold text-2xl mt-1">
                    The Lahori Night Gathering
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    Open every day from 12:00 PM till 2:30 AM for car-hop and family open-air refreshment.
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative copy */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#E31B23]">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#18181B] tracking-tight leading-tight">
                More Than Just a Pan Shop — <br />
                <span className="italic font-normal">A Modern Refreshment Culture.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                Founded by <strong>Muhammad Tariq</strong> with an 8-member family of master juice blenders, paan ustads, and falooda confectioners, Jaidi brings together generations of authentic Lahori flavours with modern hygiene and precision cold-pressing in Sector CCA, DHA Phase 4.
              </p>

              {/* Feature points */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF]">
                  <h4 className="font-serif font-bold text-[#18181B] text-sm">Owner & Master Stewards</h4>
                  <p className="text-xs text-[#71717A] mt-1">Muhammad Tariq & 8 dedicated craftsmen on-site daily.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF]">
                  <h4 className="font-serif font-bold text-[#18181B] text-sm">Swift Car-Hop Service</h4>
                  <p className="text-xs text-[#71717A] mt-1">Chilled refreshments delivered straight to your car window.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('story')}
                  className="px-6 py-3 rounded-full bg-[#E31B23] text-white text-xs sm:text-sm font-bold hover:bg-[#C8102E] transition-all flex items-center gap-2"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('experience')}
                  className="px-6 py-3 rounded-full border border-[#EAE6DF] text-[#18181B] text-xs sm:text-sm font-semibold hover:bg-[#FAF8F5] transition-all"
                >
                  <span>Experience Guide</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. INTERACTIVE CRAVING QUIZ */}
      {/* ============================================================ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CravingQuiz
            onSelectItem={(item) => setSelectedItem(item)}
            onNavigateMenu={(cat) => onNavigate('menu', cat)}
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. CATERING & EVENT ESTIMATOR */}
      {/* ============================================================ */}
      <section className="py-20 bg-white border-t border-[#EAE6DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CateringEstimator
            onContactPrefill={() => {
              onNavigate('contact');
            }}
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. FAQ & LOCATION MAP */}
      {/* ============================================================ */}
      <FaqSection />

      {/* Location Section */}
      <section className="py-20 bg-white border-t border-[#EAE6DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#E31B23]">
                Visit Us in Lahore
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#18181B]">
                Sector CCA, DHA Phase 4
              </h2>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Join us for Lahore’s finest chilled drinks, dessert shakes, and paan. Dedicated car-hop lanes make late-night stops effortless.
              </p>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#E31B23] shrink-0" />
                  <span className="text-[#18181B] font-medium">Sector CCA, DHA Phase 4, Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#E31B23] shrink-0" />
                  <a href="tel:03014002475" className="text-[#18181B] font-mono font-bold hover:text-[#E31B23]">
                    0301 4002475
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#E31B23] shrink-0" />
                  <span className="text-[#18181B]">Open Daily 12:00 PM – 02:30 AM</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Jaidi+DHA+Phase+4+Sector+CCA+Lahore"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#E31B23] text-white font-bold text-xs sm:text-sm hover:bg-[#C8102E] transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  <NavigationIcon className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <button
                  onClick={() => onNavigate('visit')}
                  className="px-6 py-3.5 rounded-full border border-[#EAE6DF] text-[#18181B] font-semibold text-xs sm:text-sm hover:bg-[#FAF8F5] transition-all"
                >
                  <span>Car-Hop Guide</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-lg aspect-[16/10] bg-[#ECE8E1]">
                <iframe
                  title="Jaidi DHA Phase 4 Lahore Map"
                  src="https://maps.google.com/maps?q=DHA%20Phase%204%20Sector%20CCA%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-[1.02]"
                  loading="lazy"
                  aria-label="Google Map of Jaidi DHA Phase 4"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Item Details Modal */}
      {selectedItem && (
        <ItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onVisit={() => onNavigate('visit')}
        />
      )}

    </div>
  );
};
