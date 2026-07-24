import { motion } from 'framer-motion';

const trainers = [
  {
    name: 'Fat Loss',
    role: 'Specialist Coach',
    exp: 'Certified Expert',
    specialty: 'Body Recomposition',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Muscle Gain',
    role: 'Strength Coach',
    exp: 'Certified Expert',
    specialty: 'Hypertrophy & Power',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Nutrition',
    role: 'Nutrition Coach',
    exp: 'Certified Expert',
    specialty: 'Meal Planning & Diet',
    img: 'https://images.unsplash.com/photo-1609899517235-cbfbea2bf01e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Performance',
    role: 'Functional Coach',
    exp: 'Certified Expert',
    specialty: 'Cardio & Conditioning',
    img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop'
  }
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bebas uppercase tracking-wider mb-4"
          >
            Our <span className="text-primary">Coaching</span> Focus
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Fat loss. Muscle gain. Nutrition. Performance. Our certified coaches cover every angle so you hit real results, fast.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="glass rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_10px_40px_rgba(255,107,0,0.1)] hover:border-primary/30 relative overflow-hidden">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-card relative z-10 shadow-xl group-hover:border-primary transition-colors duration-500">
                  <img 
                    src={trainer.img} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                
                <h3 className="text-3xl font-bebas tracking-widest text-white mb-1 group-hover:text-primary transition-colors">{trainer.name}</h3>
                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">{trainer.role}</p>
                
                <div className="w-full h-px bg-white/10 mb-4" />
                
                <div className="flex flex-col gap-2 text-sm text-muted-foreground w-full">
                  <div className="flex justify-between">
                    <span>Experience</span>
                    <span className="text-white">{trainer.exp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Specialty</span>
                    <span className="text-white">{trainer.specialty}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
