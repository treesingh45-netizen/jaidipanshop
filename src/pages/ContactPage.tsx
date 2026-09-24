import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2, Instagram, Facebook, ArrowRight, MessageCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  prefillMessage?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, prefillMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: prefillMessage ? 'Bulk Order / Event Catering' : 'General Inquiry',
    message: prefillMessage || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  useEffect(() => {
    if (prefillMessage) {
      setFormData((prev) => ({
        ...prev,
        reason: 'Bulk Order / Event Catering',
        message: prefillMessage,
      }));
    }
  }, [prefillMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const mockId = 'JD-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(mockId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      reason: 'General Inquiry',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="flex flex-col w-full bg-[#FAF8F5] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-[#E7E2DA] pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-2">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#18181B] tracking-tight mb-6">
            Let’s Connect
          </h1>
          <blockquote className="font-serif italic text-lg sm:text-xl text-[#3F3F46] max-w-2xl mx-auto leading-relaxed">
            “Whether you are planning a visit, exploring the menu, or inquiring about event catering in Lahore, we’d love to hear from you.”
          </blockquote>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & INTERACTIVE FORM */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Details Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 bg-white p-8 sm:p-10 rounded-3xl border border-[#E7E2DA] shadow-xs">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] block mb-1">
                Direct Counter Access
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#18181B]">
                Jaidi Pan Shop
              </h3>
              <p className="text-sm text-[#71717A] mt-1">
                DHA Phase 4, Sector CCA, Lahore
              </p>
            </div>

            <div className="flex flex-col gap-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E7E2DA] flex items-center justify-center text-[#E31B23] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-[#18181B] block">Direct Phone</span>
                  <a
                    href="tel:03014002475"
                    className="text-base text-[#18181B] font-mono hover:text-[#E31B23] transition-colors font-bold"
                  >
                    0301 4002475
                  </a>
                  <span className="text-xs text-[#71717A] block mt-0.5">
                    Available for orders, car-hop, & catering quotes
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E7E2DA] flex items-center justify-center text-[#E31B23] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-[#18181B] block">Shop Location</span>
                  <span className="text-[#3F3F46]">
                    DHA Phase 4, Sector CCA, DHA Phase 4, Lahore, Pakistan
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E7E2DA] flex items-center justify-center text-[#E31B23] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-[#18181B] block">Operating Hours</span>
                  <span className="text-[#3F3F46]">
                    Daily 12:00 PM – 02:30 AM
                  </span>
                  <span className="text-xs text-[#10B981] font-bold block mt-0.5">
                    Late night food, shakes, and paan service
                  </span>
                </div>
              </div>
            </div>

            {/* Social & WhatsApp Buttons */}
            <div className="pt-6 border-t border-[#EFECE6] flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#71717A] block">
                Instant Channels
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="tel:03014002475"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#E31B23] text-white text-xs font-bold text-center hover:bg-[#C8102E] transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 0301 4002475</span>
                </a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E7E2DA] hover:bg-[#E31B23] hover:text-white text-[#18181B] flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E7E2DA] hover:bg-[#E31B23] hover:text-white text-[#18181B] flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E7E2DA] shadow-xs">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#18181B] mb-2">
                  Message Received Successfully
                </h3>
                <p className="text-sm text-[#52525B] max-w-md mx-auto mb-4">
                  Thank you for reaching out, {formData.name}. Our DHA Phase 4 management has received your inquiry regarding "{formData.reason}".
                </p>
                <div className="bg-[#FAF8F5] px-4 py-2 rounded-xl border border-[#E7E2DA] text-xs font-mono text-[#71717A] mb-8">
                  Reference ID: {inquiryId}
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-[#D4CEC5] text-xs font-bold text-[#18181B] hover:bg-[#FAF8F5] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#18181B]">
                    Send an Inquiry or Catering Request
                  </h3>
                  <p className="text-xs text-[#71717A] mt-1">
                    Fill out the form below and our Lahore team will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#27272A]">
                      Your Name <span className="text-[#E31B23]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Shoaib Khan"
                      className="px-4 py-2.5 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] text-sm text-[#18181B] focus:border-[#E31B23] outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#27272A]">
                      Phone Number <span className="text-[#E31B23]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0300 1234567"
                      className="px-4 py-2.5 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] text-sm text-[#18181B] focus:border-[#E31B23] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#27272A]">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. shoaib@example.com"
                      className="px-4 py-2.5 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] text-sm text-[#18181B] focus:border-[#E31B23] outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#27272A]">
                      Reason for Contact
                    </label>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] text-sm text-[#18181B] focus:border-[#E31B23] outline-none transition-colors"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Menu Question">Menu & Custom Flavors</option>
                      <option value="Bulk Order / Event Catering">Bulk Order / Event Catering</option>
                      <option value="Feedback / Suggestion">Feedback / Quality Review</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#27272A]">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can assist you..."
                    className="px-4 py-2.5 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] text-sm text-[#18181B] focus:border-[#E31B23] outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-3.5 px-6 rounded-full bg-[#E31B23] text-white font-bold text-sm hover:bg-[#C8102E] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. FINAL CTA: EXPLORE MENU */}
      <section className="py-16 bg-white border-t border-[#E7E2DA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest font-bold text-[#E31B23] mb-2 block">
            Crafted for Flavour
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#18181B] mb-4">
            Discover Our Complete Selection
          </h2>
          <p className="text-sm text-[#52525B] max-w-md mx-auto mb-6">
            Over 60+ fresh juices, thick shakes, royal faloodas, and savory street bites waiting for you in Sector CCA, DHA Phase 4.
          </p>
          <button
            onClick={() => onNavigate('menu')}
            className="px-8 py-3.5 rounded-full bg-[#18181B] text-white hover:bg-black text-xs uppercase tracking-wider font-bold transition-all inline-flex items-center gap-2"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4 text-[#E31B23]" />
          </button>
        </div>
      </section>

    </div>
  );
};
