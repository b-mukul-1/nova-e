import React from 'react';

export const MetricsBanner: React.FC = () => {
  const metrics = [
    {
      value: '500+',
      label: 'Engineered Workflows',
      sublabel: 'Decoupled systems & API pipelines'
    },
    {
      value: '99.9%',
      label: 'Architecture Reliability Target',
      sublabel: 'Fault-tolerant SLA engineering'
    },
    {
      value: '15+',
      label: 'Core Frameworks Supported',
      sublabel: 'Cloud, relational & event architectures'
    },
    {
      value: '100%',
      label: 'Client Codebase Ownership',
      sublabel: 'Zero proprietary vendor lock-in'
    }
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--color-primary-blue)',
        color: '#FFFFFF',
        padding: 'clamp(2.5rem, 4vw, 3.5rem) 0',
        position: 'relative',
        zIndex: 2,
        boxShadow: '0 4px 20px rgba(37, 99, 235, 0.2)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-8)',
            textAlign: 'center'
          }}
        >
          {metrics.map((m) => (
            <div key={m.label} style={{ padding: '0 1rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 4.2vw, 3.25rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '0.4rem'
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  marginBottom: '0.25rem',
                  letterSpacing: '-0.01em',
                  color: '#EFF6FF'
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontSize: '0.775rem',
                  color: '#BFDBFE',
                  lineHeight: 1.4
                }}
              >
                {m.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
