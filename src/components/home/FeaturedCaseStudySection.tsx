import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { Button } from '../common/Button';
import { demonstrationCaseStudy } from '../../data/caseStudyData';
import { Badge } from '../common/Badge';

export const FeaturedCaseStudySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'challenge' | 'outcome'>('architecture');

  return (
    <section
      className="section"
      id="case-study"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto var(--space-10) auto' }}>
          <Badge variant="light">
            DEMONSTRATION ARCHITECTURE SHOWCASE
          </Badge>
          <h2
            style={{
              fontSize: 'clamp(1.85rem, 2.8vw, 2.5rem)',
              color: 'var(--color-primary-navy)',
              marginBottom: 'var(--space-3)'
            }}
          >
            {demonstrationCaseStudy.title}
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-base)' }}>
            Representative case study template showcasing operational problem decomposition, modular architectural design, and verified outcomes.
          </p>
        </div>

        {/* Case Study Card */}
        <div
          style={{
            backgroundColor: 'var(--color-pale-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          {/* Top Bar with Case Study Sector and Tabs */}
          <div
            style={{
              backgroundColor: 'var(--color-surface-white)',
              borderBottom: '1px solid var(--color-border)',
              padding: 'var(--space-4) var(--space-6)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-4)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--color-primary-blue)',
                  letterSpacing: '0.06em'
                }}
              >
                Sector: {demonstrationCaseStudy.sector}
              </span>
              <span style={{ color: 'var(--color-border)' }}>|</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                Demonstration Model
              </span>
            </div>

            {/* Tab Controls */}
            <div style={{ display: 'flex', gap: '4px' }}>
              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-xs)',
                  border: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeTab === 'architecture' ? 'var(--color-primary-navy)' : 'transparent',
                  color: activeTab === 'architecture' ? '#FFFFFF' : 'var(--color-text-secondary)',
                  transition: 'all 0.15s ease'
                }}
              >
                System Topology Schema
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('challenge')}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-xs)',
                  border: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeTab === 'challenge' ? 'var(--color-primary-navy)' : 'transparent',
                  color: activeTab === 'challenge' ? '#FFFFFF' : 'var(--color-text-secondary)',
                  transition: 'all 0.15s ease'
                }}
              >
                The Challenge
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('outcome')}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-xs)',
                  border: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeTab === 'outcome' ? 'var(--color-primary-navy)' : 'transparent',
                  color: activeTab === 'outcome' ? '#FFFFFF' : 'var(--color-text-secondary)',
                  transition: 'all 0.15s ease'
                }}
              >
                Verified Outcomes
              </button>
            </div>
          </div>

          {/* Main Case Study Body */}
          <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            {activeTab === 'architecture' && (
              <div>
                {/* Clean SVG Architectural Flow Schematic */}
                <div
                  style={{
                    backgroundColor: 'var(--color-deep-navy)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-6)',
                    border: '1px solid #1E3A8A',
                    color: '#FFFFFF',
                    marginBottom: 'var(--space-6)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-5)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Terminal size={16} color="#60A5FA" />
                      <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#93C5FD' }}>
                        SYSTEM PIPELINE SCHEMATIC // UNIFIED INTEGRATION
                      </span>
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#34D399', fontWeight: 600 }}>
                      ● Continuous Sync Active
                    </span>
                  </div>

                  {/* Flow Steps */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: 'var(--space-4)',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{ padding: 'var(--space-4)', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase' }}>Source Systems</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>Legacy DB & ERP</div>
                      <div style={{ fontSize: '0.75rem', color: '#60A5FA', marginTop: '4px' }}>Regional Node Outlets</div>
                    </div>

                    <div style={{ padding: 'var(--space-4)', backgroundColor: 'rgba(37, 99, 235, 0.2)', borderRadius: 'var(--radius-sm)', border: '1px solid #3B82F6' }}>
                      <div style={{ fontSize: '0.7rem', color: '#93C5FD', textTransform: 'uppercase' }}>Integration Layer</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>Pub/Sub Event Bus</div>
                      <div style={{ fontSize: '0.75rem', color: '#93C5FD', marginTop: '4px' }}>Idempotent Message Queue</div>
                    </div>

                    <div style={{ padding: 'var(--space-4)', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase' }}>Unified Storage</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>PostgreSQL Cluster</div>
                      <div style={{ fontSize: '0.75rem', color: '#34D399', marginTop: '4px' }}>Real-time Audit Log</div>
                    </div>

                    <div style={{ padding: 'var(--space-4)', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase' }}>Presentation</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>Executive Portal</div>
                      <div style={{ fontSize: '0.75rem', color: '#818CF8', marginTop: '4px' }}>Role-Governed UI</div>
                    </div>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
                  {demonstrationCaseStudy.architectureHighlights.map((hl) => (
                    <div
                      key={hl}
                      style={{
                        padding: 'var(--space-4)',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px'
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--color-primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.825rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'challenge' && (
              <div style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-6)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-3)' }}>
                  The Operational Bottleneck
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  {demonstrationCaseStudy.challenge}
                </p>
                <div style={{ padding: 'var(--space-4)', backgroundColor: '#FEF2F2', borderLeft: '4px solid #DC2626', borderRadius: 'var(--radius-xs)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#991B1B' }}>Primary Risk Addressed:</div>
                  <div style={{ fontSize: '0.85rem', color: '#7F1D1D', marginTop: '2px' }}>
                    Eliminated multi-day data discrepancies between regional warehouse inventory and executive financial ledgers.
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'outcome' && (
              <div style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-6)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-3)' }}>
                  The Verified Operational Result
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  {demonstrationCaseStudy.outcome}
                </p>
                <div style={{ padding: 'var(--space-4)', backgroundColor: '#ECFDF5', borderLeft: '4px solid #059669', borderRadius: 'var(--radius-xs)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#065F46' }}>Engineering Impact:</div>
                  <div style={{ fontSize: '0.85rem', color: '#047857', marginTop: '2px' }}>
                    Single-source-of-truth accuracy achieved across all operational units without disturbing legacy core transactional databases.
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Tech Tags & Contact CTA */}
            <div
              style={{
                marginTop: 'var(--space-6)',
                paddingTop: 'var(--space-5)',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'var(--space-4)'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {demonstrationCaseStudy.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--color-border)',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-xs)',
                      color: 'var(--color-primary-navy)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Button to="/contact" variant="primary" icon={<ArrowRight size={16} />}>
                Discuss Your Integration Requirements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
