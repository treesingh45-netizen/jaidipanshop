import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '../data/menuData';
import { Sparkles, ArrowRight, RotateCcw, Check, Flame, ShieldAlert, Heart, Sun, Moon } from 'lucide-react';

interface CravingQuizProps {
  onSelectItem: (item: MenuItem) => void;
  onNavigateMenu: (category?: string) => void;
}

export const CravingQuiz: React.FC<CravingQuizProps> = ({ onSelectItem, onNavigateMenu }) => {
  const [step, setStep] = useState<number>(1);
  const [mood, setMood] = useState<string>('');
  const [taste, setTaste] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const moodOptions = [
    { id: 'refresh', label: 'Thirst Quenching & Cooling', desc: 'Light, fruity, sub-zero cold', icon: Sun },
    { id: 'indulge', label: 'Sweet & Creamy Indulgence', desc: 'Thick dairy, rich nuts, velvety', icon: Heart },
    { id: 'desi-street', label: 'Spicy & Savory Desi Street Food', desc: 'Crispy, tangy, burst of chutneys', icon: Flame },
    { id: 'midnight', label: 'Late-Night Traditional Socializing', desc: 'Aromatic paan, hot karak chai or falooda', icon: Moon },
  ];

  const tasteOptions = [
    { id: 'fruity-tangy', label: 'Tangy & Fruity', tag: 'Tart, Citrus, Berry' },
    { id: 'rich-nutty', label: 'Nutty & Khoya Rich', tag: 'Almonds, Pistachio, Saffron' },
    { id: 'sweet-floral', label: 'Sweet & Floral', tag: 'Rose, Falooda, Gulkand' },
    { id: 'spicy-crisp', label: 'Crispy & Spiced', tag: 'Chaat Masala, Tamarind' },
  ];

  const timeOptions = [
    { id: 'afternoon', label: 'Sunny Afternoon Rush', tag: 'Need instant hydration' },
    { id: 'post-dinner', label: 'After-Dinner Sweet Treat', tag: 'The classic Lahori dessert ritual' },
    { id: 'midnight', label: 'Midnight Car-Hop Cravings', tag: 'Sitting in the car chatting with friends' },
  ];

  const handleReset = () => {
    setStep(1);
    setMood('');
    setTaste('');
    setTime('');
  };

  // Determine recommended items based on choices
  const getRecommendations = (): MenuItem[] => {
    if (mood === 'refresh') {
      return MENU_ITEMS.filter((i) => i.category === 'fresh-juices' || i.category === 'jaidi-cocktails').slice(0, 3);
    }
    if (mood === 'indulge') {
      return MENU_ITEMS.filter((i) => i.category === 'jaidi-shakes' || i.category === 'milkshakes' || i.category === 'ice-cream-shakes').slice(0, 3);
    }
    if (mood === 'desi-street') {
      return MENU_ITEMS.filter((i) => i.category === 'savories' || i.category === 'salads').slice(0, 3);
    }
    return MENU_ITEMS.filter((i) => i.category === 'gola-falooda' || i.category === 'paan-specials' || i.category === 'tea-coffee').slice(0, 3);
  };

  const recommendations = getRecommendations();

  return (
    <div className="bg-[#18181B] text-white rounded-3xl p-8 sm:p-12 border border-[#27272A] shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E31B23]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E31B23] inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Taste Matcher
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            What Are You Craving Tonight?
          </h3>
          <p className="text-sm text-[#A1A1AA] mt-2 max-w-lg mx-auto">
            Answer 3 quick preferences and let our Lahore culinary curators match you with the perfect drink or dessert.
          </p>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step === s
                    ? 'w-10 bg-[#E31B23]'
                    : step > s
                    ? 'w-4 bg-[#52525B]'
                    : 'w-4 bg-[#27272A]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step 1: Mood */}
        {step === 1 && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-300">
            <span className="text-xs font-mono uppercase tracking-widest text-[#71717A] text-center">
              Step 1 of 3: Select Your Mood
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {moodOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setMood(opt.id);
                      setStep(2);
                    }}
                    className="p-5 rounded-2xl bg-[#242428] border border-[#3F3F46] hover:border-[#E31B23] hover:bg-[#2D2D32] transition-all text-left flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#18181B] text-[#E31B23] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#71717A] group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-base mb-1 group-hover:text-[#E31B23] transition-colors">
                        {opt.label}
                      </h4>
                      <p className="text-xs text-[#A1A1AA]">{opt.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Flavor Profile */}
        {step === 2 && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-300">
            <span className="text-xs font-mono uppercase tracking-widest text-[#71717A] text-center">
              Step 2 of 3: Choose Your Flavor Profile
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tasteOptions.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTaste(t.id);
                    setStep(3);
                  }}
                  className="p-5 rounded-2xl bg-[#242428] border border-[#3F3F46] hover:border-[#E31B23] hover:bg-[#2D2D32] transition-all text-left flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#E31B23] uppercase font-bold tracking-wider">
                      {t.tag}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#71717A] group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="font-semibold text-white text-base group-hover:text-[#E31B23] transition-colors">
                    {t.label}
                  </h4>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-xs text-[#A1A1AA] hover:text-white mt-2 text-center"
            >
              ← Back to Mood
            </button>
          </div>
        )}

        {/* Step 3: Time / Setting */}
        {step === 3 && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-300">
            <span className="text-xs font-mono uppercase tracking-widest text-[#71717A] text-center">
              Step 3 of 3: When Are You Visiting?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {timeOptions.map((tm) => (
                <button
                  key={tm.id}
                  onClick={() => {
                    setTime(tm.id);
                    setStep(4);
                  }}
                  className="p-5 rounded-2xl bg-[#242428] border border-[#3F3F46] hover:border-[#E31B23] hover:bg-[#2D2D32] transition-all text-left flex flex-col justify-between group"
                >
                  <span className="text-[11px] text-[#A1A1AA] mb-2">{tm.tag}</span>
                  <h4 className="font-semibold text-white text-sm group-hover:text-[#E31B23] transition-colors">
                    {tm.label}
                  </h4>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="text-xs text-[#A1A1AA] hover:text-white mt-2 text-center"
            >
              ← Back to Flavor
            </button>
          </div>
        )}

        {/* Step 4: Results Showcase */}
        {step === 4 && (
          <div className="flex flex-col gap-6 animate-in zoom-in-95 duration-300">
            <div className="text-center">
              <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-1">
                Curated Recommendations
              </span>
              <h4 className="text-2xl font-serif font-bold text-white">
                Your Custom Jaidi Pairings
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  className="bg-[#242428] border border-[#3F3F46] hover:border-[#E31B23] rounded-2xl p-4 flex flex-col justify-between cursor-pointer transition-all hover:-translate-y-1 group"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-[#18181B]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-2 right-2 bg-[#E31B23] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Match
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between gap-1 mb-1">
                      <h5 className="font-serif font-bold text-sm text-white group-hover:text-[#E31B23] transition-colors line-clamp-1">
                        {item.name}
                      </h5>
                      <span className="font-mono text-xs font-bold text-[#E31B23]">
                        Rs.{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#3F3F46] mt-3 flex items-center justify-between text-[11px] text-[#A1A1AA]">
                    <span>Tap to view notes</span>
                    <span className="text-[#E31B23] font-bold">Details →</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-[#27272A]">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#A1A1AA] hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Taste Quiz</span>
              </button>
              <button
                onClick={() => onNavigateMenu()}
                className="px-6 py-2.5 rounded-full bg-[#E31B23] text-white text-xs font-semibold hover:bg-[#C8102E] transition-colors"
              >
                View Complete 60+ Item Menu
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
