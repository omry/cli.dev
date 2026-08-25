export type ProjectLink = {
  type: 'website' | 'docs' | 'github';
  url: string;
};

export type Project = {
  name: string;
  domain: string;
  description: string;
  graphic: {
    src: string;
    alt: string;
  };
  links: readonly [ProjectLink, ...ProjectLink[]];
  underConstruction?: boolean;
};

export const projects: readonly Project[] = [
  {
    name: 'Arbiter',
    domain: 'arbiter.yadan.net',
    description: 'A capability firewall between AI agents and external services.',
    graphic: {
      src: '/img/projects/arbiter.svg',
      alt: 'Arbiter capability network',
    },
    links: [
      {type: 'website', url: 'https://arbiter.yadan.net'},
      {type: 'docs', url: 'https://arbiter.yadan.net/docs/get-started/quickstart'},
      {type: 'github', url: 'https://github.com/omry/arbiter'},
    ],
    underConstruction: true,
  },
  {
    name: 'Reploy',
    domain: 'reploy.yadan.net',
    description:
      'A deployment lifecycle tool for staging, testing, installing, and operating services from portable blueprints.',
    graphic: {
      src: '/img/projects/reploy.svg',
      alt: 'Reploy project mark',
    },
    links: [
      {type: 'website', url: 'https://reploy.yadan.net'},
      {type: 'docs', url: 'https://reploy.yadan.net/docs'},
      {type: 'github', url: 'https://github.com/omry/reploy'},
    ],
    underConstruction: true,
  },
  {
    name: 'Hydra',
    domain: 'hydra.cc',
    description: 'A framework for elegantly configuring complex applications.',
    graphic: {
      src: '/img/projects/hydra.svg',
      alt: 'Hydra three-headed mascot',
    },
    links: [
      {type: 'website', url: 'https://hydra.cc'},
      {type: 'docs', url: 'https://hydra.cc/docs/intro/'},
      {type: 'github', url: 'https://github.com/hydra-ecosystem/hydra'},
    ],
  },
  {
    name: 'OmegaFlow',
    domain: 'omegaflow.dev',
    description: 'Scripted terminal workflows rebuilt as repeatable videos.',
    graphic: {
      src: '/img/projects/omegaflow.svg',
      alt: 'OmegaFlow mascot holding a camera',
    },
    links: [
      {type: 'website', url: 'https://omegaflow.dev'},
      {type: 'docs', url: 'https://omegaflow.dev/getting-started/'},
      {type: 'github', url: 'https://github.com/omry/omegaflow'},
    ],
    underConstruction: true,
  },
  {
    name: 'OmegaConf',
    domain: 'omegaconf.readthedocs.io',
    description: 'Hierarchical configuration with YAML, merging, and typed schemas.',
    graphic: {
      src: '/img/projects/omegaconf.png',
      alt: 'OmegaConf interpolation example',
    },
    links: [
      {type: 'docs', url: 'https://omegaconf.readthedocs.io/en/latest/'},
      {type: 'github', url: 'https://github.com/omry/omegaconf'},
    ],
  },
  {
    name: 'Agent Skill Installer',
    domain: 'github.com/omry/agent-skill-installer',
    description: 'Install and manage Codex and Claude Code skills from multiple sources.',
    graphic: {
      src: '/img/projects/agent-skill-installer.png',
      alt: 'Agent Skill Installer interface',
    },
    links: [
      {
        type: 'docs',
        url: 'https://github.com/omry/agent-skill-installer#readme',
      },
      {type: 'github', url: 'https://github.com/omry/agent-skill-installer'},
    ],
  },
] as const;
