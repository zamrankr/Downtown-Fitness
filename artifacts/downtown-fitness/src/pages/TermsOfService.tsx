import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bebas uppercase tracking-wider mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: July 2026</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bebas tracking-wider text-white mb-3">Membership</h2>
              <p>Membership plans are subject to the terms agreed upon during sign-up. All fees are non-refundable unless stated otherwise. Downtown Fitness reserves the right to modify membership plans with prior notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas tracking-wider text-white mb-3">Facility Usage</h2>
              <p>Members and guests must follow all gym rules and staff instructions. Downtown Fitness is not responsible for personal injuries or lost belongings. Proper athletic attire and footwear are required at all times.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas tracking-wider text-white mb-3">Code of Conduct</h2>
              <p>We strive to maintain a respectful and motivating environment. Any form of harassment, discrimination, or disruptive behavior will result in immediate termination of membership without refund.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas tracking-wider text-white mb-3">Liability</h2>
              <p>Downtown Fitness is not liable for any injuries, damages, or losses incurred while using our facilities. Members use equipment and participate in activities at their own risk.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas tracking-wider text-white mb-3">Changes to Terms</h2>
              <p>We reserve the right to update these terms at any time. Members will be notified of significant changes via email or on-site notice.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
