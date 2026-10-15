import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sparkles, Layers, Clock, ShieldCheck } from 'lucide-react';

interface ScopeOption {
  id: string;
  title: string;
  category: string;
  recommendedService: string;
  slug: string;
  suggestedFirstStep: string;
  typicalTimeline: string;
  guidance: string;
  deliverables: string[];
}

const challengeOptions: ScopeOption[] = [
  {
    id: 'consulting',
    title: 'Technology Roadmap & Platform Selection',
    category: 'Architecture Advisory',
    recommendedService: 'Technology Consulting',
    slug: 'technology-consulting',
    suggestedFirstStep: 'Architecture & Technical Debt Audit',
    typicalTimeline: '2 to 3 weeks for scoping & target blueprint',
    guidance: 'Best for leadership teams needing independent validation before investing in major software or multi-cloud transitions.',
    deliverables: [
      'Comprehensive Technology Architecture Audit',
      'Target Modernization & Migration Roadmap',
      'Vendor & Platform Technical Feasibility Matrix'
    ]
  },
  {
    id: 'software',
    title: 'Custom Web Application or Operations Portal',
    category: 'Bespoke Engineering',
    recommendedService: 'Software & Web Development',
    slug: 'software-web-development',
    suggestedFirstStep: 'Functional Requirements & Prototype Blueprint',
    typicalTimeline: '4 to 8 weeks for production pilot deployment',
    guidance: 'Ideal for replacing disjointed spreadsheets and off-the-shelf limits with clean, accessible, branded portals.',
    deliverables: [
      'Full-Stack Custom Web Application',
      'Role-Governed Administrative Portals',
      'Automated CI/CD Deployment Pipelines & Test Suites'
    ]
  },
  {
    id: 'integration',
    title: 'Connecting Isolated Systems, ERP & Databases',
    category: 'Systems Integration',
    recommendedService: 'Technology Integration',
    slug: 'technology-integration',
    suggestedFirstStep: 'API Compatibility & Data Contract Audit',
    typicalTimeline: '3 to 6 weeks for resilient data pipeline',
    guidance: 'Perfect for eliminating duplicate manual data entry between your sales, inventory, and finance software.',
    deliverables: [
      'Custom Enterprise Middleware & API Connectors',
      'Event-Driven Message Queuing Architecture',
      'Automated Data Cleansing & Deduplication Pipelines'
    ]
  },
  {
    id: 'digital',
    title: 'Automating Core Operations & Workflow Approvals',
    category: 'Digital Solutions',
    recommendedService: 'Digital Solutions',
    slug: 'digital-solutions',
    suggestedFirstStep: 'Operational Workflow Friction Heatmap',
    typicalTimeline: '3 to 5 weeks per core workflow',
    guidance: 'Recommended for teams seeking phased, low-risk digital adoption without disrupting ongoing daily customer service.',
    deliverables: [
      'Operations Workflow Automation Engine',
      'Enterprise Self-Service Partner Workflows',
      'Role-Based Access Control with Audit Trails'
    ]
  }
];

export const ScopeEstimatorWidget: React.FC = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<string>(challengeOptions[0].id);

  const current = challengeOptions.find((c) => c.id === selectedChallenge) || challengeOptions[0];

  return (
    <section
      className="section"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--color-border)'
      }}
      aria-labelledby="scope-widget-title"
    >
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--color-pale-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.35rem 0.85rem',
                backgroundColor: 'var(--color-blue-subtle)',
                color: 'var(--color-primary-blue-dark)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderRadius: 'var(--radius-full)',
                marginBottom: 'var(--space-3)',
                border: '1px solid rgba(37, 99, 235, 0.2)'
              }}
            >
              <Sparkles size={14} color="var(--color-primary-blue)" />
              <span>Interactive Scope Explorer</span>
            </div>
            <h2
              id="scope-widget-title"
              style={{
                fontSize: 'clamp(1.75rem, 2.8vw, 2.25rem)',
                color: 'var(--color-primary-navy)',
                marginBottom: 'var(--space-3)'
              }}
            >
              Find the Right Technology Path for Your Objective
            </h2>
            <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)' }}>
              Select your primary organizational priority below to explore the suggested engagement architecture, tangible deliverables, and estimated cadence.
            </p>
          </div>

          {/* Grid: Selectors Left, Plan Details Right */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-8)',
              alignItems: 'start'
            }}
          >
            {/* Left: Challenge Selectors */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.06em',
                  marginBottom: 'var(--space-2)'
                }}
              >
                1. Select Operational Priority:
              </div>

              {challengeOptions.map((opt) => {
                const isSelected = opt.id === selectedChallenge;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedChallenge(opt.id)}
                    style={{
                      width: '100%',
                      padding: 'var(--space-4) var(--space-5)',
                      backgroundColor: isSelected ? 'var(--color-primary-navy)' : 'var(--color-surface-white)',
                      color: isSelected ? '#FFFFFF' : 'var(--color-text-primary)',
                      border: `1px solid ${isSelected ? 'var(--color-primary-navy)' : 'var(--color-border)'}`,
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all var(--transition-fast)',
                      boxShadow: isSelected ? 'var(--shadow-card)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: isSelected ? '#93C5FD' : 'var(--color-primary-blue)',
                          letterSpacing: '0.04em'
                        }}
                      >
                        {opt.category}
                      </span>
                      {isSelected && <CheckCircle2 size={16} color="#60A5FA" />}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.975rem',
                        fontWeight: 700,
                        lineHeight: 1.3
                      }}
                    >
                      {opt.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Dynamic Plan Output Card */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-white)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-6)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)'
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.06em'
                }}
              >
                2. Recommended Engagement Model:
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Layers size={18} color="var(--color-primary-blue)" />
                  <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-primary-navy)', margin: 0 }}>
                    {current.recommendedService}
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginTop: '6px' }}>
                  {current.guidance}
                </p>
              </div>

              {/* Timing & First Step Chips */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 'var(--space-3)',
                  padding: 'var(--space-3) 0',
                  borderTop: '1px solid var(--color-border)',
                  borderBottom: '1px solid var(--color-border)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    <ShieldCheck size={14} color="var(--color-primary-blue)" />
                    <span>Recommended Starting Point</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginTop: '2px' }}>
                    {current.suggestedFirstStep}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    <Clock size={14} color="var(--color-primary-blue)" />
                    <span>Estimated Initial Horizon</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginTop: '2px' }}>
                    {current.typicalTimeline}
                  </div>
                </div>
              </div>

              {/* Deliverables List */}
              <div>
                <div style={{ fontSize: '0.775rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-navy)', marginBottom: '8px' }}>
                  Included Solution Artifacts:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {current.deliverables.map((d) => (
                    <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.825rem', color: 'var(--color-text-secondary)' }}>
                      <CheckCircle2 size={15} color="var(--color-primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
                <Link
                  to={`/contact?service=${current.slug}`}
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <span>Discuss This Scope With Leads</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to={`/services/${current.slug}`}
                  className="btn btn-secondary"
                  style={{ justifyContent: 'center' }}
                >
                  <span>View Full Spec</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
