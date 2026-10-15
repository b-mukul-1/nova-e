import React, { useEffect } from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { Badge } from '../components/common/Badge';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy — NovaTech Solutions';
  }, []);

  return (
    <div>
      {/* Header */}
      <section
        style={{
          backgroundColor: 'var(--color-pale-bg)',
          paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <Badge variant="light">LEGAL INFORMATION</Badge>
          <h1
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: 'var(--color-primary-navy)',
              marginBottom: 'var(--space-4)'
            }}
          >
            Privacy Policy
          </h1>
          <p
            className="lead"
            style={{
              fontSize: 'var(--text-base)',
              color: 'var(--color-text-secondary)',
              margin: '0 auto',
              maxWidth: '640px'
            }}
          >
            This privacy placeholder policy describes how NovaTech Solutions handles information submitted through this website.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div
            style={{
              backgroundColor: 'var(--color-surface-white)',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-8)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                <FileText size={20} color="var(--color-primary-blue)" />
                <h2 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-primary-navy)', margin: 0 }}>
                  1. Information We Collect
                </h2>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                When you initiate a project discussion via our website contact form, we collect only the information you voluntarily provide. This typically includes your name, business email address, organization name, and high-level descriptions of your technology objectives. We do not require or solicit sensitive personal identification data through this site.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                <CheckCircle2 size={20} color="var(--color-primary-blue)" />
                <h2 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-primary-navy)', margin: 0 }}>
                  2. How Your Information Is Used
                </h2>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                Submitted information is utilized strictly to:
              </p>
              <ul style={{ paddingLeft: 'var(--space-6)', marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                <li>Evaluate project feasibility and architectural alignment</li>
                <li>Coordinate introductory discovery and technical scoping consultations</li>
                <li>Draft tailored proposal briefs and engagement roadmaps upon request</li>
              </ul>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginTop: 'var(--space-2)' }}>
                We never monetize, sell, or rent inquiry data to third-party advertisers or brokers.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                <Lock size={20} color="var(--color-primary-blue)" />
                <h2 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-primary-navy)', margin: 0 }}>
                  3. Data Security & Storage Standards
                </h2>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                We implement industry-standard encryption protocols (TLS/SSL) for all data transmitted across this website. Access to client inquiries is restricted to designated technical leads and solutions architects bound by strict professional confidentiality obligations.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                <ShieldCheck size={20} color="var(--color-primary-blue)" />
                <h2 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-primary-navy)', margin: 0 }}>
                  4. Demonstration Website Disclosure
                </h2>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                This website is currently deployed as a demonstration concept for NovaTech Solutions. Sample categories, architectural templates, and placeholders are utilized. No real corporate contracts or legal warranties are established through this preview interface.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
              Last updated: October 2026. For questions regarding privacy practices, please submit an inquiry via the Contact form.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
