import React from 'react';
import { IMAGES } from '../data/assets';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Car,
  UtensilsCrossed,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Heart,
  Users,
  Compass,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

interface VisitPageProps {
  onNavigate: (page: string, category?: string) => void;
}

export const VisitPage: React.FC<VisitPageProps> = ({ onNavigate }) => {
  const directionsFrom = [
    {
      from: 'From DHA Phase 5 / Phase 6',
      route: 'Head down Ghazi Road or DHA Main Boulevard, take the Sector CCA underpass/turn directly into the central commercial concourse.',
      time: '6–8 mins',
    },
    {
      from: 'From Lahore Ring Road (L-20)',
      route: 'Take the DHA Phase 4 Interchange exit, continue 2 km straight on Sector CCA Boulevard.',
      time: '5 mins from exit',
    },
    {
      from: 'From Gulberg / Main Boulevard',
      route: 'Via Cavalry Ground and DHA Main Boulevard into Phase 4 Sector CCA commercial market.',
      time: '12–15 mins',
    },
    {
      from: 'From Lahore Cantt / Mall Road',
      route: 'Head through RA Bazaar towards Ghazi Road into DHA Phase 4 Sector CCA.',
      time: '10–12 mins',
    },
  ];

  const carHopSteps = [
    {
      step: '01',
      title: 'Pull Up into Sector CCA',
      desc: 'Drive into the Sector CCA commercial plaza concourse; ample roadside parking lanes are available.',
    },
    {
      step: '02',
      title: 'Attendant at Your Window',
      desc: 'Our uniformed car-hop service host will arrive with a laminated physical menu or QR code card.',
    },
    {
      step: '03',
      title: 'Freshly Prepared & Delivered',
      desc: 'Drinks and desserts are prepared immediately and delivered in custom cup trays with clean napkins.',
    },
  ];

  const visualGuides = [
    {
      title: 'Prime Location & Access',
      desc: 'Prime location in Sector CCA, DHA Phase 4 with convenient roadside parking and seamless car-hop service.',
      icon: MapPin,
      highlight: 'Sector CCA, DHA 4',
    },
    {
      title: 'Food & Fresh Drinks',
      desc: '100% pure seasonal cold-pressed juices, thick mango & dry-fruit shakes, and spicy Lahori chaats made fresh to order.',
      icon: UtensilsCrossed,
      highlight: 'Freshly Prepared',
    },
    {
      title: 'Royal Desserts & Sweets',
      desc: 'Royal falooda layered with rich rabri and kulfi, followed by signature meetha paan rolled in silver leaf.',
      icon: Sparkles,
      highlight: 'Lahori Heritage',
    },
    {
      title: 'Social Evening Culture',
      desc: 'An iconic open-air Lahore social ritual enjoyed with friends and family late into the evening.',
      icon: Users,
      highlight: 'Open Till 2:30 AM',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#FAF8F5] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-[#E7E2DA] pt-16 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
            Welcome to Lahore’s Refreshment Destination
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#18181B] tracking-tight mb-4">
            Find Your Way to Jaidi
          </h1>
          <p className="text-base sm:text-lg text-[#52525B] max-w-2xl mx-auto">
            Located in Sector CCA, DHA Phase 4, Lahore. Join us for freshly pressed juices, handcrafted royal desserts, and an authentic evening vibe.
          </p>

          {/* Quick Action Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://maps.google.com/?q=Jaidi+DHA+Phase+4+Sector+CCA+Lahore"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#E31B23] text-white text-xs uppercase tracking-wider font-bold hover:bg-[#C8102E] transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>
            <a
              href="tel:03014002475"
              className="px-7 py-3.5 rounded-full bg-white border border-[#D4CEC5] text-[#18181B] text-xs uppercase tracking-wider font-bold hover:bg-[#FAF8F5] transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E31B23]" />
              <span>Call Counter: 0301 4002475</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. LARGE EMBEDDED MAP & LOCATION OVERVIEW */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Frame (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#E7E2DA] shadow-md min-h-[440px] relative">
            <iframe
              title="Jaidi DHA Phase 4 Map"
              src="https://maps.google.com/maps?q=DHA%20Phase%204%20Sector%20CCA%20Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[440px] border-0 filter contrast-[1.03]"
              loading="lazy"
              aria-label="Google Map location of Jaidi DHA Phase 4"
            />
          </div>

          {/* Location Information Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E7E2DA] p-8 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-1">
                  Location Information
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#18181B]">
                  Jaidi Pan Shop
                </h3>
                <p className="text-sm text-[#71717A] mt-0.5">
                  Juices, Shakes, Desserts & Traditional Refreshments
                </p>
              </div>

              <div className="flex flex-col gap-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#E31B23] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#18181B] block">Full Address</span>
                    <span className="text-[#52525B]">
                      DHA Phase 4, Sector CCA, Lahore, Punjab, Pakistan
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#E31B23] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#18181B] block">Direct Contact / Inquiries</span>
                    <a href="tel:03014002475" className="text-[#52525B] font-mono hover:text-[#E31B23] text-base font-bold">
                      0301 4002475
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#E31B23] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#18181B] block">Operating Hours</span>
                    <span className="text-[#52525B]">
                      Monday – Sunday: 12:00 PM – 02:30 AM
                    </span>
                    <span className="text-xs text-[#10B981] font-bold block mt-0.5">
                      ● Active late-night service daily
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Car className="w-5 h-5 text-[#E31B23] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#18181B] block">Service Style</span>
                    <span className="text-[#52525B]">
                      Dedicated car-hop takeaway concourse & open-air evening seating.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EFECE6] mt-6 flex gap-3">
              <a
                href="https://maps.google.com/?q=Jaidi+DHA+Phase+4+Sector+CCA+Lahore"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 px-4 rounded-full bg-[#E31B23] text-white text-xs font-bold text-center hover:bg-[#C8102E] transition-colors shadow-xs"
              >
                Open in Google Maps
              </a>
              <a
                href="tel:03014002475"
                className="py-3.5 px-5 rounded-full border border-[#D4CEC5] text-[#18181B] text-xs font-bold text-center hover:bg-[#FAF8F5] transition-colors"
              >
                Call
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CAR-HOP CONCIERGE PROTOCOL */}
      <section className="py-16 bg-white border-y border-[#E7E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
              Effortless Hospitality
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#18181B] tracking-tight">
              The Sector CCA Car-Hop Experience
            </h2>
            <p className="text-base text-[#52525B] mt-2">
              Enjoy Lahore’s finest refreshments from the comfort of your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carHopSteps.map((ch, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E7E2DA] flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-serif font-bold text-[#E31B23] font-mono block mb-3">
                    {ch.step}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#18181B] mb-2">
                    {ch.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIRECTIONS FROM AROUND LAHORE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
            Navigation Guide
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#18181B] tracking-tight">
            Getting Here From Across Lahore
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {directionsFrom.map((dir, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-[#E7E2DA] flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold font-serif text-lg text-[#18181B]">
                    {dir.from}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#E31B23] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#E7E2DA]">
                    {dir.time}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  {dir.route}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. VISUAL GUIDE (4 CARDS) */}
      <section className="py-16 bg-white border-t border-[#E7E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
              At a Glance
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#18181B] tracking-tight">
              A Complete Guide to Your Visit
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visualGuides.map((guide, idx) => {
              const IconComp = guide.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#E7E2DA] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E2DA] flex items-center justify-center text-[#E31B23] mb-4 shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#E31B23] block mb-1">
                      {guide.highlight}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#18181B] mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-[#52525B] leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
