import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, MessageCircle, User, Phone as PhoneIcon } from 'lucide-react';

const WHATSAPP_NUMBER = '923220101444';

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
    badge: 'MOST POPULAR',
  },
  {
    name: 'Premium',
    price: '10,000',
    period: '/mo',
    features: ['Unlimited 24/7 access', 'All zones & classes', 'Weekly PT sessions', 'Custom nutrition plan & coaching', 'VIP locker & Laundry'],
    highlighted: false,
  },
];

interface ModalProps {
  plan: typeof plans[number];
  onClose: () => void;
}

function SignupModal({ plan, onClose }: ModalProps) {
  const [form, setForm] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', phone: '' });

  const validate = () => {
    const e = { name: '', phone: '' };
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^[0-9\-\+\s]{7,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number';
    setErrors(e);
    return !e.name && !e.phone;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = encodeURIComponent(
      `Hi Downtown Fitness! 👋\n\nI'd like to sign up for the *${plan.name} Plan* (PKR ${plan.price}/mo).\n\n` +
      `Name: ${form.name.trim()}\nPhone: ${form.phone.trim()}\n\nPlease confirm my membership. Thank you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="relative w-full max-w-md bg-[#151515] border border-white/10 rounded-3xl p-8 shadow-2xl"
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-muted-foreground hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <p className="text-primary text-xs uppercase tracking-widest font-bold mb-1">Selected Plan</p>
          <h3 className="text-4xl font-bebas tracking-wider">
            {plan.name} <span className="text-primary">Membership</span>
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            PKR <span className="text-white font-bold">{plan.price}</span>/month
          </p>
        </div>

        {/* Plan features preview */}
        <ul className="space-y-2 mb-8 pb-8 border-b border-white/10">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <Check size={14} className="text-primary flex-shrink-0" strokeWidth={3} />
              {f}
            </li>
          ))}
        </ul>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Your Name</label>
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className={`w-full bg-card/50 border rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'}`}
                placeholder="Muhammad Ali"
              />
            </div>
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Phone Number</label>
            <div className="relative">
              <PhoneIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="tel"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className={`w-full bg-card/50 border rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors ${errors.phone ? 'border-red-500' : 'border-white/10'}`}
                placeholder="0300-1234567"
              />
            </div>
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-primary text-white font-bebas text-xl tracking-wider rounded-lg hover-glow transition-all flex items-center justify-center gap-3"
          >
            <MessageCircle size={20} />
            CONFIRM ON WHATSAPP
          </button>

          <p className="text-xs text-muted-foreground text-center">
            This will open WhatsApp to confirm your membership with our team.
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[number] | null>(null);

  return (
    <>
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

                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-4 rounded font-bebas text-xl tracking-wider transition-all flex items-center justify-center gap-2 group ${
                    plan.highlighted
                      ? 'bg-gradient-primary text-white hover-glow'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
                  GET STARTED
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedPlan && (
          <SignupModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
