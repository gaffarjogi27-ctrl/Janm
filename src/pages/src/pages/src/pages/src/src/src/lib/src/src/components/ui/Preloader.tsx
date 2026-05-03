import { motion } from 'motion/react';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      onAnimationComplete={() => {
        document.body.style.overflow = 'auto';
      }}
      className="fixed inset-0 z-[100] bg-dark flex flex-center justify-center items-center pointer-events-none"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-24 h-24 flex items-center justify-center border-2 border-primary rounded-2xl rotate-12 mb-8"
        >
          <div className="font-display font-black text-4xl text-primary">
            J<span className="text-white -ml-0.5 transform translate-y-1">M</span>
          </div>
        </motion.div>
        
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full bg-primary"
          />
        </div>
      </div>
    </motion.div>
  );
}
