import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Info 
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Spam bot honeypot trap
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'demo-success' | 'error' | null
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Validate form fields
  const validateForm = () => {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a message subject.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onShowToast({
      type: 'success',
      title: 'Email Copied!',
      message: `${personalInfo.email} copied to your clipboard.`,
      duration: 3500,
    });
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam protection: if bot filled this invisible field, silently reject
    if (formData.honeypot) {
      console.warn('Spam submission detected and blocked.');
      return;
    }

    if (!validateForm()) {
      onShowToast({
        type: 'error',
        title: 'Validation Error',
        message: 'Please review the highlighted fields in the contact form.',
        duration: 4000,
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Read environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if real EmailJS credentials are configured
    const isConfigured = 
      serviceId && 
      templateId && 
      publicKey && 
      !serviceId.includes('your_') && 
      !templateId.includes('your_') &&
      !publicKey.includes('your_');

    if (isConfigured) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: personalInfo.email,
          },
          publicKey
        );

        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });

        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
        onShowToast({
          type: 'success',
          title: 'Message Delivered!',
          message: `Your message has been transmitted to ${personalInfo.email}.`,
          duration: 6000,
        });
      } catch (err) {
        console.error('EmailJS submission error:', err);
        setSubmitStatus('error');
        onShowToast({
          type: 'error',
          title: 'Transmission Failed',
          message: 'Unable to reach email service. Please email directly at bprakashranwa@gmail.com.',
          duration: 6000,
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Demo / Setup mode: transparently inform user
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('demo-success');

        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
        });

        onShowToast({
          type: 'info',
          title: 'Form Validated (Demo Mode)',
          message: 'To receive real emails to bprakashranwa@gmail.com, configure EmailJS credentials in .env.',
          duration: 7000,
        });
      }, 700);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Mail size={14} />
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's Connect & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Whether you are discussing junior roles in AI, data science opportunities, or exciting predictive projects, feel free to reach out.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1060px',
          margin: '0 auto',
        }}>
          {/* Left Column: Direct Contact Info & Instructions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Direct Contact Information
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                You can reach out directly via email or copy the address for your mail client.
              </p>

              {/* Email Card with Copy button */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
                marginBottom: '1rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(139, 92, 246, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-purple)',
                    flexShrink: 0,
                  }}>
                    <Mail size={18} />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Primary Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      style={{
                        fontWeight: 600,
                        fontSize: '0.92rem',
                        color: 'var(--text-primary)',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        display: 'block',
                      }}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  aria-label="Copy email address"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={15} color="#10b981" /> : <Copy size={15} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location Card */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
              }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(6, 182, 212, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                  flexShrink: 0,
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-emerald)',
                  flexShrink: 0,
                }}>
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Response Expectation</div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                    Usually responds within 24–48 hours
                  </div>
                </div>
              </div>
            </div>

            {/* EmailJS Setup Clarity Banner */}
            <div style={{
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(6, 182, 212, 0.06)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.55,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                <ShieldCheck size={17} />
                Email Delivery Transparency
              </div>
              <p>
                The form supports live delivery to <strong>{personalInfo.email}</strong> via EmailJS. When environment variables are not yet entered in <code>.env</code>, the form validates inputs safely in Demo/Test mode.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Send a Message
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              Fill in the form below to initiate an inquiry or conversation.
            </p>

            {/* Status alerts */}
            {submitStatus === 'success' && (
              <div style={{
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                color: '#34d399',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                fontSize: '0.88rem',
              }}>
                <CheckCircle2 size={20} />
                <span>Success! Your message was delivered to bprakashranwa@gmail.com.</span>
              </div>
            )}

            {submitStatus === 'demo-success' && (
              <div style={{
                padding: '1.1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                fontSize: '0.86rem',
                lineHeight: 1.5,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.35rem' }}>
                  <CheckCircle2 size={18} />
                  <span>Form Submitted (Setup Mode Active)</span>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  All validations passed successfully! To enable live SMTP transmission to <strong>bprakashranwa@gmail.com</strong>, add your free EmailJS keys to <code>.env</code> as outlined in <code>.env.example</code>.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(239, 68, 68, 0.12)',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                color: '#f87171',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                fontSize: '0.88rem',
              }}>
                <AlertCircle size={20} />
                <span>Message sending failed. Please email bprakashranwa@gmail.com directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Spam Honeypot - Invisible to real users */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>

              {/* Name field */}
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  <span>Your Name *</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="e.g. John Doe / Tech Recruiter"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              {/* Email field */}
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  <span>Your Email Address *</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="e.g. contact@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              {/* Subject field */}
              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  <span>Subject *</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  placeholder="e.g. Junior AI Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.subject && <span className="form-error">{errors.subject}</span>}
              </div>

              {/* Message field */}
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  <span>Message *</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Write your message or inquiry here..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginTop: '0.5rem' }}
                disabled={isSubmitting}
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderTopColor: '#ffffff',
                      borderRadius: '50%',
                      animation: 'spinSlow 0.8s linear infinite'
                    }} />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
