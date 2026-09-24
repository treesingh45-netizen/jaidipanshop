import React from 'react';
import { IMAGES } from '../data/assets';
import {
  Users,
  Moon,
  SunMedium,
  Heart,
  Coffee,
  Sparkles,
  ArrowRight,
  Utensils,
  Clock,
  Compass,
  Check,
} from 'lucide-react';

interface ExperiencePageProps {
  onNavigate: (page: string, categoryFilter?: string) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigate }) => {
  const journeys = [
    {
      number: '01',
      title: 'Refreshing Cold-Pressed Drinks',
      tagline: 'Sun-drenched whole fruit, pure crystal ice, and natural revitalization',
      description:
        'From high summer wild mountain falsa berries dusted with black rock salt to pure Kandahari pomegranate juice and refreshing mint margaritas, our drinks bring an invigorating rush that quenches the deepest thirst without artificial syrup shortcuts.',
      image: IMAGES.juices,
      items: ['Wild Falsa Juice', 'Red Pomegranate Anaar', 'Mint Margarita Chill', 'Fresh Mosambi'],
      category: 'fresh-juices',
      secret: 'Pressed instantly per order using whole fruit arils and reverse-osmosis ice.',
    },
    {
      number: '02',
      title: 'Traditional Royal Favourites',
      tagline: 'Generations of Lahori confectionery and dairy art preserved',
      description:
        'Indulge in royal faloodas layered with dense, slow-boiled malai rabri, delicate seviyan noodles, fragrant rose syrup, and artisanal pistachio kulfi. Completed with authentic meetha paan rolled in edible silver warq.',
      image: IMAGES.falooda,
      items: ['Jaidi Royal Falooda', 'Jaidi Shahi Kulfi', 'Meetha Shahi Pan', 'Lahori Rabri Plate'],
      category: 'gola-falooda',
      secret: 'Our rabri is simmered for 5+ hours over low flame to yield natural thick malai layers.',
    },
    {
      number: '03',
      title: 'Sweet Indulgence & Dry Fruit Shakes',
      tagline: 'Velvety buffalo cream, roasted whole nuts, and rich natural blends',
      description:
        'Whether it is a double-scoop mango ice cream shake, roasted almond khoya shake, or Belgian chocolate treat, our dessert shakes are created for pure, unhurried indulgence under the Lahore night sky.',
      image: IMAGES.hero,
      items: ['Jaidi Special Royal Shake', 'Mango Float Ice Cream Shake', 'Pistachio Badam Shake', 'Nutella Fudge'],
      category: 'jaidi-shakes',
      secret: 'Blended with whole roasted Iranian pistachios and pure milk mawa khoya.',
    },
    {
      number: '04',
      title: 'Desi Street Savories',
      tagline: 'Crisp semolina puris, tangy sonth chutneys, and spiced crunch',
      description:
        'Experience the thrill of golden, crispy hollow gol gappay spheres filled with spiced black chickpeas and submerged in ice-cold sweet and sour tamarind waters, alongside zesty Lahori fruit chaat.',
      image: IMAGES.savory,
      items: ['Crispy Gol Gappay (Pani Puri)', 'Lahori Spiced Fruit Chaat', 'Special Dahi Bhallay', 'Cream Chaat'],
      category: 'savories',
      secret: 'Chutneys prepared from natural tamarind pulp, roasted cumin, and fresh mint.',
    },
    {
      number: '05',
      title: 'Karak Chai & Chilled Coffee',
      tagline: 'Warm terracotta matkas or sub-zero crystal slushes',
      description:
        'Wind down your night with strong slow-boiled matka karak chai infused with bruised green cardamom, or recharge with double espresso cold coffee topped with vanilla ice cream and sub-zero blue lagoon slushes.',
      image: IMAGES.atmosphere,
      items: ['Special Matka Karak Chai', 'Cold Coffee with Ice Cream', 'Blue Lagoon Slush', 'Pakola Float'],
      category: 'tea-coffee',
      secret: 'Brewed with full-cream buffalo milk and freshly crushed cardamom pods.',
    },
  ];

  const timeRoutine = [
    {
      time: '12:00 PM – 4:00 PM',
      title: 'Midday Rehydration & Office Lunches',
      desc: 'Cold-pressed citrus, fresh mosambi, and ruby pomegranate juices providing clean, natural vitality during busy work afternoons.',
      recommended: 'Cold-Pressed Pomegranate & Fruit Chaat',
    },
    {
      time: '5:00 PM – 8:00 PM',
      title: 'Twilight Family Outings & Street Snacks',
      desc: 'The evening begins as families pull up for crispy gol gappay, fluffy dahi bhallay, and creamy fruit chaat.',
      recommended: 'Crispy Gol Gappay Platter & Mint Margarita',
    },
    {
      time: '8:30 PM – 2:30 AM',
      title: 'The Iconic Midnight Social Hub',
      desc: 'The peak Lahori evening experience: cars lining Sector CCA, friends catching up over Royal Falooda, thick dry-fruit shakes, and Shahi Meetha Paan.',
      recommended: 'Jaidi Royal Falooda & Meetha Shahi Pan',
    },
  ];

  const occasions = [
    {
      title: 'Friends & Late Nights',
      description: 'The go-to gathering spot for midnight cravings, deep laughs, and car-hop conversations under the Lahore night sky.',
      icon: Users,
    },
    {
      title: 'Family Outings',
      description: 'A welcoming dessert haven where grandparents savor traditional rabri while children enjoy colorful ice cream treats.',
      icon: Heart,
    },
    {
      title: 'Evening Meetups',
      description: 'Wind down after work in Sector CCA with refreshing citrus coolers, spiced chaat, and relaxed open-air banter.',
      icon: Moon,
    },
    {
      title: 'Quick Refreshments',
      description: 'Fast, hygiene-first car-side service providing cold-pressed juices and energizing fruit bowls on the go.',
      icon: SunMedium,
    },
    {
      title: 'Dessert Cravings',
      description: 'When midnight strikes and nothing will satisfy your sweet tooth except authentic royal falooda or rich kulfi.',
      icon: Sparkles,
    },
    {
      title: 'Casual Gatherings',
      description: 'Celebrate small milestones, reunions, or impromptu road trips with Lahore’s most dependable refreshments.',
      icon: Utensils,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#FAF8F5]">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-32 bg-[#18181B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.atmosphere}
            alt="Jaidi lifestyle and experience"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-[#18181B]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#E31B23] mb-4 inline-block">
            The Jaidi Lifestyle
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
            Come for the Flavour.{' '}
            <span className="italic block font-normal text-[#FAF8F5]">Stay for the Experience.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#D4CEC5] font-light leading-relaxed max-w-2xl mx-auto text-balance">
            A lively culinary journey weaving through cold-pressed elixirs, fragrant desserts, street savories, and warm community moments in Sector CCA, DHA Phase 4.
          </p>
        </div>
      </section>

      {/* 2. EXPLORE THE FLAVOURS VISUAL JOURNEY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
            Visual Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#18181B] tracking-tight">
            Explore the Flavours
          </h2>
          <p className="text-base text-[#52525B] mt-2">
            Five signature chapters that define the Jaidi palate in DHA Phase 4.
          </p>
        </div>

        {/* Alternating editorial journey rows */}
        <div className="flex flex-col gap-24">
          {journeys.map((j, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={j.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl aspect-[16/10] bg-[#ECE8E1] group ${
                    isEven ? 'lg:col-start-6' : ''
                  }`}
                >
                  <img
                    src={j.image}
                    alt={j.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-4 py-1.5 rounded-full text-xs font-mono font-bold text-[#18181B] shadow-sm">
                    Chapter {j.number}
                  </div>
                </div>

                {/* Narrative */}
                <div
                  className={`lg:col-span-5 flex flex-col gap-5 ${
                    isEven ? 'lg:col-start-1' : ''
                  }`}
                >
                  <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23]">
                    {j.tagline}
                  </span>
                  <h3 className="text-3xl font-serif font-bold text-[#18181B] leading-tight">
                    {j.title}
                  </h3>
                  <p className="text-base text-[#52525B] leading-relaxed">
                    {j.description}
                  </p>

                  {/* Secret craft */}
                  <div className="p-4 rounded-2xl bg-white border border-[#E7E2DA] text-xs text-[#27272A]">
                    <span className="font-bold text-[#18181B] block mb-0.5">The Jaidi Touch:</span>
                    <span className="text-[#52525B]">{j.secret}</span>
                  </div>

                  {/* Highlights list */}
                  <div className="pt-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#71717A] block mb-2">
                      Featured in this chapter:
                    </span>
                    <ul className="grid grid-cols-2 gap-2 text-xs font-medium text-[#27272A]">
                      {j.items.map((it, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23]" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('menu', j.category)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#E31B23] hover:text-[#C8102E] transition-colors"
                    >
                      <span>Explore Chapter on Menu</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 3. A DAY IN THE LIFE AT JAIDI */}
      <section className="py-24 bg-white border-y border-[#E7E2DA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
              The Daily Rhythm
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#18181B] tracking-tight">
              A Day in the Life at Jaidi DHA Phase 4
            </h2>
            <p className="text-base text-[#52525B] mt-2">
              From midday fruit pressing to the lively midnight car-hop rush.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeRoutine.map((tr, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E7E2DA] flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E2DA] text-xs font-mono font-bold text-[#E31B23] mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tr.time}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#18181B] mb-2">
                    {tr.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mb-6">
                    {tr.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFECE6] text-xs">
                  <span className="text-[#71717A] block mb-0.5">Top Recommendation:</span>
                  <span className="font-bold text-[#18181B]">{tr.recommended}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. "PERFECT FOR" SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
            For Every Occasion
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#18181B] tracking-tight">
            Perfect For
          </h2>
          <p className="text-base text-[#52525B] mt-2">
            Whatever brings you out into the Lahore evening, Jaidi is prepared to welcome you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {occasions.map((occ, idx) => {
            const IconComp = occ.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#E7E2DA] flex flex-col gap-4 hover:border-[#D4CEC5] transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] flex items-center justify-center text-[#E31B23] shadow-xs">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[#18181B]">
                  {occ.title}
                </h3>
                <p className="text-sm text-[#52525B] leading-relaxed">
                  {occ.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visit Us Prompt */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onNavigate('visit')}
            className="px-8 py-4 rounded-full bg-[#E31B23] text-white font-medium text-sm tracking-wide hover:bg-[#C8102E] transition-all inline-flex items-center gap-2 shadow-sm"
          >
            <span>Join Us in Sector CCA, DHA Phase 4</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
