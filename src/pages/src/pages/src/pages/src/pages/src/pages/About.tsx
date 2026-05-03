import { motion } from 'motion/react';
import { Target, Award, Users, Lightbulb, Heart, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm block mb-6">About Jan M.</span>
          <h1 className="text-6xl md:text-9xl font-display font-black uppercase leading-none mb-12">
            DESIGN WITH <span className="text-primary italic">PURPOSE.</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-2xl text-white/70 leading-relaxed">
                At Jan M, we specialize in combining creativity with technology to deliver high-quality design and development solutions.
              </p>
              <div className="p-6 border-l-4 border-primary bg-primary/5">
                <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-2">Our Mission</h4>
                <p className="text-xl font-display font-bold">To help brands grow through creative design and high-performing websites.</p>
              </div>
            </div>
            <p className="text-lg text-white/50 leading-relaxed">
              With expertise in graphic design and website development, we help businesses build strong visual identities and powerful online presence. Our approach is simple — understand your vision, design with purpose, and develop with performance in mind. Whether it's a brand identity or a full website, we create work that not only looks good but delivers results.
            </p>
          </div>
        </motion.div>

        <section className="mb-40 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { icon: Target, title: 'Mission', desc: 'To empower businesses with tools that simplify complexity and amplify their unique voice.' },
            { icon: Lightbulb, title: 'Philosophy', desc: 'Design is not just how it looks; it is how it works and feels in the hands of the user.' },
            { icon: Zap, title: 'Speed', desc: 'We value efficiency. High-end design should not come at the cost of performance.' },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-12 glass-card hover:border-primary/50 transition-all duration-500"
            >
              <item.icon size={40} className="text-primary mb-8" />
              <h3 className="text-3xl font-display font-black uppercase mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary p-12 md:p-24 rounded-[40px] text-dark shadow-[0_0_50px_rgba(204,255,0,0.2)]"
        >
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase leading-tight mb-8">
                Ready to make some <span className="italic">noise?</span>
              </h2>
              <p className="text-xl font-medium mb-12 opacity-80">
                Whether you're starting from scratch or looking to revitalize your brand, I'm here to help you achieve your vision.
              </p>
              <div className="flex gap-4">
                <div className="p-4 bg-dark rounded-2xl flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center font-bold text-dark">J</div>
                  <div>
                    <div className="font-bold">Jan M.</div>
                    <div className="text-xs opacity-60">Lead Designer</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Awards Won', val: '12' },
                { label: 'Cups of Coffee', val: '2.5k' },
                { label: 'Commit Count', val: '8.4k' },
                { label: 'Clean Pixels', val: '99%' },
              ].map((stat, i) => (
                <div key={i} className="bg-dark/5 p-8 rounded-3xl border border-dark/10">
                   <div className="text-4xl font-display font-black mb-1">{stat.val}</div>
                   <div className="text-xs font-bold uppercase tracking-widest opacity-60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
