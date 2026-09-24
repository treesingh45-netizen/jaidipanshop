import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { MenuPage } from './pages/MenuPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { GalleryPage } from './pages/GalleryPage';
import { VisitPage } from './pages/VisitPage';
import { ContactPage } from './pages/ContactPage';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { MenuItem } from './data/menuData';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function App() {
  // Support hash routing (e.g. #menu, #story, #visit)
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages = ['home', 'story', 'menu', 'experience', 'gallery', 'visit', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage);
  const [menuInitialCategory, setMenuInitialCategory] = useState<string | undefined>(undefined);
  const [contactPrefillMessage, setContactPrefillMessage] = useState<string | undefined>(undefined);
  
  // Cart State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((i) => {
          if (i.item.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.item.id !== id));
  };

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'story', 'menu', 'experience', 'gallery', 'visit', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string, categoryOrPrefill?: string) => {
    if (page === 'menu' && categoryOrPrefill) {
      setMenuInitialCategory(categoryOrPrefill);
    }
    if (page === 'contact' && categoryOrPrefill) {
      setContactPrefillMessage(categoryOrPrefill);
    }
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckout = () => {
    setCartOpen(false);
    handleNavigate('visit');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#18181B] selection:bg-[#E31B23] selection:text-white">
      {/* Global Responsive Navigation with Official Logo */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
          />
        )}
        {currentPage === 'story' && <StoryPage onNavigate={handleNavigate} />}
        {currentPage === 'menu' && (
          <MenuPage
            initialCategory={menuInitialCategory}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
          />
        )}
        {currentPage === 'experience' && <ExperiencePage onNavigate={handleNavigate} />}
        {currentPage === 'gallery' && <GalleryPage onNavigate={handleNavigate} />}
        {currentPage === 'visit' && <VisitPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            prefillMessage={contactPrefillMessage}
          />
        )}
      </main>

      {/* Floating Bottom Bag Order Bar */}
      {totalCartCount > 0 && !cartOpen && (
        <div className="fixed bottom-6 inset-x-0 z-40 px-4 pointer-events-none flex justify-center animate-in slide-in-from-bottom-5 duration-300">
          <div className="pointer-events-auto bg-[#18181B] text-white p-2.5 pl-5 rounded-full shadow-2xl border border-white/20 flex items-center justify-between gap-4 sm:gap-6 max-w-md w-full">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E31B23] flex items-center justify-center text-xs font-bold font-mono">
                {totalCartCount}
              </div>
              <div>
                <span className="text-xs font-bold block text-white">Your Order Bag</span>
                <span className="text-[11px] text-[#A1A1AA] font-mono">
                  Rs. {cart.reduce((s, c) => s + c.item.price * c.quantity, 0).toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={() => setCartOpen(true)}
              className="px-5 py-2.5 rounded-full bg-[#E31B23] hover:bg-[#C8102E] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>View & Order</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Global Shopping Bag Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
        onAddToCart={handleAddToCart}
        onClearCart={() => setCart([])}
      />

      {/* Global Luxury Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

