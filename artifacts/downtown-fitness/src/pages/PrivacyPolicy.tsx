import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bebas uppercase tracking-wider mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: July 2026</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bebas tracking-wider text-white mb-3">Information We Collect</h2>
              <p>When you visit Downtown Fitness, we may collect personal information you provide directly, such as your name, phone number, and email address when you fill out our contact form or sign up for a membership.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas tracking-wider text-white mb-3">How We Use Your Information</h2>
              <p>We use the information we collect to respond to your inquiries, process membership requests, improve our services, and send occasional updates about our facilities and promotions (only with your consent).</p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas tracking-wider text-white mb-3">Data Protection</h2>
              <p>We implement appropriate security measures to protect your personal information. Your data is never sold or shared with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas tracking-wider text-white mb-3">Third-Party Services</h2>
              <p>Our website uses Google Maps for location embedding and WhatsApp for contact form submissions. These services have their own privacy policies governing data handling.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas tracking-wider text-white mb-3">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:<br />
              Phone: 0322-0101444<br />
              Address: 10 CC, Block A, Fazaia Housing Society, Lahore, Pakistan</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
