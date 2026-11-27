import type { ImageMetadata } from 'astro';

// Text in [brackets] is a placeholder: it is shown greyed out until you replace it.
// Find the remaining ones with:  grep -rn '\[' src/data

export const profile = {
  name: 'Hodaka Mori',
  initials: 'HM',
  /** To show a photo, put it in src/assets/ and import it here, e.g.
   *  import photo from '../assets/photo.jpg';  then  photo: photo as ImageMetadata | undefined */
  photo: undefined as ImageMetadata | undefined,
  position: '[Position]',
  department: '[Department]',
  university: '[University]',
  location: '[City, Country]',
  bio: [
    'I build methods and software for seeing and interacting with molecular simulations: a molecular viewer that runs the same way in notebooks, browsers and editors, and infrastructure for steering molecular dynamics in real time.',
    '[A sentence on your field and background.]',
  ],
  /** Sidebar links. Leave href empty to show a placeholder. */
  links: [
    { label: 'GitHub', href: 'https://github.com/hodakamori', icon: 'github' },
    { label: 'Google Scholar', href: '', icon: 'scholar' },
    { label: 'ORCID', href: '', icon: 'orcid' },
    { label: 'Email', href: '', icon: 'mail' },
  ],
  research: [
    {
      title: 'Real-time interactive molecular dynamics',
      text: 'Pulling on atoms of a running simulation. Input becomes a bias force, so the dynamics stay physical.',
    },
    {
      title: 'Molecular visualization that works everywhere',
      text: 'One Rust parser core for WebAssembly and Python, so a file reads the same in a notebook, a browser or an editor.',
    },
  ],
};

const businessName = '[Business name]';

export const business = {
  name: businessName,
  /** Shows the "Available for projects" box in the sidebar. */
  available: true,
  /** Address the "Get in touch" buttons write to. Empty shows a placeholder. */
  email: '',
  summary: `Scientific software and molecular simulation, through ${businessName}.`,
  pitch: `Through ${businessName}, I take on projects in scientific software and molecular simulation for companies and research groups.`,
  intro: `Through ${businessName}, I help companies and research groups build software for molecular simulation: from a one-off visualization to a maintained tool.`,
  services: [
    {
      icon: 'code',
      title: 'Scientific software',
      text: 'Fast, tested tools for simulation data: parsers, analysis pipelines and apps in Rust, Python and TypeScript.',
    },
    {
      icon: 'eye',
      title: 'Molecular visualization',
      text: 'Interactive viewers and figures for the web, Jupyter and VS Code, built on megane.',
    },
    {
      icon: 'atom',
      title: 'Simulation & interactive MD',
      text: 'MD workflows and hands-on, real-time simulations for research, teaching and outreach.',
    },
  ],
  steps: [
    { title: 'Get in touch', text: 'Tell me about your data, your goal and your timeline.' },
    { title: 'Scope', text: 'We agree on deliverables, schedule and cost.' },
    { title: 'Build & hand over', text: 'Tested, documented code, with support afterwards if you need it.' },
  ],
};
