import type { FaqItem } from '../types';

export const faqsData: FaqItem[] = [
  {
    id: 'faq-discussion',
    question: 'How do project discussions and initial discovery typically work?',
    answer: 'Every engagement begins with an introductory discovery consultation where we review your operational context, existing technology stack, and immediate goals. Rather than providing generic estimates, our senior technical leads assess architectural feasibility and outline a scoped evaluation phase tailored to your requirements.'
  },
  {
    id: 'faq-engagement',
    question: 'What engagement models does NovaTech Solutions support?',
    answer: 'We support flexible engagement structures aligned with project maturity. These include fixed-scope milestone deliveries for clearly defined initiatives, sprint-based agile advisory for evolving digital products, and dedicated technology consulting retainers for ongoing architectural governance.'
  },
  {
    id: 'faq-timelines',
    question: 'How are delivery timelines estimated and managed?',
    answer: 'Timelines depend directly on system complexity, integration surfaces, and organizational review cycles. After the initial discovery phase, we provide a detailed phase-by-phase breakdown with realistic checkpoints, clear risk buffers, and dependencies identified upfront so your leadership can plan with certainty.'
  },
  {
    id: 'faq-customization',
    question: 'Can your solutions integrate with our existing legacy systems?',
    answer: 'Yes. A core strength of our practice is bridging modern cloud architecture with established legacy infrastructure. We design decoupled middleware, custom API wrappers, and resilient synchronization queues that preserve existing investments without requiring risky rip-and-replace overhauls.'
  },
  {
    id: 'faq-support',
    question: 'What support and handover options are provided following deployment?',
    answer: 'We prioritize operational sustainability. Upon completion, we provide comprehensive architectural documentation, runbooks, and team handover sessions. We also offer structured post-launch monitoring, warranty advisory periods, and ongoing maintenance retainers based on your internal operational capacity.'
  }
];
