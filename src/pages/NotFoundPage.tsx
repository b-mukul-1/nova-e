import React, { useEffect } from 'react';
import { Home, Compass } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found — NovaTech Solutions';
  }, []);

  return (
    <section
      style={{
        paddingTop: 'clamp(4rem, 8vw, 8rem)',
        paddingBottom: 'clamp(4rem, 8vw, 8rem)',
        textAlign: 'center',
        backgroundColor: 'var(--color-pale-bg)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container" style={{ maxWidth: '600px' }}>
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-hero)',
            fontWeight: 800,
            color: 'var(--color-primary-blue)',
            lineHeight: 1,
            marginBottom: 'var(--space-2)'
          }}
        >
          404
        </div>
        <h1
          style={{
            fontSize: 'var(--text-3xl)',
            color: 'var(--color-primary-navy)',
            marginBottom: 'var(--space-4)'
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-8)'
          }}
        >
          The page or route you requested could not be located on the NovaTech Solutions system. Please use the links below to return to our primary navigation.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <Button to="/" variant="primary" icon={<Home size={18} />}>
            Return to Homepage
          </Button>
          <Button to="/services" variant="secondary" icon={<Compass size={18} />}>
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};
