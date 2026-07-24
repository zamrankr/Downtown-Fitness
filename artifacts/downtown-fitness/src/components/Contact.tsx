import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Facebook, Youtube, MessageCircle, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = '923220101444';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', message: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const e = { name: '', phone: '', message: '' };
    if (!formState.name.trim()) e.name = 'Name is required';
    if (!formState.phone.trim()) e.phone = 'Phone number is required';
    if (!formState.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return !e.name && !e.phone && !e.message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `Hi Downtown Fitness! 👋`,
      ``,
      `*${formState.name.trim()}* is reaching out via your website.`,
      ``,
      `📞 Phone: ${formState.phone.trim()}`,
      formState.email.trim() ? `📧 Email: ${formState.email.trim()}` : '',
      ``,
      `💬 Message:`,
      formState.message.trim(),
    ].filter(l => l !== null);

    const message = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');

    setIsSuccess(true);
    setFormState({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setIsSuccess(false), 6000);
  };

  const openWhatsAppDirect = () => {
    const message = encodeURIComponent(`Hi Downtown Fitness! I'd like to get more information about your gym and memberships.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
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
              Ready to start your journey? Have questions about our memberships? Reach out — we reply instantly on WhatsApp.
            </p>

            {/* Direct WhatsApp CTA */}
            <button
              onClick={openWhatsAppDirect}
              className="flex items-center gap-3 mb-12 px-6 py-4 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-xl hover:bg-[#25D366]/20 transition-all group font-bold"
            >
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
              <span>Chat with us on WhatsApp</span>
              <span className="ml-auto text-xs opacity-60 font-normal">0322-0101444</span>
            </button>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Location</h4>
                  <p className="text-muted-foreground">10 CC, Block A, Fazaia Housing Society<br />Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone / WhatsApp</h4>
                  <a href={`tel:+923220101444`} className="text-muted-foreground hover:text-primary transition-colors">0322-0101444</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Hours</h4>
                  <p className="text-muted-foreground">Mon–Sat: 6:00 AM – 11:00 PM<br />Sunday: 8:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/downtownfitnesspk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors hover:border-primary"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors hover:border-primary" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors hover:border-primary" aria-label="YouTube">
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

            <h3 className="text-3xl font-bebas tracking-wide mb-2">Send a Message</h3>
            <p className="text-muted-foreground text-sm mb-8">Fill in the form — we'll receive it instantly on WhatsApp.</p>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[300px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bebas tracking-wider mb-2">WhatsApp Opened!</h4>
                <p className="text-muted-foreground max-w-xs">
                  Your message is ready to send. Just hit send in WhatsApp and our team will reply shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Name *</label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      className={`w-full bg-card/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'}`}
                      placeholder="Muhammad Ali"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={e => setFormState({ ...formState, phone: e.target.value })}
                      className={`w-full bg-card/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors ${errors.phone ? 'border-red-500' : 'border-white/10'}`}
                      placeholder="0300-1234567"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Email (optional)</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-card/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Message *</label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    className={`w-full bg-card/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-white/10'}`}
                    placeholder="I'd like to know more about your memberships..."
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-primary text-white font-bebas text-xl tracking-wider rounded-lg hover-glow transition-all flex items-center justify-center gap-3 group"
                >
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                  SEND VIA WHATSAPP
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Clicking send opens WhatsApp with your message pre-filled. Free, instant, no account needed.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Google Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 h-80 w-full rounded-3xl overflow-hidden relative border border-white/10"
        >
          <iframe
            title="Downtown Fitness Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0!2d74.26!3d31.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzQ4LjAiTiA3NMKwMTUnMzYuMCJF!5e0!3m2!1sen!2spk!4v1000000000000!5m2!1sen!2spk&q=10+CC+Block+A+Fazaia+Housing+Society+Lahore"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
