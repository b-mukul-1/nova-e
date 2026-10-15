import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Clock, ShieldCheck } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} — NovaTech Solutions`;
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div>
      {/* Breadcrumb Bar */}
      <div
        style={{
          backgroundColor: 'var(--color-surface-white)',
          borderBottom: '1px solid var(--color-border)',
          padding: 'var(--space-4) 0'
        }}
      >
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
              Home
            </Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link to="/services" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
              Services
            </Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span style={{ color: 'var(--color-primary-navy)', fontWeight: 600 }}>
              {service.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Service Hero Banner */}
      <section
        style={{
          backgroundColor: 'var(--color-pale-bg)',
          paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <Badge variant="light">SERVICE SPECIFICATION</Badge>
            <h1
              style={{
                fontSize: 'clamp(2.25rem, 3.8vw, 3.25rem)',
                color: 'var(--color-primary-navy)',
                marginBottom: 'var(--space-4)',
                lineHeight: 1.2
              }}
            >
              {service.title}
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
              {service.tagline}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
              <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                Discuss Your {service.title} Needs
              </Button>
              <Button to="/services" variant="secondary" size="lg" icon={<ArrowLeft size={18} />} iconPosition="left">
                Back to All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-12)',
              alignItems: 'start'
            }}
          >
            {/* Left Column: Narrative, Benefits, Use cases */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
              {/* Detailed Overview */}
              <div>
                <h2
                  style={{
                    fontSize: 'var(--text-2xl)',
                    color: 'var(--color-primary-navy)',
                    marginBottom: 'var(--space-4)'
                  }}
                >
                  Overview & Engineering Focus
                </h2>
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: 'var(--space-4)'
                  }}
                >
                  {service.fullDescription}
                </p>
                <div
                  style={{
                    padding: 'var(--space-4)',
                    backgroundColor: 'var(--color-pale-bg)',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '4px solid var(--color-primary-blue)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  <strong>Architectural Pattern:</strong> {service.architectureSummary}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h3
                  style={{
                    fontSize: 'var(--text-xl)',
                    color: 'var(--color-primary-navy)',
                    marginBottom: 'var(--space-4)'
                  }}
                >
                  Strategic Business Advantages
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: 'var(--space-4)'
                  }}
                >
                  {service.keyBenefits.map((benefit) => (
                    <div
                      key={benefit}
                      style={{
                        padding: 'var(--space-5)',
                        backgroundColor: 'var(--color-surface-white)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-3)'
                      }}
                    >
                      <CheckCircle2 size={18} color="var(--color-primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Enterprise Scenarios */}
              <div>
                <h3
                  style={{
                    fontSize: 'var(--text-xl)',
                    color: 'var(--color-primary-navy)',
                    marginBottom: 'var(--space-4)'
                  }}
                >
                  Sample Enterprise Scenarios
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {service.sampleUseCases.map((useCase) => (
                    <div
                      key={useCase.heading}
                      style={{
                        padding: 'var(--space-6)',
                        backgroundColor: 'var(--color-pale-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)'
                      }}
                    >
                      <h4
                        style={{
                          fontSize: 'var(--text-base)',
                          fontWeight: 700,
                          color: 'var(--color-primary-navy)',
                          marginBottom: 'var(--space-2)'
                        }}
                      >
                        {useCase.heading}
                      </h4>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                        {useCase.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables & Execution Phases */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-6)',
                position: 'sticky',
                top: 'calc(var(--navbar-height) + var(--space-6))'
              }}
            >
              {/* Deliverables Card */}
              <div
                className="card"
                style={{
                  backgroundColor: 'var(--color-surface-white)',
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                  <ShieldCheck size={20} color="var(--color-primary-blue)" />
                  <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--color-primary-navy)', margin: 0 }}>
                    Standard Deliverables
                  </h3>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-3)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.5
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-primary-blue)',
                          marginTop: '8px',
                          flexShrink: 0
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Execution Phases Timeline */}
              <div
                className="card"
                style={{
                  backgroundColor: 'var(--color-surface-white)',
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                  <Clock size={20} color="var(--color-primary-blue)" />
                  <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--color-primary-navy)', margin: 0 }}>
                    Typical Delivery Progression
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {service.deliveryPhases.map((phase) => (
                    <div key={phase.phase} style={{ borderLeft: '2px solid var(--color-light-blue)', paddingLeft: 'var(--space-3)' }}>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-primary-blue)', textTransform: 'uppercase' }}>
                        {phase.phase}
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginTop: '2px', lineHeight: 1.5 }}>
                        {phase.details}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 'var(--space-6)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)' }}>
                  <Link
                    to="/contact"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>Request Scoping Consultation</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between other services */}
      <section className="section section-pale">
        <div className="container">
          <h3
            style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--color-primary-navy)',
              marginBottom: 'var(--space-6)',
              textAlign: 'center'
            }}
          >
            Explore Other Practice Disciplines
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 'var(--space-4)'
            }}
          >
            {servicesData
              .filter((s) => s.slug !== service.slug)
              .map((other) => (
                <Link
                  key={other.id}
                  to={`/services/${other.slug}`}
                  className="card"
                  style={{
                    backgroundColor: 'var(--color-surface-white)',
                    padding: 'var(--space-5)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 'var(--space-3)'
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: 'var(--text-base)', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-1)' }}>
                      {other.title}
                    </h4>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      {other.shortDescription}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-primary-blue)' }}>
                    <span>Learn more</span>
                    <ArrowRight size={13} />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
