import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { TrustBar } from '../components/home/TrustBar';
import { CompanyIntro } from '../components/home/CompanyIntro';
import { ProductCategories } from '../components/home/ProductCategories';
import { Certifications } from '../components/home/Certifications';
import { Manufacturing } from '../components/home/Manufacturing';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { GlobalPresence } from '../components/home/GlobalPresence';
import { ContactCTA } from '../components/home/ContactCTA';

export const Home: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Banner Section */}
      <Hero />

      {/* Trust Stats bar */}
      <TrustBar />

      {/* Corporate profile intro */}
      <CompanyIntro />

      {/* Showcase segments */}
      <ProductCategories />

      {/* In-depth quality credentials */}
      <Certifications />

      {/* Operational machinery & inspection capabilities */}
      <Manufacturing />

      {/* Brand value pillars */}
      <WhyChooseUs />

      {/* Geographic network map */}
      <GlobalPresence />

      {/* Final direct inquiry strip */}
      <ContactCTA />
    </div>
  );
};
