import React, { createContext, useContext, useEffect, useState } from 'react';

// A small path router: real URLs (/work/subculture) that crawlers can follow,
// with client-side navigation for people.

export type Route =
  | { name: 'home' }
  | { name: 'work' }
  | { name: 'project'; id: string };

export const parsePath = (path: string): Route => {
  const clean = path.replace(/\/+$/, '') || '/';
  if (clean === '/work') return { name: 'work' };
  const m = clean.match(/^\/work\/([a-z0-9-]+)$/);
  if (m) return { name: 'project', id: m[1] };
  return { name: 'home' };
};

const RouterContext = createContext<{ path: string; navigate: (to: string) => void }>({
  path: '/',
  navigate: () => {},
});

const scrollToHash = (hash: string) => {
  const el = hash ? document.getElementById(hash.slice(1)) : null;
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  else window.scrollTo({ top: 0 });
};

export const RouterProvider: React.FC<{ initialPath: string; children: React.ReactNode }> = ({
  initialPath,
  children,
}) => {
  const [path, setPath] = useState(initialPath);

  useEffect(() => {
    // Old hash links (#work, #about) from the previous site still land in the right place.
    const legacy = window.location.hash.replace('#', '');
    if (window.location.pathname === '/' && (legacy === 'work' || legacy === 'all-work')) {
      window.history.replaceState(null, '', '/work');
      setPath('/work');
    }
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to: string) => {
    const url = new URL(to, window.location.origin);
    const samePage = url.pathname === window.location.pathname;
    if (!samePage || url.hash !== window.location.hash) {
      window.history.pushState(null, '', url.pathname + url.hash);
    }
    setPath(url.pathname);
    // Wait for the new page to render before scrolling.
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToHash(url.hash)));
  };

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
};

export const useRouter = () => useContext(RouterContext);

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export const Link: React.FC<LinkProps> = ({ to, onClick, children, ...rest }) => {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
};
