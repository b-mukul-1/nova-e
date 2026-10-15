import React from 'react';
import { Target, Wrench, MessageSquare, Shield } from 'lucide-react';
import { whyNovaTechPoints } from '../../data/companyData';
import { SectionHeading } from '../common/SectionHeading';

export const WhyNovaTechSection: React.FC = () => {
  const icons = [
    <Target size={28} color="var(--color-primary-blue)" />,
    <Wrench size={28} color="var(--color-primary-blue)" />,
    <MessageSquare size={28} color="var(--color-primary-blue)" />,
    <Shield size={28} color="var(--color-primary-blue)" />
  ];

  return (
    <section className="section" id="why-novatech" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <SectionHeading
          eyebrow="WHY NOVATECH"
          title="Engineered for Business Outcomes, Not Technical Hype"
          subtitle="Our engineering ethos is built on operational reality, clear trade-offs, and sustainable software longevity."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-8)'
          }}
        >
          {whyNovaTechPoints.map((point, index) => (
            <div
              key={point.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-surface-white)',
                border: '1px solid var(--color-border)'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-light-blue-subtle)',
                  border: '1px solid var(--color-light-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-hidden="true"
              >
                {icons[index]}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 700,
                  color: 'var(--color-primary-navy)'
                }}
              >
                {point.title}
              </h3>

              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.65,
                  margin: 0
                }}
              >
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
