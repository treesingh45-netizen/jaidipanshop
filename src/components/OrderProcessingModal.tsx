import React, { useState } from 'react';
import { CartItem } from './CartDrawer';
import {
  X,
  Check,
  Phone,
  MessageSquare,
  Car,
  Copy,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  Send,
  Printer,
} from 'lucide-react';

interface OrderProcessingModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onClearCart?: () => void;
}

export const OrderProcessingModal: React.FC<OrderProcessingModalProps> = ({
  isOpen,
  onClose,
  cart,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderType, setOrderType] = useState<'carhop' | 'dinein' | 'takeaway'>('carhop');
  const [vehicleDetails, setVehicleDetails] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [copied, setCopied] = useState(false);
  const [orderProcessed, setOrderProcessed] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
  const orderId = `JD-${Math.floor(1000 + Math.random() * 9000)}`;

  // Formatted order receipt message
  const generateOrderSlip = () => {
    const lines = [
      `*JAIDI REFRESHMENTS & PAN SHOP*`,
      `📍 Sector CCA, DHA Phase 4, Lahore`,
      `📞 Counter: 0301 4002475`,
      `---------------------------------`,
      `*ORDER #${orderId}*`,
      `Type: ${orderType === 'carhop' ? '🚗 Car-Hop (In-Vehicle)' : orderType === 'dinein' ? '🍽️ Dine-in Terrace' : '🛍️ Takeaway'}`,
      customerName ? `Customer: ${customerName}` : null,
      customerPhone ? `Phone: ${customerPhone}` : null,
      orderType === 'carhop' && vehicleDetails ? `Vehicle: ${vehicleDetails}` : null,
      `---------------------------------`,
      `*ITEMS:*`,
      ...cart.map(
        (c) => `• ${c.quantity}x ${c.item.name} — Rs. ${c.item.price * c.quantity}`
      ),
      `---------------------------------`,
      `*TOTAL: Rs. ${subtotal}*`,
      specialInstructions ? `Note: ${specialInstructions}` : null,
      `---------------------------------`,
      `Status: Sent to 0301 4002475 for Immediate Prep`,
    ].filter(Boolean);

    return lines.join('\n');
  };

  const orderSlip = generateOrderSlip();

  const handleCopy = () => {
    navigator.clipboard.writeText(orderSlip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsApp = () => {
    const encoded = encodeURIComponent(orderSlip);
    window.open(`https://wa.me/923014002475?text=${encoded}`, '_blank');
    setOrderProcessed(true);
  };

  const handleSendSMS = () => {
    const encoded = encodeURIComponent(orderSlip);
    window.open(`sms:03014002475?body=${encoded}`, '_self');
    setOrderProcessed(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#EAE6DF] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-[#18181B] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E31B23] flex items-center justify-center text-white font-bold">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-white">
                Process Order · 0301 4002475
              </h3>
              <p className="text-xs text-white/70">
                Direct dispatch to Jaidi DHA Phase 4 Sector CCA Counter
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Order Mode Switcher */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#71717A] block mb-2">
              Select Service Mode
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setOrderType('carhop')}
                className={`py-3 px-4 rounded-xl font-bold text-xs flex flex-col items-center gap-1 transition-all border ${
                  orderType === 'carhop'
                    ? 'bg-[#E31B23] text-white border-[#E31B23] shadow-sm'
                    : 'bg-[#FAF8F5] text-[#18181B] border-[#EAE6DF] hover:bg-[#F4F1EA]'
                }`}
              >
                <Car className="w-4 h-4" />
                <span>Car-Hop Service</span>
              </button>
              <button
                type="button"
                onClick={() => setOrderType('dinein')}
                className={`py-3 px-4 rounded-xl font-bold text-xs flex flex-col items-center gap-1 transition-all border ${
                  orderType === 'dinein'
                    ? 'bg-[#E31B23] text-white border-[#E31B23] shadow-sm'
                    : 'bg-[#FAF8F5] text-[#18181B] border-[#EAE6DF] hover:bg-[#F4F1EA]'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Terrace Dine-in</span>
              </button>
              <button
                type="button"
                onClick={() => setOrderType('takeaway')}
                className={`py-3 px-4 rounded-xl font-bold text-xs flex flex-col items-center gap-1 transition-all border ${
                  orderType === 'takeaway'
                    ? 'bg-[#E31B23] text-white border-[#E31B23] shadow-sm'
                    : 'bg-[#FAF8F5] text-[#18181B] border-[#EAE6DF] hover:bg-[#F4F1EA]'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>Takeaway Pick</span>
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-[#52525B] block mb-1">
                Customer Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Shoaib / Ahmed"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#EAE6DF] bg-[#FAF8F5] text-sm text-[#18181B] outline-none focus:border-[#E31B23] focus:bg-white"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#52525B] block mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="e.g. 0301 4002475"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#EAE6DF] bg-[#FAF8F5] text-sm text-[#18181B] outline-none focus:border-[#E31B23] focus:bg-white"
              />
            </div>

            {orderType === 'carhop' && (
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-[#52525B] block mb-1">
                  Car Details & Number Plate (For vehicle window delivery)
                </label>
                <input
                  type="text"
                  placeholder="e.g. White Toyota Corolla (LEA-5678) parked near CCA fountain"
                  value={vehicleDetails}
                  onChange={(e) => setVehicleDetails(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#EAE6DF] bg-[#FAF8F5] text-sm text-[#18181B] outline-none focus:border-[#E31B23] focus:bg-white"
                />
              </div>
            )}

            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-[#52525B] block mb-1">
                Special Instructions (Sugar-free, extra ice, silver warq, etc.)
              </label>
              <input
                type="text"
                placeholder="e.g. Falsa juice without sugar, extra malai in falooda"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#EAE6DF] bg-[#FAF8F5] text-sm text-[#18181B] outline-none focus:border-[#E31B23] focus:bg-white"
              />
            </div>
          </div>

          {/* Formatted Order Slip Preview */}
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#71717A]">
                Generated Order Slip Preview
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-xs font-semibold text-[#E31B23] hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Order Text'}</span>
              </button>
            </div>
            <pre className="text-xs font-mono text-[#27272A] whitespace-pre-wrap bg-white p-3.5 rounded-xl border border-[#EAE6DF] max-h-48 overflow-y-auto">
              {orderSlip}
            </pre>
          </div>

          {/* Destination Notification */}
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3 text-xs text-[#18181B]">
            <Phone className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-sm text-[#E31B23]">
                Direct Dispatch to 0301 4002475
              </span>
              <span>
                Clicking WhatsApp or SMS will open your messaging app with this complete itemized order slip ready to send to our DHA Phase 4 Sector CCA counter team.
              </span>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#EAE6DF] bg-[#FAF8F5] flex flex-col sm:flex-row gap-3 items-center justify-between">
          <a
            href="tel:03014002475"
            className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#D4CEC5] text-[#18181B] font-bold text-xs flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            <Phone className="w-4 h-4 text-[#E31B23]" />
            <span>Call 0301 4002475</span>
          </a>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleSendSMS}
              className="px-5 py-3 rounded-full bg-white border border-[#EAE6DF] text-[#18181B] font-bold text-xs hover:bg-[#FAF8F5] flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-[#E31B23]" />
              <span>Send via SMS</span>
            </button>
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="px-6 py-3 rounded-full bg-[#E31B23] hover:bg-[#C8102E] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send Order to 0301 4002475 (WhatsApp)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
