import { motion } from 'framer-motion';

export default function FloatingCTA() {
  const scrollToPricing = () => {
    const element = document.getElementById('membership');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed bottom-6 right-24 z-40 hidden md:block"
    >
      <button
        onClick={scrollToPricing}
        className="relative group px-8 py-4 bg-gradient-primary text-white font-bebas text-xl tracking-wider uppercase rounded-full shadow-[0_0_20px_rgba(255,107,0,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,0,0.6)]"
      >
        <span className="relative z-10">Join Now</span>
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </button>
    </motion.div>
  );
}
