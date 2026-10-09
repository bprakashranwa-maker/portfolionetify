import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Edit3 
} from 'lucide-react';
import { educationTimeline } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} />
            Academic & Growth
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Learning Journey</span>
          </h2>
          <p className="section-subtitle">
            A transparent chronicle of foundational coursework, self-directed machine learning specializations, and analytical milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{
          maxWidth: '860px',
          margin: '0 auto',
          position: 'relative',
        }}>
          {/* Vertical Timeline Rule */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '10px',
            bottom: '10px',
            width: '2px',
            background: 'linear-gradient(180deg, var(--accent-purple) 0%, var(--accent-cyan) 50%, rgba(255, 255, 255, 0.05) 100%)',
          }} />

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {educationTimeline.map((item, index) => (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  paddingLeft: '3.75rem',
                }}
              >
                {/* Timeline Node Point */}
                <div style={{
                  position: 'absolute',
                  left: '10px',
                  top: '1.25rem',
                  transform: 'translateX(-50%)',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: index === 0 ? 'var(--accent-purple)' : index === 1 ? 'var(--accent-cyan)' : 'var(--bg-elevated)',
                  border: '3px solid var(--bg-primary)',
                  boxShadow: '0 0 12px rgba(139, 92, 246, 0.5)',
                  zIndex: 2,
                }} />

                {/* Timeline Card */}
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.85rem' }}>
                    <div>
                      <span className="badge badge-purple" style={{ fontSize: '0.72rem', marginBottom: '0.4rem' }}>
                        {item.type}
                      </span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {item.title}
                      </h3>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-cyan)', marginTop: '0.2rem' }}>
                        {item.institution}
                      </h4>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                      }}>
                        <Calendar size={14} />
                        {item.duration}
                      </span>
                      <span className={`badge ${item.status === 'Active' ? 'badge-emerald' : 'badge-cyan'}`} style={{ fontSize: '0.7rem' }}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem 1.25rem',
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {item.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <CheckCircle2 size={15} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Edit Prompt Banner */}
        <div style={{
          maxWidth: '860px',
          margin: '2.5rem auto 0 auto',
          padding: '1.2rem 1.6rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(139, 92, 246, 0.06)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
        }}>
          <Edit3 size={18} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0 }}>
            <strong>How to edit:</strong> Replace the Degree, University name, and Graduation Year placeholders in <code>src/data/portfolioData.js</code> under <code>educationTimeline</code> to reflect your exact credentials.
          </p>
        </div>
      </div>
    </section>
  );
}
