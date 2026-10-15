import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showWordmark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  showWordmark = true
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#0B1F3A';
  const secondaryTextColor = isDark ? '#93C5FD' : '#2563EB';

  return (
    <Link
      to="/"
      className={`logo-container ${className}`}
      aria-label="NovaTech Solutions Home"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none',
        lineHeight: 1
      }}
    >
      {/* Geometric 'N' Symbol with connected nodes */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <rect
          width="48"
          height="48"
          rx="10"
          fill={isDark ? '#0F274A' : '#071426'}
          stroke={isDark ? '#1E3A8A' : '#1E293B'}
          strokeWidth="1"
        />
        {/* Interconnected circuit architecture */}
        <path
          d="M14 34V14L24 28V14"
          stroke="#2563EB"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 28L34 14V34"
          stroke="#38BDF8"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Connected node endpoints */}
        <circle cx="14" cy="14" r="2.8" fill="#2563EB" />
        <circle cx="24" cy="28" r="2.8" fill="#60A5FA" />
        <circle cx="34" cy="34" r="2.8" fill="#38BDF8" />
        <circle cx="14" cy="34" r="2.8" fill="#1D4ED8" />
        <circle cx="34" cy="14" r="2.8" fill="#93C5FD" />
      </svg>

      {showWordmark && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: textColor,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            NovaTech
            <span style={{ color: secondaryTextColor, fontWeight: 700, marginLeft: '1px' }}>.</span>
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: isDark ? '#94A3B8' : '#64748B'
            }}
          >
            Solutions
          </span>
        </div>
      )}
    </Link>
  );
};
