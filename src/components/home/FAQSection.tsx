import React from 'react';
import { faqsData } from '../../data/faqsData';
import { SectionHeading } from '../common/SectionHeading';
import { Accordion } from '../common/Accordion';

export const FAQSection: React.FC = () => {
  return (
    <section className="section" id="faq" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <SectionHeading
          eyebrow="COMMON QUESTIONS"
          title="Frequently Asked Questions"
          subtitle="Clear answers on how we structure project conversations, evaluate scope, and deliver sustainable engineering solutions."
          align="center"
        />

        <Accordion items={faqsData} defaultOpenIndex={0} />
      </div>
    </section>
  );
};
