import type { ContactFormData } from '../types';

export interface SubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string;
  timestamp: string;
}

/**
 * Isolated contact submission handler.
 * In production, this function sends a POST request to your backend endpoint (e.g. /api/contact).
 * In this demo environment, it validates input, simulates network latency, and returns a structured demo response.
 */
export async function submitContactInquiry(formData: ContactFormData): Promise<SubmissionResponse> {
  // Simulating network roundtrip
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Basic sanity check
  if (!formData.fullName || !formData.businessEmail || !formData.projectDetails) {
    throw new Error('Required fields are missing. Please complete all highlighted inputs.');
  }

  // Simulated successful demo response
  const demoSubmissionId = `NTS-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return {
    success: true,
    message: `Thank you, ${formData.fullName.split(' ')[0]}. Your project inquiry has been logged in this demonstration environment. In a live deployment, this dispatches directly to the engineering team.`,
    submissionId: demoSubmissionId,
    timestamp: new Date().toISOString()
  };
}
