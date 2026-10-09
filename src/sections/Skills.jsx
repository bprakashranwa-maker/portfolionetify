import React, { useState } from 'react';
import { 
  Code, 
  Database, 
  Cpu, 
  BarChart3, 
  Globe, 
  Wrench, 
  Layers, 
  Info, 
  CheckCircle2 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code size={20} color="var(--accent-purple)" />;
      case 'Database': return <Database size={20} color="var(--accent-cyan)" />;
      case 'Cpu': return <Cpu size={20} color="var(--accent-emerald)" />;
      case 'BarChart3': return <BarChart3 size={20} color="var(--accent-amber)" />;
      case 'Globe': return <Globe size={20} color="#38bdf8" />;
      case 'Wrench': return <Wrench size={20} color="#c084fc" />;
      default: return <Layers size={20} color="var(--accent-cyan)" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Cpu size={14} />
            Technical Arsenal
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            Grounding theoretical concepts in practical tools. No inflated percentage meters — only authentic capabilities and practical workflows.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          gap: '0.65rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '3rem',
        }}>
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '0.55rem 1.2rem',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid',
              borderColor: selectedCategory === 'all' ? 'var(--accent-cyan)' : 'var(--border-subtle)',
              background: selectedCategory === 'all' ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: selectedCategory === 'all' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              transition: 'all var(--transition-fast)',
            }}
          >
            All Categories ({skillCategories.length})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '0.55rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: '1px solid',
                borderColor: selectedCategory === cat.id ? 'var(--accent-purple)' : 'var(--border-subtle)',
                background: selectedCategory === cat.id ? 'rgba(139, 92, 246, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: selectedCategory === cat.id ? 'var(--accent-purple)' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid by Category */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
        }}>
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills in Category */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '1rem', flex: 1 }}>
                {cat.skills.map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'rgba(255, 255, 255, 0.025)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.95rem 1.15rem',
                      transition: 'border-color var(--transition-fast)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <CheckCircle2 size={15} color="var(--accent-cyan)" />
                        {skill.name}
                      </span>
                      <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                        {skill.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontSize: '0.72rem',
                              fontFamily: 'var(--font-mono)',
                              background: 'rgba(139, 92, 246, 0.12)',
                              color: 'var(--text-secondary)',
                              padding: '0.15rem 0.5rem',
                              borderRadius: 'var(--radius-sm)',
                              border: '1px solid rgba(139, 92, 246, 0.2)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on editing skills */}
        <div style={{
          marginTop: '3rem',
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
            <Info size={20} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
              Need to add or modify technologies? All skills are managed in a single structured file at <code>src/data/portfolioData.js</code>.
            </p>
          </div>
          <span className="badge badge-cyan" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            Fully Configurable
          </span>
        </div>
      </div>
    </section>
  );
}
