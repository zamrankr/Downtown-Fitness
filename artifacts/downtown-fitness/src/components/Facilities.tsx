import { motion } from 'framer-motion';

const facilities = [
  { name: 'Weight Area', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Cardio Machines', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Functional Training', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop' },
  { name: 'Free Weights', img: 'https://images.unsplash.com/photo-1584466977710-1699f7d0a2f6?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Locker Rooms', img: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2071&auto=format&fit=crop' },
  { name: 'Personal Training', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop' },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bebas uppercase tracking-wider mb-4"
            >
              World-Class <span className="text-primary">Facilities</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Over 20,000 sq ft of premium workout space designed for every type of athlete.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary hover:text-white transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-2 group"
          >
            View Full Gallery
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-10 h-1 bg-primary mb-4 transform origin-left transition-transform duration-500 group-hover:scale-x-150" />
                <h3 className="text-4xl font-bebas tracking-wide text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
