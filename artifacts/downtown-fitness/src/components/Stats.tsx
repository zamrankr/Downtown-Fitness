import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 500, label: 'Members', suffix: '+' },
  { value: 15, label: 'Expert Trainers', suffix: '+' },
  { value: 50, label: 'Equipment Pieces', suffix: '+' },
  { value: 4.9, label: 'Rating', suffix: '★', decimal: true },
];

function Counter({ from, to, duration, suffix, decimal = false }: any) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function outExpo
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      const currentVal = from + (to - from) * easeOut;
      setCount(decimal ? Number(currentVal.toFixed(1)) : Math.floor(currentVal));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView, decimal]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="about" className="py-20 bg-background relative z-20 -mt-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center border-t border-primary/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <div className="text-4xl md:text-5xl font-bebas text-white mb-2 tracking-wider">
                <Counter from={0} to={stat.value} duration={2000} suffix={stat.suffix} decimal={stat.decimal} />
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
