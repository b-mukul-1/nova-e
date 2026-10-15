import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'outline';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'light',
  className = '',
  dot = true
}) => {
  return (
    <div className={`eyebrow-badge ${variant} ${className}`}>
      {dot && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: variant === 'dark' ? '#60A5FA' : '#2563EB',
            display: 'inline-block'
          }}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </div>
  );
};
