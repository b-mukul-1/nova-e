import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Compass, Shield, Users, Award, Terminal, Code2, Layers, Cpu } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { SectionHeading } from '../components/common/SectionHeading';
import { aboutCompanyData, processSteps } from '../data/companyData';
import { CTASection } from '../components/home/CTASection';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us — NovaTech Solutions';
  }, []);

  const valueIcons = [
    <Shield size={24} color="var(--color-primary-blue)" />,
    <Compass size={24} color="var(--color-primary-blue)" />,
    <Users size={24} color="var(--color-primary-blue)" />,
    <Award size={24} color="var(--color-primary-blue)" />
  ];

  return (
    <div>
      {/* Page Hero */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          paddingTop: 'clamp(3rem, 6vw, 4.5rem)',
          paddingBottom: 'clamp(3rem, 6vw, 4.5rem)',
          borderBottom: '1px solid var(--color-border)',
          position: 'relative'
        }}
      >
        <div className="container" style={{ maxWidth: '960px', textAlign: 'center' }}>
          <Badge variant="light">ABOUT NOVATECH SOLUTIONS</Badge>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 3.6vw, 3.25rem)',
              color: 'var(--color-primary-navy)',
              marginBottom: 'var(--space-6)',
              lineHeight: 1.15
            }}
          >
            Engineering Practical Technology for Real Business Contexts
          </h1>
          <p
            className="lead"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              maxWidth: '820px',
              margin: '0 auto var(--space-8) auto'
            }}
          >
            {aboutCompanyData.overview}
          </p>
          <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
            Discuss Your Initiative
          </Button>
        </div>
      </section>

      {/* Mission & Philosophy Split Section with Engineering Matrix */}
      <section className="section section-pale" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-12)',
              alignItems: 'center'
            }}
          >
            {/* Interactive Engineering Matrix Board */}
            <div>
              <div
                style={{
                  backgroundColor: 'var(--color-deep-navy)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  border: '1px solid #1E3A8A',
                  color: '#FFFFFF',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-5)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: 'var(--space-3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Terminal size={16} color="#60A5FA" />
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#93C5FD' }}>
                      ENGINEERING PRINCIPLES MATRIX
                    </span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#34D399' }}>● Active Standards</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <div style={{ padding: 'var(--space-4)', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#93C5FD', fontSize: '0.85rem', fontWeight: 700 }}>
                      <Code2 size={16} />
                      <span>Strict Architectural Integrity</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#CBD5E1', margin: '4px 0 0 0', lineHeight: 1.4 }}>
                      Clean abstractions, strict type safety, zero technical debt shortcuts, and comprehensive test coverage.
                    </p>
                  </div>

                  <div style={{ padding: 'var(--space-4)', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#60A5FA', fontSize: '0.85rem', fontWeight: 700 }}>
                      <Layers size={16} />
                      <span>Decoupled Maintainability</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#CBD5E1', margin: '4px 0 0 0', lineHeight: 1.4 }}>
                      Separation of business logic from third-party vendor frameworks to ensure seamless future migrations.
                    </p>
                  </div>

                  <div style={{ padding: 'var(--space-4)', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38BDF8', fontSize: '0.85rem', fontWeight: 700 }}>
                      <Cpu size={16} />
                      <span>Deterministic Scalability</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#CBD5E1', margin: '4px 0 0 0', lineHeight: 1.4 }}>
                      Asynchronous message queues and stateless services engineered for graceful peak traffic surges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Philosophy Content */}
            <div>
              <Badge variant="light">MISSION & WORKING PHILOSOPHY</Badge>
              <h2
                style={{
                  fontSize: 'clamp(1.85rem, 2.5vw, 2.4rem)',
                  color: 'var(--color-primary-navy)',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Technology Built to Serve Strategy, Not Complicate It
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-6)'
                }}
              >
                {aboutCompanyData.mission}
              </p>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-6)'
                }}
              >
                {aboutCompanyData.philosophy}
              </p>

              <div
                style={{
                  padding: 'var(--space-5)',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-primary-navy)' }}>
                  Our Technical Commitments:
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                  <CheckCircle2 size={16} color="var(--color-primary-blue)" />
                  <span>Strict code maintainability and thorough documentation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                  <CheckCircle2 size={16} color="var(--color-primary-blue)" />
                  <span>Transparent evaluation of trade-offs and operational risks</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                  <CheckCircle2 size={16} color="var(--color-primary-blue)" />
                  <span>Direct architectural collaboration without intermediary layers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles & Core Values Section */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="CORE PRINCIPLES"
            title="The Standards That Guide Every Engagement"
            subtitle="Our working principles define how we evaluate technology, collaborate with corporate stakeholders, and engineer dependable systems."
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'var(--space-6)'
            }}
          >
            {aboutCompanyData.values.map((val, idx) => (
              <div
                key={val.title}
                className="card"
                style={{
                  backgroundColor: 'var(--color-surface-white)',
                  padding: 'var(--space-8)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-blue-subtle)',
                    border: '1px solid var(--color-light-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}
                  aria-hidden="true"
                >
                  {valueIcons[idx]}
                </div>
                <h3
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    color: 'var(--color-primary-navy)',
                    marginBottom: 'var(--space-3)'
                  }}
                >
                  {val.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery-to-Delivery Process Summary */}
      <section className="section section-pale" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="EXECUTION DISCIPLINE"
            title="The Discovery-to-Delivery Lifecycle"
            subtitle="How we guide projects from initial operational inquiry through architecture modeling, phased build, and verified handover."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 'var(--space-6)'
            }}
          >
            {processSteps.map((step) => (
              <div
                key={step.number}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-6)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 800,
                    color: 'var(--color-primary-blue)'
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    color: 'var(--color-primary-navy)'
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-primary-blue)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {step.tagline}
                </p>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {step.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CTASection />
    </div>
  );
};
