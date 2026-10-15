import type { CaseStudyData } from '../types';

export const demonstrationCaseStudy: CaseStudyData = {
  title: 'Unified Enterprise Data Infrastructure & Pipeline Orchestration',
  tagline: 'Demonstration Architecture Case Study',
  sector: 'Operations & Enterprise Technology',
  challenge: 'A distributed multi-facility organization was operating with fragmented operational databases, disjointed inventory spreadsheets, and manual cross-department reconciliation that created data latency and reporting friction across executive leadership.',
  approach: 'NovaTech engineered a unified middleware event pipeline that consolidated disparate transaction data streams into an authenticated central API layer. Implemented resilient message queuing, automated schema validation, and role-based operational dashboards for real-time visibility.',
  outcome: 'Eliminated manual reconciliation bottlenecks, established single-source-of-truth accuracy across operational units, and provided leadership with continuous, verified reporting while keeping legacy core databases undisturbed.',
  architectureHighlights: [
    'Decoupled Pub/Sub event streaming middleware',
    'Bidirectional synchronization between ERP and regional operational nodes',
    'Role-governed administrative analytics and audit trails',
    'Zero-downtime rolling deployment strategy'
  ],
  technologies: [
    'Event Queuing (RabbitMQ / Kafka)',
    'Enterprise TypeScript',
    'PostgreSQL & Redis Cache',
    'Docker Container Orchestration',
    'OpenTelemetry Health Monitoring'
  ],
  image: '/images/case_study_integration.jpg'
};
