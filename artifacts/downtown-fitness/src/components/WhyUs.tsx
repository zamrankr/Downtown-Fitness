import { motion } from 'framer-motion';
import { UserCheck, Dumbbell, Tag, Maximize2, Heart, Zap, Activity, Users } from 'lucide-react';

const features = [
  { icon: UserCheck, title: 'Professional Trainers', desc: 'Certified experts dedicated to your goals.' },
  { icon: Dumbbell, title: 'Modern Equipment', desc: 'Top-tier machines for every muscle group.' },
  { icon: Tag, title: 'Affordable Memberships', desc: 'Premium fitness without the premium price tag.' },
  { icon: Maximize2, title: 'Spacious Environment', desc: 'Never wait for a machine in our massive facility.' },
  { icon: Heart, title: 'Cardio Zone', desc: 'State-of-the-art treadmills, bikes, and rowers.' },
  { icon: Zap, title: 'Strength Training', desc: 'Extensive free weights and resistance machines.' },
  { icon: Activity, title: 'Functional Training', desc: 'Turf area with sleds, tires, and kettlebells.' },
  { icon: Users, title: 'Friendly Community', desc: 'Train alongside motivated individuals.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function WhyUs() {
  return (
    <section className="py-24 bg-background relative" id="whyus">
      {/* Background flare */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bebas uppercase tracking-wider mb-4"
          >
            Why <span className="text-primary">Choose Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            We're more than just a gym. We're a facility engineered for results, providing you with everything you need to succeed.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full" />
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bebas tracking-wide mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
