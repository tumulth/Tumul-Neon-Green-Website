import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface NavigationProps {
  currentView: 'home' | 'work';
  onNavigateHome: () => void;
  onNavigateWork: () => void;
  onOpenContact: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentView,
  onNavigateHome,
  onNavigateWork,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update IST clock every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat('en-GB', options);
      setIstTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTarget = (id: string) => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -70, duration: 1.2 });
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (target: 'home' | 'about' | 'work' | 'services') => {
    setMobileMenuOpen(false);

    if (target === 'home') {
      onNavigateHome();
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: false, duration: 1 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (target === 'work') {
      onNavigateWork();
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: false, duration: 1 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (target === 'about') {
      if (currentView !== 'home') {
        onNavigateHome();
        setTimeout(() => {
          scrollToTarget('about');
        }, 150);
      } else {
        scrollToTarget('about');
      }
      return;
    }

    if (target === 'services') {
      if (currentView !== 'home') {
        onNavigateHome();
        setTimeout(() => {
          scrollToTarget('services');
        }, 150);
      } else {
        scrollToTarget('services');
      }
      return;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F7F2]/90 dark:bg-[#0C0C0B]/90 backdrop-blur-md border-b border-[#111111]/10 dark:border-white/10 py-3.5 shadow-sm'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Zone 1: Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-2xl sm:text-3xl font-serif italic font-normal tracking-tight text-[#111111] dark:text-[#F5F4F0] hover:opacity-70 transition-opacity flex items-center gap-2 group text-left"
          data-cursor="arrow"
        >
          <span>Tumul Thakur</span>
        </button>

        {/* Zone 2: Navigation Links in requested order: HOME · ABOUT · ALL WORK · SERVICES */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs font-semibold tracking-wider text-[#111111] dark:text-[#F5F4F0] uppercase">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors relative group py-1 ${
              currentView === 'home'
                ? 'text-black dark:text-white font-bold'
                : 'text-[#666] dark:text-[#888] hover:text-black dark:hover:text-white'
            }`}
            data-cursor="arrow"
          >
            <span>HOME</span>
            {currentView === 'home' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#111111] dark:bg-[#C8FF00]" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="text-[#666] dark:text-[#888] hover:text-black dark:hover:text-white transition-colors relative group py-1"
            data-cursor="arrow"
          >
            <span>ABOUT</span>
          </button>

          <button
            onClick={() => handleNavClick('work')}
            className={`transition-colors relative group py-1 ${
              currentView === 'work'
                ? 'text-black dark:text-white font-bold'
                : 'text-[#666] dark:text-[#888] hover:text-black dark:hover:text-white'
            }`}
            data-cursor="arrow"
          >
            <span>ALL WORK</span>
            {currentView === 'work' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#111111] dark:bg-[#C8FF00]" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('services')}
            className="text-[#666] dark:text-[#888] hover:text-black dark:hover:text-white transition-colors relative group py-1"
            data-cursor="arrow"
          >
            <span>SERVICES</span>
          </button>
        </nav>

        {/* Zone 3: Actions + Theme Toggle + Live IST + Mobile Trigger */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live Pune IST Time */}
          <div className="hidden xl:flex items-center gap-2 text-[11px] font-mono text-[#666] dark:text-[#AAA] bg-white/80 dark:bg-[#181816]/90 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 shadow-sm backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-[#C8FF00] animate-pulse" />
            <span>PUNE {istTime || '18:42'} IST</span>
          </div>

          {/* Theme Toggle Button (Light / Dark Mode) */}
          <ThemeToggle showLabel={true} />

          <button
            onClick={onOpenContact}
            className="text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-full bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111] hover:bg-[#C8FF00] hover:text-[#111111] dark:hover:bg-white transition-all duration-200 border border-[#111111] dark:border-[#C8FF00] whitespace-nowrap shadow-sm"
            data-cursor="arrow"
          >
            GET IN TOUCH →
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#111111] dark:text-[#F5F4F0] hover:opacity-70 transition-opacity"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span
                className={`h-[1.5px] bg-[#111111] dark:bg-[#F5F4F0] transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''
                }`}
              />
              <span
                className={`h-[1.5px] bg-[#111111] dark:bg-[#F5F4F0] transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`h-[1.5px] bg-[#111111] dark:bg-[#F5F4F0] transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bg-[#F7F7F2] dark:bg-[#121210] border-b border-[#111111]/15 dark:border-white/15 px-6 py-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 text-[#111111] dark:text-[#F5F4F0]">
          <div className="flex flex-col gap-4 text-lg font-medium tracking-tight uppercase">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 border-b border-black/10 dark:border-white/10 flex items-center justify-between"
            >
              <span>HOME</span>
              <span className="font-mono text-xs text-[#8A8A84]">01</span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 border-b border-black/10 dark:border-white/10 flex items-center justify-between"
            >
              <span>ABOUT</span>
              <span className="font-mono text-xs text-[#8A8A84]">02</span>
            </button>
            <button
              onClick={() => handleNavClick('work')}
              className="text-left py-2 border-b border-black/10 dark:border-white/10 flex items-center justify-between"
            >
              <span>ALL WORK</span>
              <span className="font-mono text-xs text-[#8A8A84]">03</span>
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-left py-2 border-b border-black/10 dark:border-white/10 flex items-center justify-between"
            >
              <span>SERVICES</span>
              <span className="font-mono text-xs text-[#8A8A84]">04</span>
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#8A8A84]">
              <span>THEME</span>
              <ThemeToggle showLabel={true} />
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-[#8A8A84]">
              <span>PUNE, INDIA</span>
              <span>{istTime || '18:42'} IST</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-full bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111] font-bold text-xs uppercase tracking-widest text-center shadow-lg"
            >
              GET IN TOUCH →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
