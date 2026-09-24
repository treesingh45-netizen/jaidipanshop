import React, { useState } from 'react';
import { MenuItem } from '../data/menuData';
import { X, Sparkles, MapPin, Phone, Check, Clock, Flame, Info, Heart, Plus, Minus, ShoppingBag } from 'lucide-react';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onVisit: () => void;
  onAddToCart?: (item: MenuItem, quantity?: number) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onVisit, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!item) return null;

  const handleAdd = () => {
    if (onAddToCart) {
      for (let i = 0; i < quantity; i++) {
        onAddToCart(item);
      }
      setAddedSuccess(true);
      setTimeout(() => {
        setAddedSuccess(false);
        onClose();
      }, 1200);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#E7E2DA] relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 text-[#18181B] hover:bg-white hover:text-[#E31B23] flex items-center justify-center shadow-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Modal Hero Image */}
          <div className="relative h-72 w-full bg-[#18181B] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-xs font-medium text-white/80 mb-1.5">
                <span className="uppercase tracking-wider font-semibold text-[#FFB800]">
                  {item.category.replace('-', ' ')}
                </span>
                {item.origin && (
                  <>
                    <span>·</span>
                    <span className="text-white/90">{item.origin}</span>
                  </>
                )}
                {item.isSignature && (
                  <>
                    <span>·</span>
                    <span className="text-[#FF4A52] flex items-center gap-1 font-semibold">
                      <Sparkles className="w-3 h-3" /> Signature
                    </span>
                  </>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                {item.name}
              </h3>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            
            {/* Price & Meta Bar */}
            <div className="flex items-baseline justify-between border-b border-[#EFECE6] pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#71717A] font-semibold block">
                  Price per Serving
                </span>
                <span className="text-3xl font-bold text-[#E31B23] font-mono tabular-nums">
                  Rs. {item.price}
                </span>
              </div>

              {item.calories && (
                <div className="text-right">
                  <span className="text-xs uppercase tracking-wider text-[#71717A] font-semibold block">
                    Energy
                  </span>
                  <span className="text-sm font-semibold text-[#18181B] font-mono">
                    {item.calories}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#71717A] mb-1.5 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#E31B23]" /> Flavor Profile & Preparation
              </h4>
              <p className="text-base text-[#27272A] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Taste Profile Meters */}
            {item.tasteProfile && (
              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E7E2DA] flex flex-col gap-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#18181B]">
                  Taste & Intensity Index
                </span>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2 bg-white rounded-xl border border-[#E7E2DA]">
                    <span className="text-[10px] text-[#71717A] uppercase font-bold block mb-1">
                      Sweetness
                    </span>
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`w-2.5 h-2.5 rounded-full ${
                            level <= item.tasteProfile!.sweetness
                              ? 'bg-[#E31B23]'
                              : 'bg-[#E7E2DA]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-2 bg-white rounded-xl border border-[#E7E2DA]">
                    <span className="text-[10px] text-[#71717A] uppercase font-bold block mb-1">
                      Richness
                    </span>
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`w-2.5 h-2.5 rounded-full ${
                            level <= item.tasteProfile!.richness
                              ? 'bg-[#E31B23]'
                              : 'bg-[#E7E2DA]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-2 bg-white rounded-xl border border-[#E7E2DA]">
                    <span className="text-[10px] text-[#71717A] uppercase font-bold block mb-1">
                      Chill Factor
                    </span>
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`w-2.5 h-2.5 rounded-full ${
                            level <= item.tasteProfile!.chillFactor
                              ? 'bg-[#18181B]'
                              : 'bg-[#E7E2DA]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Ingredients */}
            {item.ingredients && item.ingredients.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#71717A] mb-2">
                  Key Whole Ingredients:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#FAF8F5] text-[#27272A] border border-[#E7E2DA] px-3 py-1 rounded-full font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Customizations */}
            {item.customizations && item.customizations.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#71717A] mb-1.5">
                  Available In-Store Customizations:
                </h4>
                <ul className="text-xs text-[#52525B] flex flex-col gap-1">
                  {item.customizations.map((cust, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E31B23]" />
                      <span>{cust}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity Selector & Add to Bag */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#18181B]">Quantity:</span>
                <div className="flex items-center border border-[#E7E2DA] bg-white rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-[#71717A] hover:text-[#18181B] hover:bg-[#FAF8F5] cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-bold font-mono text-[#18181B]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-[#71717A] hover:text-[#18181B] hover:bg-[#FAF8F5] cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className={`w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                  addedSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#E31B23] hover:bg-[#C8102E] text-white'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added {quantity} to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag · Rs. {item.price * quantity}</span>
                  </>
                )}
              </button>
            </div>

            {/* Action Row */}
            <div className="pt-2 border-t border-[#EFECE6] flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onVisit();
                }}
                className="flex-1 py-3.5 px-5 rounded-full bg-[#18181B] text-white font-semibold text-xs sm:text-sm hover:bg-black transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit Us in Sector CCA, DHA 4</span>
              </button>
              <a
                href="tel:03014002475"
                className="py-3.5 px-5 rounded-full border border-[#D4CEC5] text-[#18181B] font-semibold text-xs sm:text-sm hover:bg-[#FAF8F5] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#E31B23]" />
                <span>Call 0301 4002475</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
