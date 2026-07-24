import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ahsan Ihsan',
    badge: 'Google Review',
    time: '1 year ago',
    text: 'Not even one of the best — it\'s THE best gym in town at the moment. Best ventilation. Best equipment and they really really care about the cleanliness and keep the place tidied up!',
    rating: 5,
  },
  {
    name: 'Baber Kamal',
    badge: 'Local Guide',
    time: '2 weeks ago',
    text: 'Best fitness experience at Downtown Fitness Fazaia. Management team is very friendly and trainers are very professional. I\'ve been training for six months under Mr. Wajid — a genuinely expert and hardworking trainer. Really good experience.',
    rating: 5,
  },
  {
    name: 'Sheikh Mubasher',
    badge: 'Google Review',
    time: '3 weeks ago',
    text: 'Great atmosphere! The gym has a very positive vibe, and the management is excellent. A special shout-out to Essa Khan — he\'s an outstanding trainer who really knows his stuff and manages everything perfectly. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Asaad Rauf',
    badge: 'Google Review',
    time: '1 year ago',
    text: 'One of the cleanest gyms I have ever been to. All machines actually work, plus no limit on treadmills.',
    rating: 5,
  },
  {
    name: 'Huba Mansoor',
    badge: 'Google Review',
    time: '3 weeks ago',
    text: 'I have been training at this gym for 2 years and the experience is amazing. My trainer Wajid Shah is a great teacher — he provides full support and motivation during every session.',
    rating: 5,
  },
  {
    name: 'Wasiq Sajjad',
    badge: 'Local Guide',
    time: '1 year ago',
    text: 'Gym environment is great! Machines are exactly how they should be — superb quality. Worth every rupee of the membership.',
    rating: 5,
  },
  {
    name: 'Amir Amin',
    badge: 'Google Review',
    time: '3 weeks ago',
    text: 'Excellent environment. I can\'t say enough great things about Wajid Shah as my personal trainer. He went above and beyond from day one, caring not just about my workout but my overall well-being.',
    rating: 5,
  },
  {
    name: 'Abdul Rehman Tariq',
    badge: 'Google Review',
    time: '1 year ago',
    text: 'Recently joined this gym — the environment is very friendly and the facilities are very supportive. Great place to train.',
    rating: 5,
  },
  {
    name: 'Zohaib Rehman',
    badge: 'Google Review',
    time: '3 weeks ago',
    text: 'Downtown Fitness is a clean, great environment gym. Coach Wajid Shah is a wonderful person with a great personality. I am very satisfied with all kinds of service.',
    rating: 5,
  },
  {
    name: 'CH Ali',
    badge: 'Google Review',
    time: '1 year ago',
    text: 'Very cool, spacious and aesthetic gym. Joined one month ago and loved it.',
    rating: 5,
  },
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
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bebas text-xl flex-shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-white leading-tight">{review.name}</h4>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-xs text-primary uppercase tracking-widest font-semibold">{review.badge}</span>
                        <span className="text-white/20 text-xs">·</span>
                        <span className="text-xs text-muted-foreground">{review.time}</span>
                      </div>
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
