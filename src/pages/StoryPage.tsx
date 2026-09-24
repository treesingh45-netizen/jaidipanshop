import React from 'react';
import { IMAGES } from '../data/assets';
import {
  ArrowRight,
  Sparkles,
  Heart,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  MapPin,
  Clock,
  Award,
  Users,
  Utensils,
  Droplets,
  Car,
  BadgeCheck,
  Flame,
  Star,
  Phone,
} from 'lucide-react';

interface StoryPageProps {
  onNavigate: (page: string) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate }) => {
  const brandValues = [
    {
      number: '01',
      title: 'Uncompromising Purity (Khalis Maal)',
      desc: 'We never compromise with artificial essences, commercial drink powders, or chemically boosted syrups. If a fruit is out of season, we wait for nature rather than serving synthetic replicas.',
    },
    {
      number: '02',
      title: 'Lahori Mehmaan-Nawazi (Generous Hospitality)',
      desc: 'To us, every guest pulling up to our Sector CCA concourse is family. We serve generously, welcome warmly, and ensure your refreshments are delivered right to your car window with genuine care.',
    },
    {
      number: '03',
      title: 'Living Mughal Betel & Confectionery Heritage',
      desc: 'We protect centuries-old Lahori craftsmanship — from folding royal Maghai leaves with Damask rose gulkand and edible silver warq to slow-simmering buffalo milk into dense malai rabri.',
    },
    {
      number: '04',
      title: 'Hygienic Transparency & Crystal RO Ice',
      desc: 'Our counters are open, polished stainless steel. Every cube of crushed ice is made on-premises using multi-stage reverse-osmosis purified water, guaranteeing cleanliness you can trust.',
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Muhammad Tariq',
      role: 'Founder & Managing Overseer',
      experience: '20+ Years in Food & Hospitality',
      focus: 'Brand stewardship, daily fruit auction inspections, recipe consistency, and customer warmth.',
      badge: 'Founder',
    },
    {
      id: 2,
      name: 'Ustad Rafique',
      role: 'Master Betel Leaf Craftsman (Paan Ustad)',
      experience: '18 Years of Betel Artistry',
      focus: 'Selecting tender Maghai/Banarasi leaves, traditional Damask gulkand blends, and delicate 99.9% chandi warq layering.',
      badge: 'Master Artisan',
    },
    {
      id: 3,
      name: 'Hamza Tariq',
      role: 'Operations & Farm Sourcing Lead',
      experience: '8 Years in Agricultural Sourcing',
      focus: 'Direct ties with Multan Chaunsa growers, Swat valley plum orchards, and Kandahari ruby pomegranate imports.',
      badge: 'Supply Chain',
    },
    {
      id: 4,
      name: 'Babar Ali',
      role: 'Head Cold-Press & Juice Blender',
      experience: '10 Years in Beverage Crafting',
      focus: 'Managing high-output live juicing stations, zero-sugar citrus presses, and signature crushed falsa bowls.',
      badge: 'Master Blender',
    },
    {
      id: 5,
      name: 'Zeeshan Rasheed',
      role: 'Royal Falooda & Khoya Confectioner',
      experience: '12 Years in Desi Dairy Sweets',
      focus: 'Slow-reducing farm-fresh buffalo milk into velvety rabri, pressing chilled cornstarch seviyan, and authentic kulfi.',
      badge: 'Dessert Craftsman',
    },
    {
      id: 6,
      name: 'Khurram Shahzad',
      role: 'Desi Savories & Chaat Specialist',
      experience: '9 Years in Lahori Street Cuisine',
      focus: 'Frying ultra-crisp semolina puris for gol gappay, crafting chilled tamarind-mint water, and spiced fruit chaat bowls.',
      badge: 'Savory Lead',
    },
    {
      id: 7,
      name: 'Danish & Farhan',
      role: 'Senior Car-Hop & Concourse Attendants',
      experience: 'Frontline Guest Service',
      focus: 'Prompt curbside greeting, car-window delivery with secure beverage trays, and late-night order coordination till 2:30 AM.',
      badge: 'Guest Experience',
    },
    {
      id: 8,
      name: 'Naveed Akhtar',
      role: 'Sanitation & Reverse-Osmosis Plant Lead',
      experience: '6 Years in Food Safety & Plant Systems',
      focus: 'Daily operation of multi-stage RO water systems, ice sanitation, stainless steel counter sterilization, and quality audits.',
      badge: 'Quality & Safety',
    },
  ];

  const dailyRituals = [
    {
      time: '07:00 AM',
      title: 'Dawn Farm & Market Selection',
      desc: 'Muhammad Tariq and Hamza personally inspect crates of fresh morning fruits arriving in Lahore, accepting only peak-ripeness produce.',
    },
    {
      time: '11:00 AM',
      title: 'The Slow Dairy Simmer',
      desc: 'Whole buffalo milk is heated slowly in heavy-bottomed pans, gently reduced over hours to form the thick, fragrant rabri layers for our falooda.',
    },
    {
      time: '04:00 PM',
      title: 'Paan Leaf Conditioning & Counter Prep',
      desc: 'Fresh Maghai leaves are washed, trimmed, and conditioned in cool, humid chambers alongside freshly prepared organic gulkand and roasted saunf.',
    },
    {
      time: '08:00 PM – 02:30 AM',
      title: 'Peak Car-Hop & Concourse Vitality',
      desc: 'The entire 8-member squad operates in synchrony as families, couples, and friends gather outside Sector CCA for late-night Lahori refreshments.',
    },
  ];

  const comparisonTable = [
    {
      feature: 'Fruit Sourcing & Juicing',
      jaidi: '100% fresh whole fruits hand-picked daily from Multan, Swat, and Kandahar. Zero synthetic powders.',
      others: 'Powdered concentrates, pre-mixed synthetic syrups, or artificial coloring.',
    },
    {
      feature: 'Rabri & Dairy Foundation',
      jaidi: 'Pure buffalo milk slow-simmered for 4+ hours with green cardamom and saffron.',
      others: 'Commercial milk powders thickened with cornflour and synthetic vanilla essence.',
    },
    {
      feature: 'Paan Quality & Hygiene',
      jaidi: 'Tender Banarasi/Maghai leaves with Damask rose petal gulkand & genuine 99.9% silver warq.',
      others: 'Artificial chemical essences, colored chew additives, and industrial tobacco blends.',
    },
    {
      feature: 'Ice & Water Purity',
      jaidi: 'Food-grade crystal ice manufactured on-site with multi-stage Reverse Osmosis filtration.',
      others: 'Standard commercial slab ice often dragged or handled without sanitary protection.',
    },
    {
      feature: 'Service & Car-Hop',
      jaidi: 'Dedicated concourse staff in DHA Phase 4 serving drinks in your vehicle with custom spill-proof trays.',
      others: 'Congested street counters with slow service and chaotic parking.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#FAF8F5]">
      
      {/* ============================================================ */}
      {/* 1. EDITORIAL HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative py-28 sm:py-36 bg-[#18181B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.atmosphere}
            alt="Jaidi brand heritage and atmosphere"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-[#18181B]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#E31B23] mb-4 inline-block bg-white/10 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
            The Heritage & The People
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
            The Story Behind{' '}
            <span className="italic font-normal text-[#FAF8F5]">Jaidi</span>
          </h1>
          <p className="text-base sm:text-xl text-[#D4CEC5] font-light leading-relaxed max-w-2xl mx-auto text-balance">
            How founder Muhammad Tariq and an 8-member family of dedicated artisans turned a passion for real fruit and Mughal betel craft into DHA Phase 4’s favorite evening sanctuary.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. FOUNDER & OWNER SPOTLIGHT (MUHAMMAD TARIQ) */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] border border-[#E7E2DA] p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Owner Visual Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-[#18181B] border-4 border-white">
                <img
                  src={IMAGES.owner}
                  alt="Muhammad Tariq - Owner & Founder of Jaidi Pan Shop"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E31B23] bg-white px-2.5 py-1 rounded-full inline-block mb-1">
                    Founder & Visionary
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white">Muhammad Tariq</h3>
                  <p className="text-xs text-[#D4CEC5] mt-0.5">Owner, Jaidi Pan Shop & Refreshments</p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#52525B]">
                <BadgeCheck className="w-4 h-4 text-emerald-600" />
                <span>Operating Daily at Sector CCA, DHA Phase 4, Lahore</span>
              </div>
            </div>

            {/* Owner Narrative Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
                  Meet The Founder
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#18181B] tracking-tight">
                  “Purity is not a feature; it is our only promise.”
                </h2>
              </div>

              <blockquote className="font-serif italic text-lg sm:text-xl text-[#3F3F46] border-l-4 border-[#E31B23] pl-5 py-1 bg-[#FAF8F5] rounded-r-2xl">
                “When I started Jaidi, I noticed that Lahore’s juice and paan culture was slowly losing its soul to artificial syrups, synthetic sweeteners, and rushed preparations. I wanted to build a place where families and friends can experience the true, unadulterated sweetness of nature—just like our elders enjoyed.”
              </blockquote>

              <div className="space-y-4 text-sm text-[#52525B] leading-relaxed">
                <p>
                  Under Muhammad Tariq’s direct supervision, Jaidi in Sector CCA, DHA Phase 4 has grown into a beloved culinary landmark. Tariq still begins his mornings inspecting the day’s fruit arrivals—personally rejecting any crate that does not meet his standards for natural aroma, color, and sugar content.
                </p>
                <p>
                  Alongside his 8 dedicated team members, he maintains a culture where every customer who rolls down their car window is treated with genuine warmth and respect.
                </p>
              </div>

              {/* Direct Contact / Inquiry Pill */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="tel:03014002475"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E31B23] text-white font-bold text-xs hover:bg-[#C8102E] transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Muhammad Tariq’s Team: 0301 4002475</span>
                </a>
                <span className="text-xs text-[#71717A]">
                  Open 7 Days a Week (12:00 PM – 02:30 AM)
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CORE PHILOSOPHY & 4 BRAND VALUES */}
      {/* ============================================================ */}
      <section className="py-20 bg-white border-y border-[#E7E2DA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
              Our Core Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#18181B] tracking-tight">
              Fitrat Ki Khalis Lazat
            </h2>
            <p className="text-base text-[#52525B] mt-3">
              Four timeless pillars that guide every fruit squeezed, every betel leaf folded, and every guest served.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E7E2DA] flex flex-col justify-between hover:border-[#D4CEC5] hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-bold text-[#E31B23] font-mono">
                      {val.number}
                    </span>
                    <Sparkles className="w-5 h-5 text-[#E31B23]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#18181B] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. THE 8-MEMBER ARTISANAL TEAM */}
      {/* ============================================================ */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
            The Artisans Behind The Magic
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#18181B] tracking-tight">
            Our 8 Dedicated Team Members
          </h2>
          <p className="text-base text-[#52525B] mt-2">
            Every drink, falooda bowl, and shahi paan is crafted with mastery by our specialized 8-person crew in DHA Phase 4.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl p-6 border border-[#E7E2DA] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FAF8F5] text-[#E31B23] border border-[#EAE6DF]">
                    {member.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#A1A1AA]">
                    #{member.id}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#18181B] group-hover:text-[#E31B23] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#71717A] mt-0.5">
                  {member.role}
                </p>

                <div className="w-8 h-[2px] bg-[#E31B23]/30 my-3" />

                <p className="text-xs text-[#52525B] leading-relaxed">
                  {member.focus}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#FAF8F5] flex items-center justify-between text-[11px] text-[#71717A]">
                <span>Experience</span>
                <span className="font-semibold text-[#18181B]">{member.experience}</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================ */}
      {/* 5. TEAM CULTURE & DAILY RITUALS */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#18181B] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
              Discipline & Brotherhood
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Our Team Culture & Daily Rituals
            </h2>
            <p className="text-sm text-[#D4CEC5] mt-2">
              From early morning orchard checks to late-night car-hop service in DHA Phase 4.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {dailyRituals.map((ritual, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#27272A]/80 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#E31B23] font-mono text-sm font-bold mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{ritual.time}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white mb-2">
                    {ritual.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {ritual.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Culture Note */}
          <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/10 text-center max-w-3xl mx-auto">
            <h4 className="font-serif font-bold text-lg text-white mb-2">
              Zero Compromise on Respect, Craft & Speed
            </h4>
            <p className="text-xs sm:text-sm text-[#D4CEC5] leading-relaxed">
              Every member of the 8-person team shares in the success of the shop. We work in close unison so that whether 5 cars or 50 cars are waiting on the Sector CCA concourse, your fresh pomegranate juice is cold, your falooda is silky, and your paan is folded with royal Mughal elegance.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. TRANSPARENCY & COMPARISON TABLE */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
              Honest Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#18181B] tracking-tight">
              The Jaidi Standard vs. Conventional Stalls
            </h2>
            <p className="text-base text-[#52525B] mt-2">
              Why families across Lahore choose Muhammad Tariq’s team in DHA Phase 4.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#E7E2DA] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#18181B] text-white text-xs uppercase tracking-wider font-semibold">
                    <th className="py-4 px-6">Criteria</th>
                    <th className="py-4 px-6 text-[#E31B23]">Jaidi Pan Shop Standard</th>
                    <th className="py-4 px-6 text-[#A1A1AA]">Standard Stalls</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFECE6] text-xs sm:text-sm text-[#3F3F46]">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-5 px-6 font-bold text-[#18181B] whitespace-nowrap align-top">
                        {row.feature}
                      </td>
                      <td className="py-5 px-6 font-medium text-[#18181B] bg-red-50/20 align-top">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
                          <span>{row.jaidi}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-[#71717A] align-top">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-[#A1A1AA] shrink-0 mt-0.5" />
                          <span>{row.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('menu')}
              className="px-8 py-4 rounded-full bg-[#E31B23] text-white font-bold text-sm tracking-wide hover:bg-[#C8102E] transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Explore The Fresh Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('visit')}
              className="px-8 py-4 rounded-full bg-white border border-[#D4CEC5] text-[#18181B] font-bold text-sm tracking-wide hover:bg-[#FAF8F5] transition-all inline-flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#E31B23]" />
              <span>Visit Sector CCA, DHA Phase 4</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
