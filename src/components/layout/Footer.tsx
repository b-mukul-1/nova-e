import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { headerNavLinks, footerServiceLinks } from '../../data/navigationData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: 'var(--color-deep-navy)',
        color: 'var(--color-surface-white)',
        borderTop: '1px solid #1E293B',
        paddingTop: 'var(--space-16)',
        paddingBottom: 'var(--space-10)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-10)',
            marginBottom: 'var(--space-12)'
          }}
        >
          {/* Brand Info Column */}
          <div style={{ maxWidth: '340px' }}>
            <Logo variant="dark" />
            <p
              style={{
                marginTop: 'var(--space-4)',
                fontSize: 'var(--text-sm)',
                lineHeight: 1.6,
                color: 'var(--color-text-inverse-muted)'
              }}
            >
              Dependable technology consulting, tailored digital solutions, and enterprise software engineering built around operational business objectives.
            </p>
            <div
              style={{
                marginTop: 'var(--space-4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: '0.35rem 0.75rem',
                backgroundColor: 'rgba(37, 99, 235, 0.12)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                fontSize: 'var(--text-xs)',
                color: '#93C5FD'
              }}
            >
              <span>Demonstration Concept Model</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-sm)',
                fontWeight: 700,
                color: 'var(--color-surface-white)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 'var(--space-4)'
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {headerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-inverse-muted)',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-inverse-muted)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-inverse-muted)',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-inverse-muted)')}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-sm)',
                fontWeight: 700,
                color: 'var(--color-surface-white)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 'var(--space-4)'
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-inverse-muted)',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-inverse-muted)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engagement Overview Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-sm)',
                fontWeight: 700,
                color: 'var(--color-surface-white)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 'var(--space-4)'
              }}
            >
              Start an Initiative
            </h4>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-inverse-muted)',
                marginBottom: 'var(--space-4)',
                lineHeight: 1.6
              }}
            >
              Ready to explore technical architecture or discuss custom software requirements?
            </p>
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{
                fontSize: 'var(--text-sm)',
                padding: '0.65rem 1.25rem'
              }}
            >
              Discuss Your Project
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div
          style={{
            borderTop: '1px solid rgba(226, 232, 240, 0.1)',
            paddingTop: 'var(--space-6)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            fontSize: 'var(--text-xs)',
            color: '#64748B'
          }}
        >
          <div>
            © {currentYear} NovaTech Solutions. All rights reserved.
          </div>
          <div>
            <span>Corporate technology preview concept. Sample content and configurable placeholders used.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
