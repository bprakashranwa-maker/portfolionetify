import React from 'react';
import { 
  FileText, 
  Download, 
  CheckCircle, 
  AlertCircle, 
  Sparkles, 
  FileCheck, 
  HelpCircle 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeSection({ onOpenResumeModal, onShowToast }) {
  const handleDownload = () => {
    onShowToast({
      type: 'info',
      title: 'Downloading Resume',
      message: 'Budhiprakash_Jat_Resume.pdf is downloading. Replace with your verified CV anytime in public/resume/',
      duration: 5000,
    });
  };

  return (
    <section id="resume" className="section" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.04) 50%, transparent 100%)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <FileText size={14} />
            Curriculum Vitae
          </span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Resume & Dossier</span>
          </h2>
          <p className="section-subtitle">
            Download the candidate overview document or review the instructions to integrate your verified academic and professional credentials.
          </p>
        </div>

        <div style={{
          maxWidth: '920px',
          margin: '0 auto',
        }}>
          {/* Main Download Card */}
          <div className="glass-card" style={{
            padding: '3rem 2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}>
            {/* Left Column: Summary */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="badge badge-purple">
                  <FileCheck size={14} />
                  PDF Format Available
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
                {personalInfo.fullName}
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '1.25rem' }}>
                {personalInfo.title} • {personalInfo.location}
              </p>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Looking for entry-level opportunities in Artificial Intelligence, Data Science, Machine Learning, and Data Analytics. Proficient in Python, SQL, exploratory data analysis, and predictive modeling.
              </p>

              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <a
                  href={personalInfo.resumeUrl}
                  download="Budhiprakash_Jat_Resume.pdf"
                  onClick={handleDownload}
                  className="btn btn-primary btn-lg"
                  id="resume-section-download-btn"
                >
                  <Download size={18} />
                  <span>Download Resume (PDF)</span>
                </a>

                <button
                  onClick={onOpenResumeModal}
                  className="btn btn-secondary"
                  id="resume-section-guide-btn"
                >
                  <HelpCircle size={18} />
                  <span>Resume Details</span>
                </button>
              </div>
            </div>

            {/* Right Column: Instructions & Integrity */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.025)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
            }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.85rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={18} color="var(--accent-cyan)" />
                Resume Replacement Guide
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1rem' }}>
                A valid starter document is already installed so downloads succeed immediately. To provide your own verified document:
              </p>

              <ol style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                <li>
                  Save your finalized resume as a PDF file named <code style={{ color: 'var(--accent-cyan)' }}>Budhiprakash_Jat_Resume.pdf</code>.
                </li>
                <li>
                  Drop the file into the project folder at <code style={{ color: 'var(--accent-purple)' }}>public/resume/</code>.
                </li>
                <li>
                  Deploy or build your site — the download button will serve your real resume automatically!
                </li>
              </ol>

              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Targeting: AI / ML Engineer • Junior Data Scientist • Data Analyst
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
