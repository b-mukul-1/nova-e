import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '../common/Button';

export const CTASection: React.FC = () => {
  return (
    <section
      className="section section-navy"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(4rem, 8vw, 6rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
        textAlign: 'center'
      }}
    >
      {/* Background geometric accents */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.18) 0%, rgba(7, 20, 38, 0) 70%)',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '820px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            padding: '0.35rem 0.85rem',
            backgroundColor: 'rgba(219, 234, 254, 0.12)',
            color: '#93C5FD',
            fontSize: 'var(--text-xs)',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            borderRadius: 'var(--radius-full)',
            marginBottom: 'var(--space-5)',
            border: '1px solid rgba(147, 197, 253, 0.25)'
          }}
        >
          DIRECT TECHNICAL CONSULTATION
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            color: 'var(--color-surface-white)',
            lineHeight: 1.2,
            marginBottom: 'var(--space-5)'
          }}
        >
          Let's Build Something That Works for Your Business.
        </h2>

        <p
          className="lead"
          style={{
            color: 'var(--color-text-inverse-muted)',
            fontSize: 'var(--text-lg)',
            lineHeight: 1.65,
            marginBottom: 'var(--space-8)',
            maxWidth: '680px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Whether evaluating an enterprise software initiative, preparing a cloud integration roadmap, or modernizing operational systems, our team is ready to review your requirements.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'var(--space-4)',
            flexWrap: 'wrap'
          }}
        >
          <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
            Start a Conversation
          </Button>
          <Button to="/services" variant="outline-white" size="lg" icon={<Mail size={18} />}>
            Explore All Practice Areas
          </Button>
        </div>
      </div>
    </section>
  );
};
