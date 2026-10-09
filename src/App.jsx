import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NeuralBackground from './components/NeuralBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import ResumeSection from './sections/ResumeSection';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeToast, setActiveToast] = useState(null);

  const showToast = (toastData) => {
    setActiveToast(toastData);
  };

  const closeToast = () => {
    setActiveToast(null);
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Interactive AI Neural Background Canvas */}
      <NeuralBackground />

      {/* Primary Sticky Header */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Education />
        <ResumeSection
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onShowToast={showToast}
        />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Floating Feedback Toast */}
      <Toast toast={activeToast} onClose={closeToast} />
    </div>
  );
}
