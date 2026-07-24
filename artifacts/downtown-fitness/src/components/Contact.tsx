import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Youtube, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bebas uppercase tracking-wider mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              Ready to start your journey? Have questions about our memberships? Reach out to us.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Location</h4>
                  <p className="text-muted-foreground">10 CC, Block A, Fazaia Housing Society<br/>Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone</h4>
                  <p className="text-muted-foreground">0322-0101444</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Hours</h4>
                  <p className="text-muted-foreground">Mon–Sat: 6:00 AM – 11:00 PM<br/>Sunday: 8:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors hover:border-primary">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors hover:border-primary">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors hover:border-primary">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-3xl font-bebas tracking-wide mb-8">Send a Message</h3>
            
            {isSuccess ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-card/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                    <input 
                      type="tel" 
                      required
                      value={formState.phone}
                      onChange={e => setFormState({...formState, phone: e.target.value})}
                      className="w-full bg-card/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="0300-1234567"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-card/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-card/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-primary text-white font-bebas text-xl tracking-wider rounded-lg hover-glow transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 h-80 w-full glass rounded-3xl overflow-hidden relative flex flex-col items-center justify-center text-center"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] opacity-10 object-cover bg-center grayscale" />
          <MapPin size={48} className="text-primary mb-4 relative z-10 opacity-80" />
          <h3 className="text-3xl font-bebas tracking-wide relative z-10">Downtown Fitness</h3>
          <p className="text-muted-foreground relative z-10">10 CC, Block A, Fazaia Housing Society, Lahore</p>
          <div className="mt-4 px-6 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold border border-primary/30 relative z-10 uppercase tracking-widest">
            Interactive Map View
          </div>
        </motion.div>
      </div>
    </section>
  );
}
