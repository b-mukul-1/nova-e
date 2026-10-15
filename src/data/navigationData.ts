export interface NavLinkItem {
  label: string;
  href: string;
}

export const headerNavLinks: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
];

export const footerServiceLinks: NavLinkItem[] = [
  { label: 'Technology Consulting', href: '/services/technology-consulting' },
  { label: 'Digital Solutions', href: '/services/digital-solutions' },
  { label: 'Software & Web Development', href: '/services/software-web-development' },
  { label: 'Technology Integration', href: '/services/technology-integration' }
];

export const footerCompanyLinks: NavLinkItem[] = [
  { label: 'About NovaTech', href: '/about' },
  { label: 'All Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' }
];
