import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Deep operational immersion & requirements clarity',
    summary: 'We begin by thoroughly assessing your workflows, data dependencies, system bottlenecks, and business goals before recommending any specific technology.',
    activities: [
      'Operational stakeholder interviews and workflow mapping',
      'Technical architecture audit of existing databases and systems',
      'Definition of non-functional constraints (throughput, latency, compliance)',
      'Identification of operational risks and technical debt'
    ],
    deliverable: 'Discovery Assessment & Scoped Requirements Brief'
  },
  {
    number: '02',
    title: 'Plan',
    tagline: 'Architectural modeling & risk-mitigated roadmap',
    summary: 'We draft clear specifications, data flow topologies, API contracts, and milestone schedules so leadership has complete predictability before execution.',
    activities: [
      'Target architecture and data pipeline schematics',
      'Component-level technical specification and API contracts',
      'Risk mitigation matrices and security planning',
      'Phased deployment and testing schedules'
    ],
    deliverable: 'Comprehensive Technical Blueprint & Delivery Roadmap'
  },
  {
    number: '03',
    title: 'Build',
    tagline: 'Engineered execution with continuous transparency',
    summary: 'Our engineering team develops modular, clean software backed by automated tests, continuous integration, and frequent stakeholder demonstration checkpoints.',
    activities: [
      'Iterative modular software and integration engineering',
      'Automated testing suites and continuous integration pipelines',
      'Bi-weekly progress demos and sprint reviews',
      'Security code scans and performance benchmarking'
    ],
    deliverable: 'Production-Ready Codebase & Verified Environments'
  },
  {
    number: '04',
    title: 'Improve',
    tagline: 'Refinement, operational monitoring & ongoing support',
    summary: 'Deployment is not the end of the journey. We monitor production performance, optimize workflows based on operational telemetry, and provide seamless handover.',
    activities: [
      'Live deployment monitoring and telemetry observation',
      'Comprehensive documentation, runbooks, and handover sessions',
      'Targeted performance tuning based on production metrics',
      'Structured post-launch advisory and maintainability support'
    ],
    deliverable: 'Production Runbooks & Operational Maintenance Plan'
  }
];

export const whyNovaTechPoints = [
  {
    id: 'business-first',
    title: 'Business-First Engineering',
    description: 'We prioritize operational outcomes over technological novelty. Every system architectural decision is directly tied to business value, efficiency, and measurable organizational goals.'
  },
  {
    id: 'practical-choices',
    title: 'Practical Technology Choices',
    description: 'We recommend proven, mature, and maintainable technology stacks that minimize vendor lock-in and avoid the fragility of unproven bleeding-edge hype.'
  },
  {
    id: 'transparent-communication',
    title: 'Direct, Transparent Communication',
    description: 'No technical gatekeeping. You communicate directly with experienced technical architects who articulate trade-offs, timelines, and risks in clear business terms.'
  },
  {
    id: 'long-term-maintainability',
    title: 'Maintainability & Longevity',
    description: 'We write clean, strictly typed, and thoroughly documented code engineered for longevity, allowing internal teams or future partners to maintain systems with confidence.'
  }
];

export const trustPillars = [
  {
    title: 'Reliable Architecture',
    description: 'Engineered for resilience, fault tolerance, and predictable system behavior under peak operational load.'
  },
  {
    title: 'Practical Alignment',
    description: 'Solutions focused on your operational realities rather than theoretical or overly complex frameworks.'
  },
  {
    title: 'Enterprise Security',
    description: 'Built with industry-standard encryption, strict access governance, and comprehensive auditability.'
  },
  {
    title: 'Sustainable Ownership',
    description: 'Complete codebase ownership, exhaustive documentation, and dedicated training for your internal teams.'
  }
];

export const aboutCompanyData = {
  overview: 'NovaTech Solutions is an independent technology consulting and digital engineering firm dedicated to helping organizations leverage modern technology to solve real-world operational challenges.',
  mission: 'Our mission is to engineer dependable, intelligent digital infrastructure and tailored software that empowers businesses to operate efficiently, scale sustainably, and adapt with confidence.',
  philosophy: 'We believe technology should serve business strategy, not complicate it. By combining disciplined engineering, transparent collaboration, and a relentless focus on maintainability, we deliver solutions that provide lasting corporate value.',
  values: [
    {
      title: 'Architectural Integrity',
      description: 'We do not take shortcuts. We build maintainable software systems with clean abstractions, strict typing, and comprehensive testing.'
    },
    {
      title: 'Pragmatic Innovation',
      description: 'We adopt modern tools when they provide clear business advantage, balancing innovation with operational stability and long-term viability.'
    },
    {
      title: 'Transparent Collaboration',
      description: 'We operate with candor and open communication. We highlight risks early, explain trade-offs clearly, and keep all stakeholders aligned.'
    },
    {
      title: 'Client Empowerment',
      description: 'We build for client autonomy. Through comprehensive runbooks, clean architecture, and thorough handover, our clients maintain control over their digital assets.'
    }
  ]
};
