import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../../types';

interface AccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
}

export const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div
      className="accordion-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        width: '100%',
        maxWidth: '820px',
        margin: '0 auto'
      }}
    >
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const headerId = `faq-header-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            style={{
              backgroundColor: 'var(--color-surface-white)',
              border: `1px solid ${isOpen ? 'var(--color-primary-blue)' : 'var(--color-border)'}`,
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
              boxShadow: isOpen ? 'var(--shadow-card)' : 'var(--shadow-subtle)'
            }}
          >
            <h3>
              <button
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                type="button"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-5) var(--space-6)',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  color: isOpen ? 'var(--color-primary-blue)' : 'var(--color-primary-navy)'
                }}
              >
                <span>{item.question}</span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'var(--color-light-blue)' : 'var(--color-pale-bg)',
                    color: isOpen ? 'var(--color-primary-blue)' : 'var(--color-text-secondary)',
                    flexShrink: 0,
                    transition: 'transform var(--transition-normal)'
                  }}
                  aria-hidden="true"
                >
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-normal)'
                    }}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              style={{
                display: isOpen ? 'block' : 'none',
                padding: '0 var(--space-6) var(--space-6) var(--space-6)',
                borderTop: 'none'
              }}
            >
              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'var(--text-base)',
                  lineHeight: 1.7,
                  margin: 0
                }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
