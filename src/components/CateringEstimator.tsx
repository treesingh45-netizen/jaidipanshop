import React, { useState } from 'react';
import { Sparkles, Phone, Users, Calendar, Check, Send, Calculator, ShieldCheck } from 'lucide-react';

interface CateringEstimatorProps {
  onContactPrefill: (message: string) => void;
}

export const CateringEstimator: React.FC<CateringEstimatorProps> = ({ onContactPrefill }) => {
  const [guests, setGuests] = useState<number>(50);
  const [eventType, setEventType] = useState<string>('Mehndi & Wedding');
  const [selectedPackages, setSelectedPackages] = useState<string[]>([
    'live-paan-bar',
    'fresh-juice-station',
  ]);

  const packageOptions = [
    {
      id: 'live-paan-bar',
      name: 'Live Shahi Paan & Mukhwas Counter',
      desc: 'Master paan artisans crafting fresh Meetha Shahi Paan with edible silver warq, chocolate paan, and exotic mukhwas live for guests.',
      pricePerHead: 220,
    },
    {
      id: 'fresh-juice-station',
      name: 'Cold-Pressed Juice & Mocktail Bar',
      desc: 'Live seasonal fruit pressing (Falsa, Kandahari Pomegranate, Mosambi, Peach Sparkler, Mint Margarita) served in glassware.',
      pricePerHead: 380,
    },
    {
      id: 'falooda-kulfi-counter',
      name: 'Royal Falooda & Shahi Kulfi Station',
      desc: 'Live layered faloodas with dense malai rabri, cornstarch seviyan, rose syrup, and traditional matka kulfis.',
      pricePerHead: 350,
    },
    {
      id: 'desi-chaat-station',
      name: 'Street Savories & Gol Gappay Counter',
      desc: 'Crispy gol gappay with iced khatta-meetha pani, dahi bhallay, and fresh spiced fruit chaat prepared live.',
      pricePerHead: 280,
    },
    {
      id: 'dry-fruit-shake-bar',
      name: 'Premium Dry Fruit Shake & Chai Bar',
      desc: 'Thick khoya badam shakes and piping hot slow-simmered clay matka karak chai for late-night weddings.',
      pricePerHead: 320,
    },
  ];

  const togglePackage = (id: string) => {
    setSelectedPackages((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  // Calculate estimated total
  const perHeadTotal = selectedPackages.reduce((acc, pId) => {
    const pkg = packageOptions.find((p) => p.id === pId);
    return acc + (pkg ? pkg.pricePerHead : 0);
  }, 0);

  const estimatedTotal = guests * perHeadTotal;

  const handleBookInquiry = () => {
    const summary = `Event Catering Inquiry for ${guests} guests (${eventType}). Selected Stations: ${selectedPackages
      .map((id) => packageOptions.find((p) => p.id === id)?.name)
      .join(', ')}. Estimated Quote: Rs. ${estimatedTotal.toLocaleString()}`;
    onContactPrefill(summary);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E7E2DA] p-8 sm:p-12 shadow-sm">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#EFECE6]">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
              Lahore Events & Private Hospitality
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#18181B] tracking-tight">
              Party & Event Catering Planner
            </h3>
            <p className="text-sm text-[#52525B] mt-1 max-w-xl">
              Elevate your Dawat, Mehndi, Corporate Event, or Wedding in Lahore with Jaidi’s signature live counters and uniformed artisans.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#FAF8F5] p-3 rounded-2xl border border-[#E7E2DA] shrink-0">
            <ShieldCheck className="w-5 h-5 text-[#E31B23]" />
            <span className="text-xs font-semibold text-[#18181B]">
              100% Certified Hygiene & Fresh Setup
            </span>
          </div>
        </div>

        {/* Configuration Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-start">
          
          {/* Guest Count & Event Type (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#71717A] block mb-2">
                Expected Guests: <span className="text-base font-bold text-[#18181B] font-mono">{guests}</span>
              </label>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full accent-[#E31B23] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#71717A] mt-1 font-mono">
                <span>20 (Intimate)</span>
                <span>250 (Mehndi)</span>
                <span>1000+ (Grand)</span>
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#71717A] block mb-2">
                Occasion Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] text-sm text-[#18181B] outline-none focus:border-[#E31B23]"
              >
                <option value="Mehndi & Wedding">Mehndi / Barat / Walima</option>
                <option value="Private Dawat / Family Feast">Private Dawat / Family Gathering</option>
                <option value="Corporate Evening / Product Launch">Corporate Gala / Hi-Tea</option>
                <option value="Birthday / Anniversary">Birthday / Anniversary Milestone</option>
              </select>
            </div>

            {/* Live Pricing Summary Box */}
            <div className="p-6 rounded-2xl bg-[#18181B] text-white flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs text-[#A1A1AA]">
                <span>Price Per Head:</span>
                <span className="font-mono text-sm font-semibold text-white">
                  Rs. {perHeadTotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#A1A1AA]">
                <span>Estimated Guest Count:</span>
                <span className="font-mono text-sm font-semibold text-white">
                  {guests} Persons
                </span>
              </div>
              <div className="pt-3 border-t border-[#27272A] flex justify-between items-baseline">
                <span className="text-sm font-medium">Estimated Budget:</span>
                <span className="text-2xl font-serif font-bold text-[#E31B23] font-mono">
                  Rs. {estimatedTotal.toLocaleString()}
                </span>
              </div>
              <p className="text-[11px] text-[#71717A] mt-1">
                *Includes live station setup, uniformed staff, authentic glassware/platters, and all fresh ingredients.
              </p>
            </div>

            <button
              onClick={handleBookInquiry}
              className="w-full py-3.5 px-6 rounded-full bg-[#E31B23] text-white font-semibold text-sm hover:bg-[#C8102E] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Inquire for This Catering Setup</span>
            </button>
          </div>

          {/* Package Selection (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#71717A] block mb-1">
              Select Live Counter Stations:
            </span>
            {packageOptions.map((pkg) => {
              const isSelected = selectedPackages.includes(pkg.id);
              return (
                <div
                  key={pkg.id}
                  onClick={() => togglePackage(pkg.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'border-[#E31B23] bg-[#FAF8F5] shadow-xs'
                      : 'border-[#E7E2DA] bg-white hover:border-[#D4CEC5]'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected ? 'bg-[#E31B23] text-white' : 'border border-[#D4CEC5] bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h4 className="font-serif font-bold text-base text-[#18181B]">
                        {pkg.name}
                      </h4>
                      <span className="font-mono text-xs font-bold text-[#E31B23] shrink-0">
                        +Rs. {pkg.pricePerHead}/head
                      </span>
                    </div>
                    <p className="text-xs text-[#52525B] leading-relaxed">
                      {pkg.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};
