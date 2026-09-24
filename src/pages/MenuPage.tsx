import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/menuData';
import { ItemModal } from '../components/ItemModal';
import {
  Search,
  Sparkles,
  X,
  ChevronRight,
  SlidersHorizontal,
  MapPin,
  Phone,
  Filter,
  Flame,
  Citrus,
  Coffee,
  Check,
  Plus,
  ShoppingBag,
} from 'lucide-react';

interface MenuPageProps {
  initialCategory?: string;
  onNavigate: (page: string) => void;
  onAddToCart?: (item: MenuItem) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ initialCategory, onNavigate, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'popular' | 'signature' | 'under500'>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [addedToast, setAddedToast] = useState<string | null>(null);

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

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;

      // Filter match
      let filterMatch = true;
      if (activeFilter === 'popular') filterMatch = !!item.isPopular;
      if (activeFilter === 'signature') filterMatch = !!item.isSignature;
      if (activeFilter === 'under500') filterMatch = item.price <= 450;

      // Search match
      const searchMatch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.origin && item.origin.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      return categoryMatch && filterMatch && searchMatch;
    });
  }, [selectedCategory, activeFilter, searchQuery]);

  return (
    <div className="flex flex-col w-full bg-[#FAF8F5] min-h-screen">
      
      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#18181B] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200 border border-white/20">
          <Check className="w-4 h-4 text-[#E31B23]" />
          <span className="text-sm font-medium">{addedToast}</span>
        </div>
      )}

      {/* 1. EDITORIAL HEADER */}
      <section className="bg-white border-b border-[#E7E2DA] pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
                DHA Phase 4 Culinary Archive
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#18181B] tracking-tight">
                The Jaidi Signature Menu
              </h1>
              <p className="text-base text-[#52525B] mt-2 max-w-xl">
                Freshly pressed juices, artisanal dry-fruit shakes, Lahore royal desserts, crispy street savories, and traditional Mughal paan crafted fresh daily.
              </p>
            </div>

            {/* In-Store Callout */}
            <div className="flex items-center gap-3.5 text-xs bg-[#FAF8F5] p-4 rounded-2xl border border-[#E7E2DA]">
              <MapPin className="w-5 h-5 text-[#E31B23] shrink-0" />
              <div>
                <span className="font-bold text-[#18181B] block">Available Daily in Sector CCA</span>
                <span className="text-[#71717A]">Car-hop service & outdoor terrace open till 2:30 AM</span>
              </div>
            </div>
          </div>

          {/* Search & Quick Filter Controls */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#71717A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search mango shake, royal falooda, gol gappay, falsa..."
                className="w-full pl-10 pr-9 py-2.5 bg-[#FAF8F5] border border-[#E7E2DA] focus:border-[#E31B23] rounded-xl text-sm text-[#18181B] placeholder-[#A1A1AA] outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#71717A] hover:text-[#18181B]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Segmented Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#FAF8F5] border border-[#E7E2DA] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-white text-[#18181B] shadow-xs font-bold'
                    : 'text-[#71717A] hover:text-[#18181B]'
                }`}
              >
                All Items ({MENU_ITEMS.length})
              </button>
              <button
                onClick={() => setActiveFilter('popular')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === 'popular'
                    ? 'bg-white text-[#18181B] shadow-xs font-bold'
                    : 'text-[#71717A] hover:text-[#18181B]'
                }`}
              >
                Most Popular
              </button>
              <button
                onClick={() => setActiveFilter('signature')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === 'signature'
                    ? 'bg-white text-[#18181B] shadow-xs font-bold'
                    : 'text-[#71717A] hover:text-[#18181B]'
                }`}
              >
                Jaidi Signature
              </button>
              <button
                onClick={() => setActiveFilter('under500')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === 'under500'
                    ? 'bg-white text-[#18181B] shadow-xs font-bold'
                    : 'text-[#71717A] hover:text-[#18181B]'
                }`}
              >
                Under Rs. 450
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY HORIZONTAL SELECTOR BAR */}
      <div className="sticky top-20 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E2DA] py-3 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#E31B23] text-white shadow-xs font-bold'
                : 'bg-white text-[#52525B] hover:text-[#18181B] border border-[#E7E2DA]'
            }`}
          >
            All Categories ({MENU_ITEMS.length})
          </button>
          {MENU_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = MENU_ITEMS.filter((item) => item.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#E31B23] text-white shadow-xs font-bold'
                    : 'bg-white text-[#52525B] hover:text-[#18181B] border border-[#E7E2DA]'
                }`}
              >
                {cat.name} {count > 0 && <span className="opacity-75">({count})</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. MENU ITEMS GRID */}
      <section className="py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Active Category Meta */}
          <div className="mb-8 flex items-baseline justify-between border-b border-[#E7E2DA] pb-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#18181B]">
                {selectedCategory === 'all'
                  ? 'Complete Refreshment & Culinary Index'
                  : MENU_CATEGORIES.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-xs text-[#71717A] mt-1 max-w-2xl">
                {selectedCategory === 'all'
                  ? 'Showing our complete menu crafted fresh to order in Sector CCA, DHA Phase 4, Lahore'
                  : MENU_CATEGORIES.find((c) => c.id === selectedCategory)?.story}
              </p>
            </div>
            <span className="text-xs font-mono text-[#71717A] tabular-nums font-bold">
              {filteredItems.length} items
            </span>
          </div>

          {/* Product Cards */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-[#E7E2DA]">
              <p className="text-base text-[#52525B] mb-4">
                No items match your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setActiveFilter('all');
                }}
                className="px-6 py-3 rounded-full bg-[#18181B] text-white text-xs font-bold hover:bg-black transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#E7E2DA] hover:border-[#D4CEC5] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECE8E1]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 bg-white/95 text-[#18181B] rounded-full shadow-xs">
                        {item.category.replace('-', ' ')}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 flex items-center gap-1">
                      {item.isPopular && (
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-[#E31B23] text-white rounded-full shadow-xs">
                          Popular
                        </span>
                      )}
                      {item.isSignature && (
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-[#18181B] text-white rounded-full shadow-xs flex items-center gap-0.5">
                          <Sparkles className="w-2.5 h-2.5 text-[#FFB800]" /> Signature
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <h3 className="font-serif font-bold text-lg text-[#18181B] group-hover:text-[#E31B23] transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <span className="font-mono font-bold text-base text-[#18181B] tabular-nums shrink-0">
                          Rs. {item.price}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {item.origin && (
                      <div className="text-[11px] text-[#71717A] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23]" />
                        <span>Origin: {item.origin}</span>
                      </div>
                    )}

                    {/* Action & Add to Cart */}
                    <div className="pt-3 border-t border-[#F4F1EB] flex items-center justify-between">
                      <button
                        onClick={(e) => handleAddItem(item, e)}
                        className="px-4 py-2 rounded-full bg-[#E31B23] hover:bg-[#C8102E] text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Bag</span>
                      </button>

                      <span className="inline-flex items-center gap-1 font-bold text-xs text-[#71717A] group-hover:text-[#E31B23] group-hover:translate-x-0.5 transition-all">
                        Details <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Discovery Note */}
          <div className="mt-16 p-8 rounded-3xl bg-white border border-[#E7E2DA] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xs">
            <div>
              <h3 className="font-serif font-bold text-xl text-[#18181B]">
                Planning a family dessert night or group gathering?
              </h3>
              <p className="text-sm text-[#52525B] mt-1">
                Call ahead for car-side pickup or visit our counter in Sector CCA, DHA Phase 4.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:03014002475"
                className="px-6 py-3 rounded-full bg-[#E31B23] text-white text-xs font-bold hover:bg-[#C8102E] transition-colors flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 0301 4002475</span>
              </a>
              <button
                onClick={() => onNavigate('visit')}
                className="px-6 py-3 rounded-full border border-[#D4CEC5] text-[#18181B] text-xs font-bold hover:bg-[#FAF8F5] transition-colors cursor-pointer"
              >
                Get Directions
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Item Modal */}
      {selectedItem && (
        <ItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onVisit={() => onNavigate('visit')}
          onAddToCart={onAddToCart}
        />
      )}
    </div>
  );
};
