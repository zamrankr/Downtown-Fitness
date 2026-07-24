import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ahmed K.',
    text: 'Absolutely the best gym in Lahore. The trainers are world-class and the equipment is always well-maintained. A true premium experience.',
    rating: 5,
  },
  {
    name: 'Fatima R.',
    text: 'Very clean, modern equipment and a motivating environment. I feel safe and empowered every time I step through the doors.',
    rating: 5,
  },
  {
    name: 'Hassan M.',
    text: 'Transformed my lifestyle completely. Highly recommended! The personal training sessions are intense but perfectly tailored to my goals.',
    rating: 5,
  },
  {
    name: 'Ayesha B.',
    text: 'Professional staff, premium facilities at an affordable price. The cardio zone is massive and I never have to wait for a machine.',
    rating: 5,
  }
];

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Auto play setup
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    
    return () => {
      clearInterval(autoplay);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="reviews" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-gradient-to-l from-primary/5 to-transparent -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bebas uppercase tracking-wider mb-6"
            >
              Don't Just Take <span className="text-primary">Our Word</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 glass inline-flex px-6 py-3 rounded-full"
            >
              <div className="flex gap-1 text-primary">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div className="text-lg font-bold">4.9/5</div>
              <div className="text-muted-foreground text-sm">· 36 Reviews</div>
            </motion.div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors hover:text-primary"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors hover:text-primary"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="overflow-hidden" 
          ref={emblaRef}
        >
          <div className="flex gap-6 py-4">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_40%] pl-4 first:pl-0"
              >
                <div className={`h-full glass p-8 rounded-3xl relative transition-all duration-300 ${
                  index === selectedIndex ? 'border-primary/40 bg-white/[0.08]' : ''
                }`}>
                  <Quote className="absolute top-6 right-8 text-white/5" size={80} />
                  
                  <div className="flex gap-1 mb-6 text-primary relative z-10">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed relative z-10 min-h-[100px]">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bebas text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{review.name}</h4>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">Member</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
