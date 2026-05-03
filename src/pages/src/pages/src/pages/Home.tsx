import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star, Globe, Palette, Code, Boxes, Check } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { useState, useEffect, useRef } from 'react';

const bgImages = [
  'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000',
  'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000'
];

const stats = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Projects Completed', value: '150+' },
  { label: 'Happy Clients', value: '60+' },
  { label: 'Coffee Consumed', value: 'Infinite' },
];

const featuredWork = [
  {
    title: 'Brand Identity',
    category: 'Graphics Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop',
    size: 'large'
  },
  {
    title: 'Modern E-commerce',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    size: 'small'
  },
  {
    title: 'Creative Portfolio',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop',
    size: 'small'
  },
];

const services = [
  { icon: Palette, title: 'Graphics Designing', desc: 'Crafting stunning visual identities and marketing materials that make your brand roar.' },
  { icon: Code, title: 'Web Development', desc: 'Building high-performance, responsive websites with the latest interactive technologies.' },
  { icon: Globe, title: 'UI/UX Design', desc: 'Designing intuitive interfaces that provide seamless user experiences across all devices.' },
];

const roles = ["Graphic Designer", "Web Developer", "Creative Strategist"];

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  const headline = "Creative Design. Powerful Web Experiences.";
  const headlineWords = headline.split(" ");

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 px-6">
        {/* Transitioning Background with Parallax */}
        <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y: bgY }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={bgIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center saturate-[1.2]"
              style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark" />
        </motion.div>

        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-1" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none z-1" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            style={{ y: contentY }}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Star size={14} className="fill-primary" /> Premier Design & Development Studio
            </motion.div>
            
            <h1 className="text-6xl md:text-[110px] font-display font-black leading-[0.85] tracking-tightest uppercase mb-10 flex flex-wrap gap-x-4">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                  className={cn(word.includes("Experiences") && "text-primary italic")}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            
            <div className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
              >
                I’m Jan M — a{' '}
              </motion.span>
              <span className="text-primary font-black relative min-w-[200px] inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
              >
                {' '}creating modern, high-converting visuals and websites that help brands grow and stand out.
              </motion.span>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <NavLink to="/portfolio" className="relative bg-primary hover:bg-white text-dark px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] group overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                <motion.div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </NavLink>
              <NavLink to="/contact" className="border-2 border-white/20 hover:border-primary hover:bg-primary/5 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all group overflow-hidden relative">
                <span className="relative z-10">Let’s Work Together</span>
                <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-primary/10 transition-all duration-300" />
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-5xl md:text-7xl font-display font-black text-primary mb-2">{stat.value}</div>
                <div className="text-white/40 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="pt-20 border-t border-white/5">
            <p className="text-center text-white/30 uppercase tracking-[0.5em] text-[10px] font-bold mb-12">Trusted by global innovators</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
              {['NETFLIX', 'SPOTIFY', 'AIRBNB', 'STRIPE', 'MODERNA'].map((logo) => (
                <span key={logo} className="text-3xl font-display font-black tracking-tighter">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase leading-tight mb-6">
                FUSING <span className="text-primary italic">ART</span> WITH TECH.
              </h2>
              <p className="text-xl text-white/50">
                I provide a comprehensive suite of services designed to take your brand from inception to digital dominance.
              </p>
            </div>
            <NavLink to="/services" className="group text-primary font-bold flex items-center gap-3 h-fit pb-2 border-b-2 border-transparent hover:border-primary transition-all">
              All Services <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </NavLink>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.7, 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(204,255,0,0.15)"
                }}
                className="glass-card p-10 hover:bg-primary group transition-all duration-500 cursor-pointer border border-white/5"
              >
                <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-8 group-hover:bg-dark transition-colors">
                  <service.icon size={32} className="text-primary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-3xl font-display font-black uppercase mb-4 group-hover:text-dark">
                  {service.title}
                </h3>
                <p className="text-white/60 group-hover:text-dark/80 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Bento Style */}
      <section className="py-32 px-6 bg-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase mb-6">Selected <span className="text-primary italic">Works</span></h2>
            <p className="text-white/40 max-w-xl mx-auto">A glimpse into the projects where I've pushed the boundaries of what's possible in design and code.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
             {featuredWork.map((project, i) => (
               <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={cn(
                  "relative group overflow-hidden rounded-3xl cursor-pointer",
                  project.size === 'large' ? "md:col-span-2" : ""
                )}
               >
                 <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0">
                    <span className="text-primary text-xs font-black uppercase tracking-widest mb-2 transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                      {project.category}
                    </span>
                    <h3 className="text-4xl font-display font-black uppercase text-white transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-75">
                      {project.title}
                    </h3>
                 </div>
               </motion.div>
             ))}
          </div>
          
          <div className="mt-16 text-center">
            <NavLink to="/portfolio" className="inline-flex items-center gap-4 text-3xl font-display font-black uppercase group">
              View all projects 
              <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all">
                <ArrowRight />
              </div>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase mb-6">People's <span className="text-primary italic">Views</span></h2>
            <p className="text-white/40 max-w-xl mx-auto">Don't just take my word for it. Here's what my clients say about our collaboration.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Jan is a visionary. He transformed our brand identity from something generic to a market standout in just weeks. His eye for detail is unmatched.",
                author: "Sarah Jenkins",
                role: "CEO, TechFlow",
                image: "https://i.pravatar.cc/150?u=sarah"
              },
              {
                text: "The web application Jan developed for us is not only incredibly fast but has a UI that our users absolutely love. Professional and highly skilled.",
                author: "David Chen",
                role: "Founder, Arcane",
                image: "https://i.pravatar.cc/150?u=david"
              },
              {
                text: "Working with Jan was a game changer. He understands both the creative and technical sides perfectly, which is very rare to find.",
                author: "Elena Rodriguez",
                role: "Marketing Director, Nebula",
                image: "https://i.pravatar.cc/150?u=elena"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-10 relative"
              >
                <div className="text-primary mb-8">
                  <Star className="fill-primary inline" size={20} />
                  <Star className="fill-primary inline" size={20} />
                  <Star className="fill-primary inline" size={20} />
                  <Star className="fill-primary inline" size={20} />
                  <Star className="fill-primary inline" size={20} />
                </div>
                <p className="text-xl text-white/80 italic mb-10 leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full grayscale border border-primary/20" />
                  <div>
                    <div className="font-bold uppercase tracking-tight">{testimonial.author}</div>
                    <div className="text-xs text-white/40 font-bold uppercase tracking-widest">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-90" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-[140px] font-display font-black text-dark uppercase leading-[0.8] mb-12">
              KICKSTART <br />YOUR <span className="italic">DREAM</span>.
            </h2>
            <a 
              href="mailto:janmbapraofficial@mail.com" 
              className="inline-block bg-dark text-white px-12 py-6 rounded-full text-xl font-black uppercase tracking-widest hover:scale-110 transition-transform"
            >
              Start A Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
