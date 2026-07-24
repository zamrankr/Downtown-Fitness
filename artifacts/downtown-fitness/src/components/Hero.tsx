import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden bg-background flex items-center">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 scale-105"
        style={{ 
          y: y1,
          x: mousePosition.x * -30,
          rotateY: mousePosition.x * 5,
          rotateX: mousePosition.y * -5,
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      </motion.div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
        <motion.div 
          style={{ opacity }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 glass px-4 py-2 rounded-full border-primary/30"
          >
            <span className="text-yellow-400">⭐ 4.9/5</span>
            <span className="text-sm font-medium text-muted-foreground">· 36 Google Reviews</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-7xl md:text-8xl lg:text-[140px] leading-[0.85] font-bebas tracking-normal uppercase"
          >
            Train <span className="text-gradient">Hard.</span><br />
            Transform Your Life.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl font-light"
          >
            Fat loss. Muscle gain. Real results. Backed by expert coaching, personalised nutrition, and a community that keeps you going.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gradient-primary text-white font-bebas text-2xl tracking-wider rounded hover-glow transition-all"
            >
              JOIN NOW
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 glass text-white font-bebas text-2xl tracking-wider rounded hover:bg-white/10 transition-all border border-white/20"
            >
              CONTACT US
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
        <motion.div 
          className="w-px h-12 bg-white/20 relative overflow-hidden"
        >
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
