import React from 'react';
import { X, FileText, Download, Check, AlertCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(139, 92, 246, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-purple)'
            }}>
              <FileText size={22} />
            </div>
            <div>
              <h3 id="resume-modal-title" style={{ fontSize: '1.3rem', fontWeight: 700 }}>Resume Information</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Budhiprakash Jat — Junior AI & Data Scientist</p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-full)',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
            }}
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        <div style={{
          background: 'rgba(6, 182, 212, 0.08)',
          border: '1px solid rgba(6, 182, 212, 0.25)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          display: 'flex',
          gap: '0.85rem'
        }}>
          <AlertCircle size={20} color="#06b6d4" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
            <strong>Authenticity & Verified Credentials Notice:</strong>
            <p style={{ marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
              A starter PDF profile document is configured at <code>public/resume/Budhiprakash_Jat_Resume.pdf</code>.
              When ready, Budhiprakash can replace this placeholder with his verified, official academic and professional resume.
            </p>
          </div>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
          marginBottom: '1.5rem',
          fontSize: '0.88rem'
        }}>
          <h4 style={{ fontSize: '0.95rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
            Candidate Profile Snapshot:
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} color="#10b981" /> <strong>Name:</strong> Budhiprakash Jat
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} color="#10b981" /> <strong>Role:</strong> Junior AI & Data Scientist
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} color="#10b981" /> <strong>Location:</strong> Jaipur, Rajasthan, India
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} color="#10b981" /> <strong>Target:</strong> Entry-level AI, Data Science & Machine Learning
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} color="#10b981" /> <strong>Core Tools:</strong> Python, SQL, Pandas, NumPy, Scikit-learn
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <button
            onClick={onClose}
            className="btn btn-secondary btn-sm"
          >
            Close
          </button>
          <a
            href={personalInfo.resumeUrl}
            download="Budhiprakash_Jat_Resume.pdf"
            className="btn btn-primary btn-sm"
            onClick={onClose}
          >
            <Download size={16} />
            Download PDF Resume
          </a>
        </div>
      </div>
    </div>
  );
}
