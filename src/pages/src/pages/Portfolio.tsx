import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Web Application', 'Branding', 'UI/UX Design', '3D Graphics'];

const projects = [
  { id: 1, title: 'Nebula App', category: 'Web Application', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000' },
  { id: 2, title: 'Arcane Brand', category: 'Branding', image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000' },
  { id: 3, title: 'Velocity UI', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000' },
  { id: 4, title: 'Prism 3D', category: '3D Graphics', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000' },
  { id: 5, title: 'Quantum Site', category: 'Web Application', image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1000' },
  { id: 6, title: 'Echo Identity', category: 'Branding', image: 'https://images.unsplash.com/photo-1558655146-2993382ad596?q=80&w=1000' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-6xl md:text-9xl font-display font-black uppercase mb-8">
            PORT<span className="text-primary italic">FOLIO.</span>
          </h1>
          
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-dark' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-dark-lighter cursor-pointer"
              >
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                   <div className="bg-primary text-dark p-6 rounded-2xl shadow-2xl transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                     <div className="flex justify-between items-start mb-2">
                       <h3 className="text-2xl font-display font-black uppercase leading-tight">{project.title}</h3>
                       <ArrowUpRight size={24} className="transform group-hover:rotate-45 transition-transform duration-500" />
                     </div>
                     <p className="text-sm font-black uppercase tracking-widest opacity-80">{project.category}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-32 p-16 glass-card text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-10">
             <ArrowUpRight size={120} />
           </div>
           <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 relative z-10">
             Your Project is next.
           </h2>
           <a 
            href="mailto:janmbapraofficial@mail.com"
            className="inline-flex h-20 w-20 rounded-full bg-primary items-center justify-center text-dark relative z-10 hover:scale-110 transition-transform"
           >
             <ArrowUpRight size={32} />
           </a>
        </div>
      </div>
    </div>
  );
}
