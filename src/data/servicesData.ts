import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'consulting',
    slug: 'technology-consulting',
    title: 'Technology Consulting',
    tagline: 'Strategic advisory for resilient enterprise technology decisions',
    shortDescription: 'Independent technology assessment, architecture roadmapping, and legacy evaluation to ensure systems support your operational objectives.',
    fullDescription: 'Our technology consulting engagements provide enterprise leadership with clarity before capital is committed. We analyze operational workflows, assess current technical debt, evaluate vendor platforms, and craft pragmatic technology transition roadmaps grounded in your specific business realities.',
    iconName: 'consulting',
    keyBenefits: [
      'Objective architectural reviews free from vendor lock-in bias',
      'Systematic reduction of technical debt and maintenance overhead',
      'Clear alignment between operational milestones and technology spend',
      'Detailed risk assessments for migrations and modernization programs'
    ],
    deliverables: [
      'Comprehensive Technology Architecture Audit',
      'Strategic Modernization & Migration Roadmap',
      'Vendor & Platform Technical Feasibility Matrix',
      'Security Posture & Compliance Evaluation Report'
    ],
    sampleUseCases: [
      {
        heading: 'Legacy Modernization Planning',
        description: 'Assisting operational teams in decomposing monolithic legacy systems into maintainable modular services without operational downtime.'
      },
      {
        heading: 'Cloud Infrastructure Strategy',
        description: 'Designing multi-environment cloud topologies optimized for cost predictability, data governance, and operational resilience.'
      }
    ],
    deliveryPhases: [
      {
        phase: 'Phase 1: Discovery & System Audit',
        details: 'Reviewing current codebases, infrastructure configurations, and interview operational stakeholders.'
      },
      {
        phase: 'Phase 2: Architectural Modeling',
        details: 'Developing prospective target architectures, data flows, and migration milestones.'
      },
      {
        phase: 'Phase 3: Roadmap Hand-off & Advisory',
        details: 'Delivering prioritized execution backlog, risk mitigations, and leadership briefings.'
      }
    ],
    architectureSummary: 'Structured around modular service decomposition, decoupled data pipelines, and clear enterprise integration standards.'
  },
  {
    id: 'digital-solutions',
    slug: 'digital-solutions',
    title: 'Digital Solutions',
    tagline: 'Streamlined digital workflows and enterprise self-service portals',
    shortDescription: 'Tailored workflow tools, administrative portals, and client-facing digital interfaces designed to eliminate operational friction.',
    fullDescription: 'We build purpose-engineered digital platforms that automate complex internal processes, connect siloed corporate units, and offer intuitive touchpoints for partners and clients. Every interface is built with strict usability standards and enterprise-grade security.',
    iconName: 'digital',
    keyBenefits: [
      'Elimination of repetitive manual data entry and spreadsheet hand-offs',
      'Role-based access control with comprehensive audit logging',
      'Intuitive user interfaces reducing training time across teams',
      'Consistent responsive experiences across desktop, tablet, and mobile'
    ],
    deliverables: [
      'Custom Internal Operations & Administrative Portals',
      'Partner & Vendor Extranet Workflows',
      'Automated Document & Data Processing Pipelines',
      'Comprehensive Design Systems & Component Libraries'
    ],
    sampleUseCases: [
      {
        heading: 'Operations Workflow Automation',
        description: 'Digitizing multi-stage approval processes with real-time status visibility across distributed teams.'
      },
      {
        heading: 'Enterprise Self-Service Portals',
        description: 'Empowering authorized partners with authenticated access to status tracking, report generation, and data uploads.'
      }
    ],
    deliveryPhases: [
      {
        phase: 'Phase 1: Workflow Mapping',
        details: 'Cataloging end-to-end task steps, edge cases, and human hand-offs to identify automation opportunities.'
      },
      {
        phase: 'Phase 2: Interface Prototyping',
        details: 'Iterating responsive wireframes and interaction flows to ensure friction-free task completion.'
      },
      {
        phase: 'Phase 3: Production Build & Rollout',
        details: 'Developing robust frontend applications tied into authenticated enterprise service layers.'
      }
    ],
    architectureSummary: 'Responsive frontend frameworks connecting securely to microservice APIs with token-based role authentication.'
  },
  {
    id: 'software-web',
    slug: 'software-web-development',
    title: 'Software & Web Development',
    tagline: 'Performant, maintainable web applications and custom software',
    shortDescription: 'Engineered web applications and robust custom software built with clean architectural patterns, maintainable code, and high performance.',
    fullDescription: 'From high-throughput customer-facing web applications to distributed internal systems, our engineering team adheres to rigorous coding standards, automated testing, and clean software architecture. We build software that internal teams can maintain with confidence.',
    iconName: 'software',
    keyBenefits: [
      'Production-tested architecture engineered for reliable horizontal scaling',
      'Type-safe codebases with comprehensive automated test coverage',
      'Fast initial page loads, optimal Core Web Vitals, and accessibility adherence',
      'Thorough documentation enabling effortless internal team handover'
    ],
    deliverables: [
      'Full-Stack Custom Web Applications',
      'Secure High-Performance REST & GraphQL APIs',
      'Enterprise Database Schema Design & Optimization',
      'Automated CI/CD Deployment Pipelines & Test Suites'
    ],
    sampleUseCases: [
      {
        heading: 'Mission-Critical Business Systems',
        description: 'Developing high-availability web applications that govern core transactional business processes.'
      },
      {
        heading: 'High-Performance Customer Dashboards',
        description: 'Building reactive interfaces rendering complex telemetry, analytics, and operational metrics without lag.'
      }
    ],
    deliveryPhases: [
      {
        phase: 'Phase 1: Architecture Specification',
        details: 'Defining data schemas, API contracts, security protocols, and testing frameworks.'
      },
      {
        phase: 'Phase 2: Iterative Sprint Development',
        details: 'Constructing modular features backed by continuous integration and automated regression tests.'
      },
      {
        phase: 'Phase 3: Quality Assurance & Deployment',
        details: 'Rigorous load testing, security verification, documentation completion, and controlled rollout.'
      }
    ],
    architectureSummary: 'Layered domain architecture with strict typing, transactional safety, containerized environments, and CI/CD automation.'
  },
  {
    id: 'integration',
    slug: 'technology-integration',
    title: 'Technology Integration',
    tagline: 'Harmonizing distributed systems, APIs, and enterprise data flows',
    shortDescription: 'Unifying disparate enterprise software, CRM, ERP, and database platforms into synchronized, resilient data ecosystems.',
    fullDescription: 'Disjointed software silos slow organizations down. We architect and implement reliable integration middleware, automated event pipelines, and secure API gateways that allow your business applications to communicate smoothly and reliably without duplicate records.',
    iconName: 'integration',
    keyBenefits: [
      'Bi-directional synchronization between legacy core systems and modern tools',
      'Resilient message queues preventing data loss during network disruptions',
      'Consolidated data layers providing single-source-of-truth accuracy',
      'Standardized API protocols simplifying future third-party integrations'
    ],
    deliverables: [
      'Custom Enterprise Middleware & API Connectors',
      'Event-Driven Message Queuing Architecture',
      'Automated Data Cleansing & Deduplication Pipelines',
      'System Health Monitoring & Alerting Dashboards'
    ],
    sampleUseCases: [
      {
        heading: 'ERP & CRM Data Synchronization',
        description: 'Building continuous event queues that keep enterprise CRM records synchronized with inventory and financial accounting.'
      },
      {
        heading: 'Legacy Protocol Modernization',
        description: 'Wrapping older file-transfer or database protocols with modern RESTful APIs to connect with modern cloud platforms.'
      }
    ],
    deliveryPhases: [
      {
        phase: 'Phase 1: Data Contract Mapping',
        details: 'Documenting schema structures, frequency requirements, authentication types, and validation rules.'
      },
      {
        phase: 'Phase 2: Middleware Construction',
        details: 'Building resilient middleware with retry strategies, idempotent handlers, and error logs.'
      },
      {
        phase: 'Phase 3: Live Verification & Monitoring',
        details: 'Running parallel data audits, establishing latency alarms, and validating schema parity.'
      }
    ],
    architectureSummary: 'Pub/sub message broker topologies with dead-letter queue recovery, structured logging, and immutable audit logs.'
  }
];
