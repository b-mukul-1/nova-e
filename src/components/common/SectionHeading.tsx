import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  isDark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  isDark = false,
  className = ''
}) => {
  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '760px' : '720px',
        marginLeft: align === 'center' ? 'auto' : '0',
        marginRight: align === 'center' ? 'auto' : '0',
        marginBottom: 'var(--space-12)'
      }}
    >
      {eyebrow && (
        <Badge variant={isDark ? 'dark' : 'light'}>
          {eyebrow}
        </Badge>
      )}
      <h2
        style={{
          color: isDark ? 'var(--color-surface-white)' : 'var(--color-primary-navy)',
          marginBottom: subtitle ? 'var(--space-4)' : '0'
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="lead"
          style={{
            color: isDark ? 'var(--color-text-inverse-muted)' : 'var(--color-text-secondary)',
            margin: '0 auto'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
