import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    category: 'Location & Service',
    question: 'Where exactly is Jaidi located in DHA Lahore and how does Car-Hop service work?',
    answer: 'Jaidi is located in Sector CCA, DHA Phase 4, Lahore, right in the central commercial avenue. When you pull up along the concourse, our dedicated service attendants will come directly to your car window, present the menu, take your order, and serve your drinks and desserts in your vehicle with customized cup trays and napkins.',
  },
  {
    category: 'Timings',
    question: 'What are your operating hours? Are you open for late-night cravings?',
    answer: 'Yes! We are open 7 days a week from 12:00 PM (Noon) straight through to 02:30 AM past midnight. Our full menu — including fresh juices, thick dry-fruit shakes, royal falooda, gol gappay, and shahi paan — is fully operational throughout the night.',
  },
  {
    category: 'Ingredients & Quality',
    question: 'Do you use pure fruit or artificial fruit syrups and powders in your juices?',
    answer: 'We strictly use 100% whole, natural fruits sourced directly from regional orchards (e.g. Multan Chaunsa mangoes, Swat mountain peaches and plums, Kandahar pomegranates, and Salt Range wild falsas). We do not add synthetic food colorants, corn syrup concentrates, or artificial fruit powders.',
  },
  {
    category: 'Dietary & Sugar-Free',
    question: 'Can I order cold-pressed juices and shakes without added sugar or dairy?',
    answer: 'Absolutely. Every single cold-pressed juice can be ordered "100% Pure, Zero Added Sugar". For milkshakes, we can replace regular sugar with raw forest honey or prepare fruit smoothies with low-fat dairy yogurt upon request.',
  },
  {
    category: 'Authentic Paan',
    question: 'What makes Jaidi Shahi Paan famous across Lahore?',
    answer: 'Our paan artisans preserve royal Mughal betel crafting techniques. We hand-fold fresh Maghai and Banarasi leaves using authentic Damask rose petal gulkand, sweet saunf, aromatic cardamom, and pure edible 99.9% silver leaf (chandi ka warq). We also craft our viral Belgian Chocolate Dipped Paan and Fire Paan for adventurous food lovers.',
  },
  {
    category: 'Events & Bulk Orders',
    question: 'Does Jaidi provide live counters and catering for Mehndi, weddings, and dawats?',
    answer: 'Yes! We offer live on-site catering stations across Lahore (DHA, Gulberg, Model Town, Cantt, Bahria, etc.). Our setups include live Shahi Paan counters, fresh cold-pressed juice & mocktail bars, royal falooda stations, and street chaat/gol gappay carts with uniformed artisans. Call us at 0301 4002475 to reserve your date.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-24 bg-[#FAF8F5] border-t border-[#E7E2DA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] inline-flex items-center gap-1.5 mb-2">
            <HelpCircle className="w-3.5 h-3.5" /> Answers & Guidelines
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#18181B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#52525B] mt-2">
            Everything you need to know about our ingredients, DHA Phase 4 location, car-hop, and catering.
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E7E2DA] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#18181B]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#E31B23] text-white' : 'bg-[#FAF8F5] text-[#71717A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#52525B] leading-relaxed border-t border-[#FAF8F5] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support footer */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E7E2DA] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-base text-[#18181B]">
              Have a specific question or custom dietary requirement?
            </h4>
            <p className="text-xs text-[#71717A] mt-0.5">
              Our master mixers and DHA Phase 4 counter team are available daily.
            </p>
          </div>
          <a
            href="tel:03014002475"
            className="px-5 py-2.5 rounded-full bg-[#18181B] text-white text-xs font-semibold hover:bg-[#E31B23] transition-colors flex items-center gap-2 shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0301 4002475</span>
          </a>
        </div>

      </div>
    </section>
  );
};
