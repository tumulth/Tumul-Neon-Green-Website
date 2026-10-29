import React from 'react';
import { Link } from '../router';

export const GUTTER = 'px-4 sm:px-6 lg:px-10';

interface HeaderProps {
  /** "dark" sits on the black hero; "light" sits on paper. */
  tone: 'dark' | 'light';
}

export const Header: React.FC<HeaderProps> = ({ tone }) => {
  const ink = tone === 'dark' ? 'text-paper' : 'text-ink';
  return (
    <header className={`absolute inset-x-0 top-0 z-30 ${GUTTER} pt-5 sm:pt-6 flex items-baseline justify-between text-small ${ink}`}>
      <Link to="/" className="font-semibold hover:opacity-70 transition-opacity">
        Tumul Thakur
      </Link>
      <nav aria-label="Main" className="flex items-baseline gap-5 sm:gap-7">
        <Link to="/work" className="hover:opacity-70 transition-opacity">
          Work
        </Link>
        <Link to="/#services" className="hidden sm:inline hover:opacity-70 transition-opacity">
          Services
        </Link>
        <Link to="/#about" className="hidden sm:inline hover:opacity-70 transition-opacity">
          About
        </Link>
        <Link to="/#contact" className="link font-semibold">
          Email me
        </Link>
      </nav>
    </header>
  );
};
