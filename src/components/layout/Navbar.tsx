import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '../common/Logo';
import { headerNavLinks } from '../../data/navigationData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap escape key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      role="banner"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'var(--color-surface-white)',
        borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'rgba(226, 232, 240, 0.7)'}`,
        boxShadow: scrolled ? 'var(--shadow-nav)' : 'none',
        transition: 'box-shadow var(--transition-normal), border-color var(--transition-normal)',
        height: 'var(--navbar-height)'
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-8)'
          }}
          className="desktop-nav"
        >
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-6)',
              listStyle: 'none'
            }}
          >
            {headerNavLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--color-primary-blue)' : 'var(--color-text-primary)',
                    padding: '0.5rem 0.25rem',
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    transition: 'color var(--transition-fast)'
                  })}
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <span
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: 'var(--color-primary-blue)',
                            borderRadius: '2px'
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Prominent but restrained "Let's Talk" CTA */}
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{
              padding: '0.65rem 1.25rem',
              fontSize: 'var(--text-sm)'
            }}
          >
            <span>Let's Talk</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.5rem',
            color: 'var(--color-primary-navy)',
            cursor: 'pointer'
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          style={{
            position: 'fixed',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 20, 38, 0.45)',
            backdropFilter: 'blur(4px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'var(--color-surface-white)',
              padding: 'var(--space-6)',
              borderBottom: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-elevated)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-6)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-2)'
                }}
              >
                {headerNavLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={({ isActive }) => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 'var(--space-3) var(--space-4)',
                        borderRadius: 'var(--radius-sm)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'var(--text-base)',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? 'var(--color-primary-blue)' : 'var(--color-primary-navy)',
                        backgroundColor: isActive ? 'var(--color-light-blue-subtle)' : 'transparent'
                      })}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={16} opacity={0.6} />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div style={{ paddingTop: 'var(--space-2)', borderTop: '1px solid var(--color-border)' }}>
              <Link
                to="/contact"
                className="btn btn-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.85rem 1rem'
                }}
              >
                <span>Let's Talk</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Responsive CSS for Navbar */}
      <style>{`
        @media (max-width: 820px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
};
