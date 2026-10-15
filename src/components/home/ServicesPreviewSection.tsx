import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, LayoutGrid, Code2, Network, CheckCircle2, Cpu } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { SectionHeading } from '../common/SectionHeading';

export const ServicesPreviewSection: React.FC = () => {
  const [activeSlug, setActiveSlug] = useState<string>(servicesData[0].slug);
  const [viewMode, setViewMode] = useState<'blueprint' | 'grid'>('blueprint');

  const selectedService = servicesData.find((s) => s.slug === activeSlug) || servicesData[0];

  const getIcon = (type: string, size = 22) => {
    switch (type) {
      case 'consulting':
        return <Compass size={size} color="var(--color-primary-blue)" />;
      case 'digital':
        return <LayoutGrid size={size} color="var(--color-primary-blue)" />;
      case 'software':
        return <Code2 size={size} color="var(--color-primary-blue)" />;
      case 'integration':
        return <Network size={size} color="var(--color-primary-blue)" />;
      default:
        return <Compass size={size} color="var(--color-primary-blue)" />;
    }
  };

  return (
    <section className="section" id="services" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header with View Mode Switcher */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-8)'
          }}
        >
          <SectionHeading
            eyebrow="CORE PRACTICE DISCIPLINES"
            title="Technology Solutions Built for Operational Reality"
            subtitle="Explore our four specialized engineering practice disciplines, each designed to solve mission-critical technical challenges."
            className=""
          />

          {/* Blueprint vs Grid toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--color-pale-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '3px',
              marginBottom: 'var(--space-12)'
            }}
          >
            <button
              type="button"
              onClick={() => setViewMode('blueprint')}
              style={{
                background: viewMode === 'blueprint' ? '#FFFFFF' : 'none',
                color: viewMode === 'blueprint' ? 'var(--color-primary-navy)' : 'var(--color-text-secondary)',
                border: 'none',
                borderRadius: 'var(--radius-xs)',
                padding: '6px 14px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: viewMode === 'blueprint' ? 'var(--shadow-subtle)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              Interactive Blueprint
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              style={{
                background: viewMode === 'grid' ? '#FFFFFF' : 'none',
                color: viewMode === 'grid' ? 'var(--color-primary-navy)' : 'var(--color-text-secondary)',
                border: 'none',
                borderRadius: 'var(--radius-xs)',
                padding: '6px 14px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: viewMode === 'grid' ? 'var(--shadow-subtle)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              Card Grid
            </button>
          </div>
        </div>

        {/* View Mode 1: Interactive Blueprint (Editorial Split) */}
        {viewMode === 'blueprint' ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-8)',
              alignItems: 'start'
            }}
          >
            {/* Left Column: 4 Category Tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {servicesData.map((service, index) => {
                const isActive = service.slug === activeSlug;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveSlug(service.slug)}
                    style={{
                      width: '100%',
                      padding: 'var(--space-5)',
                      backgroundColor: isActive ? '#FFFFFF' : 'var(--color-pale-bg)',
                      border: `1px solid ${isActive ? 'var(--color-primary-blue)' : 'var(--color-border)'}`,
                      borderLeft: `4px solid ${isActive ? 'var(--color-primary-blue)' : 'transparent'}`,
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all var(--transition-fast)',
                      boxShadow: isActive ? 'var(--shadow-card)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-4)'
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: isActive ? 'var(--color-blue-subtle)' : '#FFFFFF',
                        border: '1px solid var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                      aria-hidden="true"
                    >
                      {getIcon(service.iconName, 20)}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-blue)' }}>
                          Practice 0{index + 1}
                        </span>
                        {isActive && <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-primary-blue)' }}>Active View</span>}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: 'var(--color-primary-navy)',
                          marginTop: '2px'
                        }}
                      >
                        {service.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Practice Blueprint View */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-white)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-2)' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--color-primary-blue)',
                    letterSpacing: '0.06em'
                  }}
                >
                  ENGINEERING SPECIFICATION
                </span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                  color: 'var(--color-primary-navy)',
                  marginBottom: 'var(--space-3)'
                }}
              >
                {selectedService.title}
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 'var(--space-6)' }}>
                {selectedService.fullDescription}
              </p>

              {/* Architectural Pattern Note */}
              <div
                style={{
                  padding: 'var(--space-4)',
                  backgroundColor: 'var(--color-pale-bg)',
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '4px solid var(--color-primary-blue)',
                  marginBottom: 'var(--space-6)',
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '4px' }}>
                  <Cpu size={16} color="var(--color-primary-blue)" />
                  <span>Architecture Pattern:</span>
                </div>
                <span>{selectedService.architectureSummary}</span>
              </div>

              {/* Deliverables Checklist */}
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-3)' }}>
                  Core Client Deliverables:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-2)' }}>
                  {selectedService.deliverables.map((d) => (
                    <div key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.825rem', color: 'var(--color-text-secondary)' }}>
                      <CheckCircle2 size={16} color="var(--color-primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)' }}>
                <Link
                  to={`/services/${selectedService.slug}`}
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>View Dedicated Service Specification</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to={`/contact?service=${selectedService.slug}`}
                  className="btn btn-secondary"
                >
                  <span>Inquire About This Service</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* View Mode 2: Card Grid */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'var(--space-6)'
            }}
          >
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 'var(--space-8)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface-white)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div>
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
                      marginBottom: 'var(--space-5)'
                    }}
                    aria-hidden="true"
                  >
                    {getIcon(service.iconName, 24)}
                  </div>

                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-primary-blue)', textTransform: 'uppercase' }}>
                    Practice 0{index + 1}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'var(--text-xl)',
                      fontWeight: 700,
                      color: 'var(--color-primary-navy)',
                      marginBottom: 'var(--space-3)',
                      marginTop: '4px'
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: 'var(--space-6)'
                    }}
                  >
                    {service.shortDescription}
                  </p>
                </div>

                <div style={{ paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)' }}>
                  <Link
                    to={`/services/${service.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 600,
                      color: 'var(--color-primary-blue)',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
