import { NavLink } from 'react-router-dom';
import { Mail, Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-lighter border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
               <div className="relative w-14 h-14 flex items-center justify-center bg-dark border-2 border-primary rounded-lg rotate-3">
                 <div className="font-display font-black text-3xl text-primary select-none flex items-baseline">
                   J<span className="text-white -ml-1 transform translate-y-1">M</span>
                 </div>
               </div>
               <span className="text-3xl font-display font-black uppercase tracking-tighter">JAN<span className="text-primary italic">.M</span></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tightest mb-6 leading-none uppercase">
              Let's create something <span className="text-primary italic">extraordinary.</span>
            </h2>
            <a 
              href="mailto:janmbapraofficial@mail.com"
              className="text-2xl md:text-3xl font-medium text-white/60 hover:text-primary transition-colors flex items-center gap-3 group"
            >
              janmbapraofficial@mail.com
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Portfolio', 'Services', 'About'].map((item) => (
                <li key={item}>
                  <NavLink 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/janmbapra/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/jan-m-010b4a363/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-white/40 text-sm">
          <p>© {currentYear} JAN M. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
