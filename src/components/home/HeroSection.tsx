import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Cpu } from 'lucide-react';
import { Button } from '../common/Button';
import { ArchitectureCanvas } from './ArchitectureCanvas';

export const HeroSection: React.FC = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: 'clamp(3rem, 6vw, 4.75rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 5.5rem)',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      {/* Subtle light-blue radial glow matching reference aesthetic */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '5%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(234, 243, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: 'clamp(2rem, 5vw, 4rem)'
          }}
        >
          {/* Left Column: Messaging & CTAs */}
          <div className="hero-text-col" style={{ maxWidth: '600px' }}>
            {/* Eyebrow with blue indicator dot */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.35rem 0.85rem',
                backgroundColor: 'var(--color-blue-subtle)',
                color: 'var(--color-primary-blue-dark)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                borderRadius: 'var(--radius-full)',
                marginBottom: 'var(--space-5)',
                border: '1px solid rgba(37, 99, 235, 0.2)'
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary-blue)',
                  display: 'inline-block'
                }}
                aria-hidden="true"
              />
              <span>Leading Technology Architecture & Advisory</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-primary-navy)',
                fontSize: 'clamp(2.35rem, 4vw + 0.5rem, 3.6rem)',
                lineHeight: 1.14,
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: 'var(--space-6)'
              }}
            >
              Transform Your Business with{' '}
              <span style={{ color: 'var(--color-primary-blue)' }}>Strategic Technology.</span>
            </h1>

            <p
              className="lead"
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                marginBottom: 'var(--space-8)'
              }}
            >
              Empowering enterprises to navigate digital complexity and achieve sustainable growth through innovative technology solutions, bespoke software engineering, and dependable architectural guidance.
            </p>

            {/* CTAs */}
            <div
              className="hero-ctas"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-8)'
              }}
            >
              <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                Schedule Consultation
              </Button>
              <Button to="/services" variant="secondary" size="lg" icon={<Compass size={18} />}>
                Explore Our Services
              </Button>
            </div>

            {/* Key Assurance Indicators */}
            <div
              style={{
                paddingTop: 'var(--space-6)',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-6)',
                color: 'var(--color-text-muted)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={17} color="var(--color-primary-blue)" />
                <span style={{ color: 'var(--color-primary-navy)' }}>Enterprise Architecture Rigor</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={17} color="var(--color-primary-blue)" />
                <span style={{ color: 'var(--color-primary-navy)' }}>Zero Vendor Lock-In</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Architecture Console */}
          <div className="hero-visual-col" style={{ width: '100%' }}>
            <ArchitectureCanvas />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
