import React from 'react';
import { GUTTER } from '../components/Header';
import { Link } from '../router';

export const Hero: React.FC = () => (
  <section className={`relative bg-ink text-paper min-h-[100svh] flex flex-col ${GUTTER} pb-6 sm:pb-10`}>
    <h1 className="display lines text-[28vw] leading-[0.8] sm:text-display mt-[18svh] sm:mt-[12svh] -ml-[0.04em]">
      <span className="line">
        <span data-line className="text-lime" style={{ '--i': 0 } as React.CSSProperties}>
          Tumul
        </span>
      </span>{' '}
      <span className="line">
        <span data-line style={{ '--i': 1 } as React.CSSProperties}>
          Thakur
        </span>
      </span>
    </h1>

    <div className="mt-auto pt-12 grid lg:grid-cols-12 gap-6">
      <div data-intro className="lg:col-start-8 lg:col-span-5 xl:col-start-9 xl:col-span-4">
        <p className="text-body max-w-[38ch]">
          Brand identity and website designer in Pune. I design logos, brand guidelines and websites for companies in
          Pune and Mumbai, and I’m open to freelance projects and full-time roles.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link to="/#work" className="btn bg-lime text-ink hover:bg-paper">
            See the work
          </Link>
          <Link to="/#contact" className="link text-small font-semibold">
            Or email me
          </Link>
        </div>
      </div>
    </div>
  </section>
);
