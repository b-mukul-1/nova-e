import React from 'react';
import { Layers, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { trustPillars } from '../../data/companyData';

export const TrustSection: React.FC = () => {
  const icons = [
    <Layers size={24} color="var(--color-primary-blue)" />,
    <CheckCircle2 size={24} color="var(--color-primary-blue)" />,
    <ShieldCheck size={24} color="var(--color-primary-blue)" />,
    <HeartHandshake size={24} color="var(--color-primary-blue)" />
  ];

  return (
    <section
      className="section section-pale"
      style={{
        borderBottom: '1px solid var(--color-border)',
        paddingTop: 'var(--space-16)',
        paddingBottom: 'var(--space-16)'
      }}
    >
      <div className="container">
        {/* Intro context */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '780px',
            margin: '0 auto var(--space-12) auto'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-xs)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-primary-blue)',
              marginBottom: 'var(--space-2)',
              display: 'block'
            }}
          >
            Engineering Credibility & Approach
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
              color: 'var(--color-primary-navy)',
              marginBottom: 'var(--space-4)'
            }}
          >
            Built on Disciplined Engineering & Clear Business Reality
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-base)' }}>
            We do not rely on inflated marketing claims or opaque buzzwords. Our practice is anchored in sound system architecture, verified engineering standards, and direct accountability to your operational leadership.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-6)'
          }}
        >
          {trustPillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="card"
              style={{
                backgroundColor: 'var(--color-surface-white)',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-light-blue-subtle)',
                  border: '1px solid var(--color-light-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-hidden="true"
              >
                {icons[idx]}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 700,
                  color: 'var(--color-primary-navy)'
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
