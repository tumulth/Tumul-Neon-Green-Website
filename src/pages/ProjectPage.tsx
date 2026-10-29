import React, { useEffect } from 'react';
import { PROJECTS, Project } from '../data/projects';
import { GUTTER } from '../components/Header';
import { Link, useRouter } from '../router';
import { WebsiteCaseStudy } from '../components/website/WebsiteCaseStudy';
import { WEBSITE_STUDIES } from '../components/website/websiteData';
import { BimacmeCaseStudy } from '../components/bimacme/BimacmeCaseStudy';
import { SangreenBrandGuidelines } from '../components/sangreen/SangreenBrandGuidelines';
import { SangreenRenewablesCaseStudy } from '../components/sangreen-renewables/SangreenRenewablesCaseStudy';
import { SiddhivinayakCaseStudy } from '../components/siddhivinayak/SiddhivinayakCaseStudy';
import { KrisalaCaseStudy } from '../components/krisala/KrisalaCaseStudy';
import { SocialMediaCreativesCaseStudy } from '../components/social-media/SocialMediaCreativesCaseStudy';
import { SomaCafeCaseStudy } from '../components/soma/SomaCafeCaseStudy';

// The older case studies set their client's own typefaces; load them only when one is open.
// taste-skill-ignore: these faces belong to the older case studies only.
export const CASE_STUDY_FONTS =
  'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Mono:wght@400;700&family=Rubik:wght@300;400;500;600;700;800;900&family=Ubuntu:wght@300;400;500;700&display=swap';

const useCaseStudyFonts = () => {
  useEffect(() => {
    if (document.querySelector(`link[href="${CASE_STUDY_FONTS}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = CASE_STUDY_FONTS;
    document.head.appendChild(link);
  }, []);
};

const LEGACY: Record<string, React.FC<{ project: Project; onSelectProject: (p: Project) => void; onClose: () => void }>> = {
  bimacme: BimacmeCaseStudy,
  'sangreen-logistics': SangreenBrandGuidelines,
  'sangreen-future-renewables': SangreenRenewablesCaseStudy,
  'sidhivinayak-precast': SiddhivinayakCaseStudy,
  'krisala-hiranandani': KrisalaCaseStudy,
  'social-media-creatives': SocialMediaCreativesCaseStudy,
  'soma-cafe': SomaCafeCaseStudy,
};

export const ProjectPage: React.FC<{ project: Project }> = ({ project }) => {
  const { navigate } = useRouter();
  useCaseStudyFonts();

  const index = PROJECTS.findIndex((p) => p.id === project.id);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  if (WEBSITE_STUDIES[project.id]) return <WebsiteCaseStudy project={project} next={next} />;

  const Study = LEGACY[project.id];
  return (
    <article className="bg-paper text-ink">
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-24 sm:pt-28 pb-16 md:pb-24 flex flex-col gap-14">
        <nav aria-label="Breadcrumb" className="text-small text-soft">
          <Link to="/work" className="link">
            Work
          </Link>{' '}
          / {project.discipline}
          {project.agency && <> · made with {project.agency}</>}
        </nav>
        <Study
          project={project}
          onSelectProject={(p) => navigate(`/work/${p.id}`)}
          onClose={() => navigate('/work')}
        />
      </div>
      <nav aria-label="Next project" className={`${GUTTER} py-20 sm:py-28 bg-paper-2`}>
        <Link to={`/work/${next.id}`} className="group block">
          <span className="text-small text-soft">Next project</span>
          <span className="mt-2 block display text-head group-hover:text-soft transition-colors">{next.title}</span>
          <span className="block text-small text-soft">{next.discipline}</span>
        </Link>
      </nav>
    </article>
  );
};
