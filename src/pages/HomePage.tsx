import React from 'react';
import { Hero } from '../sections/Hero';
import { WorkIndex } from '../sections/WorkIndex';
import { Websites } from '../sections/Websites';
import { Services } from '../sections/Services';
import { Testimonials } from '../sections/Testimonials';
import { About } from '../sections/About';
import { Faq } from '../sections/Faq';
import { Contact } from '../sections/Contact';

export const HomePage: React.FC = () => (
  <>
    <Hero />
    <WorkIndex />
    <Websites />
    <Services />
    <Testimonials />
    <About />
    <Faq />
    <Contact />
  </>
);
