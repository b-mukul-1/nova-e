export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'consulting' | 'digital' | 'software' | 'integration';
  keyBenefits: string[];
  deliverables: string[];
  sampleUseCases: {
    heading: string;
    description: string;
  }[];
  deliveryPhases: {
    phase: string;
    details: string;
  }[];
  architectureSummary: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  summary: string;
  activities: string[];
  deliverable: string;
}

export interface CaseStudyData {
  title: string;
  tagline: string;
  sector: string;
  challenge: string;
  approach: string;
  outcome: string;
  architectureHighlights: string[];
  technologies: string[];
  image: string;
}

export interface ContactFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  serviceInterest: string;
  projectDetails: string;
  agreedToConsent: boolean;
}

export interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  companyName?: string;
  serviceInterest?: string;
  projectDetails?: string;
  agreedToConsent?: string;
}
