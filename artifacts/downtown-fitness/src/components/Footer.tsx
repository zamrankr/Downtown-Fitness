import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B0B0B] border-t-4 border-primary pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-4xl font-bebas text-primary">DF</span>
              <span className="text-2xl font-bebas tracking-widest">DOWNTOWN<br/>FITNESS</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Fat loss. Muscle gain. Real results. Nutrition, coaching, and support — all under one roof in Fazaia, Lahore.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/downtownfitnesspk/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bebas text-xl tracking-wider mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Membership', 'Facilities', 'Trainers', 'Reviews'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, link.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bebas text-xl tracking-wider mb-6 uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>10 CC, Block A, Fazaia Housing Society, Lahore, Pakistan</li>
              <li>Phone: 0322-0101444</li>
              <li>Email: info@downtownfitness.pk</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bebas text-xl tracking-wider mb-6 uppercase">Hours</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span className="text-white">6:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs uppercase tracking-widest">
            © {currentYear} Downtown Fitness. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
