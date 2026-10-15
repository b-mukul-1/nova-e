import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { processSteps } from '../../data/companyData';
import { SectionHeading } from '../common/SectionHeading';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="section section-pale" id="approach" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <SectionHeading
          eyebrow="OUR METHODOLOGY"
          title="A Structured, Transparent Delivery Process"
          subtitle="From initial architecture discovery to post-launch optimization, every engagement follows an orderly, risk-mitigated progression."
          align="center"
        />

        {/* Step Selector Pills / Timeline Bar */}
        <div
          role="tablist"
          aria-label="Delivery Process Steps"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-8)'
          }}
          className="process-tablist"
        >
          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                role="tab"
                aria-selected={isActive}
                aria-controls={`process-panel-${idx}`}
                id={`process-tab-${idx}`}
                onClick={() => setActiveStep(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  padding: 'var(--space-4) var(--space-5)',
                  backgroundColor: isActive ? 'var(--color-primary-navy)' : 'var(--color-surface-white)',
                  color: isActive ? 'var(--color-surface-white)' : 'var(--color-text-primary)',
                  border: `1px solid ${isActive ? 'var(--color-primary-navy)' : 'var(--color-border)'}`,
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isActive ? 'var(--shadow-card)' : 'none'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 800,
                    color: isActive ? '#60A5FA' : 'var(--color-primary-blue)',
                    opacity: isActive ? 1 : 0.8
                  }}
                >
                  {step.number}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: 'var(--text-base)',
                      lineHeight: 1.2
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: isActive ? '#94A3B8' : 'var(--color-text-muted)',
                      display: 'none'
                    }}
                    className="tab-subtitle"
                  >
                    Phase {idx + 1}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Card */}
        <div
          id={`process-panel-${activeStep}`}
          role="tabpanel"
          aria-labelledby={`process-tab-${activeStep}`}
          style={{
            backgroundColor: 'var(--color-surface-white)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            boxShadow: 'var(--shadow-card)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-8)',
            alignItems: 'center'
          }}
        >
          {/* Left: Summary & Deliverable */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                color: 'var(--color-primary-blue)',
                fontSize: 'var(--text-sm)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 'var(--space-2)'
              }}
            >
              <span>Phase {processSteps[activeStep].number}</span>
              <span>•</span>
              <span>{processSteps[activeStep].tagline}</span>
            </div>

            <h3
              style={{
                fontSize: 'var(--text-3xl)',
                color: 'var(--color-primary-navy)',
                marginBottom: 'var(--space-4)'
              }}
            >
              {processSteps[activeStep].title}
            </h3>

            <p
              style={{
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-6)'
              }}
            >
              {processSteps[activeStep].summary}
            </p>

            <div
              style={{
                padding: 'var(--space-4) var(--space-5)',
                backgroundColor: 'var(--color-pale-bg)',
                borderRadius: 'var(--radius-sm)',
                borderLeft: '4px solid var(--color-primary-blue)'
              }}
            >
              <div
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--color-text-muted)',
                  marginBottom: 'var(--space-1)'
                }}
              >
                Key Tangible Deliverable:
              </div>
              <div
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--color-primary-navy)'
                }}
              >
                {processSteps[activeStep].deliverable}
              </div>
            </div>
          </div>

          {/* Right: Key Activities checklist */}
          <div
            style={{
              backgroundColor: 'var(--color-pale-bg)',
              padding: 'var(--space-6)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)'
            }}
          >
            <h4
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 700,
                color: 'var(--color-primary-navy)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 'var(--space-4)'
              }}
            >
              Key Phase Activities:
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)'
              }}
            >
              {processSteps[activeStep].activities.map((act) => (
                <li
                  key={act}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-3)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.5
                  }}
                >
                  <CheckCircle2
                    size={18}
                    color="var(--color-primary-blue)"
                    style={{ flexShrink: 0, marginTop: '2px' }}
                    aria-hidden="true"
                  />
                  <span>{act}</span>
                </li>
              ))}
            </ul>

            {/* Quick Next Phase prompt */}
            <div
              style={{
                marginTop: 'var(--space-6)',
                paddingTop: 'var(--space-4)',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <button
                type="button"
                onClick={() => setActiveStep((activeStep + 1) % processSteps.length)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-primary-blue)',
                  fontWeight: 600,
                  fontSize: 'var(--text-xs)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-1)',
                  cursor: 'pointer'
                }}
              >
                <span>Next: {processSteps[(activeStep + 1) % processSteps.length].title}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-tablist {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
