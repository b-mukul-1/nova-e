# NovaTech Solutions — Corporate Website

A complete, responsive corporate website built for **NovaTech Solutions**, delivering practical technology consulting, bespoke software engineering, enterprise digital platforms, and systems integration.

Developed using **React 19**, **TypeScript**, **Vite**, **React Router 7**, and **Vanilla CSS** with a custom corporate design system.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation & Development Server
```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Open in browser: http://localhost:5173
```

### Production Build & Type Checking
```bash
# Validate TypeScript and create optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture

```
nova-e/
├── public/
│   ├── favicon.svg                   # Custom SVG brand favicon
│   ├── robots.txt                    # Search crawler directive
│   ├── sitemap.xml                   # SEO canonical sitemap
│   └── images/                       # Local high-resolution visuals
│       ├── hero_tech_architecture.jpg
│       ├── case_study_integration.jpg
│       ├── services_modular_architecture.jpg
│       └── about_mission_philosophy.jpg
├── src/
│   ├── components/
│   │   ├── common/                   # Shared UI primitives
│   │   │   ├── Accordion.tsx         # Accessible FAQ accordion
│   │   │   ├── Badge.tsx             # Eyebrow tag / pill
│   │   │   ├── Button.tsx            # Multi-variant CTA button/link
│   │   │   ├── Card.tsx              # Elevated border card
│   │   │   ├── Logo.tsx              # Scalable geometric SVG wordmark
│   │   │   └── SectionHeading.tsx    # Header & subtitle block
│   │   ├── home/                     # Homepage feature sections
│   │   │   ├── HeroSection.tsx       # Split-layout hero with integrated visual
│   │   │   ├── TrustSection.tsx      # Credibility pillars without fake stats
│   │   │   ├── ServicesPreviewSection.tsx # 4 practice area cards
│   │   │   ├── ProcessSection.tsx    # Interactive 4-step delivery tabs
│   │   │   ├── WhyNovaTechSection.tsx# Business-first engineering values
│   │   │   ├── FeaturedCaseStudySection.tsx # Demo case study breakdown
│   │   │   ├── FAQSection.tsx        # 5 corporate FAQs
│   │   │   └── CTASection.tsx        # High-impact closing banner
│   │   └── layout/                   # Structural layout shell
│   │       ├── Footer.tsx            # Legal, links, dynamic year
│   │       ├── Layout.tsx            # ScrollToTop & layout frame
│   │       ├── Navbar.tsx            # Sticky header with mobile drawer
│   │       └── SkipLink.tsx          # WCAG accessibility skip link
│   ├── data/                         # Configurable sample datasets
│   │   ├── caseStudyData.ts          # Challenge, approach, outcome
│   │   ├── companyData.ts           # Mission, philosophy, process steps
│   │   ├── faqsData.ts               # Project & scoping FAQs
│   │   ├── navigationData.ts         # Header & footer routes
│   │   └── servicesData.ts           # 4 practice categories & details
│   ├── pages/                        # Route views
│   │   ├── AboutPage.tsx             # Mission, philosophy, values, lifecycle
│   │   ├── ContactPage.tsx           # Validated inquiry form & demo response
│   │   ├── HomePage.tsx              # Homepage composition
│   │   ├── NotFoundPage.tsx          # 404 error view
│   │   ├── PrivacyPage.tsx           # Standard legal placeholder
│   │   ├── ServiceDetailPage.tsx     # Reusable dynamic service template
│   │   └── ServicesPage.tsx          # All practice disciplines overview
│   ├── services/
│   │   └── contactService.ts         # Isolated API/form handler
│   ├── styles/
│   │   ├── global.css                # Base reset, typography & utilities
│   │   └── tokens.css                # Brand colors, typography & spacing
│   ├── types/
│   │   └── index.ts                  # TypeScript definitions
│   ├── App.tsx                       # React Router configuration
│   └── main.tsx                      # Application entry point
├── index.html                        # HTML5 shell, Open Graph & fonts
└── vite.config.ts                    # Vite configuration
```

---

## 🎨 Design System & Brand Palette

The brand follows a restrained, authoritative corporate aesthetic tailored to enterprise decision-makers:

| Token | Hex Value | Usage |
|---|---|---|
| `--color-primary-navy` | `#0B1F3A` | Primary brand color, dark headers, text |
| `--color-deep-navy` | `#071426` | Hero visual backgrounds, dark section panels, footer |
| `--color-primary-blue` | `#2563EB` | Primary action buttons, active links, accents |
| `--color-light-blue` | `#DBEAFE` | Subtle badge backgrounds, border highlights |
| `--color-pale-bg` | `#F5F8FC` | Alternate section background, code pill containers |
| `--color-surface-white` | `#FFFFFF` | Core surface, cards, navbar |
| `--color-text-primary` | `#14243A` | High-contrast body typography |
| `--color-text-secondary`| `#475569` | Supporting paragraphs and lead descriptions |
| `--color-border` | `#E2E8F0` | Structural dividers and input borders |

### Typography
- **Headings**: `Plus Jakarta Sans` / `Inter` (`font-weight: 700 / 800`)
- **Body**: `Inter` (`font-weight: 400 / 500 / 600`)

---

## 🛠️ Where to Customize & Configure

1. **Logo & Wordmark**:
   - Component: `src/components/common/Logo.tsx`
   - Favicon: `public/favicon.svg`
2. **Design Tokens & Palette**:
   - `src/styles/tokens.css`
3. **Service Offerings & Deliverables**:
   - `src/data/servicesData.ts`
4. **Delivery Process & Company Values**:
   - `src/data/companyData.ts`
5. **Contact Submission Endpoint**:
   - `src/services/contactService.ts` — Currently simulates network latency and returns a structured demo response with reference ID. Connect your API endpoint or serverless function here.

---

## 📋 Client Confirmation Checklist (Pending Final Facts)

Because this corporate website was constructed without inventing unverified facts, the following items are configured as clearly identified sample content and will require confirmation before launch:

1. **Official Legal Address & Headquarters**: To be added to the contact page and footer once confirmed.
2. **Direct Telephone & Formal Inquiries Email**: Can be populated in `src/pages/ContactPage.tsx` and `src/components/layout/Footer.tsx`.
3. **Confirmed Service Offerings**: Review the 4 practice categories in `src/data/servicesData.ts` to match signed service-line definitions.
4. **Real Client Case Studies & Logos**: Swap the demonstration architecture study in `src/data/caseStudyData.ts` with approved client case studies.
5. **Formal Privacy Policy & Legal Disclaimers**: Replace the placeholder legal language in `src/pages/PrivacyPage.tsx` with counsel-approved terms.
