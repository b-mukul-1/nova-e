import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';

interface ComparisonRow {
  aspect: string;
  legacy: string;
  modern: string;
}

const comparisonRows: ComparisonRow[] = [
  {
    aspect: 'System Architecture',
    legacy: 'Tightly coupled monolithic codebases where a single minor bug or memory leak halts all operational workflows.',
    modern: 'Decoupled domain services and asynchronous event queues that isolate failures and ensure continuous system availability.'
  },
  {
    aspect: 'Data Synchronization',
    legacy: 'Manual CSV exports, batch script cron jobs, and redundant duplicate data entry across isolated SaaS systems.',
    modern: 'Automated pub/sub event pipelines maintaining real-time, bidirectional schema synchronization with strict audit trails.'
  },
  {
    aspect: 'Deployment & Releases',
    legacy: 'High-risk manual server deployments requiring weekend maintenance windows and emergency rollback fire drills.',
    modern: 'Zero-downtime rolling container deployments backed by automated CI/CD regression test suites and instant rollback.'
  },
  {
    aspect: 'Codebase Ownership',
    legacy: 'Opaque vendor lock-in with closed-source proprietary code and exorbitant custom change-request fees.',
    modern: '100% client intellectual property ownership, strictly typed codebases, and exhaustive internal runbooks.'
  }
];

export const ArchitectureComparisonSection: React.FC = () => {

  return (
    <section
      className="section section-pale"
      style={{
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="ENGINEERING RIGOR"
          title="Legacy Fragility vs. Resilient Modern Architecture"
          subtitle="How disciplined software architecture eliminates operational bottlenecks and guarantees sustainable technical agility."
          align="center"
        />

        {/* Comparison Table / Dual Column Board */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-8)'
          }}
        >
          {/* Legacy Column */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid #FECACA',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            <div
              style={{
                backgroundColor: '#FEF2F2',
                padding: 'var(--space-5)',
                borderBottom: '1px solid #FECACA',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <XCircle size={20} color="#DC2626" />
              <div>
                <h3 style={{ fontSize: '1.05rem', color: '#991B1B', margin: 0 }}>
                  Legacy Systems & Technical Debt
                </h3>
                <div style={{ fontSize: '0.75rem', color: '#B91C1C' }}>
                  Operational bottlenecks & vulnerability to disruptions
                </div>
              </div>
            </div>

            <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              {comparisonRows.map((row) => (
                <div key={row.aspect} style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: 'var(--space-4)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748B', marginBottom: '4px' }}>
                    {row.aspect}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    {row.legacy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* NovaTech Modern Architecture Column */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '2px solid var(--color-primary-blue)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card-hover)',
              position: 'relative'
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--color-primary-navy)',
                color: '#FFFFFF',
                padding: 'var(--space-5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={20} color="#60A5FA" />
                <div>
                  <h3 style={{ fontSize: '1.05rem', color: '#FFFFFF', margin: 0 }}>
                    NovaTech Resilient Architecture
                  </h3>
                  <div style={{ fontSize: '0.75rem', color: '#93C5FD' }}>
                    Maintainable, scalable & decoupled foundation
                  </div>
                </div>
              </div>

              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '3px 8px',
                  backgroundColor: 'rgba(37, 99, 235, 0.4)',
                  color: '#DBEAFE',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(147, 197, 253, 0.4)'
                }}
              >
                Engineered
              </span>
            </div>

            <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              {comparisonRows.map((row) => (
                <div key={row.aspect} style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: 'var(--space-4)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-blue)', marginBottom: '4px' }}>
                    {row.aspect}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
                    {row.modern}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Callout Footer */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Request a Modernization Feasibility Review</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
