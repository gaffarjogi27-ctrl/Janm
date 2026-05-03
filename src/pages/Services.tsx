import { motion } from 'motion/react';
import { Palette, Code, Smartphone, BarChart, Search, Terminal, ArrowRight, Check } from 'lucide-react';

const serviceList = [
  {
    icon: Palette,
    title: 'Visual Branding',
    price: 'Starting at $999',
    features: ['Logo Design', 'Brand Strategy', 'Typography & Color', 'Brand Guidelines'],
    color: 'bg-primary'
  },
  {
    icon: Code,
    title: 'Web Development',
    price: 'Starting at $2499',
    features: ['React/Next.js Applications', 'Custom CMS', 'E-commerce Solutions', 'Performance Audit'],
    color: 'bg-blue-500'
  },
  {
    icon: Smartphone,
    title: 'App Design',
    price: 'Starting at $1999',
    features: ['Mobile UI/UX', 'Interactive Prototyping', 'User Flow Mapping', 'Design Systems'],
    color: 'bg-purple-500'
  }
];

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'Understanding your goals, audience, and market landscape.' },
  { num: '02', title: 'Strategy', desc: 'Developing a blueprint for success and creative direction.' },
  { num: '03', title: 'Execution', desc: 'Bringing the vision to life with expert design and code.' },
  { num: '04', title: 'Refinement', desc: 'Testing, iterating, and polishing every single detail.' },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm block mb-6">Expertise</span>
          <h1 className="text-6xl md:text-9xl font-display font-black uppercase leading-none mb-12">
            WHAT WE <span className="text-primary italic">BRING</span> TO THE TABLE.
          </h1>
          <p className="text-2xl text-white/50 max-w-3xl leading-relaxed">
            From initial concept to final deployment, we provide end-to-end digital services that help your business thrive in a competitive market.
          </p>
        </header>

        <section className="grid lg:grid-cols-3 gap-8 mb-40">
          {[
            { 
              icon: Palette, 
              title: 'Graphic Design', 
              desc: 'We create visually stunning designs that communicate your brand message clearly and effectively.',
              features: ['Logo Design', 'Brand Identity', 'Social Media Posts', 'Banners & Ads', 'Marketing Materials'] 
            },
            { 
              icon: Code, 
              title: 'Web Development', 
              desc: 'Modern, responsive, and high-performance websites tailored to your business needs.',
              features: ['Portfolio Websites', 'Business Websites', 'Landing Pages', 'UI/UX Design', 'Responsive Design'] 
            },
            { 
              icon: Smartphone, 
              title: 'Branding', 
              desc: 'Build a strong and memorable brand identity that stands out in the competitive market.',
              features: ['Brand Strategy', 'Visual Identity', 'Color & Typography System', 'Brand Guidelines'] 
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover={{ y: -20, scale: 1.02 }}
              className="glass-card p-10 group hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-dark transition-all duration-500 shadow-[0_0_20px_rgba(204,255,0,0.1)] group-hover:shadow-[0_0_40px_rgba(204,255,0,0.4)]">
                <item.icon size={40} />
              </div>
              <h3 className="text-4xl font-display font-black uppercase mb-6 leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-lg text-white/50 mb-8 leading-relaxed group-hover:text-white/80 transition-colors">{item.desc}</p>
              <ul className="space-y-4">
                {item.features.map((f, j) => (
                  <motion.li 
                    key={j} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + j * 0.1 }}
                    className="flex items-center gap-3 text-white/30 group-hover:text-white/80 transition-colors"
                  >
                    <Check size={16} className="text-primary" />
                    <span className="font-medium">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        <section className="mb-40">
           <h2 className="text-5xl md:text-8xl font-display font-black uppercase mb-20 text-center">THE <span className="text-primary italic">PROCESS</span></h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
             {processSteps.map((step, i) => (
               <div key={i} className="relative p-10 bg-dark-lighter rounded-[32px] overflow-hidden group">
                 <div className="text-8xl font-display font-black absolute -top-4 -right-4 opacity-5 group-hover:opacity-20 transition-opacity">
                   {step.num}
                 </div>
                 <div className="relative z-10">
                    <span className="text-primary font-black mb-4 block">{step.num}</span>
                    <h3 className="text-2xl font-display font-black uppercase mb-4">{step.title}</h3>
                    <p className="text-white/40 leading-relaxed">{step.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </section>

        <section className="text-center">
           <div className="glass-card inline-flex flex-col md:flex-row items-center gap-8 p-10 md:p-6 rounded-[40px]">
             <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-16 h-16 rounded-full border-4 border-dark object-cover" />
                ))}
             </div>
             <p className="text-xl font-bold font-display uppercase tracking-tight">Join 200+ clients who trusted our process</p>
             <a href="mailto:janmbapraofficial@mail.com" className="bg-primary text-dark px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform">
               Work with us
             </a>
           </div>
        </section>
      </div>
    </div>
  );
}
