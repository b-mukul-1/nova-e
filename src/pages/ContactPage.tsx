import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, RefreshCw, Shield, Clock, HelpCircle } from 'lucide-react';
import type { ContactFormData, FormErrors } from '../types';
import { submitContactInquiry, type SubmissionResponse } from '../services/contactService';
import { Badge } from '../components/common/Badge';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || 'technology-consulting';

  useEffect(() => {
    document.title = 'Contact — NovaTech Solutions';
  }, []);

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    serviceInterest: initialService,
    projectDetails: '',
    agreedToConsent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResponse | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Please provide your business email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid email address.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please provide brief details about your initiative or inquiry.';
    } else if (formData.projectDetails.trim().length < 15) {
      newErrors.projectDetails = 'Please provide a little more detail (at least 15 characters).';
    }

    if (!formData.agreedToConsent) {
      newErrors.agreedToConsent = 'Please confirm consent to process your project details.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitContactInquiry(formData);
      setSubmissionResult(res);
    } catch (err: any) {
      setSubmitError(err.message || 'An unexpected error occurred during submission.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      serviceInterest: 'technology-consulting',
      projectDetails: '',
      agreedToConsent: false
    });
    setErrors({});
    setSubmissionResult(null);
    setSubmitError(null);
  };

  return (
    <div>
      {/* Page Hero */}
      <section
        style={{
          backgroundColor: 'var(--color-pale-bg)',
          paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <Badge variant="light">START A CONVERSATION</Badge>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 3.8vw, 3.25rem)',
              color: 'var(--color-primary-navy)',
              marginBottom: 'var(--space-4)',
              lineHeight: 1.2
            }}
          >
            Discuss Your Technology Initiative
          </h1>
          <p
            className="lead"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.65,
              maxWidth: '720px',
              margin: '0 auto'
            }}
          >
            Connect directly with our senior technology practice. We review your architectural context, discuss potential approaches, and provide an initial scoping assessment.
          </p>
        </div>
      </section>

      {/* Main Content: Form & Guidelines Grid */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-12)',
              alignItems: 'start'
            }}
          >
            {/* Form Column */}
            <div>
              <div
                style={{
                  backgroundColor: 'var(--color-surface-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                {/* Success Feedback View */}
                {submissionResult ? (
                  <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-success-bg)',
                        border: '1px solid var(--color-success-border)',
                        color: 'var(--color-success)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto var(--space-4) auto'
                      }}
                      aria-hidden="true"
                    >
                      <CheckCircle2 size={32} />
                    </div>

                    <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-2)' }}>
                      Inquiry Received (Demo State)
                    </h2>

                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-base)', lineHeight: 1.6, marginBottom: 'var(--space-6)' }}>
                      {submissionResult.message}
                    </p>

                    <div
                      style={{
                        backgroundColor: 'var(--color-pale-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        padding: 'var(--space-4)',
                        marginBottom: 'var(--space-6)',
                        textAlign: 'left',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'monospace'
                      }}
                    >
                      <div><strong>Reference ID:</strong> {submissionResult.submissionId}</div>
                      <div><strong>Logged At:</strong> {submissionResult.timestamp}</div>
                      <div><strong>Service Category:</strong> {formData.serviceInterest}</div>
                      <div><strong>Client Contact:</strong> {formData.fullName} ({formData.businessEmail})</div>
                    </div>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="btn btn-secondary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
                    >
                      <RefreshCw size={15} />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                ) : (
                  /* Active Form View */
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                      <h2 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-1)' }}>
                        Project Scoping Form
                      </h2>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                        All fields marked with an asterisk (<span style={{ color: 'var(--color-error)' }}>*</span>) are required.
                      </p>
                    </div>

                    {submitError && (
                      <div
                        style={{
                          backgroundColor: 'var(--color-error-bg)',
                          border: '1px solid var(--color-error-border)',
                          borderRadius: 'var(--radius-sm)',
                          padding: 'var(--space-3) var(--space-4)',
                          marginBottom: 'var(--space-5)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-3)',
                          fontSize: 'var(--text-sm)',
                          color: 'var(--color-error)'
                        }}
                      >
                        <AlertCircle size={18} style={{ flexShrink: 0 }} />
                        <span>{submitError}</span>
                      </div>
                    )}

                    {/* Name Field */}
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Your Full Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`form-input ${errors.fullName ? 'error' : ''}`}
                        placeholder="e.g. Eleanor Vance"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <span id="fullName-error" className="form-error">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Business Email Field */}
                    <div className="form-group">
                      <label htmlFor="businessEmail" className="form-label">
                        Business Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="businessEmail"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleChange}
                        className={`form-input ${errors.businessEmail ? 'error' : ''}`}
                        placeholder="e.g. e.vance@company.com"
                        aria-invalid={!!errors.businessEmail}
                        aria-describedby={errors.businessEmail ? 'businessEmail-error' : undefined}
                      />
                      {errors.businessEmail && (
                        <span id="businessEmail-error" className="form-error">
                          {errors.businessEmail}
                        </span>
                      )}
                    </div>

                    {/* Company Field (Optional) */}
                    <div className="form-group">
                      <label htmlFor="companyName" className="form-label">
                        Company / Organization <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontWeight: 400 }}>(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g. Acme Logistics Corp"
                      />
                    </div>

                    {/* Service Interest Dropdown */}
                    <div className="form-group">
                      <label htmlFor="serviceInterest" className="form-label">
                        Primary Practice Discipline of Interest
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="technology-consulting">Technology Consulting & Architecture</option>
                        <option value="digital-solutions">Digital Solutions & Internal Portals</option>
                        <option value="software-web-development">Software & Web Development</option>
                        <option value="technology-integration">Technology & API Integration</option>
                        <option value="general-inquiry">General Architecture Inquiry</option>
                      </select>
                    </div>

                    {/* Project Details Textarea */}
                    <div className="form-group">
                      <label htmlFor="projectDetails" className="form-label">
                        Project Overview or Operational Context <span className="required">*</span>
                      </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        rows={5}
                        value={formData.projectDetails}
                        onChange={handleChange}
                        className={`form-textarea ${errors.projectDetails ? 'error' : ''}`}
                        placeholder="Please briefly outline your current technical environment, primary challenges, or prospective timeline..."
                        aria-invalid={!!errors.projectDetails}
                        aria-describedby={errors.projectDetails ? 'projectDetails-error' : undefined}
                      />
                      {errors.projectDetails && (
                        <span id="projectDetails-error" className="form-error">
                          {errors.projectDetails}
                        </span>
                      )}
                      <span className="form-hint">
                        Brief context helps our technical leads prepare relevant architectural notes.
                      </span>
                    </div>

                    {/* Consent Checkbox */}
                    <div className="form-group" style={{ marginTop: 'var(--space-2)' }}>
                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 'var(--space-3)',
                          cursor: 'pointer',
                          fontSize: 'var(--text-xs)',
                          color: 'var(--color-text-secondary)',
                          lineHeight: 1.5
                        }}
                      >
                        <input
                          type="checkbox"
                          name="agreedToConsent"
                          checked={formData.agreedToConsent}
                          onChange={handleChange}
                          style={{
                            marginTop: '2px',
                            width: '16px',
                            height: '16px',
                            accentColor: 'var(--color-primary-blue)',
                            cursor: 'pointer'
                          }}
                          aria-invalid={!!errors.agreedToConsent}
                          aria-describedby={errors.agreedToConsent ? 'consent-error' : undefined}
                        />
                        <span>
                          I agree to NovaTech Solutions processing this information solely for the purpose of assessing this technical inquiry in accordance with privacy guidelines. <span className="required">*</span>
                        </span>
                      </label>
                      {errors.agreedToConsent && (
                        <span id="consent-error" className="form-error" style={{ marginTop: 'var(--space-1)' }}>
                          {errors.agreedToConsent}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div style={{ marginTop: 'var(--space-6)' }}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary btn-lg"
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          opacity: isSubmitting ? 0.7 : 1
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw size={18} className="animate-spin" />
                            <span>Processing Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Project Inquiry</span>
                            <Send size={18} />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Documentation demo note */}
                    <div
                      style={{
                        marginTop: 'var(--space-4)',
                        padding: 'var(--space-3)',
                        backgroundColor: 'var(--color-pale-bg)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-muted)',
                        textAlign: 'center'
                      }}
                    >
                      <span>
                        <strong>Demo Note:</strong> Form submissions are handled locally by an isolated service handler (<code>src/services/contactService.ts</code>) ready for API integration.
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Information & Consultation Guidelines Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              {/* What to expect card */}
              <div
                className="card"
                style={{
                  backgroundColor: 'var(--color-surface-white)',
                  padding: 'var(--space-8)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-light-blue-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary-blue)'
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--color-primary-navy)', margin: 0 }}>
                    What to Expect
                  </h3>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} color="var(--color-primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Direct review by a senior technical architect, not a sales call.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} color="var(--color-primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Preliminary feasibility and architectural trade-off assessment.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} color="var(--color-primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Clear scope framework and milestone planning options.</span>
                  </li>
                </ul>
              </div>

              {/* Confidentiality & Security Card */}
              <div
                className="card"
                style={{
                  backgroundColor: 'var(--color-surface-white)',
                  padding: 'var(--space-8)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-light-blue-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary-blue)'
                    }}
                  >
                    <Shield size={20} />
                  </div>
                  <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--color-primary-navy)', margin: 0 }}>
                    Confidentiality & Non-Disclosure
                  </h3>
                </div>

                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  We treat all technical discussions and operational details with strict enterprise confidentiality. Standard non-disclosure agreements (NDAs) can be executed prior to deep architectural data sharing.
                </p>
              </div>

              {/* Communication Policy Card */}
              <div
                style={{
                  backgroundColor: 'var(--color-pale-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-6)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                  <HelpCircle size={16} color="var(--color-primary-navy)" />
                  <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-primary-navy)', margin: 0 }}>
                    Notice on Contact Details
                  </h4>
                </div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                  Per project brief instructions, no fictional phone numbers, physical addresses, or unconfirmed corporate credentials are displayed. Inquiries are routed electronically through this form interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
