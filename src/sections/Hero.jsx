import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  MapPin, 
  Database, 
  Cpu, 
  Code2, 
  BarChart2, 
  BrainCircuit 
} from 'lucide-react';
import { Github, Linkedin } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section" style={{ paddingTop: '8.5rem', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
        }}>
          {/* Left Column: Introductions & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Status Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem' }}>
              <span className="badge badge-purple" style={{ padding: '0.4rem 0.95rem' }}>
                <Sparkles size={14} style={{ color: 'var(--accent-cyan)' }} />
                <span>Open to Junior AI & Data Science Roles</span>
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.05rem',
                color: 'var(--accent-cyan)',
                fontWeight: 500,
                letterSpacing: '0.04em',
                marginBottom: '0.4rem'
              }}>
                Hi, I'm
              </p>
              <h1 style={{
                fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '0.6rem'
              }}>
                <span className="gradient-text">{personalInfo.fullName}</span>
              </h1>
              <div style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.85rem)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                flexWrap: 'wrap'
              }}>
                <span>{personalInfo.title}</span>
                <span style={{ color: 'var(--text-muted)' }}>•</span>
                <span style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontWeight: 500
                }}>
                  <MapPin size={16} color="var(--accent-cyan)" />
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Engaging Headline */}
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'var(--text-primary)',
              lineHeight: 1.5,
              borderLeft: '3px solid var(--accent-purple)',
              paddingLeft: '1rem',
            }}>
              {personalInfo.headline}
            </h2>

            {/* Short Introduction */}
            <p style={{ fontSize: '1.02rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
              Passionate about turning complex real-world numbers into predictive models and actionable visualizations. Focused on Python, Scikit-learn, SQL, and modern AI engineering.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
              <button
                onClick={() => handleScrollTo('projects')}
                className="btn btn-primary"
                id="hero-btn-projects"
              >
                <span>View Projects</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="btn btn-secondary"
                id="hero-btn-contact"
              >
                <Mail size={17} />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="btn btn-outline"
                id="hero-btn-resume"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                CONNECT:
              </span>

              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="GitHub Profile (Placeholder)"
                aria-label="Visit GitHub Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Github size={18} />
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LinkedIn Profile (Placeholder)"
                aria-label="Visit LinkedIn Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Linkedin size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon-btn"
                title={`Email: ${personalInfo.email}`}
                aria-label="Send direct email"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: AI / Data Science Interactive Visual */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                aspectRatio: '1 / 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Outer pulsing glow orb */}
              <div
                style={{
                  position: 'absolute',
                  inset: '10%',
                  borderRadius: '50%',
                  background: 'var(--gradient-ai)',
                  opacity: 0.18,
                  filter: 'blur(45px)',
                  animation: 'pulseGlow 6s ease-in-out infinite',
                }}
              />

              {/* Orbital Ring 1 */}
              <div
                style={{
                  position: 'absolute',
                  inset: '4%',
                  borderRadius: '50%',
                  border: '1px dashed rgba(139, 92, 246, 0.35)',
                  animation: 'spinSlow 35s linear infinite',
                }}
              />

              {/* Orbital Ring 2 */}
              <div
                style={{
                  position: 'absolute',
                  inset: '18%',
                  borderRadius: '50%',
                  border: '1px solid rgba(6, 182, 212, 0.25)',
                  animation: 'spinSlow 24s linear reverse infinite',
                }}
              />

              {/* Central AI Glass Core Card */}
              <div
                className="glass-card"
                style={{
                  width: '260px',
                  height: '260px',
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.3) 0%, rgba(13, 17, 36, 0.9) 70%)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 25px rgba(6, 182, 212, 0.2)',
                  zIndex: 2,
                  animation: 'floatOrb 6s ease-in-out infinite',
                }}
              >
                <BrainCircuit size={64} style={{ color: 'var(--accent-cyan)', marginBottom: '0.6rem', filter: 'drop-shadow(0 0 12px rgba(6, 182, 212, 0.8))' }} />
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  color: '#ffffff',
                  letterSpacing: '0.02em',
                }}>
                  AI & DATA CORE
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--accent-purple)',
                  fontWeight: 600,
                  marginTop: '0.2rem'
                }}>
                  PREDICTIVE INTELLIGENCE
                </span>
              </div>

              {/* Floating Badges positioned around orbital sphere */}
              <div
                className="glass-card"
                style={{
                  position: 'absolute',
                  top: '6%',
                  right: '4%',
                  padding: '0.55rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderRadius: 'var(--radius-full)',
                  zIndex: 3,
                  border: '1px solid rgba(139, 92, 246, 0.4)',
                  boxShadow: 'var(--shadow-md)',
                  animation: 'floatOrb 5s ease-in-out infinite',
                }}
              >
                <Code2 size={16} color="var(--accent-purple)" />
                <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Python • Pandas</span>
              </div>

              <div
                className="glass-card"
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  right: '2%',
                  padding: '0.55rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderRadius: 'var(--radius-full)',
                  zIndex: 3,
                  border: '1px solid rgba(6, 182, 212, 0.4)',
                  boxShadow: 'var(--shadow-md)',
                  animation: 'floatOrb 7s ease-in-out infinite 1s',
                }}
              >
                <Cpu size={16} color="var(--accent-cyan)" />
                <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Scikit-Learn • ML</span>
              </div>

              <div
                className="glass-card"
                style={{
                  position: 'absolute',
                  bottom: '12%',
                  left: '2%',
                  padding: '0.55rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderRadius: 'var(--radius-full)',
                  zIndex: 3,
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  boxShadow: 'var(--shadow-md)',
                  animation: 'floatOrb 6s ease-in-out infinite 2s',
                }}
              >
                <Database size={16} color="var(--accent-emerald)" />
                <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>SQL • Analytics</span>
              </div>

              <div
                className="glass-card"
                style={{
                  position: 'absolute',
                  top: '12%',
                  left: '4%',
                  padding: '0.55rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderRadius: 'var(--radius-full)',
                  zIndex: 3,
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  boxShadow: 'var(--shadow-md)',
                  animation: 'floatOrb 6.5s ease-in-out infinite 0.5s',
                }}
              >
                <BarChart2 size={16} color="var(--accent-amber)" />
                <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>EDA & Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
