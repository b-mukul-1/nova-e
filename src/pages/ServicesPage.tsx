import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, LayoutGrid, Code2, Network, CheckCircle2, Layers } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { faqsData } from '../data/faqsData';
import { Badge } from '../components/common/Badge';
import { SectionHeading } from '../components/common/SectionHeading';
import { Accordion } from '../components/common/Accordion';
import { CTASection } from '../components/home/CTASection';
import { processSteps } from '../data/companyData';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Services Overview — NovaTech Solutions';
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'consulting':
        return <Compass size={28} color="var(--color-primary-blue)" />;
      case 'digital':
        return <LayoutGrid size={28} color="var(--color-primary-blue)" />;
      case 'software':
        return <Code2 size={28} color="var(--color-primary-blue)" />;
      case 'integration':
        return <Network size={28} color="var(--color-primary-blue)" />;
      default:
        return <Compass size={28} color="var(--color-primary-blue)" />;
    }
  };

  return (
    <div>
      {/* Services Hero */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          paddingTop: 'clamp(3rem, 6vw, 4.75rem)',
          paddingBottom: 'clamp(3rem, 6vw, 4.75rem)',
          borderBottom: '1px solid var(--color-border)',
          position: 'relative'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-12)',
              alignItems: 'center'
            }}
          >
            <div>
              <Badge variant="light">PRACTICE OVERVIEW</Badge>
              <h1
                style={{
                  fontSize: 'clamp(2.25rem, 3.8vw, 3.25rem)',
                  color: 'var(--color-primary-navy)',
                  marginBottom: 'var(--space-4)',
                  lineHeight: 1.15
                }}
              >
                Comprehensive Technology Solutions for Growing Organizations
              </h1>
              <p
                className="lead"
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-6)'
                }}
              >
                From foundational architecture advisory to custom enterprise software and legacy system integration, NovaTech Solutions provides end-to-end engineering aligned with business outcomes.
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap'
                }}
              >
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <span>Schedule Technical Scoping</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Architecture Standards Card instead of generic image */}
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-4)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: 'var(--space-3)' }}>
                  <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#93C5FD' }}>
                    PRACTICE ARCHITECTURE STACK
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#34D399', fontWeight: 600 }}>
                    ● 4 Specialized Tracks
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <div style={{ padding: 'var(--space-3)', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>01 / Technology Consulting</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '2px' }}>Audits, cloud topology, vendor feasibility & modernization roadmaps</div>
                  </div>

                  <div style={{ padding: 'var(--space-3)', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>02 / Digital Solutions</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '2px' }}>Workflow automation, extranets, operations portals & design systems</div>
                  </div>

                  <div style={{ padding: 'var(--space-3)', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>03 / Software & Web Development</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '2px' }}>Custom web applications, secure APIs, databases & CI/CD deployment</div>
                  </div>

                  <div style={{ padding: 'var(--space-3)', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>04 / Technology Integration</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '2px' }}>Event-driven middleware, ERP/CRM synchronization & system monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Detailed Cards */}
      <section className="section section-pale" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="PRACTICE DISCIPLINES"
            title="Our Four Core Service Offerings"
            subtitle="Click on any discipline below to view in-depth deliverable breakdowns, sample architectural patterns, and execution phases."
            align="center"
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-8)'
            }}
          >
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="card"
                style={{
                  backgroundColor: 'var(--color-surface-white)',
                  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 'var(--space-8)',
                  alignItems: 'start'
                }}
              >
                {/* Column 1: Info & Description */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-blue-subtle)',
                        border: '1px solid var(--color-light-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      aria-hidden="true"
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-primary-blue)', textTransform: 'uppercase' }}>
                        Practice 0{index + 1}
                      </span>
                      <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-primary-navy)', margin: 0 }}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 'var(--space-6)' }}>
                    {service.fullDescription}
                  </p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="btn btn-secondary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
                  >
                    <span>View Dedicated Service Specification</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Column 2: Key Deliverables & Architecture Note */}
                <div
                  style={{
                    backgroundColor: 'var(--color-pale-bg)',
                    padding: 'var(--space-6)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 'var(--space-4)'
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontSize: 'var(--text-xs)',
                        fontWeight: 700,
                        color: 'var(--color-primary-navy)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: 'var(--space-3)'
                      }}
                    >
                      Tangible Client Deliverables:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                      {service.deliverables.map((d) => (
                        <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                          <CheckCircle2 size={16} color="var(--color-primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-border)' }}>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                      <Layers size={14} color="var(--color-primary-blue)" />
                      <span>{service.architectureSummary}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explanation of Business Value */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="BUSINESS IMPACT"
            title="The Strategic Value of Technical Discipline"
            subtitle="How deliberate software engineering and reliable infrastructure translate directly into operational cost savings and business stability."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-6)'
            }}
          >
            <div className="card" style={{ padding: 'var(--space-6)' }}>
              <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-2)' }}>
                Reduced Maintenance Burden
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                By avoiding brittle quick-fixes and implementing modular, strictly typed code with automated tests, maintenance costs and unexpected outages are substantially reduced over the application lifecycle.
              </p>
            </div>

            <div className="card" style={{ padding: 'var(--space-6)' }}>
              <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-2)' }}>
                Operational Agility
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Well-architected systems decouple core business rules from external vendor tools, enabling organizations to upgrade, migrate, or adopt new technologies without disrupting core workflows.
              </p>
            </div>

            <div className="card" style={{ padding: 'var(--space-6)' }}>
              <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-2)' }}>
                Complete Intellectual Autonomy
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                You retain complete ownership of all repositories, pipelines, and architectural assets. Thorough documentation and clean runbooks ensure your organization is never locked into a single provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process Recap */}
      <section className="section section-pale" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="EXECUTION ROADMAP"
            title="Our Delivery Framework"
            subtitle="Every practice engagement adheres to our standardized four-stage delivery model."
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 'var(--space-4)'
            }}
          >
            {processSteps.map((step) => (
              <div
                key={step.number}
                style={{
                  backgroundColor: 'var(--color-surface-white)',
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--color-primary-blue)', marginBottom: 'var(--space-2)' }}>
                  {step.number}
                </div>
                <h4 style={{ fontSize: 'var(--text-base)', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-2)' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {step.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant FAQs */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="SERVICE QUESTIONS"
            title="Questions About Our Services & Engagements"
            align="center"
          />
          <Accordion items={faqsData.slice(0, 4)} defaultOpenIndex={0} />
        </div>
      </section>

      {/* Closing CTA */}
      <CTASection />
    </div>
  );
};
