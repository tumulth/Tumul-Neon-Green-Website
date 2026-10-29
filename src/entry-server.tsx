import { renderToString } from 'react-dom/server';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { buildHead, renderHeadTags, ROUTES, buildSitemap, buildLlmsTxt, buildRobotsTxt } from './seo';

// Used only by scripts/prerender.mjs at build time.
export const render = (path: string) => ({
  html: renderToString(
    <ThemeProvider>
      <App initialPath={path} />
    </ThemeProvider>
  ),
  head: renderHeadTags(buildHead(path)),
});

export { ROUTES, buildSitemap, buildLlmsTxt, buildRobotsTxt };
export { CASE_STUDY_FONTS } from './pages/ProjectPage';
