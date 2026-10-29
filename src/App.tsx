import React, { useEffect } from 'react';
import { getProject } from './data/projects';
import { parsePath, RouterProvider, useRouter } from './router';
import { buildHead } from './seo';
import { Header } from './components/Header';
import { Footer } from './sections/Footer';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ProjectPage } from './pages/ProjectPage';

// Reveals each [data-reveal] block once as it enters the viewport.
const useReveal = (path: string) => {
  useEffect(() => {
    (window as any).__revealReady = true;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
};

// Keeps the tab title, description and canonical link in step with client-side navigation.
const useHead = (path: string) => {
  useEffect(() => {
    const head = buildHead(path);
    document.title = head.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', head.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', head.canonical);
  }, [path]);
};

const Pages: React.FC = () => {
  const { path } = useRouter();
  const route = parsePath(path);
  useReveal(path);
  useHead(path);

  const project = route.name === 'project' ? getProject(route.id) : undefined;

  return (
    <div className="relative min-h-screen bg-paper text-ink font-sans">
      <Header tone={route.name === 'home' || (route.name === 'project' && !project) ? 'dark' : 'light'} />
      <main>
        {project ? <ProjectPage key={project.id} project={project} /> : route.name === 'work' ? <WorkPage /> : <HomePage />}
      </main>
      <Footer />
    </div>
  );
};

export default function App({ initialPath }: { initialPath: string }) {
  return (
    <RouterProvider initialPath={initialPath}>
      <Pages />
    </RouterProvider>
  );
}
