import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Do you offer personal training?",
    a: "Yes, we offer 1-on-1 personal training sessions with certified experts tailored to your specific fitness goals."
  },
  {
    q: "What are your operating hours?",
    a: "Mon–Sat: 6AM–11PM, Sunday: 8AM–8PM. Premium members have 24/7 access to the facility."
  },
  {
    q: "Do you have monthly memberships?",
    a: "Yes, we offer flexible monthly, quarterly, and annual plans. No hidden fees or complicated contracts."
  },
  {
    q: "Can beginners join?",
    a: "Absolutely! We welcome all fitness levels. Our staff is always available to help you get started with the equipment."
  },
  {
    q: "Is the gym air-conditioned?",
    a: "Yes, the entire facility is fully air-conditioned and climate-controlled for your comfort during intense workouts."
  },
  {
    q: "Do you have parking?",
    a: "Yes, we provide free dedicated parking for all our members right outside the facility."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  return (
    <section className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-5xl md:text-7xl font-bebas uppercase tracking-wider mb-6">
                Common <span className="text-primary">Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Got questions? We've got answers. If you can't find what you're looking for, feel free to contact our team directly.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 glass text-white font-bold tracking-widest text-sm uppercase rounded hover:bg-white/10 transition-colors border-white/20"
              >
                Contact Us
              </button>
            </motion.div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass rounded-xl overflow-hidden transition-colors ${isOpen ? 'border-primary/50' : 'border-white/10'}`}
                >
                  <button
                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-lg font-bold pr-8">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-white/5 text-white/50'}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-6 text-muted-foreground leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
