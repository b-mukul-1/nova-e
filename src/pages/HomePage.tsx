import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { MetricsBanner } from '../components/home/MetricsBanner';
import { TrustSection } from '../components/home/TrustSection';
import { ServicesPreviewSection } from '../components/home/ServicesPreviewSection';
import { ScopeEstimatorWidget } from '../components/home/ScopeEstimatorWidget';
import { ArchitectureComparisonSection } from '../components/home/ArchitectureComparisonSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { WhyNovaTechSection } from '../components/home/WhyNovaTechSection';
import { FeaturedCaseStudySection } from '../components/home/FeaturedCaseStudySection';
import { FAQSection } from '../components/home/FAQSection';
import { CTASection } from '../components/home/CTASection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'NovaTech Solutions — Technology Solutions Built Around Your Business';
  }, []);

  return (
    <>
      <HeroSection />
      <MetricsBanner />
      <TrustSection />
      <ServicesPreviewSection />
      <ScopeEstimatorWidget />
      <ArchitectureComparisonSection />
      <ProcessSection />
      <WhyNovaTechSection />
      <FeaturedCaseStudySection />
      <FAQSection />
      <CTASection />
    </>
  );
};
