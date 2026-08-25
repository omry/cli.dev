import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import {
  projects,
  type Project,
  type ProjectLink,
} from '../data/projects';
import styles from './index.module.css';

const linkLabels = {
  website: 'Website',
  docs: 'Docs',
  github: 'GitHub',
} as const;

function ProjectLinkIcon({type}: {type: ProjectLink['type']}): ReactNode {
  if (type === 'github') {
    return (
      <svg className={styles.linkIcon} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.6 3 8.5 7.1 9.9.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.3-2.3-.3-4.8-1.2-4.8-5.2 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.3.1-2.8 0 0 .9-.3 2.9 1.1.8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.8 0 4.1-2.5 5-4.8 5.2.4.3.8 1 .8 2v3c0 .3.2.6.8.5 4.1-1.4 7.1-5.3 7.1-9.9C22.5 6.2 17.8 1.5 12 1.5Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'docs') {
    return (
      <svg className={styles.linkIcon} viewBox="0 0 24 24" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v16H7.5A2.5 2.5 0 0 0 5 20.5v-16Z" />
          <path d="M5 20.5A2.5 2.5 0 0 1 7.5 18H20M9 6h6M9 10h6" />
        </g>
      </svg>
    );
  }

  return (
    <svg className={styles.linkIcon} viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.2 2.4 3.4 5.4 3.4 9s-1.2 6.6-3.4 9M12 3c-2.2 2.4-3.4 5.4-3.4 9s1.2 6.6 3.4 9" />
      </g>
    </svg>
  );
}

function ProjectLinks({project}: {project: Project}): ReactNode {
  return (
    <nav className={styles.projectLinks} aria-label={`${project.name} links`}>
      {project.links.map((link) => (
        <a
          className={styles.projectLink}
          href={link.url}
          key={link.type}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectLinkIcon type={link.type} />
          <span>{linkLabels[link.type]}</span>
        </a>
      ))}
    </nav>
  );
}

function UnderConstructionIcon(): ReactNode {
  return (
    <span className={styles.underConstruction} title="Under construction">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="m13 6 2-2 5 5-2 2M13 6l-2 2 5 5 2-2M13.5 10.5 5 19" />
      </svg>
      <span className={styles.visuallyHidden}>Under construction</span>
    </span>
  );
}

function ProjectCard({project}: {project: Project}): ReactNode {
  const primaryLink =
    project.links.find((link) => link.type === 'website') ?? project.links[0];
  const graphicUrl = useBaseUrl(project.graphic.src);

  return (
    <article className={styles.card}>
      <span className={styles.cardNumber} aria-hidden="true">
        {String(projects.indexOf(project) + 1).padStart(2, '0')}
      </span>
      <div className={styles.cardBody}>
        <a
          className={styles.primaryLink}
          href={primaryLink.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>{project.name}</strong>
        </a>
        <span className={styles.domain}>{project.domain}</span>
        <p className={styles.description}>{project.description}</p>
        <ProjectLinks project={project} />
      </div>
      <div className={styles.cardVisual}>
        <img
          className={styles.cardGraphic}
          src={graphicUrl}
          alt={project.graphic.alt}
          width="96"
          height="96"
          loading="lazy"
        />
        {project.underConstruction && <UnderConstructionIcon />}
      </div>
    </article>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout description="A portal for the cli.dev ecosystem of independent open source projects.">
      <main>
        <section className={styles.projects} aria-labelledby="projects-heading">
          <div className={styles.sectionHeading}>
            <h2 id="projects-heading">Projects</h2>
            <span>{projects.length.toString().padStart(2, '0')}</span>
          </div>
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
