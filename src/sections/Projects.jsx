import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  SlidersHorizontal, 
  AlertCircle,
  BarChart,
  Home,
  MessageSquare
} from 'lucide-react';
import { Github } from '../components/SocialIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Machine Learning', 'Data Analysis', 'NLP & AI'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const renderProjectVisual = (type, accentColor) => {
    switch (type) {
      case 'chart':
        return (
          <div style={{
            height: '180px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.05) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid var(--border-subtle)',
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(139, 92, 246, 0.2)',
              border: '1px solid rgba(139, 92, 246, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(139, 92, 246, 0.3)',
            }}>
              <Home size={32} color="#c084fc" />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--accent-cyan)',
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-sm)',
            }}>
              Regression • Feature Engineering • Scikit-learn
            </div>
          </div>
        );
      case 'dashboard':
        return (
          <div style={{
            height: '180px',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid var(--border-subtle)',
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(6, 182, 212, 0.2)',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(6, 182, 212, 0.3)',
            }}>
              <BarChart size={32} color="#22d3ee" />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#34d399',
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-sm)',
            }}>
              SQL Queries • Pandas Wrangling • Seaborn EDA
            </div>
          </div>
        );
      case 'nlp':
        return (
          <div style={{
            height: '180px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid var(--border-subtle)',
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(59, 130, 246, 0.2)',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(59, 130, 246, 0.3)',
            }}>
              <MessageSquare size={32} color="#60a5fa" />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#60a5fa',
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-sm)',
            }}>
              TF-IDF • Text Classification • Streamlit
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.02) 50%, transparent 100%)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} />
            Featured Work
          </span>
          <h2 className="section-title">
            Projects & <span className="gradient-text">Practical Workflows</span>
          </h2>
          <p className="section-subtitle">
            Curated machine learning and data science projects showcasing hands-on feature engineering, statistical exploration, and model evaluation.
          </p>
        </div>

        {/* Filter Controls */}
        <div style={{
          display: 'flex',
          gap: '0.65rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '3rem',
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              style={{
                padding: '0.55rem 1.3rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: '1px solid',
                borderColor: activeFilter === category ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                background: activeFilter === category ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: activeFilter === category ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.25rem',
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              {/* Card Visual Header */}
              {renderProjectVisual(project.visualType, project.colorAccent)}

              {/* Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  {/* Category & Status Badges */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                    <span className="badge badge-purple" style={{ fontSize: '0.74rem' }}>
                      {project.category}
                    </span>
                    <span
                      className={`badge ${project.status === 'Completed' ? 'badge-emerald' : 'badge-amber'}`}
                      style={{ fontSize: '0.74rem' }}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.85rem' }}>
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {project.summary}
                  </p>

                  {/* Tech stack badges */}
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          color: 'var(--text-secondary)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  gap: '0.75rem',
                  flexWrap: 'wrap',
                }}>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <Eye size={15} />
                    <span>View Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    title="View GitHub Repository (Placeholder)"
                  >
                    <Github size={15} />
                    <span>Repo</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink size={15} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Data Transparency Banner */}
        <div style={{
          marginTop: '3.5rem',
          padding: '1.25rem 1.75rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <AlertCircle size={20} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
              All project repositories and datasets are configured cleanly in <code>src/data/portfolioData.js</code> so you can link your real GitHub repositories whenever they are public.
            </p>
          </div>
          <span className="badge badge-purple" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            Centralized Data
          </span>
        </div>
      </div>
    </section>
  );
}
