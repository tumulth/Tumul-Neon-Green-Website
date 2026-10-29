import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';

const root = document.getElementById('root')!;
const app = (
  <ThemeProvider>
    <App initialPath={window.location.pathname} />
  </ThemeProvider>
);

// Pages are prerendered at build time; in dev the root is empty.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
