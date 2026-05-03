import { motion } from 'motion/react';
import { Mail, Send, ChevronRight, User, Briefcase, DollarSign, MessageSquare, Target } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    budget: '$1k - $5k',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Project Inquiry: ${formData.service}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ABudget: ${formData.budget}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:janmbapraofficial@mail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm block mb-6">Let's Talk</span>
          <h1 className="text-6xl md:text-9xl font-display font-black uppercase leading-none mb-12">
            SUBMIT <br />YOUR <span className="text-primary italic">PROJECT.</span>
          </h1>
          <p className="text-2xl text-white/50 max-w-2xl">
            Have a project in mind? Fill out the form below and let's turn your vision into a digital masterpiece.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="glass-card p-10 space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-2">Direct Contact</h4>
                  <p className="text-white/40 mb-4 font-medium italic">General inquiries & support</p>
                  <a href="mailto:janmbapraofficial@mail.com" className="text-2xl font-display font-black text-primary hover:underline transition-all">
                    janmbapraofficial@mail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 pt-8 border-t border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-2">Social Hub</h4>
                  <p className="text-white/40 mb-4 font-medium italic">Check my latest updates</p>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/jan-m-010b4a363/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors underline uppercase tracking-widest text-xs font-black">LinkedIn</a>
                    <a href="https://www.instagram.com/janmbapra/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors underline uppercase tracking-widest text-xs font-black">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[40px] text-dark relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Target className="size-32" />
               </div>
               <h3 className="text-4xl font-display font-black uppercase mb-4 relative z-10">Quick response</h3>
               <p className="text-xl font-medium opacity-70 relative z-10">
                 I usually respond within 24 hours. Your project is important to me.
               </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <User size={14} className="text-primary" /> Full Name
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-primary outline-none text-white transition-all caret-primary"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <Mail size={14} className="text-primary" /> Email Address
                  </label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-primary outline-none text-white transition-all caret-primary"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <Briefcase size={14} className="text-primary" /> Service Required
                  </label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-primary outline-none text-white transition-all appearance-none cursor-pointer"
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option className="bg-dark">Web Development</option>
                    <option className="bg-dark">Graphics Designing</option>
                    <option className="bg-dark">UI/UX Design</option>
                    <option className="bg-dark">Visual Branding</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <DollarSign size={14} className="text-primary" /> Estimated Budget
                  </label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-primary outline-none text-white transition-all appearance-none cursor-pointer"
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  >
                    <option className="bg-dark">$1k - $5k</option>
                    <option className="bg-dark">$5k - $10k</option>
                    <option className="bg-dark">$10k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 flex items-center gap-2">
                  <MessageSquare size={14} className="text-primary" /> Project Details
                </label>
                <textarea 
                  required
                  placeholder="Tell me about your amazing project..."
                  className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl focus:border-primary outline-none text-white min-h-[200px] transition-all caret-primary resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-accent text-dark p-6 rounded-2xl font-black uppercase tracking-widest transition-all scale-100 hover:scale-[1.02] flex items-center justify-center gap-4 group"
              >
                Send Inquiry <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
