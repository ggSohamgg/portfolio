import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

const Navbar: React.FC = () => {
  const [active, setActive] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update active state on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Add a small offset (e.g., 150px) to determine when a section is "active"
      const scrollPosition = window.scrollY + 150;

      for (const item of navItems) {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(item);
            break; // Stop checking once we find the active section
          }
        }
      }
      
      // Handle edge case for reaching the bottom of the page (e.g. Contact)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
         setActive('Contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Minimalist Floating Nav */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="fixed top-6 inset-x-0 z-50 hidden md:flex justify-center pointer-events-none"
      >
        <div className="pointer-events-auto glass-panel px-1.5 py-1.5 rounded-full shadow-2xl shadow-black/40 flex items-center gap-1">
            {navItems.map((item) => (
            <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                    active === item ? 'text-white' : 'text-muted hover:text-primary'
                }`}
            >
                {active === item && (
                    <motion.div 
                        layoutId="activePill"
                        className="absolute inset-0 bg-white/10 border border-white/5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
                <span className="relative z-10">{item}</span>
            </button>
            ))}
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/5 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
            <span className="font-display font-bold text-primary text-xl tracking-tight">SB</span>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-primary">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: '100vh' }}
                exit={{ opacity: 0, height: 0 }}
                className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden overflow-hidden"
            >
                <div className="flex flex-col gap-8">
                    {navItems.map((item, idx) => (
                        <motion.button
                            key={item}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => scrollTo(item)}
                            className="text-4xl font-display font-bold text-secondary hover:text-primary text-left transition-colors"
                        >
                            {item}
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;