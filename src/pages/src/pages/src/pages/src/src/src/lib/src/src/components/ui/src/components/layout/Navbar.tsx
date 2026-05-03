import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-dark/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center bg-dark border-2 border-primary rounded-lg rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <div className="font-display font-black text-2xl text-primary flex items-baseline select-none">
              J<span className="text-white -ml-0.5 transform translate-y-1">M</span>
            </div>
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter hidden md:block">
            JAN<span className="text-primary italic">.M</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => cn(
                "text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary relative",
                isActive ? "text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-white/60"
              )}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/contact" className="bg-primary hover:bg-accent text-dark px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all hover:gap-3">
            Contact <ArrowRight size={16} />
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-dark-lighter border-b border-white/10 p-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => cn(
                  "text-xl font-display font-bold tracking-tight uppercase",
                  isActive ? "text-primary" : "text-white"
                )}
              >
                {link.name}
              </NavLink>
            ))}
            <button className="bg-primary text-dark px-6 py-4 rounded-xl text-center font-bold text-lg">
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
