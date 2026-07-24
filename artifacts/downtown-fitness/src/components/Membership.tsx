import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '3,500',
    period: '/mo',
    features: ['Basic gym access', 'Cardio zone', 'Locker room access', 'Free WiFi'],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '6,000',
    period: '/mo',
    features: ['Full gym access', 'Cardio & Strength zones', 'Group fitness classes', '1 PT session/month', 'Locker room & Sauna'],
    highlighted: true,
    badge: 'MOST POPULAR'
  },
  {
    name: 'Premium',
    price: '10,000',
    period: '/mo',
    features: ['Unlimited 24/7 access', 'All zones & classes', 'Weekly PT sessions', 'Custom nutrition plan', 'VIP locker & Laundry'],
    highlighted: false,
  }
];

export default function Membership() {
  return (
    <section id="membership" className="py-24 bg-[#080808] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bebas uppercase tracking-wider mb-4"
          >
            Membership <span className="text-primary">Plans</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            No hidden fees. No complicated contracts. Just simple, transparent pricing designed to get you started.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-4 ${
                plan.highlighted 
                  ? 'bg-card border-2 border-primary shadow-[0_0_40px_rgba(255,107,0,0.15)] lg:scale-105 z-10' 
                  : 'glass'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-xs font-bold tracking-widest uppercase">
                  {plan.badge}
                </div>
              )}
              
              <div className="text-center mb-8 border-b border-white/10 pb-8">
                <h3 className="text-2xl font-bebas tracking-widest text-muted-foreground mb-4">{plan.name}</h3>
                <div className="flex justify-center items-end gap-1">
                  <span className="text-xl font-bold text-primary mb-2">PKR</span>
                  <span className="text-6xl font-bebas">{plan.price}</span>
                  <span className="text-muted-foreground mb-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className={`p-1 rounded-full ${plan.highlighted ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded font-bebas text-xl tracking-wider transition-all ${
                plan.highlighted 
                  ? 'bg-gradient-primary text-white hover-glow' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                GET STARTED
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
