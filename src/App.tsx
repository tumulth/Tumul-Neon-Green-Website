/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { PROJECTS, Project } from './data/projects';
import { Navigation } from './components/Navigation';
import { CustomCursor } from './components/CustomCursor';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactDrawer } from './components/ContactDrawer';
import { Hero } from './sections/Hero';
import { StatementSection } from './sections/StatementSection';
import { ProcessSection } from './sections/ProcessSection';
import { SelectedWork } from './sections/SelectedWork';
import { Services } from './sections/Services';
import { AboutBioSection } from './sections/AboutBioSection';
import { CtaBanner } from './sections/CtaBanner';
import { Footer } from './sections/Footer';
import { WorkPage } from './pages/WorkPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'work'>('home');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis High-Performance Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Do NOT call lenis.stop() when modal is open, because Lenis.stop() intercepts and blocks all window wheel events with preventDefault().
  // Instead, the CaseStudyModal and ContactDrawer containers have data-lenis-prevent="true" and explicit handlers so they scroll 100% smoothly.

  // Sync with window location hash for clean multi-page behavior and browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'work' || hash === 'all-work') {
        setCurrentView('work');
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    setCurrentView('home');
    window.location.hash = '';
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToWork = () => {
    setCurrentView('work');
    window.location.hash = 'work';
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenCaseStudy = (project: Project) => {
    setActiveProject(project);
  };

  const handleSelectProjectByTitle = (title: string) => {
    const found = PROJECTS.find(
      (p) => p.title.toLowerCase() === title.toLowerCase() || p.id === title.toLowerCase()
    );
    if (found) {
      setActiveProject(found);
    } else {
      navigateToWork();
    }
  };

  const handleScrollToSelectedWork = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo('#selected-work', { offset: -60, duration: 1.2 });
    } else {
      const el = document.getElementById('selected-work');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F2] dark:bg-[#0C0C0B] text-[#111111] dark:text-[#F5F4F0] font-sans selection:bg-[#C8FF00] selection:text-[#111111] has-custom-cursor relative overflow-x-hidden transition-colors duration-300">
      {/* Custom Desktop Magnetic Cursor */}
      <CustomCursor />

      {/* Top Fixed Navigation Bar with Home · About · All Work · Services */}
      <Navigation
        currentView={currentView}
        onNavigateHome={navigateToHome}
        onNavigateWork={navigateToWork}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Multi-Page View Routing */}
      {currentView === 'home' ? (
        <main>
          {/* 01. Hero Section (Strict editorial typography-led focal point) */}
          <Hero
            onExploreWork={handleScrollToSelectedWork}
            onOpenContact={() => setIsContactOpen(true)}
            onNavigateToWork={navigateToWork}
          />

          {/* 02. "Hallo!" Statement with Fluid Interactive Word-by-Word Typography */}
          <StatementSection />

          {/* 03. "Here's how it works" / 01, 02, 03 Connected Cards + Sliding Client Reviews Marquee */}
          <div id="process">
            <ProcessSection />
          </div>

          {/* 04. "Selected Works" (Clean 2-column cards, max 3 works, NO BENTO SLOP!) */}
          <SelectedWork
            onOpenCaseStudy={handleOpenCaseStudy}
            onViewAllWork={navigateToWork}
          />

          {/* 05. Services & Capabilities */}
          <div id="services">
            <Services
              onSelectProjectByTitle={handleSelectProjectByTitle}
              onOpenContact={() => setIsContactOpen(true)}
            />
          </div>

          {/* 06. "Who Am I / Pushing Boundaries since 2021" + Photo & Experience Table */}
          <AboutBioSection />

          {/* 07. "Let's Make It Happen" Glowing Lime CTA Banner */}
          <CtaBanner onOpenContact={() => setIsContactOpen(true)} />
        </main>
      ) : (
        /* Dedicated All Works Page (Uniform Symmetrical Cards & Client Roster) */
        <main>
          <WorkPage
            onBackToHome={navigateToHome}
            onOpenCaseStudy={handleOpenCaseStudy}
            onOpenContact={() => setIsContactOpen(true)}
          />
        </main>
      )}

      {/* Footer with links and reduced-scale signature wordmark */}
      <Footer
        onNavigateHome={navigateToHome}
        onNavigateWork={navigateToWork}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Comprehensive Case Study Reader Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onSelectProject={(project) => setActiveProject(project)}
      />

      {/* Interactive Project Inquiry Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
