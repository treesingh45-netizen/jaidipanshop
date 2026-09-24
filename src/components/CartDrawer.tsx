import React, { useState } from 'react';
import { MenuItem } from '../data/menuData';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Car,
  MapPin,
  Phone,
  ShoppingBag,
  Send,
  CheckCircle2,
  MessageCircle,
  Copy,
  Clock,
  Sparkles,
  ArrowLeft,
  Utensils,
  Home,
} from 'lucide-react';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout?: () => void;
  onAddToCart?: (item: MenuItem, quantity?: number) => void;
  onClearCart?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [step, setStep] = useState<'review' | 'details' | 'success'>('review');
  const [copied, setCopied] = useState(false);

  // Form Fields
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [orderType, setOrderType] = useState<'car-hop' | 'takeaway' | 'delivery'>('car-hop');
  const [locationDetails, setLocationDetails] = useState('');
  const [customerMessage, setCustomerMessage] = useState('');
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string }>({});

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
  const totalItemsCount = cart.reduce((acc, c) => acc + c.quantity, 0);

  // Generate WhatsApp Message text
  const generateWhatsAppMessage = () => {
    const itemsList = cart
      .map(
        (c) =>
          `• ${c.quantity}x ${c.item.name} - Rs. ${c.item.price * c.quantity}`
      )
      .join('\n');

    let orderTypeLabel = 'Car-Hop (Sector CCA, DHA Phase 4)';
    if (orderType === 'takeaway') orderTypeLabel = 'Takeaway / Counter Pickup';
    if (orderType === 'delivery') orderTypeLabel = 'Home / Office Delivery';

    const locationLine = locationDetails.trim()
      ? `\nDetails / Vehicle: ${locationDetails.trim()}`
      : '';

    const messageLine = customerMessage.trim()
      ? customerMessage.trim()
      : 'None';

    return `New Order – Jaidi Pan Shop

Customer Name: ${customerName.trim()}
Phone: ${phone.trim()}
Order Type: ${orderTypeLabel}${locationLine}

Order Items:
${itemsList}

Total: Rs. ${subtotal.toLocaleString()}

Customer Message: ${messageLine}`;
  };

  const handleOpenWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/923014002475?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyOrder = () => {
    const message = generateWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleProceedToDetails = () => {
    if (cart.length === 0) return;
    setStep('details');
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; phone?: string } = {};

    if (!customerName.trim()) {
      errors.name = 'Please enter your name';
    }
    if (!phone.trim()) {
      errors.phone = 'Please enter your phone number';
    } else if (phone.trim().length < 8) {
      errors.phone = 'Please enter a valid contact number';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setStep('success');

    // Automatically trigger WhatsApp window
    handleOpenWhatsApp();
  };

  const handleResetAndClose = () => {
    if (onClearCart) onClearCart();
    setStep('review');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      {/* Slide-over Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-lg bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* ============================================================ */}
          {/* TOP HEADER */}
          {/* ============================================================ */}
          <div className="p-5 sm:p-6 border-b border-[#EAE6DF] flex items-center justify-between bg-white shrink-0">
            <div className="flex items-center gap-3">
              {step !== 'review' && step !== 'success' && (
                <button
                  onClick={() => setStep('review')}
                  className="p-1.5 rounded-full hover:bg-[#FAF8F5] text-[#71717A] hover:text-[#18181B] transition-colors"
                  aria-label="Back to items review"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <div>
                <h2 className="text-xl font-serif font-bold text-[#18181B] flex items-center gap-2">
                  <span>
                    {step === 'review' && 'Your Refreshment Bag'}
                    {step === 'details' && 'Order Details & Contact'}
                    {step === 'success' && 'Order Placed!'}
                  </span>
                </h2>
                <p className="text-xs text-[#71717A] mt-0.5">
                  {step === 'review' &&
                    (cart.length === 0
                      ? 'No items selected'
                      : `${totalItemsCount} ${totalItemsCount === 1 ? 'item' : 'items'} ready for order`)}
                  {step === 'details' && 'Official Jaidi Pan Shop WhatsApp: 0301 4002475'}
                  {step === 'success' && 'Ready to send directly to Jaidi WhatsApp'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#FAF8F5] text-[#71717A] hover:text-[#18181B] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ============================================================ */}
          {/* STEP 1: REVIEW ITEMS */}
          {/* ============================================================ */}
          {step === 'review' && (
            <>
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-20 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#EAE6DF] flex items-center justify-center text-[#A1A1AA] mb-4 shadow-xs">
                      <ShoppingBag className="w-8 h-8 text-[#A1A1AA]" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-[#18181B]">
                      Your bag is empty
                    </h3>
                    <p className="text-xs sm:text-sm text-[#71717A] max-w-xs mt-2 leading-relaxed">
                      Select your favorite wild falsa juice, royal khoya shakes, or silver paan to begin your order.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    {cart.map(({ item, quantity }) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] hover:border-[#D4CEC5] transition-all"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-16 h-16 rounded-xl object-cover shrink-0 shadow-xs"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif font-bold text-sm text-[#18181B] truncate leading-tight">
                            {item.name}
                          </h4>
                          <span className="text-xs font-mono font-semibold text-[#E31B23] block mt-0.5">
                            Rs. {item.price} each
                          </span>

                          <div className="flex items-center justify-between gap-2 mt-2">
                            {/* Quantity Adjuster */}
                            <div className="flex items-center border border-[#EAE6DF] bg-white rounded-lg shadow-xs overflow-hidden">
                              <button
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="p-1.5 text-[#71717A] hover:text-[#18181B] hover:bg-[#FAF8F5] cursor-pointer transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="px-3 text-xs font-mono font-bold text-[#18181B]">
                                {quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="p-1.5 text-[#71717A] hover:text-[#18181B] hover:bg-[#FAF8F5] cursor-pointer transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            {/* Item Subtotal & Delete */}
                            <div className="flex items-center gap-3">
                              <span className="text-xs font-mono font-bold text-[#18181B]">
                                Rs. {(item.price * quantity).toLocaleString()}
                              </span>
                              <button
                                onClick={() => onRemoveItem(item.id)}
                                className="text-[#A1A1AA] hover:text-[#E31B23] p-1.5 rounded-lg hover:bg-white transition-colors"
                                title="Remove item"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Review Step Bottom Bar */}
              {cart.length > 0 && (
                <div className="p-5 sm:p-6 border-t border-[#EAE6DF] bg-[#FAF8F5] space-y-4 shrink-0">
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <div className="flex justify-between text-[#71717A]">
                      <span>Items Subtotal</span>
                      <span className="font-mono font-semibold text-[#18181B]">
                        Rs. {subtotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-[#71717A]">
                      <span>Car-Hop & Table Service (DHA 4)</span>
                      <span className="font-mono text-emerald-600 font-bold">FREE</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-[#18181B] pt-2 border-t border-[#EAE6DF]">
                      <span>Total Amount</span>
                      <span className="font-mono text-lg text-[#E31B23]">
                        Rs. {subtotal.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-[#EAE6DF] flex items-center gap-2.5 text-xs text-[#52525B]">
                    <Car className="w-4 h-4 text-[#E31B23] shrink-0" />
                    <span>
                      Orders are prepared live and forwarded to official WhatsApp (<strong>0301 4002475</strong>).
                    </span>
                  </div>

                  <button
                    onClick={handleProceedToDetails}
                    className="w-full py-4 rounded-full bg-[#E31B23] text-white font-bold text-sm tracking-wide hover:bg-[#C8102E] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <span>Proceed to Order</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}

          {/* ============================================================ */}
          {/* STEP 2: CUSTOMER CONTACT & DETAILS FORM */}
          {/* ============================================================ */}
          {step === 'details' && (
            <form onSubmit={handleSubmitOrder} className="flex-1 flex flex-col justify-between overflow-hidden">
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
                
                {/* Order Type Selection */}
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-[#71717A] block mb-2">
                    Select Service Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('car-hop')}
                      className={`py-3 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1.5 border transition-all cursor-pointer ${
                        orderType === 'car-hop'
                          ? 'bg-[#E31B23] text-white border-[#E31B23] shadow-xs'
                          : 'bg-[#FAF8F5] text-[#52525B] border-[#EAE6DF] hover:border-[#D4CEC5]'
                      }`}
                    >
                      <Car className="w-4 h-4" />
                      <span>Car-Hop DHA 4</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`py-3 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1.5 border transition-all cursor-pointer ${
                        orderType === 'takeaway'
                          ? 'bg-[#E31B23] text-white border-[#E31B23] shadow-xs'
                          : 'bg-[#FAF8F5] text-[#52525B] border-[#EAE6DF] hover:border-[#D4CEC5]'
                      }`}
                    >
                      <Utensils className="w-4 h-4" />
                      <span>Counter Pickup</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`py-3 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1.5 border transition-all cursor-pointer ${
                        orderType === 'delivery'
                          ? 'bg-[#E31B23] text-white border-[#E31B23] shadow-xs'
                          : 'bg-[#FAF8F5] text-[#52525B] border-[#EAE6DF] hover:border-[#D4CEC5]'
                      }`}
                    >
                      <Home className="w-4 h-4" />
                      <span>Home Delivery</span>
                    </button>
                  </div>
                </div>

                {/* Customer Name */}
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-[#71717A] block mb-1.5">
                    Customer Name <span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      if (formErrors.name) setFormErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="e.g. Shoaib Ahmed"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#18181B] bg-[#FAF8F5] outline-none transition-colors ${
                      formErrors.name ? 'border-[#E31B23] bg-red-50/50' : 'border-[#EAE6DF] focus:border-[#E31B23]'
                    }`}
                  />
                  {formErrors.name && (
                    <span className="text-[11px] text-[#E31B23] font-medium block mt-1">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-[#71717A] block mb-1.5">
                    Phone Number (WhatsApp) <span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (formErrors.phone) setFormErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    placeholder="e.g. 0300 1234567"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#18181B] bg-[#FAF8F5] outline-none transition-colors font-mono ${
                      formErrors.phone ? 'border-[#E31B23] bg-red-50/50' : 'border-[#EAE6DF] focus:border-[#E31B23]'
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-[11px] text-[#E31B23] font-medium block mt-1">
                      {formErrors.phone}
                    </span>
                  )}
                </div>

                {/* Vehicle or Address details */}
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-[#71717A] block mb-1.5">
                    {orderType === 'car-hop'
                      ? 'Vehicle Details / Car Plate (For Car-Hop delivery)'
                      : orderType === 'delivery'
                      ? 'Delivery Address & Sector'
                      : 'Pickup Time / Instructions (Optional)'}
                  </label>
                  <input
                    type="text"
                    value={locationDetails}
                    onChange={(e) => setLocationDetails(e.target.value)}
                    placeholder={
                      orderType === 'car-hop'
                        ? 'e.g. White Civic ABC-123 parked outside Sector CCA'
                        : orderType === 'delivery'
                        ? 'e.g. House 45, Street 12, Phase 4 DHA Lahore'
                        : 'e.g. Picking up in 10 minutes'
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#EAE6DF] text-sm text-[#18181B] bg-[#FAF8F5] outline-none focus:border-[#E31B23] transition-colors"
                  />
                </div>

                {/* Customer Special Instructions */}
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-[#71717A] block mb-1.5">
                    Customer Message / Special Instructions
                  </label>
                  <textarea
                    rows={2}
                    value={customerMessage}
                    onChange={(e) => setCustomerMessage(e.target.value)}
                    placeholder="e.g. Extra black salt in Falsa Juice, less sweet Mango Shake, extra silver warq on Shahi Paan."
                    className="w-full px-4 py-3 rounded-xl border border-[#EAE6DF] text-sm text-[#18181B] bg-[#FAF8F5] outline-none focus:border-[#E31B23] transition-colors resize-none"
                  />
                </div>

                {/* Quick Summary Strip */}
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] flex items-center justify-between text-xs">
                  <span className="text-[#71717A]">
                    {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                  </span>
                  <span className="font-mono font-bold text-[#18181B]">
                    Total: <strong className="text-[#E31B23]">Rs. {subtotal.toLocaleString()}</strong>
                  </span>
                </div>

              </div>

              {/* Submit Button Bar */}
              <div className="p-5 sm:p-6 border-t border-[#EAE6DF] bg-[#FAF8F5] space-y-3 shrink-0">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#E31B23] text-white font-bold text-sm tracking-wide hover:bg-[#C8102E] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit & Open WhatsApp (0301 4002475)</span>
                </button>
                <p className="text-[11px] text-center text-[#71717A]">
                  Clicking will prepare your WhatsApp message with complete order details.
                </p>
              </div>
            </form>
          )}

          {/* ============================================================ */}
          {/* STEP 3: ORDER SUBMITTED / WHATSAPP DISPATCH CONFIRMATION */}
          {/* ============================================================ */}
          {step === 'success' && (
            <div className="flex-1 flex flex-col justify-between overflow-hidden">
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
                
                {/* Success Banner */}
                <div className="text-center py-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#18181B]">
                    Order Ready to Send!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525B] max-w-sm mx-auto mt-1">
                    Your order details are formatted for official Jaidi Pan Shop WhatsApp: <strong>0301 4002475</strong>.
                  </p>
                </div>

                {/* Formatted Order Message Preview Card */}
                <div className="bg-[#FAF8F5] p-4 sm:p-5 rounded-2xl border border-[#EAE6DF] text-xs font-mono text-[#27272A] whitespace-pre-wrap leading-relaxed relative">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-[#EAE6DF] font-sans">
                    <span className="font-bold text-[#18181B] uppercase tracking-wider text-[11px]">
                      Prepared Message Preview
                    </span>
                    <button
                      onClick={handleCopyOrder}
                      className="px-2.5 py-1 rounded-md bg-white border border-[#EAE6DF] text-[#18181B] hover:text-[#E31B23] flex items-center gap-1 text-[10px] font-semibold cursor-pointer shadow-2xs"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                    </button>
                  </div>
                  {generateWhatsAppMessage()}
                </div>

                {/* Fast Action Details */}
                <div className="grid grid-cols-2 gap-3 text-center text-xs">
                  <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE6DF]">
                    <span className="text-[#71717A] block mb-1">Official WhatsApp</span>
                    <span className="font-bold font-mono text-[#18181B]">0301 4002475</span>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE6DF]">
                    <span className="text-[#71717A] block mb-1">Location</span>
                    <span className="font-bold text-[#18181B]">Sector CCA, DHA 4</span>
                  </div>
                </div>

              </div>

              {/* Success Screen Action Buttons */}
              <div className="p-5 sm:p-6 border-t border-[#EAE6DF] bg-[#FAF8F5] space-y-3 shrink-0">
                <button
                  onClick={handleOpenWhatsApp}
                  className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Order on WhatsApp</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href="tel:03014002475"
                    className="flex-1 py-3 px-4 rounded-full bg-white border border-[#D4CEC5] text-[#18181B] hover:bg-[#FAF8F5] text-xs font-bold text-center flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E31B23]" />
                    <span>Call Counter</span>
                  </a>

                  <button
                    onClick={handleResetAndClose}
                    className="flex-1 py-3 px-4 rounded-full bg-[#18181B] text-white hover:bg-black text-xs font-bold text-center transition-colors cursor-pointer"
                  >
                    <span>Done & Close</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
