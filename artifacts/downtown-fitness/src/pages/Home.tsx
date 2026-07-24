import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyUs from '@/components/WhyUs';
import Membership from '@/components/Membership';
import Facilities from '@/components/Facilities';
import Trainers from '@/components/Trainers';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import BMICalculator from '@/components/BMICalculator';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, [loading]);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      
      {!loading && (
        <div className="bg-background min-h-screen text-foreground overflow-x-hidden">
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <WhyUs />
            <Membership />
            <Facilities />
            <Trainers />
            <Reviews />
            <Gallery />
            <BMICalculator />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
          <FloatingCTA />
        </div>
      )}
    </>
  );
}
