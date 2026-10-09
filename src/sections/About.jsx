import React from 'react';
import { 
  User, 
  MapPin, 
  Mail, 
  Target, 
  Compass, 
  CheckCircle, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Code 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Cpu size={24} color="var(--accent-purple)" />,
      title: "Machine Learning & Modeling",
      description: "Developing regression and classification pipelines using Scikit-learn, with emphasis on validation, metric evaluation, and model interpretability."
    },
    {
      icon: <TrendingUp size={24} color="var(--accent-cyan)" />,
      title: "Exploratory Data Analysis",
      description: "Extracting hidden signals from raw tables using Pandas, SQL, and NumPy, identifying correlations, anomalies, and seasonal behaviors."
    },
    {
      icon: <Layers size={24} color="var(--accent-emerald)" />,
      title: "Visual Storytelling",
      description: "Transforming quantitative findings into intuitive visual charts and reports with Matplotlib, Seaborn, and business intelligence dashboards."
    },
    {
      icon: <Code size={24} color="var(--accent-amber)" />,
      title: "Applied AI Solutions",
      description: "Bridging analytical models with user-facing interfaces using modern web frameworks like React and Streamlit."
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.03) 50%, transparent 100%)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <User size={14} />
            About Me
          </span>
          <h2 className="section-title">
            Curious by Nature, <span className="gradient-text">Driven by Data</span>
          </h2>
          <p className="section-subtitle">
            A dedicated junior technologist passionate about algorithmic problem solving and applied artificial intelligence.
          </p>
        </div>

        {/* Narrative & Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch',
          marginBottom: '3.5rem',
        }}>
          {/* Narrative Card */}
          <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Professional Overview
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7 }}>
                {personalInfo.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Career Goal Highlight Box */}
            <div style={{
              marginTop: '1.75rem',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(6, 182, 212, 0.08)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              display: 'flex',
              gap: '0.85rem',
              alignItems: 'flex-start',
            }}>
              <Target size={22} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>Primary Career Goal:</strong>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {personalInfo.careerGoal}
                </p>
              </div>
            </div>
          </div>

          {/* Key Facts & Profile Snapshot Card */}
          <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Profile Snapshot
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.9rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Full Name</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{personalInfo.fullName}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.9rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Professional Title</span>
                  <span style={{ fontWeight: 600, color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>{personalInfo.title}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.9rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Location</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={15} color="var(--accent-cyan)" /> {personalInfo.location}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.9rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Contact Email</span>
                  <a href={`mailto:${personalInfo.email}`} style={{ fontWeight: 600, color: 'var(--accent-purple)', fontSize: '0.95rem', wordBreak: 'break-all' }}>
                    {personalInfo.email}
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.9rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Availability</span>
                  <span className="badge badge-emerald">Open for Opportunities</span>
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '1.75rem',
              padding: '1.2rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
            }}>
              <strong>Honesty & Transparency Commitment:</strong>
              <p style={{ marginTop: '0.25rem' }}>
                All projects, skills, and timelines presented here reflect genuine foundational capabilities, documented code, and ongoing learning milestones without overstated claims.
              </p>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          {pillars.map((pillar, i) => (
            <div key={i} className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}>
                {pillar.icon}
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {pillar.title}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
